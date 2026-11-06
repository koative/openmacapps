---
name: "NotchOTP"
summary: "Menu-bar TOTP authenticator that shows codes in a panel below the notch. Secrets stay in the Keychain and copy takes one shortcut."
category: "Productivity"
tags:
  - two-factor
  - menu-bar
  - keyboard-shortcuts
  - passwords
repository: "https://github.com/Photon94/NotchOTP"
website: "https://github.com/Photon94/NotchOTP"
license: "MIT"
licenseUrl: "https://github.com/Photon94/NotchOTP/blob/main/LICENSE"
download: "https://github.com/Photon94/NotchOTP/releases/download/v0.3.1/NotchOTP-v0.3.1-macOS-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Photon94/NotchOTP"
  - "https://github.com/Photon94/NotchOTP/blob/main/LICENSE"
  - "https://github.com/Photon94/NotchOTP/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Photon94/NotchOTP/main/scripts/AppIcon.icns"
    credit: "Evgenii Shkurin"
    license: "MIT; upstream app icon, trademarks retained"
---

NotchOTP is a small TOTP authenticator that drops a black panel from the MacBook notch when you press its global shortcut. You can type to search, use Tab to move between accounts and press Enter to copy the current code, so you never have to open a browser or a separate app. Account secrets and metadata are kept in the macOS Keychain. It is for people who sign in to services with two-factor codes and want them one shortcut away.

The release is an Apple silicon build that needs macOS 13 or later. The DMG and ZIP are Developer ID signed and notarized with the ticket stapled, so Gatekeeper opens them without a prompt. The README says the app makes no network requests and includes no analytics, and it needs no camera or screen recording permission; QR import reads an image file you choose.
