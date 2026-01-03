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

## Backend (Node.js / Express)

- Start server: npm start
- Dev mode (auto-reload): npm run dev
- Node.js Version: 18.x or higher
- Health Check Endpoint: http://localhost:4000/health

## Dependencies:

- express → Web framework
- cors → Handle cross-origin requests
- pg → PostgreSQL/PostGIS client
- dotenv → Environment variables
- nodemon → Auto-reload during development

## Testing / Health Check

- (Invoke-WebRequest -Uri "http://localhost:4000/health" -UseBasicParsing).Content

# Pretty-print JSON in PowerShell:

$status = Invoke-WebRequest -Uri "http://localhost:4000/health" -UseBasicParsing | ConvertFrom-Json
$status.api
$status.database
$status.externalApis
$status.openApi

# Browser: http://localhost:4000/health

## Notes

- Encoding: Ensure main.js is saved as UTF-8 without BOM. Node cannot parse UTF-16 or BOM files.
- Port 4000: Must be free; change PORT in main.js if needed.
- Server must be running to access /health. Keep Node active while testing.