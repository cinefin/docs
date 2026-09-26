# REST API

Everything the web UI does is available over HTTP. The API lives under
`/api/v2/` and ships interactive docs.

## Interactive docs

Browse and try every endpoint at:

```
http://your-server:8000/api/v2/ninja-docs/
```

## Conventions

- Requests and responses are JSON.
- Errors return a JSON envelope with a machine code and the matching HTTP
  status, such as `404` not found, `409` conflict or `422` validation error.
- Long jobs like library sync and trailer downloads return a job id. Progress
  streams over Server-Sent Events.
- If the login gate is on, send an API key. Create one in **Settings →
  Security**.

## Example

Cue a programme and start it:

```bash
curl -X POST http://your-server:8000/api/v2/playout/load \
  -H 'Content-Type: application/json' \
  -d '{"programme_id": 42, "generate_playlist": true}'

curl -X POST http://your-server:8000/api/v2/playout/run
```
