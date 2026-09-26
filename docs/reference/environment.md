# Environment variables

A few things belong to the deployment rather than the **Settings** page: the
address the player uses to reach Cinefin, the allowed browser hosts, the
timezone, and where runtime data lives. Set these through the environment.

For Docker, put them in a `.env` file next to `docker-compose.yml`, or in the
`web` service's environment. For the pipx install, export them before running
`cinefin`, or set them in your service unit.

Most homes only need `CINEFIN_SERVER_URL`.

## Common

| Variable | What it is for |
| --- | --- |
| `CINEFIN_SERVER_URL` | The address the player uses to fetch Cinefin-hosted media (idents, trailers, title cards). Do not leave it as `localhost` when the player is another machine. |
| `TZ` | Keeps scheduled screenings in your local timezone. |

## Networking and security

| Variable | What it is for |
| --- | --- |
| `ALLOWED_HOSTS` | The names or IP addresses you browse to. Defaults to `*` (accept any Host), which is fine for a home box on a trusted LAN; set it to your hostname or IP to restrict it. |
| `CSRF_TRUSTED_ORIGINS` | The full browser address, including scheme, needed when you use a hostname with `DEBUG=false`, for example `http://cinema.local:8000`. |
| `SECRET_KEY` | The Django secret. Cinefin generates one and persists it under the data directory on first start, so you do not need to set it. Set it only to pin a known value. |
| `DEBUG` | Leave off outside development. |

## Storage and logging

| Variable | What it is for |
| --- | --- |
| `CINEFIN_USERDATA_DIR` | Where all runtime data lives: the SQLite database, uploaded media, generated cards and the secret key. Docker defaults to `/app/userdata` (the mounted volume); the pipx install defaults to `~/.local/share/cinefin`. |
| `CINEFIN_LOG_FILE` | Set to a path such as `/app/userdata/logs/cinefin.log` to also write a rotating logfile (5 MB x 5). Off by default. |

## pipx install only

| Variable | What it is for |
| --- | --- |
| `CINEFIN_HOST` / `CINEFIN_PORT` | The address the `cinefin` command binds to. Defaults to `0.0.0.0:8000`. |

Everything else is configured in the app, on the **Settings** page. See
[Configuration](configuration.md).
