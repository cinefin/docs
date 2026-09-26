# Docker

This is the documentation for running Cinefin server in Docker. It is the
simplest way to get started, and is the recommended for production.

## Clone the repository and run

### Using pre-built images
TODO

### Building from source

Get the files, then build and start the web app:

```bash
git clone https://github.com/cinefin/server.git cinefin
cd cinefin
SECRET_KEY="$(openssl rand -hex 32)" docker compose up -d --build
```


Open `http://localhost:8000`. Cinefin creates and migrates its database on
first start.

Everyday commands:

```bash
docker compose up -d                          # start
docker compose logs -f web                    # watch the log
docker compose pull && docker compose up -d   # update a published image
docker compose down                           # stop, keeps your data
```

## Settings

Put these in a `.env` file next to `docker-compose.yml`, or in the `web`
service's environment. Most setups only need the first two.

```ini
SECRET_KEY=a-long-random-value
CINEFIN=http://cinema.local:8000
ALLOWED_HOSTS=cinema.local,192.168.1.50
CSRF_TRUSTED_ORIGINS=http://cinema.local:8000
TZ=UTC
USERMEDIA_PATH=/path/to/usermedia
DATABASE_PATH=/path/to/database
```

| Setting                | What it is for                                                                                                                         |
| ---                    | ---                                                                                                                                    |
| `SECRET_KEY`           | Required. Generate one with `openssl rand -hex 32`.                                                                                    |
| `CINEFIN_SERVER_URL`   | The address the playout machine uses to fetch media from Cinefin. Do not leave it as `localhost` when the agent is on another machine. |
| `ALLOWED_HOSTS`        | The names or IP addresses you use in a browser.                                                                                        |
| `CSRF_TRUSTED_ORIGINS` | The full browser address, needed when you use a hostname.                                                                              |
| `TZ`                   | Keeps scheduled screenings in your local timezone.                                                                                     |
| `USERMEDIA_PATH`       | Optional. The path to a directory for uploaded media, posters and trailers. Defaults to `./usermedia`.                                 |
| `DATABASE_PATH`        | Optional. The path to the database file. Defaults to `./data/db.sqlite3`.                                                              |

The database and uploaded media are stored in `./data` and `./usermedia` by
default.

See [Playout](../guide/playback.md) for instructions on running the playout
agent. It can run on the same machine as the server, or on a separate machine.
