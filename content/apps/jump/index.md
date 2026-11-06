---
name: "JUMP"
summary: "Keyboard-driven clicking for macOS: press a shortcut, type the label of any clickable element, and it clicks."
category: "Productivity"
tags:
  - keyboard-shortcuts
  - keyboard
  - customization
  - native
repository: "https://github.com/alvaldes/jump"
website: "https://alvaldes.github.io/jump/"
license: "GPL-3.0"
licenseUrl: "https://github.com/alvaldes/jump/blob/main/LICENSE"
download: "https://github.com/alvaldes/jump/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/alvaldes/jump"
  - "https://github.com/alvaldes/jump/blob/main/LICENSE"
  - "https://github.com/alvaldes/jump/releases"
  - "https://alvaldes.github.io/jump/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/alvaldes/jump/main/JUMP/Resources/AppIcon.icon/Assets/logo-render.png"
    credit: "JUMP contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

JUMP is a menu bar app for working without the mouse. Press its shortcut and every clickable element on screen gets a short label; type the label and JUMP clicks that element. It suits keyboard-first users, and anyone who finds it quicker to type a label than to aim a pointer at a small control.

It requires macOS 26 or later and needs Accessibility permission. The app is not notarized, so the first launch needs Open Anyway under System Settings, Privacy & Security. The default build is ad hoc signed, which means macOS drops the Accessibility grant after each rebuild; source builders need their own signing certificate to keep it. The app sends nothing to any server except an optional update check against the GitHub API, which runs daily by default and can be set to off.
