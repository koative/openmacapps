---
name: "Cybokron Dock Groups"
summary: "Menu bar app that groups apps and websites, then opens, hides or closes a whole group from the Dock."
category: "Utilities"
tags:
  - menu-bar
  - window-management
  - dock
repository: "https://github.com/ercanatay/cybokron-dock-groups"
website: "https://cybokron.com/products/dock-groups/"
license: "MIT"
licenseUrl: "https://github.com/ercanatay/cybokron-dock-groups/blob/main/LICENSE"
download: "https://github.com/ercanatay/cybokron-dock-groups/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ercanatay/cybokron-dock-groups"
  - "https://github.com/ercanatay/cybokron-dock-groups/blob/main/LICENSE"
  - "https://github.com/ercanatay/cybokron-dock-groups/releases/latest"
  - "https://cybokron.com/products/dock-groups/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ercanatay/cybokron-dock-groups/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Ercan Atay (Cybokron)"
    license: "MIT; upstream app icon (resized), trademarks retained"
---

Cybokron Dock Groups is a menu bar app for switching between sets of apps. Choosing a group shows its apps in a popup over the Dock, and one action can open, hide or close every app in it. A group can also start or finish from a time, login, display or Wi-Fi change, a keyboard shortcut, a Focus or a Shortcuts automation. It suits people who change work setups during the day and want one action to change what is on screen.

It requires macOS 14 or later on Apple silicon or Intel. The README says releases from v0.6.3 on are Developer ID signed and notarized; earlier releases were only ad-hoc signed and not notarized. Restoring minimised windows needs Accessibility access, and Wi-Fi name triggers need Location Services, because macOS shows network names only to apps allowed to use it. Triggers run only while the app is open, and triggers never quit apps: a group set to quit hides them instead.
