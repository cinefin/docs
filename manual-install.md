# Manual 
This guide provides step-by-step instructions for manually installing the
software on your system. Please follow the instructions carefully to ensure a
successful installation.

## 1. Install dependencies

=== "Arch Linux"

    ```bash
    sudo pacman -S python nodejs npm mpv git ffmpeg
    ```

=== "Debian / Ubuntu"

    ```bash
    sudo apt install python3 nodejs npm mpv git ffmpeg
    ```

You also need [Poetry](https://python-poetry.org/docs/#installation).

## 2. Install the web app

```bash
git clone https://github.com/cinefin/server.git cinefin
cd cinefin
poetry install
poetry run python manage.py migrate
```

## 3. Build the web interface

The interface is a single-page app that Django serves. Build it once, and again
after each update:

```bash
cd frontend
npm install
npm run build
cd ..
```

## 4. Run the web app

For a quick look:

```bash
poetry run python manage.py runserver
```

For a machine that stays on, use the systemd units in `etc/`. They start the
app at boot and restart it if it stops. Run the web app with a single Gunicorn
worker: the background jobs and the screening state live inside that one
process.

The web app does everything except playback: the UI, the API, library syncs and
the screening scheduler all run inside it. There is no separate scheduler to
start.

