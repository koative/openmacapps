---
name: "AirKeyboard"
summary: "Turns a phone or tablet browser into a Wi-Fi keyboard and trackpad for your Mac, served by a local Node.js helper."
category: "Utilities"
tags:
  - keyboard
  - trackpad
  - remote-control
  - network
repository: "https://github.com/dendyelo/air-keyboard"
website: "https://github.com/dendyelo/air-keyboard"
license: "MIT"
licenseUrl: "https://github.com/dendyelo/air-keyboard/blob/main/LICENSE"
download: "https://github.com/dendyelo/air-keyboard/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dendyelo/air-keyboard"
  - "https://github.com/dendyelo/air-keyboard/blob/main/LICENSE"
  - "https://github.com/dendyelo/air-keyboard/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/dendyelo/air-keyboard/releases/latest/download/AirKeyboard.zip"
    credit: "AirKeyboard contributors"
    license: "MIT; upstream app icon from AppIcon.icns in AirKeyboard.app, trademarks retained"
---

AirKeyboard runs a small server on your Mac and serves a web controller to phones and tablets on the same Wi-Fi network. Open the link in Safari, Chrome or Firefox on the device, enter the four-digit code shown in the menu bar, and the browser becomes a text keyboard with Esc, Tab, Delete, Enter and arrow keys, plus a trackpad with tap-to-click and two-finger scrolling. It is aimed at headless Macs or at a stand-in keyboard when none is at hand. There is no phone app to install.

It needs macOS 10.15 or later and Node.js 16 or later, which you install yourself. Grant Accessibility permission on first launch. The direct download is not notarized, so the first launch must be allowed in System Settings; the README instead suggests removing the quarantine flag in Terminal. Traffic is plain HTTP and WebSocket on the local network, not end-to-end encrypted, and paired devices can control your keyboard and mouse, so use it only on networks you trust.
