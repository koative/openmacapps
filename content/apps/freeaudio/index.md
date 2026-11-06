---
name: "FreeAudio"
summary: "Open-source menu bar app for per-app volume, output switching and software volume on HDMI and DisplayPort monitors."
category: "Utilities"
tags:
  - audio
  - menu-bar
  - volume
repository: "https://github.com/hakanotal/FreeAudio"
website: "https://github.com/hakanotal/FreeAudio"
license: "MIT"
licenseUrl: "https://github.com/hakanotal/FreeAudio/blob/main/LICENSE"
download: "https://github.com/hakanotal/FreeAudio/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/hakanotal/FreeAudio"
  - "https://github.com/hakanotal/FreeAudio/blob/main/LICENSE"
  - "https://github.com/hakanotal/FreeAudio/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hakanotal/FreeAudio/main/FreeAudio/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "hakanotal (FreeAudio)"
    license: "MIT; upstream app icon, trademarks retained"
---

FreeAudio is a menu bar app for controlling sound per app and per output. Each app that plays audio gets its own slider from 0 to 200 percent and a mute, and output devices can be switched from the same panel. For HDMI and DisplayPort monitors whose volume macOS cannot change, it adds a software volume slider and working volume keys. The project presents it as a free, open-source alternative to SoundSource, the paid Rogue Amoeba app, covering that app's most-used features but not its effects or per-app EQ.

It requires macOS 27 or later on Apple silicon, according to the install steps. The DMG is not notarized, so the first launch is blocked until you choose Open Anyway in System Settings or clear the quarantine flag. The first time you change an app's volume, macOS asks for System Audio Recording permission; the project says audio is processed live and never recorded or stored. Other tools that also tap app audio, such as SoundSource or eqMac, can interfere, and calling apps are best left at 100 percent.
