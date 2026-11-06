---
name: "Okigae"
summary: "Draws chosen character artwork over each menu bar item while the real item stays underneath and still opens its menu."
category: "Design"
tags:
  - menu-bar
  - customization
  - icons
  - native
repository: "https://github.com/piro0919/okigae"
website: "https://okigae.kkweb.io"
license: "MIT"
licenseUrl: "https://github.com/piro0919/okigae/blob/main/LICENSE"
download: "https://github.com/piro0919/okigae/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/piro0919/okigae"
  - "https://github.com/piro0919/okigae/blob/main/LICENSE"
  - "https://github.com/piro0919/okigae/releases"
  - "https://okigae.kkweb.io"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/piro0919/okigae/main/Resources/app-icon.png"
    credit: "piro0919"
    license: "MIT; upstream app icon, trademarks retained"
---

Okigae is a menu bar app for changing how your status items look. You pick a character image for any menu bar item and Okigae draws a panel over that item. The real item stays alive underneath, so clicking it still opens the app's own menu, and items you do not assign are left alone. The interface is in English and Japanese. It suits people who want a more personal menu bar without replacing their other utilities.

It needs macOS 14 or later on Apple silicon; the build targets arm64 only, so Intel Macs cannot run it. The app is signed ad hoc and not notarized, so the first launch needs a right-click and Open. It also needs Screen & System Audio Recording permission to read the menu bar. Each Sparkle update makes macOS drop that grant, so you must remove the app from the list and add it back after updating until releases use a stable signing identity.
