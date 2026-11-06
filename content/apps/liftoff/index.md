---
name: "Liftoff"
summary: "A Launchpad-style grid of apps for macOS 26, with live window previews, folders and search."
category: "Utilities"
tags:
  - launcher
  - window-management
  - previews
  - search
repository: "https://github.com/firstfu/Liftoff"
website: "https://firstfu.github.io/Liftoff/"
license: "GPL-3.0"
licenseUrl: "https://github.com/firstfu/Liftoff/blob/main/LICENSE"
download: "https://github.com/firstfu/Liftoff/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/firstfu/Liftoff"
  - "https://github.com/firstfu/Liftoff/blob/main/LICENSE"
  - "https://github.com/firstfu/Liftoff/releases"
  - "https://firstfu.github.io/Liftoff/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/firstfu/Liftoff/releases/download/v1.4.2/Liftoff.zip"
    credit: "firstfu"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Liftoff brings back the Launchpad grid that macOS 26 replaced with its Apps list. It has pages, folders, drag-to-rearrange and type-to-search, and it adds live thumbnails of a running app's windows, so you can click one to jump to it, including minimized windows. It is for people who liked the old grid and want it on macOS 26.

It requires macOS 26 or later and runs on Apple silicon or Intel (the build is universal). It is not notarized by Apple, so the first launch has to be allowed under System Settings > Privacy & Security with Open Anyway. It asks for Accessibility and Screen Recording permissions; the window previews and window switching use undocumented macOS interfaces, and they turn themselves off if those interfaces are missing.
