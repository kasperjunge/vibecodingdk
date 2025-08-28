# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack FastAPI-React application for Vibe Coding DK. The project consists of:
- **Backend**: FastAPI application with SQLAlchemy, authentication, and contact services
- **Frontend**: React application built with Vite, TypeScript, and TailwindCSS
- **Database**: SQLite with Alembic migrations
- **Deployment**: Coolify deployment on kasperjunge.com

## Development Environment Setup

### Backend (Python)
- Use `uv` for Python environment management
- Setup: `uv sync` (installs all dependencies including dev group)
- Add packages: `uv add package-name`
- Run commands: `uv run [command]`
- Start server: `uv run python -m backend.main`
- Backend runs on http://localhost:8000

### Frontend (TypeScript/React)
- Install dependencies: `npm install`
- Development server: `npm run dev` (runs on port with proxy to backend)
- Build: `npm run build` (TypeScript compilation + Vite build)
- Lint: `npm run lint` (ESLint with TypeScript rules)
- Preview: `npm run preview`

## Testing

### Backend Testing
- Test framework: pytest with asyncio support
- Run tests: `uv run pytest`
- Coverage requirements: 80% minimum
- Test markers: `unit`, `integration`, `slow`, `email`
- Config: `backend/pytest.ini`

### Code Quality
- Backend linting: `ruff` (included in dev dependencies)
- Frontend linting: ESLint with TypeScript and React rules
- Coverage reports generated in `htmlcov/`

## Database

- **SQLite** database with Alembic for migrations
- Migrations location: `backend/migrations/versions/`
- Create migration: `uv run alembic revision --autogenerate -m "description"`
- Apply migrations: `uv run alembic upgrade head`
- Database initialization handled in app lifespan

## Architecture

### Backend Structure
- **Services-based architecture** with separate modules:
  - `auth/`: Authentication (currently commented out in main app)
  - `users/`: User management (currently commented out)
  - `contact/`: Contact form handling (active)
  - `email/`: Email service with HTML templates
- **Database**: SQLAlchemy with async support
- **Rate limiting**: SlowAPI integration
- **CORS**: Configured for frontend communication

### Frontend Structure
- **Component-based** React with TypeScript
- **State management**: Zustand for global state
- **Routing**: React Router DOM v7
- **Styling**: TailwindCSS v4 with Radix UI components
- **Forms**: React Hook Form
- **API communication**: Custom `apiCall` utility with proxy setup

### API Integration
- Development: Vite proxy routes `/api` to `http://localhost:8000`
- Production: Uses `VITE_API_URL` environment variable
- Centralized API configuration in `frontend/src/config/api.ts`

## Key Files and Patterns

- Backend entry: `backend/src/backend/main.py`
- Frontend entry: `frontend/src/App.tsx`
- API config: `frontend/src/config/api.ts`
- Database models: Service-specific `models.py` files
- Routes: Service-specific `routes.py` files
- Schemas: Pydantic models in service `schemas.py` files

## Environment Management

- Backend settings: `backend/src/backend/settings.py`
- Environment template: `env.example`
- Frontend env vars prefixed with `VITE_`
- Database URL and CORS origins configured via settings