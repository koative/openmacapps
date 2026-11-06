---
name: "GridTile"
summary: "Keyboard window tiler: a shortcut and two grid-cell keys resize the focused window to span those cells."
category: "Utilities"
tags:
  - window-management
  - tiling
  - keyboard-shortcuts
  - menu-bar
alternativeTo:
  - magnet
repository: "https://github.com/ujwalnk/GridTile"
website: "https://ujwalnk.github.io/GridTile/"
license: "MIT"
licenseUrl: "https://github.com/ujwalnk/GridTile/blob/main/LICENSE"
download: "https://github.com/ujwalnk/GridTile/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ujwalnk/GridTile"
  - "https://github.com/ujwalnk/GridTile/blob/main/LICENSE"
  - "https://github.com/ujwalnk/GridTile/releases/tag/v0.0.22"
  - "https://ujwalnk.github.io/GridTile/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/ujwalnk/GridTile/releases/download/v0.0.22/GridTile.dmg"
    credit: "Ujwal N K"
    license: "MIT; upstream app icon, trademarks retained"
---

GridTile moves the focused window with the keyboard. Press the activation shortcut (Control-Option-1 by default), press a key for the grid cell where the window should start and then a key for the opposite cell, and the window resizes to span both. Escape cancels at any point. It suits people who prefer typing to dragging windows, and the grid size and shortcuts can be changed.

GridTile needs macOS 14 or later; the README names macOS 14 and 15 as its targets. The v0.0.22 DMG is a universal build signed ad hoc and not notarized. Gatekeeper rejects it, so the first launch has to be allowed by hand. The app needs Accessibility permission to move other windows, and its key names follow the US ANSI keyboard layout.
