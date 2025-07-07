from fastapi import APIRouter, HTTPException, Request
from slowapi import Limiter
from slowapi.util import get_remote_address
from backend.services.contact.schemas import ContactFormRequest, ContactFormResponse
from backend.services.contact.service import contact_service
from backend.utils import get_rate_limit
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

# Create limiter instance
limiter = Limiter(key_func=get_remote_address)

@router.post("/contact", response_model=ContactFormResponse)
@limiter.limit(get_rate_limit("contact"))  # Use centralized rate limit config
async def submit_contact_form(request: Request, contact_data: ContactFormRequest):
    """Submit contact form and send to Slack"""
    try:
        success = await contact_service.submit_contact_form(contact_data)
        
        if success:
            return ContactFormResponse(
                success=True,
                message="Tak for din besked! Vi vender tilbage til dig inden for 24 timer."
            )
        else:
            return ContactFormResponse(
                success=False,
                message="Der skete en fejl ved afsendelse. Prøv igen eller kontakt os direkte på email."
            )
            
    except Exception as e:
        logger.error(f"Error in contact form submission: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Der skete en intern fejl. Prøv igen senere."
        ) 