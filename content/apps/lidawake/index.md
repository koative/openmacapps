---
name: "LidAwake"
summary: "Menu bar app that keeps the Mac awake, including with the lid closed, and can stop on heat, low battery or a timer."
category: "Utilities"
tags:
  - menu-bar
  - sleep
  - battery
alternativeTo:
  - amphetamine
repository: "https://github.com/Vladimir-Podgornyi/LidAwake"
website: "https://github.com/Vladimir-Podgornyi/LidAwake"
license: "MIT"
licenseUrl: "https://github.com/Vladimir-Podgornyi/LidAwake/blob/main/LICENSE"
download: "https://github.com/Vladimir-Podgornyi/LidAwake/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Vladimir-Podgornyi/LidAwake"
  - "https://github.com/Vladimir-Podgornyi/LidAwake/blob/main/LICENSE"
  - "https://github.com/Vladimir-Podgornyi/LidAwake/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Vladimir-Podgornyi/LidAwake/releases/download/v1.1.1/LidAwake-1.1.1.dmg"
    credit: "Vladimir Podgornyi"
    license: "MIT; upstream app icon, trademarks retained"
---

LidAwake sits in the menu bar and keeps a Mac from sleeping in two modes: keeping the screen on while you step away, and running with the lid closed while the laptop travels in a bag. Protections can end the session when the Mac gets hot, the battery drops below a limit, a timer runs out or no work is detected for a while. It can also wake the Mac at a set time each day. It suits people who leave a laptop running a long build, an AI agent or a render with the lid shut.

It needs macOS 13 or later on Apple silicon; the app does not run on Intel Macs. The disk image is signed and notarized. Lid-closed mode installs a privileged helper that you allow once in System Settings. The app checks for updates once a day, which can be turned off, and the README says it has no analytics. A paid LidAwake Pro build adds three features; the free app stays open source.
