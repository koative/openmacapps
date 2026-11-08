---
name: MacsyZones
summary: "Snaps windows into custom zone layouts you design, by dragging; modelled on PowerToys FancyZones."
category: Utilities
tags:
- window-management
- workspaces
- keyboard-shortcuts
- window-manager
alternativeTo:
- magnet
repository: https://github.com/rohanrhu/MacsyZones
website: https://macsyzones.com/
license: GPL-3.0
licenseUrl: https://github.com/rohanrhu/MacsyZones/blob/main/LICENSE
download: https://github.com/rohanrhu/MacsyZones/releases
freeDownload: true
homebrew: "macsyzones"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/rohanrhu/MacsyZones
- https://github.com/rohanrhu/MacsyZones/blob/main/LICENSE
- https://github.com/rohanrhu/MacsyZones/releases
- https://macsyzones.com/
- https://raw.githubusercontent.com/rohanrhu/MacsyZones/main/README.md
- https://github.com/rohanrhu/MacsyZones/releases/tag/v3.1.1
- https://magnet.crowdcafe.com/
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/rohanrhu/MacsyZones/main/MacsyZones/Assets.xcassets/AppIcon.appiconset/Logo-1024x1024.png
  credit: Oğuzhan Eroğlu (rohanrhu)
  license: GPL-3.0 repository asset; no separate icon terms stated
---

MacsyZones lets you draw your own layout of zones on each screen and then drop windows into them. Hold Shift while dragging a window and the zones appear; release over one and the window fills it.

- Zones can overlap, and a layout editor opened from the menu bar adds, moves and resizes them.
- Grid layouts let you draw a rectangle on a grid instead of choosing a fixed zone.
- Shaking a window by its title bar brings up the zones without the Snap Key, and right-click snapping is on by default.
- Quick Snapper, on Control-Shift-S by default, picks a zone by arrow keys or number and also switches layouts and windows.
- Snap resizers appear where zone edges meet, and a window edge dragged close to one snaps onto it.

The app remembers which layout you prefer for each combination of display and Space, and switches when you move between them. It needs the Accessibility permission. Do not place a zone on another screen while editing a layout, which the site lists as a known issue.

The idea comes from FancyZones in Microsoft's PowerToys. Magnet snaps windows into fixed halves, thirds and quarters, while MacsyZones uses zone shapes that you define.

Version 3.1.1 is a Universal ZIP for Apple silicon and Intel, notarized, and needs macOS 14. It is free to download from GitHub or the website. Buying a licence supports the developer and only adds "Pro" to the app's name.
