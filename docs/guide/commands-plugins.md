# Commands and plugins

Cinefin can reach out to the rest of the room while a show runs: dim the lights,
switch the projector input, power the amplifier, wake a machine. It does this
through **commands**, and each command is powered by a **plugin**.

## Commands

Open **Commands** from the sidebar to create, edit, test and run them. A command
has a name, a **provider** (the kind of action it runs), and the fields that
provider needs. **Test** runs it once on the spot, so you can check it before a
screening; the list shows each command's provider and its target.

## Where commands run

A command you have made can fire in several places:

- **In a running order**, as a command block. It has two modes: **instant**
  fires as the show reaches that point with nothing shown on screen, and **hold**
  holds a black screen until the command finishes and its minimum duration has
  passed, then moves on. See [Templates](templates.md#commands).
- **As a feature's credits command**, fired when the film reaches its closing
  credits (set on the feature block).
- **Before a scheduled screening**, as a pre-show trigger.
- **On the Remote**, as a button you press by hand mid-screening.

## Plugins

A plugin is a **command provider**: one kind of action a command can run. Cinefin
ships several and loads them automatically, so there is nothing to install:

- **Home Assistant** - call a service or fire a webhook in your Home Assistant.
- **REST** - send an HTTP request to any device or service on your network.
- **Wake-on-LAN** - wake a machine by its MAC address.
- **Yamaha MusicCast** - control a MusicCast receiver.

Manage them under **Settings → Plugins**. The page lists what loaded (and
anything that failed), lets you set each plugin's shared settings, and can test
the connection. **Disable** a plugin to take its commands out of the picker and
stop them running without losing them; enable it again at any time.

### Two levels of settings

- **Provider settings** are set once, under **Settings → Plugins**: the things a
  plugin needs everywhere, such as your Home Assistant address and token.
- **Command fields** are set on each command, on the **Commands** page: the
  specifics of that one action, such as which entity to switch or which URL to
  call.

## A note on where commands run

A command runs on the machine hosting Cinefin. A shell command runs there, which
in Docker means inside the container, not on the playout machine. HTTP-based
commands (REST, Home Assistant) work best with Docker: point them at a device or
a Home Assistant webhook on your LAN. Anyone who can operate Cinefin
can trigger a command, so keep them small and test them by hand first.

## Writing your own

A provider is a single Python file in the `contrib/plugins/` directory of the
[Cinefin repository](https://github.com/cinefin/cinefin), contributed by pull
request. It declares its fields and a `run()` method, and Cinefin renders the
form for it, so a plugin never touches the frontend. See the plugin guide in the
repository for the full contract.
