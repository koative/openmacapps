---
name: "HealthTick"
summary: "A menu bar timer that reminds you to get up from your desk and can enforce a short break."
category: "Productivity"
tags:
  - menu-bar
  - breaks
  - wellbeing
  - timer
repository: https://github.com/lifedever/health-tick-release
website: https://github.com/lifedever/health-tick-release
license: "GPL-3.0"
licenseUrl: https://github.com/lifedever/health-tick-release/blob/main/LICENSE
download: https://github.com/lifedever/health-tick-release/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/lifedever/health-tick-release
  - https://github.com/lifedever/health-tick-release/blob/main/LICENSE
  - https://github.com/lifedever/health-tick-release/releases
  - https://github.com/lifedever/health-tick-release/blob/main/README.md
  - https://github.com/lifedever/health-tick-release/releases/tag/v1.6.32
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lifedever/health-tick-release/main/Sources/Resources/AppIcon.icns
    credit: "lifedever and HealthTick contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

HealthTick counts down a stretch of work from the menu bar, then calls a break and holds you to it. The work interval can be anything from 1 to 120 minutes, and the rest from 1 to 15.

When the break comes, the reminder can sit in the top-left or top-right corner, take the middle of the screen, or cover the whole display. If you touch the keyboard or mouse during the rest, the countdown pauses, which is meant to make sure you actually rest.

The app needs macOS 14 or later and comes as separate disk images for Apple silicon and Intel, or through the developer's Homebrew tap. The Apple silicon build has no Developer ID signature. If macOS refuses to open it the first time, the README points you to Open Anyway in Privacy & Security settings. HealthTick checks for a new version each time it starts, and its README is written in Chinese.

The habit side runs on numbers:

- a daily target for how many breaks you take, with a way to log one you took early;
- a streak of days on which you met the target;
- 18 badges for streaks and for total breaks;
- a 7-day bar chart, a 30-day heat map and weekly and monthly completion rates.
