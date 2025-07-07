from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from backend.db import create_db_and_tables
from backend.services.auth.routes import router as auth_router
from backend.services.users.routes import router as users_router
from backend.services.contact.routes import router as contact_router
from backend.settings import settings

# Create rate limiter instance
limiter = Limiter(key_func=get_remote_address)

@asynccontextmanager
async def lifespan(app: FastAPI):

    await create_db_and_tables()

    yield

app = FastAPI(lifespan=lifespan)

# Add rate limiting state and exception handler
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# app.include_router(auth_router, prefix="/api", tags=["auth"])
# app.include_router(users_router, prefix="/api", tags=["users"])
app.include_router(contact_router, prefix="/api", tags=["contact"])

@app.get("/")
async def root():
    return {"message": "Hello World"}