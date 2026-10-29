---
name: "AndroidFileSync"
summary: "Browse an Android phone's storage from the Mac and move files over USB or Wi-Fi, with an app manager for APKs."
category: "Utilities"
tags:
  - android
  - file-transfer
  - usb
  - files
  - native
alternativeTo:
  - android-file-transfer
repository: https://github.com/Santosh7017/AndroidFileSync
website: https://santosh7017.github.io/AndroidFileSync/
license: "GPL-3.0"
licenseUrl: https://github.com/Santosh7017/AndroidFileSync/blob/main/LICENSE
download: https://github.com/Santosh7017/AndroidFileSync/releases
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/Santosh7017/AndroidFileSync
  - https://github.com/Santosh7017/AndroidFileSync/blob/main/LICENSE
  - https://github.com/Santosh7017/AndroidFileSync/releases
  - https://santosh7017.github.io/AndroidFileSync/
assets:
  - path: ./assets/icon.png
    source: https://github.com/Santosh7017/AndroidFileSync/blob/main/AndroidFileSync/AndroidFileSync/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "AndroidFileSync contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

AndroidFileSync is a SwiftUI file browser for Android phones. It shows internal storage and SD cards in a sidebar, accepts files dragged in from Finder, previews items with Quick Look, and keeps deleted files in a recoverable trash. Several phones can be connected at once, and an app manager installs APK bundles, backs up APKs and disables preinstalled apps.

Instead of MTP it talks to the phone through ADB, which ships inside the app, so USB debugging has to be turned on in the phone's developer options. Wireless transfers use Wireless Debugging and need Android 11 or later. The app requires macOS 13 or later; for the DMG, the README gives an extra Terminal step to clear the quarantine flag before the first launch, which the project's Homebrew tap avoids.
