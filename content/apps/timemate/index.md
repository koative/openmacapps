---
name: 'TimeMate'
summary: 'Runs Pomodoro focus sessions and breaks from the menu bar, with an optional full-screen break screen.'
category: 'Productivity'
tags:
  - pomodoro
  - timer
  - menu-bar
  - focus
  - breaks
repository: https://github.com/homielab/timemate
website: https://homielab.com/en/page/timemate
license: 'MIT'
licenseUrl: https://github.com/homielab/timemate/blob/main/LICENSE
download: https://apps.apple.com/us/app/timemate-pomodoro-timer/id6754137356
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/homielab/timemate
  - https://github.com/homielab/timemate/blob/main/LICENSE
  - https://homielab.com/en/page/timemate
  - https://apps.apple.com/us/app/timemate-pomodoro-timer/id6754137356
  - https://raw.githubusercontent.com/homielab/timemate/main/README.md
  - https://itunes.apple.com/lookup?id=6754137356&country=us
  - https://github.com/homielab/timemate/releases
  - https://raw.githubusercontent.com/homielab/timemate/main/CHANGELOG.md
  - https://github.com/homielab/timemate/tree/6db3ca0/src/TimeMate
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/homielab/timemate/main/docs/assets/icon.png
    credit: 'HomieLab'
    license: 'MIT repository asset; TimeMate name and icon retained by HomieLab'
---

TimeMate runs Pomodoro sessions from the menu bar, which shows the time left in the current session. Focus sessions, short breaks and long breaks follow in order, and with auto-start on, each one begins as soon as the last ends.

Out of the box, focus runs for 25 minutes, a short break for 5 and the long break for 15. In the App Store version, Settings takes focus lengths from 5 to 60 minutes, short breaks from 1 to 15, long breaks of up to 60 and 2 to 8 focus sessions before the long break.

- An optional full-screen break screen covers the display with a relaxation tip, and its Skip button unlocks after a five-second countdown.
- A Keep Mac awake switch stops the Mac from sleeping while a focus session runs.
- The Dock icon and the time in the menu bar can each be hidden.
- An alarm sound with a volume slider and a preview button marks the end of a session, and notifications can be turned off.

The app runs on macOS 13.5 or later, in English or Vietnamese. There is no sign-in, and the developer says settings and completed sessions stay on the Mac.

The Mac App Store carries version 3.5, while the GitHub source has moved on to 3.10. Its changelog adds global keyboard shortcuts, session labels, statistics with CSV export, a daily goal and Shortcuts actions, so those features come only with a build from source in Xcode.
