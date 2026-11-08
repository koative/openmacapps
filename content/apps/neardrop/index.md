---
name: NearDrop
summary: Exchange files with Android Quick Share devices on the same network.
category: Utilities
tags:
  - file-sharing
  - android
  - network
repository: https://github.com/grishka/NearDrop
website: https://github.com/grishka/NearDrop
license: Unlicense
licenseUrl: https://github.com/grishka/NearDrop/blob/master/UNLICENSE
download: https://github.com/grishka/NearDrop/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/grishka/NearDrop
  - https://github.com/grishka/NearDrop/blob/master/UNLICENSE
  - https://github.com/grishka/NearDrop/blob/master/README.md
  - https://github.com/grishka/NearDrop/releases
  - https://github.com/grishka/NearDrop/releases/tag/v2.2.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/grishka/NearDrop/blob/add655c6c5a40b9ba03c0329b598f2817185f5a9/NearDrop/Assets.xcassets/AppIcon.appiconset/256.png
    credit: NearDrop contributors
    license: Unlicense; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

NearDrop lets your Mac exchange files with Android phones over Google's Nearby Share and Quick Share. It sits in the menu bar and saves incoming files to your Downloads folder. When a phone sends something, it displays a PIN, and the Mac shows a notification, which Do Not Disturb can hold back.

Sending works the other way too. Right-click a file in Finder and choose Share, then NearDrop, or share a link from Safari's toolbar. Android only becomes visible after hearing a Bluetooth Low Energy broadcast that macOS won't let apps send, so the Mac usually can't find the phone by itself. NearDrop shows a QR code for the phone to scan instead, which is the only route on Samsung phones; on other Android phones the Quick Share button in Google Files also works.

Version 2.2.2 from September 2026 is a Universal app for Apple silicon and Intel that needs macOS 10.15 or later. It is not notarized, so the first launch needs a right-click and Open. A Homebrew tap from the developer is also available. The protocol is documented in the repository.

The app reimplements only part of the protocol. It works over Wi-Fi only, so both devices must be on the same network, and public networks in cafés or hotels may block the traffic between them. Wi-Fi Direct, Bluetooth and Google's internet relay are not supported. While NearDrop runs, the Mac is visible to everyone on the network, because limiting visibility to contacts would require Google's servers.
