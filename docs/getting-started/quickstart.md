# Quickstart

From a fresh install to your first screening.

## 1. Finish setup

Open Cinefin in a browser. The setup wizard takes you through the cinema name
and an optional login password, then the playout host. When it finishes you land
on the dashboard.

## 2. Connect the player

Nothing plays until a player is connected. You have two ways to run one, and you
pick between them when you add a playout host (in the wizard, or under **Settings
→ Playout → Add host**):

- **Playout agent (recommended)** - run the
  [cinefin-playout](https://github.com/cinefin/cinefin-playout) agent on the
  machine at your screen, then copy its address and token from the tray (or its
  control panel) and paste them in. It bundles MPV and needs no config files, and
  it can run on the same machine as Cinefin or a separate one.
- **Local MPV** - if you already run MPV on the same machine as Cinefin, start it
  with a JSON-IPC socket and point Cinefin at the socket path instead.

See [Playback](../guide/playback.md) for both in full.

## 3. Add your movies

Open **Settings → Library source**. Add your Jellyfin or Plex server with its URL
and API token, then **Sync now**. Progress and logs appear as it runs. Movies
already on disk can be added from the **Library** page without a media server.

## 4. Add trailers and user media

Open **Trailers** to search for and download trailers for films in your library.
Open **Media** to upload your own clips, such as an ident or a "silence your
phones" notice. Cinefin stores trailers in its own folder; there is nothing to
configure.

## 5. Make a template

A template is the shape of a screening. Open **Templates** and add one, for
example:

1. Your own user media (an ident or a notice)
2. Trailers matched to the feature
3. Certification card
4. Feature

## 6. Build a programme

Open **Programmes**, then **Create programme**. Pick your movies and a template
that fits them. Cinefin turns the trailer rules and any random picks into a
fixed playlist you can review.

## 7. Play it

Cue the programme, then start playout. To play it later, book it under
**Schedules** with a date and time. Cinefin starts it when it is due.

## Where next

- [Programmes](../guide/programmes.md): templates, block types and title cards.
- [Scheduling](../guide/scheduling.md): how booked screenings start.
- [Playback](../guide/playback.md): the playout agent and the controls.
