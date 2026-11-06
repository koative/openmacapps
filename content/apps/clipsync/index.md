---
name: "ClipSync"
summary: "Syncs the clipboard and transfers files between an Android phone and a Mac, over the cloud or the local network."
category: "Utilities"
tags:
  - clipboard
  - sync
  - android
  - file-transfer
repository: "https://github.com/WinShell-Bhanu/Clipsync"
website: "https://github.com/WinShell-Bhanu/Clipsync"
license: "MIT"
licenseUrl: "https://github.com/WinShell-Bhanu/Clipsync/blob/main/LICENSE"
download: "https://github.com/WinShell-Bhanu/Clipsync/releases/download/v3.0.0/ClipSync.v3.0.0.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/WinShell-Bhanu/Clipsync"
  - "https://github.com/WinShell-Bhanu/Clipsync/blob/main/LICENSE"
  - "https://github.com/WinShell-Bhanu/Clipsync/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/WinShell-Bhanu/Clipsync/main/mac/ClipSync/Assets.xcassets/AppIcon.appiconset/icon-mac-256x256%402x.png"
    credit: "Bhanu"
    license: "MIT; upstream app icon, trademarks retained"
---

ClipSync is a pair of apps, one for Android and one for macOS, that keeps the clipboard in step between a phone and a Mac. Text, links and images copied on one device can be pasted on the other, one-time passwords sync between the two, and files can be sent in either direction. Cloud mode works across networks through Firebase. Local mode keeps the traffic on the home network. It is for people who use an Android phone alongside a Mac and want them to share a clipboard.

The Mac app comes as a zip with an install script, and its bundle declares macOS 14.6 or later. The Android app is a separate APK. The Mac build is ad-hoc signed rather than notarized, so macOS may block the installer script; the README says to allow it under Privacy & Security. Caveats: Ultra-Fast Transfer mode turns off transfer encryption and is meant for private networks, local builds need your own Firebase configuration for cloud sync, and Android may block the accessibility permission until you allow restricted settings.
