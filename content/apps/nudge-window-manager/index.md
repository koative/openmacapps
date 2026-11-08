---
name: "Nudge"
summary: "A menu bar window manager with remappable shortcuts for halves, thirds and quarters plus drag-to-edge snapping."
category: "Utilities"
tags:
  - window-management
  - keyboard-shortcuts
  - menu-bar
  - window-manager
alternativeTo:
  - magnet
repository: "https://github.com/mikusnuz/nudge"
website: "https://github.com/mikusnuz/nudge"
license: "MIT"
licenseUrl: "https://github.com/mikusnuz/nudge/blob/master/LICENSE"
download: "https://github.com/mikusnuz/nudge/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/mikusnuz/nudge"
  - "https://github.com/mikusnuz/nudge/blob/master/LICENSE"
  - "https://github.com/mikusnuz/nudge/releases"
  - "https://raw.githubusercontent.com/mikusnuz/nudge/master/README.md"
  - "https://github.com/mikusnuz/nudge/releases/tag/v1.0.3"
  - "https://magnet.crowdcafe.com/"
  - "https://github.com/macadmins/nudge"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/mikusnuz/nudge/master/Nudge/Assets.xcassets/AppIcon.appiconset/icon_256.png"
    credit: "mikusnuz"
    license: "MIT; upstream app icon, trademarks retained"
---

Nudge moves and resizes the front window from the keyboard or by dragging. Press Control-Option with an arrow key and the window fills that half of the screen; drag it to an edge or corner and it snaps there.

- With Control-Option held, U, I, J and K place it in each quarter of the screen.
- D, F and G give the left, center and right thirds, and E, R and T the matching two-thirds.
- Control-Option-Return maximizes, C centers and Delete restores the previous size.
- Adding Command to the left or right arrow sends the window to the previous or next display.

That makes 19 actions in all. Each shortcut can be changed under Nudge, Settings, Shortcuts. The app sits in the menu bar and needs the Accessibility permission, which it asks for on first launch.

Nudge needs macOS 11 or later. The release is a DMG under 1 MB holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. A Homebrew tap installs it too, as `nudge-run`. The name is shared with an unrelated macadmins tool that reminds users to install macOS updates.

Magnet offers the same halves, thirds and quarters by drag, shortcut or menu bar, and it comes from the Mac App Store. Nudge is free under the MIT license.
