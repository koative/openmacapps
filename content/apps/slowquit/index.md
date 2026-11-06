---
name: "SlowQuit"
summary: "Menu bar app that makes you hold Cmd-Q, and optionally Cmd-W, for a set delay before an app quits or closes."
category: "Utilities"
tags:
  - keyboard-shortcuts
  - menu-bar
  - keyboard
repository: "https://github.com/dudukee/SlowQuit"
website: "https://github.com/dudukee/SlowQuit"
license: "MIT"
licenseUrl: "https://github.com/dudukee/SlowQuit/blob/main/LICENSE"
download: "https://github.com/dudukee/SlowQuit/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dudukee/SlowQuit"
  - "https://github.com/dudukee/SlowQuit/blob/main/LICENSE"
  - "https://github.com/dudukee/SlowQuit/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/dudukee/SlowQuit/main/SlowQuit/Assets.xcassets/AppIcon.appiconset/icon-512%402x.png"
    credit: "dudukee and SlowQuit contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

SlowQuit protects Cmd-Q from accidental presses. Hold the shortcut and a circular progress indicator fills on screen; the app quits only when it completes, and releasing early cancels. The hold time is 0.5 to 3 seconds. You can apply the rule to every app, or limit it with a whitelist or blacklist, and an optional SlowClose setting does the same for Cmd-W. It runs from the menu bar, starts at login if you want, and is written in Swift and SwiftUI.

It needs macOS 12 or later and the Accessibility permission, which it uses to watch keyboard events. The DMG is not notarized, so macOS shows an unidentified-developer warning on first launch; allow it under System Settings, Privacy & Security. The author says the project is maintained mainly for personal use, so bug fixes are best effort.
