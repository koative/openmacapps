---
name: "Sixty"
summary: "Break reminder that locks every screen for 60 seconds with two standing exercises, and waits while you are on a call."
category: "Productivity"
tags:
  - menu-bar
  - reminders
  - timer
  - posture
repository: "https://github.com/leplik/sixty"
website: "https://leplik.github.io/sixty/"
license: "MIT"
licenseUrl: "https://github.com/leplik/sixty/blob/main/LICENSE"
download: "https://github.com/leplik/sixty/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/leplik/sixty"
  - "https://github.com/leplik/sixty/blob/main/LICENSE"
  - "https://github.com/leplik/sixty/releases"
  - "https://leplik.github.io/sixty/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/leplik/sixty/main/Resources/AppIcon.icns"
    credit: "Aliaksei Smirnou"
    license: "MIT; upstream app icon, trademarks retained"
---

Sixty counts your active time and, after 60 minutes, locks every screen for 60 seconds while two standing exercises play. The lock screen has no Skip or Postpone button and no Quit item; the only way out is a random emergency phrase, two per day. Sixty checks which apps are using the camera or microphone and holds the break until the call ends. It is for people who dismiss break reminders on autopilot and want the break enforced.

The README says it needs macOS 14 or later and runs on Apple silicon and Intel. It asks for no permissions, has no telemetry, and its only network request is a twice-daily check of GitHub Releases; it installs updates between breaks after checking the developer's signature. The README does not say whether the DMG is notarized. Because it is a login agent with no Quit item, turning it off means running a command in Terminal or switching it off in Login Items.
