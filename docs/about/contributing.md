# Contributing

Bug reports, doc fixes and pull requests are all welcome.

## Development setup

The repo holds two sibling code trees: `backend/` (the Django project) and
`frontend/` (the SvelteKit SPA). Run every Python/Poetry command from
`backend/`.

```bash
git clone https://github.com/cinefin/cinefin.git cinefin
cd cinefin/backend
poetry install
poetry run python manage.py migrate
poetry run python manage.py runserver
```

Build the web interface, and rebuild it after changing anything under
`frontend/`:

```bash
cd ../frontend
npm install
npm run build
```

## Checks

Before opening a pull request:

```bash
cd backend
poetry run pytest                         # backend tests
poetry run ruff check cinefin/            # lint
poetry run ruff format --check cinefin/   # format
cd ../frontend && npm run check           # frontend type check
```

## These docs

The docs are built with [Docusaurus](https://docusaurus.io/) and need Node.js
20 or newer:

```bash
npm ci
npm start
```

Edit the Markdown under `docs/` and preview at `http://localhost:3000/`.
