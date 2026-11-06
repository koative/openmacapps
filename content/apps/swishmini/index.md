---
name: "SwishMini"
summary: "Trackpad gestures on a window's title bar to fullscreen, minimize, restore or close it; no keyboard shortcuts needed."
category: "Utilities"
tags:
  - trackpad
  - gestures
  - window-management
  - menu-bar
repository: "https://github.com/jzb1006/SwishMini"
website: "https://github.com/jzb1006/SwishMini"
license: "MIT"
licenseUrl: "https://github.com/jzb1006/SwishMini/blob/main/LICENSE"
download: "https://github.com/jzb1006/SwishMini/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jzb1006/SwishMini"
  - "https://github.com/jzb1006/SwishMini/blob/main/LICENSE"
  - "https://github.com/jzb1006/SwishMini/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jzb1006/SwishMini/releases/download/v1.2.2/SwishMini.1.2.2.dmg"
    credit: "jzb1006"
    license: "MIT; upstream app icon, trademarks retained"
---

SwishMini maps trackpad gestures to the window under your pointer, as long as the gesture starts on its title bar. A two-finger pinch opens the window full screen and a pinch closes it again, a two-finger swipe down minimizes it to the Dock, and a two-finger swipe up brings a minimized window back to where it was. It suits people who want to manage windows with the trackpad alone. It does not move or resize windows, and the README says keyboard shortcuts are not supported yet.

The app needs macOS 15 or later on Apple silicon or Intel, and Accessibility permission to act on windows. The DMG is not notarized and is ad-hoc signed, so the first launch needs Open Anyway in System Settings or the `xattr` command from the README. A one-second swipe up over the title bar closes the window, which is easy to trigger by accident. The README warns that the app may conflict with other gesture tools such as BetterTouchTool and Magnet, and that it uses Apple's private MultitouchSupport framework.
