---
name: "Window Glue"
summary: "A menu bar utility that glues two windows together so they move and resize as a pair."
category: "Utilities"
tags:
  - window-management
  - menu-bar
repository: https://github.com/Conxt/WindowGlue
website: https://github.com/Conxt/WindowGlue
license: "MIT"
licenseUrl: https://github.com/Conxt/WindowGlue/blob/main/LICENSE
download: https://github.com/Conxt/WindowGlue/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Conxt/WindowGlue
  - https://github.com/Conxt/WindowGlue/blob/main/LICENSE
  - https://github.com/Conxt/WindowGlue/releases
  - https://raw.githubusercontent.com/Conxt/WindowGlue/main/README.md
  - https://github.com/Conxt/WindowGlue/releases/tag/1.0.0
  - https://github.com/Conxt/WindowGlue/releases/tag/1.0.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Conxt/WindowGlue/main/Window%20Glue/Assets.xcassets/AppIcon.appiconset/Icon-MacOS-512x512%401x.png
    credit: "Andriy Konstantynov and Window Glue contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Window Glue attaches one window to another so you can handle the two as a single unit. Switch on glue mode from its menu bar icon or with F9, then drag a window toward a second one. A glow marks where it will snap. Once attached, the pair moves together, and the border between them behaves like a split view divider.

To separate them, shake a window quickly, or press Shift-F9 to unglue the active window. Hiding a glued window with Command-H unglues it as well. Settings let you change both shortcuts, adjust the snap tolerance and have the app open at startup. The interface is available in 13 languages, including Ukrainian, Japanese and Polish.

The app uses the Accessibility permission to watch and reposition other apps' windows, and the setup steps ask you to quit and reopen it after granting that permission. The developer says no data is collected or transmitted.

The project lists two known issues. The second window lags slightly behind while you drag the first. When one window moves to another display or Space, its partner does not follow, and the two stick again once you drag the other window over too.

The release is a DMG holding a Universal app for Apple silicon and Intel, and it needs macOS 13 Ventura or later. The app inside is signed with a Developer ID and notarized, while the disk image itself is signed but not notarized.
