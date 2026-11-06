---
name: "Show Desktop"
summary: "Menu bar app that hides every window with one click or ⌃⇧D, then restores them exactly as they were."
category: "Utilities"
tags:
  - window-management
  - menu-bar
  - keyboard-shortcuts
  - privacy
repository: "https://github.com/stanczykwyatt/show-desktop"
website: "https://stanczykwyatt.github.io/show-desktop/"
license: "MIT"
licenseUrl: "https://github.com/stanczykwyatt/show-desktop/blob/main/LICENSE"
download: "https://github.com/stanczykwyatt/show-desktop/releases/latest/download/Show-Desktop.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/stanczykwyatt/show-desktop"
  - "https://github.com/stanczykwyatt/show-desktop/blob/main/LICENSE"
  - "https://github.com/stanczykwyatt/show-desktop/releases"
  - "https://stanczykwyatt.github.io/show-desktop/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/stanczykwyatt/show-desktop/main/Resources/AppIcon.icns"
    credit: "stanczykwyatt"
    license: "MIT code license; icon terms not stated upstream; trademarks retained"
---

Show Desktop is a menu bar app for clearing the Desktop without losing your place. One click on its icon, or the ⌃⇧D shortcut, hides every window; the next click brings back the apps that were open, in order, with the one you were using on top. Apps are hidden the way ⌘H hides them, so nothing is closed or quit. It suits people who want a visible button and a shortcut that works on any keyboard, and who do not want to rely on F11 or a trackpad gesture.

The README says it runs on macOS 14 or later, on Apple silicon and Intel. It is not notarized yet, so the first launch needs Open Anyway under System Settings, Privacy & Security. The app is sandboxed without network access and asks for no Accessibility or Screen Recording permission. It asks once for permission to control Finder, which it uses to minimize Finder windows; you can decline that and the rest still works.
