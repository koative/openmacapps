---
name: "SwiftMTP"
summary: "Browse and transfer files between a Mac and Android devices over MTP, with drag and drop and no USB debugging."
category: "Utilities"
tags:
  - android
  - file-transfer
  - files
alternativeTo:
  - android-file-transfer
repository: "https://github.com/Neighbor-Z/SwiftMTP"
website: "https://neighbor-z.github.io/swiftmtp-website"
license: "GPL-2.0"
licenseUrl: "https://github.com/Neighbor-Z/SwiftMTP/blob/main/LICENSE"
download: "https://github.com/Neighbor-Z/SwiftMTP/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Neighbor-Z/SwiftMTP"
  - "https://github.com/Neighbor-Z/SwiftMTP/blob/main/LICENSE"
  - "https://github.com/Neighbor-Z/SwiftMTP/releases"
  - "https://neighbor-z.github.io/swiftmtp-website"
  - "https://apps.apple.com/us/app/swiftmtp/id6802688224"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Neighbor-Z/SwiftMTP/releases/download/v1.3.2/SwiftMTP-1.3.2.dmg
    credit: SwiftMTP contributors
    license: GPL-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

SwiftMTP is a Swift app for moving files between a Mac and Android phones or cameras over MTP. You can browse device folders, drag files in either direction, create, rename and delete files on the device, preview them with Quick Look, and search in plain language. It needs no ADB or USB debugging, and it is an alternative to Android File Transfer. It is also listed on the Mac App Store.

The README lists macOS 12.0 or later. The 1.3.2 release is labelled a release candidate on GitHub. The README says the app is not signed with a paid Apple developer identity, so on first launch allow it under System Settings > Privacy & Security, or clear the quarantine attribute with `xattr`. If the device does not connect, quit Android File Transfer and Image Capture, which can hold the USB session.
