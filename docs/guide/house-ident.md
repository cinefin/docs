# House ident

Between screenings the screen should show something other than a desktop or a
black void. Cinefin holds a single clip on screen whenever nothing is playing —
your cinema's own ident — and plays that same clip to open every programme. One
clip, two jobs:

- **Idle screen** — shown paused whenever no programme is running, so the
  auditorium always carries your branding rather than a blank signal.
- **Opening sting** — played in full when a programme starts, resets or
  finishes, so every screening begins on the same signature.

## Choose the clip

Set it under **Settings → Playout → Idle screen & subtitles → Cinema ident**. Any
clip you have uploaded to **Media** can be the ident; pick **— None —** for a
plain black idle screen. **Test** fires it on the live player so you can check it
on the real screen.

<figure markdown="span">
  ![The Cinema ident setting under Settings → Playout](../assets/img/idle-ident.png)
  <figcaption>The ident is set per playout host, under Idle screen &amp; subtitles.</figcaption>
</figure>

The clip is streamed from Cinefin to the playout host, so there is no file to
copy to the playout machine (see [Playback → Two machines](playback.md#two-machines)).
It is saved with the rest of the host's settings via **Save changes**; because it
is baked into the player's idle state, restart the player to apply a change to the
idle screen.

## Per host

The ident is part of a playout host's configuration, so each host can carry its
own. Switch the active host and its ident comes with it — handy when a second
screen wants different branding.

!!! note "Why \"house ident\"?"
    This clip is labelled **Cinema ident** in the settings, but it is really the
    **house ident** — the venue's signature that both holds the idle screen and
    opens each show. "House" is the cinema word for the auditorium (house lights,
    front of house), which captures the between-screenings role that "ident"
    alone misses.
