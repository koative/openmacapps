---
name: "Strategr"
summary: "Time-boxing planner that lays out your day with reusable strategies; its latest release dates from 2020."
category: "Productivity"
tags:
  - planner
  - calendar
  - time-blocking
repository: "https://github.com/khrykin/StrategrDesktop"
website: "https://khrykin.github.io/strategr"
license: "GPL-3.0"
licenseUrl: "https://github.com/khrykin/StrategrDesktop/blob/master/LICENSE"
download: "https://github.com/khrykin/StrategrDesktop/releases/download/v0.1.0/Strategr.v0.1.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/khrykin/StrategrDesktop/blob/master/README.md"
  - "https://khrykin.github.io/StrategrDesktop/"
  - "https://github.com/khrykin/StrategrDesktop/releases/tag/v0.1.0"
  - "https://github.com/khrykin/StrategrDesktop"
  - "https://github.com/khrykin/StrategrDesktop/blob/master/LICENSE"
  - "https://github.com/khrykin/StrategrDesktop/releases"
  - "https://khrykin.github.io/strategr"
  - "https://support.apple.com/en-us/102527"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/khrykin/StrategrDesktop/releases/download/v0.1.0/Strategr.v0.1.0.dmg"
    credit: "Dmitry Khrykin"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Strategr plans your day as a strategy: a color-coded list of activities and a grid of time slots that you fill with sessions. Select one or more empty slots, drag to the length you want, then click again to assign an activity. Command-Shift-A opens the activities window, and Command-comma opens the time grid settings.

Rearranging is done by dragging. Pull the boundary between two sessions to move time from one to the other, or hold Shift to push the neighboring sessions along. Drag the middle of a session to move it, and hold Option to copy it instead. Command-/ jumps to the current time, and a notification arrives five minutes before each session and again when it starts.

The data model is written in C++17 with a Qt 5 interface, and the same app is offered for Windows. Version 0.1.0, from July 2020, added import from Calendar on macOS and a total duration for each activity. No release has followed it, though the repository still gets commits and the README says the code is being reworked.

The macOS DMG holds an Intel (x86_64) app, Developer ID-signed and notarized. Apple silicon Macs run it through Rosetta, which Apple says remains generally available through macOS 27.

The website calls Strategr a time-boxing tool and not a calendar. A strategy has no dates and no date-bound events, and the site argues that calendar apps handle meetings and appointments well but make full-day planning tedious.
