# Cinefin documentation

Documentation for [Cinefin](https://github.com/cinefin/cinefin), the
self-hosted home cinema automation and playout system. Built with
[MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Local preview

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open <http://127.0.0.1:8000/>. Pages live-reload as you edit the Markdown
under `docs/`.

## Structure

- `mkdocs.yml` — site config and navigation
- `docs/` — the documentation pages
