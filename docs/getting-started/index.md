# Getting started

New to Cinefin? Read these pages in order:

1. **[Installation](installation.md)**: install the Cinefin server and playout
   agent.
2. **[Quickstart](quickstart.md)**: connect a media server, build a programme and run a screening.

## What you need

- A Linux machine for the web app. A small box by the projector is fine. The
  Docker install needs only Docker; the pipx install needs only ffmpeg (a native
  Windows server installer exists but is experimental and edge-only).
- The Cinefin playout agent (it bundles MPV) on the machine attached to the
  screen. This can be the same machine as the web app. Released for Linux amd64;
  a Windows build is experimental and edge-only.
- A Jellyfin or Plex server, if your movies live there. Local files also work.
