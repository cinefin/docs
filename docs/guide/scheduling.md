# Scheduling

Book a screening for a date and time and Cinefin starts it when it is due.

## How it starts

The web app checks for due screenings every 15 seconds, claims one when its time
comes, and plays it. This runs inside the web app, so there is nothing separate
to start. It works whether or not a browser is open.

Because the screening state lives in the web app process, run the web app as a
single process - never add workers. Docker's image already does; see
[Installation](../getting-started/installation.md) for the manual command.

## Book a screening

Open **Schedules** and add a screening with a programme and a start time. The
dashboard shows the next one due. You can change or cancel it up until it
starts.

## Is it running?

The dashboard shows a heartbeat for the scheduler. If it is not beating, booked
screenings will not start, and the page tells you so.
