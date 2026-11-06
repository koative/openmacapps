---
name: "Birth"
summary: "Lists login items and launch agents in one window, with each item's code-signing identity and whether it is running."
category: "Utilities"
tags:
  - privacy
  - inspection
  - system-monitoring
  - processes
repository: "https://github.com/iAmCorey/birth"
website: "https://github.com/iAmCorey/birth"
license: "MIT"
licenseUrl: "https://github.com/iAmCorey/birth/blob/main/LICENSE"
download: "https://github.com/iAmCorey/birth/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iAmCorey/birth"
  - "https://github.com/iAmCorey/birth/blob/main/LICENSE"
  - "https://github.com/iAmCorey/birth/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/iAmCorey/birth/releases/download/v0.2.11/Birth-0.2.11.dmg"
    credit: "Corey Chiu"
    license: "MIT; upstream app icon, trademarks retained"
---

Birth lists every login item, launch agent and daemon on the Mac in one window. For each one it shows the code-signing identity of the developer and whether the item is running now. Third-party items can be disabled or removed from the window, and removed items are kept as backups. It suits people who want to see what starts with their Mac and who put it there, rather than the vaguer list in System Settings.

Birth needs macOS 14 (Sonoma) or later and is a universal build for Apple silicon and Intel. It is not notarized by Apple, so the first launch has to be allowed in System Settings under Privacy & Security. The first change to a login app asks for Automation permission, and daemons need the administrator password each time. The app is ad-hoc signed, so Full Disk Access and Automation must be granted again after each upgrade. The Login Items category is read-only, because macOS offers no interface for changing those items.
