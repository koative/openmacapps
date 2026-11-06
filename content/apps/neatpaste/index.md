---
name: "NeatPaste"
summary: "Menu bar clipboard history with a global shortcut for picking an item. History stays local, with no account."
category: "Productivity"
tags:
  - clipboard-manager
  - menu-bar
  - native
alternativeTo:
  - paste
repository: "https://github.com/NeatMacApps/NeatPaste"
website: "https://github.com/NeatMacApps/NeatPaste"
license: "MIT"
licenseUrl: "https://github.com/NeatMacApps/NeatPaste/blob/main/LICENSE"
download: "https://github.com/NeatMacApps/NeatPaste/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/NeatMacApps/NeatPaste"
  - "https://github.com/NeatMacApps/NeatPaste/blob/main/LICENSE"
  - "https://github.com/NeatMacApps/NeatPaste/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/NeatMacApps/NeatPaste/HEAD/NeatPaste/Assets.xcassets/AppIcon.appiconset/AppIcon-mac-app-512x512@2x.png"
    credit: "x0c"
    license: "MIT; upstream app icon, trademarks retained"
---

NeatPaste is a clipboard manager that lives in the menu bar. It keeps a local history of what you copy. Press ⌘⌥V or click the menu bar icon, type to filter the list, and press Enter to paste the item into the app you were typing in. Space shows a Quick Look preview. It suits people who want a searchable copy history without an account, sync or network access.

NeatPaste requires macOS 26 or later on Apple silicon. The README describes its releases as signed and notarized, and updates arrive through Sparkle. Automatic pasting needs Accessibility permission; without it, the item is copied to the clipboard so you can press ⌘V yourself. History does not sync between Macs.
