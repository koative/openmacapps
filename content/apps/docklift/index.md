---
name: "DockLift"
summary: "Menu bar utility that brings an app's windows to the display you are on when you click its Dock icon."
category: "Utilities"
tags:
  - window-management
  - dock
  - accessibility
repository: "https://github.com/jaywcjlove/dock-lift"
website: "https://wangchujiang.com/dock-lift/"
license: "MIT"
licenseUrl: "https://github.com/jaywcjlove/dock-lift/blob/main/LICENSE"
download: "https://github.com/jaywcjlove/dock-lift/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/jaywcjlove/dock-lift"
  - "https://github.com/jaywcjlove/dock-lift/blob/main/LICENSE"
  - "https://github.com/jaywcjlove/dock-lift/releases"
  - "https://wangchujiang.com/dock-lift/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/jaywcjlove/dock-lift/releases/download/v1.3.0/DockLift_v1.3.0.zip
    credit: DockLift contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

DockLift is for Macs with more than one display. When you click an app's Dock icon, it moves that app's recent window to the screen you are using and brings it to the front, and it can restore minimized windows. Holding Shift while clicking pulls every window of that app over from the other displays. You can list apps that should never be moved. It lives in the menu bar and suits people who keep the Dock on a different screen from the one they work on.

DockLift needs the Accessibility permission, which macOS asks for on first use; without it the app cannot move windows. The README does not state a minimum macOS version or whether the build is notarized, so check System Settings > Privacy & Security if macOS blocks the first launch.
