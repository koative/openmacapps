---
name: "Rebind"
summary: "Menu bar app that remaps keys, mouse buttons and some trackpad taps to shortcuts, window commands and macOS actions."
category: "Utilities"
tags:
  - keyboard
  - keyboard-shortcuts
  - mouse
repository: "https://github.com/Blinks44/rebind"
website: "https://rebind.moduix.dev"
license: "MIT"
licenseUrl: "https://github.com/Blinks44/rebind/blob/main/LICENSE"
download: "https://github.com/Blinks44/rebind/releases/latest/download/Rebind.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Blinks44/rebind"
  - "https://github.com/Blinks44/rebind/blob/main/LICENSE"
  - "https://github.com/Blinks44/rebind/releases"
  - "https://rebind.moduix.dev"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Blinks44/rebind/releases/download/v1.3.2/Rebind.dmg
    credit: Rebind contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Rebind maps keyboard keys, middle and extra mouse buttons, mouse-wheel steps and some trackpad or Magic Mouse taps to actions. Actions include keyboard shortcuts, window halves and quarters, app switching, media keys, volume, Apple Shortcuts and Mission Control. Bindings are kept in profiles and can apply to all apps or only one. It suits people who want a side button or a modifier key to do something specific, and it runs from the menu bar with a visible paused state.

It needs macOS 15 or later, is a universal app, and asks for Accessibility permission on first launch. The README says testing so far has been on Apple silicon with macOS 27 and in a macOS 15 virtual machine. Trackpad and Magic Mouse gestures are experimental and use private macOS interfaces that may break after updates. The build is signed by the maintainer but not notarized by Apple, so the first launch must be allowed under System Settings → Privacy & Security → Open Anyway.
