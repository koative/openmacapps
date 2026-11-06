---
name: "Deskset"
summary: "Native desktop widgets for macOS that can also load Rainmeter skins, with clocks, weather and system monitors."
category: "Utilities"
tags:
  - widgets
  - desktop
  - customization
repository: "https://github.com/jokyme/Deskset"
website: "https://ideskset.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/jokyme/Deskset/blob/main/LICENSE"
download: "https://github.com/jokyme/Deskset/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jokyme/Deskset"
  - "https://github.com/jokyme/Deskset/blob/main/LICENSE"
  - "https://github.com/jokyme/Deskset/releases"
  - "https://ideskset.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jokyme/Deskset/releases/download/v1.0.0/Deskset-1.0.0-arm64.dmg"
    credit: "jokyme"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Deskset draws desktop widgets with native macOS panels instead of web views. It ships a Stationery collection of clocks, weather, music and system monitors, and it can load Rainmeter `.rmskin` packages, skin folders and `.ini` or Lua skins. Windows-only DLL plugins and Windows programs do not run. Skin Studio edits skin code beside a live preview. It suits people who like Rainmeter-style desktops and want them built from native macOS parts.

It needs macOS 13 Ventura or later, with separate Apple silicon and Intel downloads. The Apple silicon build is notarized; this was checked on that build. Some widgets ask for permissions: audio visualizers need System Audio Recording, Music and Spotify controls need automation access, and Wi-Fi or location-based weather needs Location Services. Weather data comes from MET Norway under CC BY 4.0.
