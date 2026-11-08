---
name: Loop
summary: "Moves and resizes windows with a radial menu around the pointer or with keyboard shortcuts."
category: Productivity
tags:
  - window-management
  - keyboard-shortcuts
  - window-manager
alternativeTo:
  - magnet
repository: https://github.com/mrkai77/Loop
website: https://github.com/mrkai77/Loop
license: GPL-3.0
licenseUrl: https://github.com/mrkai77/Loop/blob/develop/LICENSE
download: https://github.com/mrkai77/Loop/releases
freeDownload: true
homebrew: "loop"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/mrkai77/Loop", "https://github.com/mrkai77/Loop/blob/develop/LICENSE", "https://github.com/mrkai77/Loop/blob/develop/README.md", "https://github.com/mrkai77/Loop/releases", "https://github.com/mrkai77/Loop/releases/tag/1.4.2", "https://magnet.crowdcafe.com/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/mrkai77/Loop/blob/573ace3071641bbe002527ccfc0811842300ccba/assets/graphics/Classic.png
    credit: Loop contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Loop moves and resizes windows when you hold a trigger key and push the pointer in a direction. A radial menu appears around the cursor, and a preview shows where the window will land before you let go.

- Pressing another key with the trigger key runs an action from the keyboard: halves, quarters, thirds, maximize, center or a jump to the next screen.
- Cycles put several layouts on one shortcut, so repeated presses step through them.
- Stash tucks a window against the screen edge until you hover there or press its key.
- The radial menu's width, shape and color are adjustable, and you can turn it off. The preview has its own padding, corner radius and border settings.
- A `loop://` URL scheme lets shell scripts and AppleScript call the same actions.

Caps Lock can serve as the trigger: remap it to Control in System Settings, then choose Right Control in Loop.

Magnet is sold through the Mac App Store and snaps windows when you drag them to screen edges and corners, use a shortcut or pick from its menu. Loop is free, and its gesture works by direction from wherever the pointer is.

Loop needs macOS 13 or later. The current release is a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
