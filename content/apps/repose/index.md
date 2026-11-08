---
name: "Repose"
summary: "A break reminder that dims the screen on a timer and waits while your camera or microphone is in use."
category: "Productivity"
tags:
  - breaks
  - wellbeing
  - menu-bar
  - meetings
repository: "https://github.com/fikrikarim/repose"
website: "https://github.com/fikrikarim/repose"
license: "MIT"
licenseUrl: "https://github.com/fikrikarim/repose/blob/main/LICENSE"
download: "https://github.com/fikrikarim/repose/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/fikrikarim/repose"
  - "https://github.com/fikrikarim/repose/blob/main/LICENSE"
  - "https://github.com/fikrikarim/repose/releases"
  - "https://github.com/fikrikarim/repose/blob/main/README.md"
  - "https://github.com/fikrikarim/repose/releases/tag/v1.1.1"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/fikrikarim/repose/main/Repose/Assets.xcassets/AppIcon.appiconset/icon_256x256%401x.png"
    credit: "Fikri Karim"
    license: "MIT; upstream app icon, trademarks retained"
---

Repose runs a countdown in the menu bar while you work, then dims the screen so you look away from it for a while. When the break is over, the next work interval starts on its own. You set the work interval anywhere from 5 to 60 minutes and the break from 20 seconds to 5 minutes.

Its main trick is meeting detection. Repose asks the hardware whether a camera or microphone is in use, through CoreMediaIO and CoreAudio, and holds the timer while either one is busy. Nothing is tied to a calendar or a list of apps, so a call in Zoom, FaceTime, Teams, Google Meet or a Slack huddle counts the same way, with nothing to set up.

There is no settings window. Pause, resume, restart and every option sit in the menu bar menu, and Sparkle installs updates. Repose requires macOS 13 or later. The release comes as a DMG or ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. It is free under the MIT license.

Idle time is handled too. After five minutes with no keyboard or mouse input the timer stops, and when you come back it starts a fresh work cycle, since time away from the desk already served as a break. A video that keeps the display awake does not count as idle, so reminders still arrive while you watch.
