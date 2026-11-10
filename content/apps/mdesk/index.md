---
name: mDESK
summary: "Saves and restores desktop icon and window positions for each display setup, from the menu bar."
category: Productivity
tags:
  - menu-bar
  - window-management
  - desktop
  - displays
repository: https://github.com/starbudweiser/mDESK
website: https://github.com/starbudweiser/mDESK
license: MIT
licenseUrl: https://github.com/starbudweiser/mDESK/blob/main/LICENSE
download: https://github.com/starbudweiser/mDESK/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/mDESK
  - https://github.com/starbudweiser/mDESK/blob/main/LICENSE
  - https://github.com/starbudweiser/mDESK/releases
  - https://raw.githubusercontent.com/starbudweiser/mDESK/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mDESK/releases/download/v1.0/DeSKSTAY-1.0-macOS-arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mDESK remembers where desktop icons and windows sit on your screens and puts them back. It keeps one arrangement per combination of connected displays and picks the matching one on its own.

For desktop icons, you save their positions, restore them later or hide them all. Restoring moves only the icons that changed place, so it is quick on a crowded desktop.

For windows, you choose app by app which windows to track. Finder windows and application windows are restored to their saved position, and a closed Finder window is never reopened.

Nothing happens automatically by default. Restoring when the displays change, when the Mac wakes or when the app launches are separate options you turn on.

The app merges the ideas of Desktop Icon Manager and Stay and is not affiliated with their authors. On first use macOS asks for two permissions: Automation, to control the Finder, and Accessibility, to move application windows. Arrangements are kept in a JSON file in Application Support. Releases are arm64 builds for macOS 14 or later, notarized, with the interface in English, French, Spanish and Italian.
