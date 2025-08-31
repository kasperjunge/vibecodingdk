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

# Spec-driven Development
Spec-driven development is a workflow where a human and an LLM-based AI agent collaboratively create and refine a specification for a software development task. This ensures the work is well-defined before implementation improving clarity.

The spec consist of three files:

1. requirements.md - Defines the What and Why of the task (similar to a Product Requirements Document), including success criteria.
2. design.md - Outlines the How
3. tasks.md - Provides a step-by-step implementation plan, including sub-tasks.

Each development task that an AI-agent executes is stored as a spec with the above mentioned files. 

Specs are saved as an appropriately named dir, in a dir calleds ".specs/" in the root of the project:

.specs/
├── 2025-08-11-appropriate-dev-task-name/
│   ├── requirements.md
│   ├── design.md
│   └── tasks.md

# requirements.md – Template

## Title
A clear, concise name for the task (e.g., "Add User Authentication")

## Overview
One to three sentences summarizing the task and its purpose.

## Goals
- List the main objectives of this task.
- Keep them outcome-focused (not implementation details).

## Non-Goals
- Explicitly list what is out of scope to prevent scope creep.

## Background / Context
- Describe the problem or opportunity.
- Link to related documents, tickets, or discussions.

## Success Criteria
- Measurable conditions that define "done".
- Example: "User can log in with email and password, verified against the database."

## Constraints / Assumptions
- Any technical, business, or regulatory constraints.
- Known assumptions about the environment or dependencies.

## Requirements

### Requirement 1
**User Story:** As a [type of user], I want [goal], so that [benefit].

#### Acceptance Criteria
1. WHEN [condition] THEN [expected system behavior]
2. WHEN [condition] THEN [expected system behavior]
3. IF [condition] THEN [expected system behavior]

### Requirement 2
**User Story:** ...

#### Acceptance Criteria
1. ...
2. ...

<!-- Repeat for as many requirements as needed -->

# design.md – Template

## Overview
Restate the goal in technical terms. Summarize the intended solution.

## Architecture / Approach
- High-level description of the approach.
- Mention key components, services, or modules involved.
- Include diagrams (e.g., mermaid) if they clarify the flow.

## Technology Choices
- Frameworks, libraries, or services to be used.
- Reasoning for choices if not obvious.

## Testing Strategy
- Outline unit, integration, and end-to-end test approach.
- Include any special test tooling or data needs.

# tasks.md – Template

## Tasks

- [ ] 1. **Task Title**
  
  - Summary: Short description of the task.
  - Sub-tasks:
    - [ ] Sub-task 1: Implement core functionality
    - [ ] Sub-task 2: Add error handling
    - [ ] Sub-task 3: Write tests
  - _Requirements:_ X.Y, Z.W

- [ ] 2. **Complex Task with Multiple Components**
  
  - Summary: Implement feature with frontend and backend changes
  - Sub-tasks:
    - [ ] Backend implementation
      - [ ] Create API endpoint
      - [ ] Add database schema
      - [ ] Implement business logic
    - [ ] Frontend implementation  
      - [ ] Create UI components
      - [ ] Add state management
      - [ ] Integrate with API
    - [ ] Testing and validation
  - _Requirements:_ ...

<!-- Repeat for all tasks -->