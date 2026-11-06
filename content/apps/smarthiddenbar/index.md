---
name: "SmartHiddenBar"
summary: "Hides menu bar items to the left of its icon, shows them in an icon bar, and opens their menus without unhiding."
category: "Utilities"
tags:
  - menu-bar
  - window-management
  - customization
alternativeTo:
  - bartender
repository: "https://github.com/roypadina/SmartHiddenBar"
website: "https://apps.roypadina.synology.me/apps/smarthiddenbar/"
license: "MIT"
licenseUrl: "https://github.com/roypadina/SmartHiddenBar/blob/main/LICENSE"
download: "https://github.com/roypadina/SmartHiddenBar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/roypadina/SmartHiddenBar"
  - "https://github.com/roypadina/SmartHiddenBar/blob/main/LICENSE"
  - "https://github.com/roypadina/SmartHiddenBar/releases/latest"
  - "https://apps.roypadina.synology.me/apps/smarthiddenbar/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/roypadina/SmartHiddenBar/releases/latest/download/SmartHiddenBar.zip"
    credit: "Roy Padina"
    license: "MIT; upstream app icon, trademarks retained"
---

SmartHiddenBar tidies the menu bar. One click hides every menu bar icon to the left of its own icon, and ⌥-click or the icon-bar shortcut shows the hidden ones in a row beneath it. Choosing a hidden app opens its menu from the icon bar without unhiding it. Hiding works per app rather than per item, and Apple's own items such as Control Center and the clock can't be hidden. It is for people with crowded menu bars on a recent Mac.

It needs macOS 27 or later on Apple silicon; it does not run on Intel. The README says the app relies on a private macOS API, so a system update can break it, and in that case it leaves the bar fully visible and says so. The zip is signed with a self-signed identity and is not notarized, so the first launch needs Open Anyway under System Settings › Privacy & Security. Accessibility permission is required. The code is MIT licensed. It reuses the menu-bar hiding approach from Hidden Bar, which is also listed here, and includes Hidden Bar's MIT notice.
