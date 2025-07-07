import json
from pathlib import Path
from typing import Dict, Any


def format_method_color(method: str) -> str:
    """Add color-coded badges for HTTP methods."""
    colors = {
        'GET': '🟢',
        'POST': '🔵', 
        'PUT': '🟡',
        'DELETE': '🔴',
        'PATCH': '🟠'
    }
    return f"{colors.get(method.upper(), '⚪')} **{method.upper()}**"


def generate_openapi_summary(openapi_schema: Dict[str, Any]) -> str:
    """Generate a concise Markdown summary of the OpenAPI schema."""
    
    lines = [
        "# API Endpoints Summary",
        "",
        f"**API Version:** {openapi_schema.get('info', {}).get('version', 'N/A')}",
        f"**Title:** {openapi_schema.get('info', {}).get('title', 'N/A')}",
        "",
        "## Available Endpoints",
        ""
    ]
    
    # Group endpoints by tags/categories
    paths = openapi_schema.get('paths', {})
    endpoints_by_tag = {}
    
    for path, methods in paths.items():
        for method, details in methods.items():
            if method.lower() in ['get', 'post', 'put', 'delete', 'patch']:
                tags = details.get('tags', ['Uncategorized'])
                primary_tag = tags[0] if tags else 'Uncategorized'
                
                if primary_tag not in endpoints_by_tag:
                    endpoints_by_tag[primary_tag] = []
                
                endpoint_info = {
                    'path': path,
                    'method': method.upper(),
                    'summary': details.get('summary', 'No summary'),
                    'operation_id': details.get('operationId', ''),
                    'responses': list(details.get('responses', {}).keys())
                }
                endpoints_by_tag[primary_tag].append(endpoint_info)
    
    # Generate markdown for each category
    for tag, endpoints in sorted(endpoints_by_tag.items()):
        lines.append(f"### {tag.title()}")
        lines.append("")
        
        for endpoint in endpoints:
            method_badge = format_method_color(endpoint['method'])
            lines.append(f"- {method_badge} `{endpoint['path']}`")
            lines.append(f"  - **Summary:** {endpoint['summary']}")
            if endpoint['responses']:
                response_codes = ', '.join(endpoint['responses'])
                lines.append(f"  - **Responses:** {response_codes}")
            lines.append("")
    
    # Add schemas summary
    components = openapi_schema.get('components', {})
    schemas = components.get('schemas', {})
    
    if schemas:
        lines.append("## Data Models")
        lines.append("")
        
        for schema_name, schema_details in sorted(schemas.items()):
            if 'properties' in schema_details:
                properties = schema_details['properties']
                required_fields = schema_details.get('required', [])
                
                lines.append(f"### {schema_name}")
                lines.append("")
                
                for prop_name, prop_details in properties.items():
                    prop_type = prop_details.get('type', 'unknown')
                    is_required = " ✳️" if prop_name in required_fields else ""
                    title = prop_details.get('title', '')
                    description = prop_details.get('description', '')
                    
                    prop_info = f"- **{prop_name}**{is_required} (`{prop_type}`)"
                    if title and title != prop_name:
                        prop_info += f" - {title}"
                    if description:
                        prop_info += f" - {description}"
                    
                    lines.append(prop_info)
                
                lines.append("")
    
    # Add footer
    lines.extend([
        "---",
        "",
        "*This summary is automatically generated from the OpenAPI schema when the backend starts.*",
        "",
        f"**Legend:** ✳️ = Required field | 🟢 GET | 🔵 POST | 🟡 PUT | 🔴 DELETE | 🟠 PATCH"
    ])
    
    return "\n".join(lines)


def dump_openapi_schema_and_summary(app) -> None:
    """Generate a Markdown summary of the OpenAPI schema in the docs/agent/API directory."""
    try:
        # Get the OpenAPI schema from the FastAPI app
        openapi_schema = app.openapi()
        
        # Define the output paths (docs/agent/API/ directory in project root)
        project_root = Path(__file__).parent.parent.parent.parent
        api_dir = project_root / "docs" / "agent" / "API"
        summary_path = api_dir / "API_SUMMARY.md"
        
        # Ensure the API directory exists
        api_dir.mkdir(parents=True, exist_ok=True)
        
        # Generate and write the Markdown summary
        markdown_summary = generate_openapi_summary(openapi_schema)
        with open(summary_path, "w", encoding="utf-8") as f:
            f.write(markdown_summary)
        
        print(f"✅ API summary generated: {summary_path}")
        
    except Exception as e:
        print(f"❌ Failed to dump OpenAPI schema: {e}")


# Rate limiting utilities
def get_rate_limit_key(request):
    """Get rate limit key based on IP address and user agent for better spam detection"""
    client_ip = request.client.host
    user_agent = request.headers.get("user-agent", "")
    # Use IP + first 50 chars of user agent for more specific rate limiting
    return f"{client_ip}:{user_agent[:50]}"

# Common rate limit configurations
RATE_LIMITS = {
    "contact": "5/minute",      # Contact form: 5 requests per minute
    "auth": "10/minute",        # Authentication: 10 requests per minute  
    "general": "60/minute",     # General API: 60 requests per minute
    "strict": "1/minute",       # Very strict: 1 request per minute
}

def get_rate_limit(limit_type: str = "general") -> str:
    """Get rate limit string for a specific type"""
    return RATE_LIMITS.get(limit_type, RATE_LIMITS["general"]) 