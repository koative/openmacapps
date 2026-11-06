---
name: "Macsomnia"
summary: "Menu bar switch that keeps a MacBook awake with the lid closed and no external display, with an auto-off timer."
category: "Utilities"
tags:
  - sleep
  - clamshell
  - menu-bar
  - utilities
alternativeTo:
  - amphetamine
repository: "https://github.com/iamdadzilla/Macsomnia"
website: "https://github.com/iamdadzilla/Macsomnia"
license: "MIT"
licenseUrl: "https://github.com/iamdadzilla/Macsomnia/blob/main/LICENSE"
download: "https://github.com/iamdadzilla/Macsomnia/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iamdadzilla/Macsomnia"
  - "https://github.com/iamdadzilla/Macsomnia/blob/main/LICENSE"
  - "https://github.com/iamdadzilla/Macsomnia/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/iamdadzilla/Macsomnia/main/Macsomnia.icns"
    credit: "Jim Perry"
    license: "MIT; upstream app icon, trademarks retained"
---

Macsomnia is a menu bar app that stops the Mac from sleeping when the lid is closed and no external display is connected, so long-running light jobs such as AI agents, builds or downloads keep going. While it is on, a red strip spans every screen and the menu bar shows a countdown. You choose 30 minutes, 2 hours, 4 hours, 8 hours or until you turn it off, and the auto-off timer ends it when the time runs out.

It requires macOS 13 Ventura or later. The release is a zip signed with a Developer ID and notarized by Apple. On first use it registers a privileged helper that runs `pmset` as root, and macOS asks you to approve it under Login Items. The README warns that heavy, sustained load with the lid closed can overheat the Mac, so use it for light work and keep the auto-off timer on.
