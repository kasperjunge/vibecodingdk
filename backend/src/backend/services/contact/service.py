import httpx
from backend.settings import settings
from backend.services.contact.schemas import ContactFormRequest
import logging

logger = logging.getLogger(__name__)


class ContactService:
    def __init__(self):
        self.slack_webhook_url = settings.SLACK_WEBHOOK_URL

    async def send_to_slack(self, contact_data: ContactFormRequest) -> bool:
        """Send contact form data to Slack webhook"""
        if not self.slack_webhook_url:
            logger.warning("Slack webhook URL not configured")
            return False

        # Format message for Slack
        inquiry_type_emoji = {
            "workshop": "🎓",
            "speaking": "🎤", 
            "consulting": "💼",
            "general": "💬"
        }
        
        emoji = inquiry_type_emoji.get(contact_data.inquiry_type, "💬")
        
        slack_message = {
            "text": f"Ny kontaktformular besked fra vibe-coding.dk",
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": f"{emoji} Ny Workshop Forespørgsel"
                    }
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": f"*Navn:*\n{contact_data.name}"
                        },
                        {
                            "type": "mrkdwn", 
                            "text": f"*Email:*\n{contact_data.email}"
                        },
                        {
                            "type": "mrkdwn",
                            "text": f"*Virksomhed:*\n{contact_data.company or 'Ikke angivet'}"
                        },
                        {
                            "type": "mrkdwn",
                            "text": f"*Type:*\n{contact_data.inquiry_type.title()}"
                        }
                    ]
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": f"*Besked:*\n{contact_data.message}"
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": f"Sendt fra vibe-coding.dk kontaktformular"
                        }
                    ]
                }
            ]
        }

        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.post(
                    self.slack_webhook_url,
                    json=slack_message,
                    headers={"Content-Type": "application/json"}
                )
                
                if response.status_code == 200:
                    logger.info(f"Successfully sent contact form to Slack for {contact_data.email}")
                    return True
                else:
                    logger.error(f"Failed to send to Slack for {contact_data.email}. Status: {response.status_code}, Response: {response.text}")
                    return False

        except httpx.TimeoutException:
            logger.error("Timeout when sending to Slack")
            return False
        except Exception as e:
            logger.error(f"Error sending to Slack: {str(e)}")
            return False

    async def submit_contact_form(self, contact_data: ContactFormRequest) -> bool:
        """Submit contact form - sends to Slack"""
        return await self.send_to_slack(contact_data)


contact_service = ContactService() 