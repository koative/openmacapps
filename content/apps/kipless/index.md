---
name: "Kipless"
summary: "Menu bar app that keeps the Mac or its display awake for a set time, leaving your normal sleep settings unchanged."
category: "Utilities"
tags:
  - sleep
  - menu-bar
  - display
alternativeTo:
  - amphetamine
repository: "https://github.com/ShiinaLabs/Kipless"
website: "https://github.com/ShiinaLabs/Kipless"
license: "MPL-2.0"
licenseUrl: "https://github.com/ShiinaLabs/Kipless/blob/main/LICENSE"
download: "https://github.com/ShiinaLabs/Kipless/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ShiinaLabs/Kipless"
  - "https://github.com/ShiinaLabs/Kipless/blob/main/LICENSE"
  - "https://github.com/ShiinaLabs/Kipless/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/ShiinaLabs/Kipless/releases/download/v1.2.1/Kipless.dmg"
    credit: "Kipless contributors (ShiinaLabs)"
    license: "MPL-2.0; upstream app icon, trademarks retained"
---

Kipless is a small menu bar app that keeps a Mac awake for a fixed period: 15 minutes, 30 minutes, an hour, two hours, or until you stop it. You choose whether only the Mac stays awake, the Mac and the display, or the Mac with the lid closed. Outside a session it leaves your sleep settings alone, which suits long downloads, builds, renders or a local server that has to keep running.

It requires macOS 14 Sonoma or later. The build is signed and notarized by Apple. Closed Lid mode needs a background helper that you approve once under System Settings › General › Login Items. The app has no account, analytics or crash reporting; its only network request is an update check, and that stays off until you turn on automatic checks.
