---
name: "GhostMouse"
summary: "Menu bar tool that keeps a Mac awake with simulated input, plus schedules, idle pause and auto-stop timers."
category: "Utilities"
tags:
  - mouse
  - sleep
  - automation
  - menu-bar
alternativeTo:
  - amphetamine
repository: "https://github.com/joeystdio/GhostMouse"
website: "https://joeystdio.github.io/GhostMouse/"
license: "MIT"
licenseUrl: "https://github.com/joeystdio/GhostMouse/blob/main/LICENSE"
download: "https://github.com/joeystdio/GhostMouse/releases/latest/download/GhostMouse.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/joeystdio/GhostMouse"
  - "https://github.com/joeystdio/GhostMouse/blob/main/LICENSE"
  - "https://github.com/joeystdio/GhostMouse/releases"
  - "https://joeystdio.github.io/GhostMouse/"
---

GhostMouse keeps a Mac from going idle. In Stealth mode it sends a zero-displacement input event at the pointer's own pixel, so the cursor does not visibly move while macOS registers activity; Natural mode glides the pointer out and back to where it started. It stops as soon as you touch the mouse or keyboard, or pauses and resumes after an idle delay you choose. Schedules limit it to chosen weekdays and hours, and a timer can switch it off after a countdown or at a set time. Control-Command-J toggles it, and a right-click on the menu bar icon does the same. It is for people whose status or session needs to stay active while they step away.

Requires macOS 14 or later. The release is a universal build for Apple silicon and Intel. On first launch, grant Accessibility permission so it can see your input and post its events. The DMG is not notarized: right-click the app and choose Open, or follow the `xattr` command in the README. The project is MIT-licensed and free; the author takes donations.
