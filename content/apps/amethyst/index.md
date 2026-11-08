---
name: Amethyst
summary: "Tiles windows automatically into layouts that you cycle and adjust with keyboard shortcuts."
category: Productivity
tags:
  - window-management
  - tiling
  - keyboard-shortcuts
  - window-manager
repository: https://github.com/ianyh/Amethyst
website: https://ianyh.com/amethyst/
license: MIT
licenseUrl: https://github.com/ianyh/Amethyst/blob/development/LICENSE.md
download: https://github.com/ianyh/Amethyst/releases
freeDownload: true
homebrew: "amethyst"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/ianyh/Amethyst
  - https://github.com/ianyh/Amethyst/blob/development/LICENSE.md
  - https://github.com/ianyh/Amethyst/blob/development/README.md
  - https://github.com/ianyh/Amethyst/releases
  - https://raw.githubusercontent.com/ianyh/Amethyst/development/README.md
  - https://github.com/ianyh/Amethyst/releases/tag/v0.25.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/ianyh/Amethyst/blob/5cfe2fe12b1a933139010da5760aaa7e44033e9b/Amethyst/Images.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Amethyst contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Amethyst arranges the windows on each screen into a layout as you open and close them, so you rarely drag or resize anything by hand. Option-Shift-Space cycles to the next layout. Option-Shift-J and K move focus between windows, and Option-Shift-Return swaps the focused window into the main pane.

The default Tall layout puts one main pane on the left and stacks the rest in rows on the right. Other layouts include:

- Wide, with the main pane across the top
- Three-column layouts with the main pane on the left, middle or right
- Fullscreen, Column, Row and binary space partitioning
- Floating, which leaves windows where you put them

You choose which layouts appear in the cycle, and custom layouts can be written in JavaScript, still in beta. Settings can also live in a YAML file in your home folder, which overrides the settings window. Other shortcuts throw the focused window to another Space or screen, and Option-Shift-T makes a single window float.

Amethyst needs the Accessibility permission. Turning off the Mission Control option that rearranges Spaces by recent use keeps keyboard moves between Spaces predictable. The release ZIP holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, which needs macOS 12 or later. Amethyst is free under the MIT license.
