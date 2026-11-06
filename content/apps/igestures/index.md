---
name: "iGestures"
summary: "Native mouse gesture tool that recognizes free-form strokes you train yourself and maps them to per-app actions."
category: "Utilities"
tags:
  - mouse
  - gestures
  - menu-bar
repository: "https://github.com/ron159/iGestures"
website: "https://igestures.techkoala.net/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/ron159/iGestures/blob/main/LICENSE"
download: "https://github.com/ron159/iGestures/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ron159/iGestures"
  - "https://github.com/ron159/iGestures/blob/main/LICENSE"
  - "https://github.com/ron159/iGestures/releases"
  - "https://igestures.techkoala.net/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ron159/iGestures/main/iGestures/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-128%402x.png"
    credit: "iGestures contributors"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

iGestures turns a mouse button or keyboard key plus a stroke you train yourself into an action. Mappings can be global, per application group or per app, and a searchable library covers window, browser, Finder, editing, media and automation actions. It also supports trackpad modifier gestures, double-click and long-press triggers, and sharing selected mappings as `.igesturespack` files. It suits people who want quick, per-app shortcuts without memorising keyboard combinations.

iGestures requires macOS 14.0 or later on Apple silicon: the app's Info.plist in the 0.20.4 release sets LSMinimumSystemVersion to 14.0, matching the README. The README says physical-device testing has only been done on macOS 26 or later. The README does not state whether the build is notarized; if macOS blocks the first launch, use Open Anyway. It asks for Input Monitoring, Accessibility and Automation only when a feature needs them. Script actions can run shell commands, so review a script before enabling it. Because builds are ad-hoc signed, macOS may ask for permissions again after an upgrade.
