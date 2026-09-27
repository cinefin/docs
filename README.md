# Cinefin documentation

Documentation for [Cinefin](https://github.com/cinefin/cinefin), the
self-hosted home cinema automation and playout system. Built with
[Docusaurus](https://docusaurus.io/).

## Local preview

Needs Node.js 20 or newer.

```bash
npm ci
npm start
```

Open <http://localhost:3000/>. Pages live-reload as you edit the Markdown
under `docs/`. `npm run build` produces the static site in `build/` and fails
on broken links.

## Structure

- `docusaurus.config.js` — site config and the header (matching cinefin.dev)
- `sidebars.js` — the sidebar navigation
- `docs/` — the documentation pages (`.mdx` where a page uses tabs or components)
- `src/` — the look, set to the Cinefin interface spec
  (`cinefin/docs/cinefin-ui-spec.html`): theme CSS and tokens, the app's own
  fonts, code colours, the footer (`src/theme/`) and the home page index
- `static/` — logos, favicon and `CNAME`
