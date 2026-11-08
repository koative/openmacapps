---
name: SwiftShift
summary: "Moves and resizes windows with configurable mouse and keyboard gestures."
category: Productivity
tags:
  - window-management
  - mouse
  - keyboard-shortcuts
  - window-manager
repository: https://github.com/pablopunk/SwiftShift
website: https://swiftshift.app
license: MIT
licenseUrl: https://github.com/pablopunk/SwiftShift/blob/main/LICENSE
download: https://github.com/pablopunk/SwiftShift/releases
freeDownload: true
homebrew: "swift-shift"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/pablopunk/SwiftShift
  - https://github.com/pablopunk/SwiftShift/blob/main/LICENSE
  - https://github.com/pablopunk/SwiftShift/blob/main/README.md
  - https://github.com/pablopunk/SwiftShift/releases
  - https://swiftshift.app/
  - https://github.com/pablopunk/SwiftShift/releases/tag/1.5.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/pablopunk/SwiftShift/blob/714fcd7e42eed035899b20e3390c06e7a547d198/assets/icon.png
    credit: SwiftShift contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.jpg
    source: https://github.com/pablopunk/SwiftShift/blob/714fcd7e42eed035899b20e3390c06e7a547d198/www/src/images/screenshot-dark.jpg
    credit: SwiftShift contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.jpg
    alt: SwiftShift settings window with options for moving and resizing windows.
    source: https://github.com/pablopunk/SwiftShift/blob/714fcd7e42eed035899b20e3390c06e7a547d198/www/src/images/screenshot-dark.jpg
    credit: SwiftShift contributors
icon: ./assets/icon.png
---

SwiftShift moves or resizes a window when a shortcut is held and the mouse moves, without hunting for a window title or the small resize arrows.

Shortcuts can include mouse buttons, which matches how some Linux desktops handle windows. Resizing starts from the bottom-right corner by default. Quadrant mode resizes from whichever edge or corner is nearest the pointer instead. Apps you add to an ignore list keep their windows out of reach.

The app runs in the background after setup. It can start at login and hide its menu bar icon. Version 1.5.0 fixed ignored apps swallowing clicks.

SwiftShift controls other apps' windows through the Accessibility permission. The 1.5.0 ZIP on GitHub holds a Universal app for Apple silicon and Intel that needs macOS 13 or later, Developer ID-signed and notarized. The same app is free from GitHub releases and Homebrew. The website sells it on a pay-what-you-want basis.
