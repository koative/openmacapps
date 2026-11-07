---
name: "Wink"
summary: "Menu bar app that binds global shortcuts to apps, so one press launches, focuses or hides them, with window cycling."
category: "Utilities"
tags:
  - keyboard-shortcuts
  - app-switcher
  - menu-bar
repository: "https://github.com/hey-yvan/Wink"
website: "https://wink.aixie.de"
license: "MIT"
licenseUrl: "https://github.com/hey-yvan/Wink/blob/main/LICENSE"
download: "https://github.com/hey-yvan/Wink/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-07"
icon: "./assets/icon.png"
sources:
  - "https://github.com/hey-yvan/Wink"
  - "https://github.com/hey-yvan/Wink/blob/main/LICENSE"
  - "https://github.com/hey-yvan/Wink/releases/latest"
  - "https://wink.aixie.de"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/hey-yvan/Wink/main/Sources/Wink/Resources/AppIcon.icns"
    credit: "Wink contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Wink binds keyboard shortcuts to individual apps. A shortcut launches the app if it is not running, brings it forward if it is, or hides it when it is already frontmost. It can also cycle through an app's windows, open a window picker, show a search palette and use Caps Lock as a Hyper key. It suits people who switch between a fixed set of apps all day and do not want a launcher.

It requires macOS 15 or later, and the release binary is built for Apple silicon. The DMG is not notarized by Apple, so the first launch needs Open Anyway in Privacy & Security. Wink needs Accessibility permission to route shortcuts, and Input Monitoring for Hyper and function-row shortcuts. The README notes that reliable activation relies on a private macOS API.
