---
name: Timer
summary: Counts down from a time you set by dragging an arrow or typing the minutes, with one window per timer.
category: Productivity
tags:
  - timer
  - focus
  - notifications
repository: https://github.com/michaelvillar/timer-app
website: https://github.com/michaelvillar/timer-app
license: MIT
licenseUrl: https://github.com/michaelvillar/timer-app/blob/master/LICENSE
download: https://github.com/michaelvillar/timer-app/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/michaelvillar/timer-app
  - https://github.com/michaelvillar/timer-app/blob/master/LICENSE
  - https://github.com/michaelvillar/timer-app/blob/master/README.md
  - https://github.com/michaelvillar/timer-app/releases
  - https://raw.githubusercontent.com/michaelvillar/timer-app/master/README.md
  - https://github.com/michaelvillar/timer-app/releases/tag/2.1.0
  - https://github.com/michaelvillar/timer-app/releases/tag/2.0.0
  - https://github.com/michaelvillar/timer-app/releases/tag/1.6.0
  - https://github.com/michaelvillar/timer-app/releases/tag/1.5.0
  - https://github.com/michaelvillar/timer-app/releases/tag/1.4
assets:
  - path: ./assets/icon.png
    source: https://github.com/michaelvillar/timer-app/blob/d94373b718f730e7aad4abd76a3de50baf49de77/Timer/Assets.xcassets/AppIcon.appiconset/app-icon_256.png
    credit: Timer contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Timer counts down in its own window. Drag the blue arrow to pick a duration, let go to start, and click once to pause. At zero, a notification appears and a sound plays.

The keyboard does the same work. Type digits to set the minutes, press Return to start or pause, and press R to restart with the last duration. Command-N opens another timer in its own window.

Version 2.1.0 added ways to start a timer without touching the window:

- a `timer://` link, such as `timer://5` for five minutes
- launch arguments passed with `open -a Timer --args`
- AppleScript commands such as `start timer "5"`
- a `timer-cli` wrapper script for the command line

The link and the launch arguments can name a particular timer window, as in `timer://2:30?window=2`. The same release lets you set a duration with the scroll wheel. A menu picks one of three alert sounds or none, and the Dock icon can carry the remaining time as a badge, which you can turn off.

Timer requires macOS 14 Sonoma or later. The release ZIP holds a Universal app for Apple silicon and Intel; it is ad hoc signed and not notarized. Homebrew installs it as `michaelvillar-timer`.

Michael Villar wrote it in the spirit of the Minutes Dashboard widget by Nitram-nunca, which he had used for years until it went unmaintained.
