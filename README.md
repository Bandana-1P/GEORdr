# GEORdr – Phase 0 Setup

## Quick Setup (3 Commands)
New developers can get the project running end-to-end with these commands:

```bash
# 1. Clone the repo and go to project folder
git clone <repo-url> && cd GEORdr

# 2. Copy environment template
cp .env.example .env

# 3. Start backend + frontend with Docker
docker-compose up --build

Backend: http://localhost:8000

Frontend: http://localhost:3000

# Coding Standards

## Backend (Python)
- Format with **Black**: `python -m black .`
- Lint with **Ruff**: `python -m ruff check .`
- Python Version: 3.14.2

## Frontend (JS/TS)
- Lint with **ESLint**: `eslint src --ext .js,.ts,.jsx,.tsx`
- Format with **Prettier**: `prettier --write .`
- Follow rules in `.eslintrc.json` and `.prettierrc`

## Notes
- Always run linting before committing code.
- CI/CD should fail if linting errors exist.
