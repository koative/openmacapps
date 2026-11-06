---
name: "Sidekey"
summary: "Mac helper for the free Sidekey iPhone app that turns the phone into a wireless keyboard, trackpad and mic."
category: "Utilities"
tags:
  - keyboard
  - network
  - iphone
  - mouse
repository: "https://github.com/wongsiufool/sidekey"
website: "https://wongsiufool.github.io/sidekey/"
license: "MIT"
licenseUrl: "https://github.com/wongsiufool/sidekey/blob/main/LICENSE.txt"
download: "https://github.com/wongsiufool/sidekey/releases/download/v1.1.0/Sidekey-macOS.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/wongsiufool/sidekey"
  - "https://github.com/wongsiufool/sidekey/blob/main/LICENSE.txt"
  - "https://github.com/wongsiufool/sidekey/releases"
  - "https://wongsiufool.github.io/sidekey/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/wongsiufool/sidekey/main/server/sidekey.icns"
    credit: "Kaihong Chen"
    license: "MIT; upstream app icon, trademarks retained"
---

Sidekey pairs a free iPhone app with a helper that runs on your computer. The iPhone app provides a shortcut keyboard, a trackpad and a microphone input, and the Mac helper sends those keystrokes and pointer movements over your local Wi-Fi. It suits people who want their phone to act as a remote keyboard or trackpad for a computer they own. The computer side is a Python helper packaged for macOS and Windows.

The Mac DMG is signed and notarized, per the project's README, and the first run needs Accessibility permission so the helper can send keys and clicks. The iPhone app is on the App Store and must be installed separately. The project does not publish a minimum macOS version for the helper.
