---
name: "WindowCycle"
summary: "Switches between the windows of the frontmost app with Cmd+` forward and Cmd+Shift+` backward."
category: "Utilities"
tags:
  - window-management
  - keyboard-shortcuts
  - menu-bar
  - native
repository: "https://github.com/WhiteMinds/window-cycle"
website: "https://github.com/WhiteMinds/window-cycle"
license: "MIT"
licenseUrl: "https://github.com/WhiteMinds/window-cycle/blob/main/LICENSE"
download: "https://github.com/WhiteMinds/window-cycle/releases/download/v0.2.0/WindowCycle-0.2.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/WhiteMinds/window-cycle"
  - "https://github.com/WhiteMinds/window-cycle/blob/main/LICENSE"
  - "https://github.com/WhiteMinds/window-cycle/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/WhiteMinds/window-cycle/main/Resources/AppIcon.icns"
    credit: "WindowCycle contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

WindowCycle switches between the windows of the app in front of you: Cmd+` cycles its windows forward and Cmd+Shift+` cycles them backward. It suits people who keep several windows of one app open, such as a browser or an editor, and want to move between them from the keyboard. It uses Accessibility APIs to read window titles and frames.

The README calls it a prototype, not a finished product, and says keyboard conflict handling is not polished. Building it requires Xcode 26.5 or later. The release DMG is arm64 only and declares macOS 14.0 or later. It is self-signed and not notarized, so the first launch needs Open Anyway in Privacy & Security, or removal of the quarantine flag. It needs Accessibility permission, and Input Monitoring may be needed for the arrow and Escape keys.
