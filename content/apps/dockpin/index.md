---
name: "DockPin"
summary: "Keeps the macOS Dock on the display you choose, including stacked multi-monitor layouts."
category: "Utilities"
tags:
  - menu-bar
  - window-management
  - displays
  - dock
repository: "https://github.com/kangaroo-demo/DockPin"
website: "https://kangaroo-demo.github.io/DockPin/"
license: "MIT"
licenseUrl: "https://github.com/kangaroo-demo/DockPin/blob/main/LICENSE"
download: "https://github.com/kangaroo-demo/DockPin/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kangaroo-demo/DockPin"
  - "https://github.com/kangaroo-demo/DockPin/blob/main/LICENSE"
  - "https://github.com/kangaroo-demo/DockPin/releases/latest"
  - "https://kangaroo-demo.github.io/DockPin/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/kangaroo-demo/DockPin/releases/latest/download/DockPin.zip"
    credit: "DockPin contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

DockPin is for multi-monitor Macs where the Dock keeps moving to the wrong display, especially when one screen sits above another. You pick a target display and a Dock edge, and the app adds a soft pointer barrier near that edge so the Dock stays on the chosen screen while the pointer can still cross between displays. It can also show a running-apps bar on the other displays. macOS has no public setting for the Dock's display, so DockPin relies on an event tap and the Accessibility permission rather than changing system files.

It needs macOS 13 or later and the Accessibility permission, which the first-run steps request. The release zip is not notarized: the README says community builds may be unsigned, so macOS may refuse the first launch until you choose Open Anyway under System Settings › Privacy & Security. According to the README it makes no network requests and collects no analytics.
