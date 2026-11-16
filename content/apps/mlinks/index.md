---
name: mLINKS
summary: "Opens your apps, folders, files and web links from a menu bar menu or global shortcuts, and imports QuickLinks data."
category: Productivity
tags:
  - menu-bar
  - launcher
  - keyboard-shortcuts
  - bookmarks
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mLINKS
website: https://github.com/starbudweiser/mLINKS
license: MIT
licenseUrl: https://github.com/starbudweiser/mLINKS/blob/main/LICENSE
download: https://github.com/starbudweiser/mLINKS/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mLINKS
  - https://github.com/starbudweiser/mLINKS/blob/main/LICENSE
  - https://github.com/starbudweiser/mLINKS/releases
  - https://raw.githubusercontent.com/starbudweiser/mLINKS/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mLINKS/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mLINKS/releases/download/v1.1.1/mLINKS.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The main window with three link groups (apps, folders, web addresses) and the details panel of the selected link."
    source: https://github.com/starbudweiser/mLINKS/blob/main/docs/screenshot.png
    credit: Starbudweiser
---

mLINKS keeps your apps, folders, files and web addresses in a menu under its menu bar icon. Groups appear as submenus with icons, and holding Option reveals an item in the Finder instead of opening it.

Every link can have its own global shortcut, and shortcuts need no Accessibility permission. A target that is missing, for example on an unplugged disk, is marked Not found, and a sleeping external disk never freezes the menu.

The manager window is where you build the menu:

- create, rename and reorder groups;
- drag files and folders in from the Finder;
- hide links from the menu without deleting them;
- import a QuickLinks database or its CSV export.

The import reads QuickLinks data without modifying it and creates no duplicates when run again. mLINKS rebuilds the idea of QuickLinks by Appyogi from scratch and shares none of its code. It has no Dock icon and can open at login.

Links are stored in a JSON file in Application Support. Updates are checked once a day, with the Developer ID signature verified before installing, and can be turned off. Releases are arm64 builds for macOS 14 or later, notarized, in four languages.

It belongs to the Desktop Mac Toolkit, a set of free Mac apps by the same developer that share one design and update the same way.
