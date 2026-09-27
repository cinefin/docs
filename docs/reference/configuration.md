# Configuration

You set Cinefin up on the **Settings** page, or over the API. Settings are kept
in the database. There are no config files to edit by hand.

## Settings tabs

The **Settings** page groups its tabs into three blocks:

| Tab | What it covers |
| --- | --- |
| **Playout** | Playout hosts, display and audio, idle screen (ident) and subtitles |
| **Theater** | Cinema name, ident, ratings system |
| **Tickets** | Printer and ticket layout |
| **Kiosk display** | The between-screenings kiosk screen |
| **Library source** | The Jellyfin or Plex connection, and the TMDB key used for trailer search |
| **Appearance** | Accent colour, time format, logo |
| **Plugins** | Integrations such as Home Assistant, generic REST and Wake-on-LAN |
| **Security** | Login gate and API access |
| **Telemetry** | Optional anonymous usage reporting |
| **Backup & restore** | Download or restore a backup zip |

Trailers are managed from the **Trailers** page, and Cinefin keeps trailer files
in a fixed folder inside its media directory - the folder is not a setting.

## Deployment settings

A few settings belong to the deployment, not the UI: where the runtime data
directory lives, the address the playout machine uses to reach Cinefin, and the
allowed browser hosts. Set these through the environment. See:

- [Environment variables](environment.md)
- [Installation](../getting-started/installation.mdx)
