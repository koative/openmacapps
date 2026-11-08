---
name: DockAnchor
summary: Keeps the Dock pinned to one display instead of letting it jump between monitors.
category: Utilities
tags:
- dock
- displays
- monitors
- menu-bar
repository: https://github.com/bwya77/DockAnchor
website: https://bwya77.github.io/DockAnchor/
license: MIT
licenseUrl: https://github.com/bwya77/DockAnchor/blob/main/LICENSE
download: https://github.com/bwya77/DockAnchor/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/bwya77/DockAnchor
- https://github.com/bwya77/DockAnchor/blob/main/LICENSE
- https://github.com/bwya77/DockAnchor/releases
- https://raw.githubusercontent.com/bwya77/DockAnchor/main/README.md
- https://github.com/bwya77/DockAnchor/releases/tag/v2.1.0
- https://github.com/bwya77/DockAnchor/releases/tag/v2.0.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/bwya77/DockAnchor/main/DockAnchor/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
  credit: Bradley Wyatt
  license: MIT repository asset; DockAnchor name and icon retained by the author
---

On a Mac with more than one monitor, the Dock jumps to whichever screen your pointer pushes against at the bottom edge. DockAnchor keeps it on the display you choose. It watches mouse movement through a low-level event tap and stops those events from reaching the Dock's trigger zone on the other screens, so the Dock never moves, rather than being killed and restarted the way some scripts do it.

- A live diagram of your monitors updates as screens are connected, unplugged or rearranged, and you click one to anchor the Dock there.
- Profiles save display setups and can switch automatically based on which monitors are connected.
- If the anchor display is unplugged, the Dock falls back to the primary display and returns when the monitor comes back.
- When protection starts, the app can move the Dock to the anchor display, with a setting for where the pointer lands.

A menu bar icon turns green or red to show whether protection is on, and the app can run in the background, start at login and hide its own Dock icon. It needs the Accessibility permission to do any of this. The developer says it does not collect or transmit personal data.

The 2.1.0 release build requires macOS 15.4 and contains only Apple silicon code, although the README still lists macOS 10.15 as the minimum. That build is Developer ID-signed and notarized. A Homebrew tap from the author is the other way to install it.
