from pydantic import BaseModel, EmailStr
from typing import Literal


class ContactFormRequest(BaseModel):
    name: str
    company: str = ""
    email: EmailStr
    inquiry_type: Literal["workshop", "speaking", "consulting", "general"] = "workshop"
    message: str


class ContactFormResponse(BaseModel):
    success: bool
    message: str 