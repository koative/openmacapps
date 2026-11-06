---
name: "RetroDrop"
summary: "Menu bar server that moves photos and videos from old iPhones to a Mac over local Wi-Fi, without iCloud or cables."
category: "Utilities"
tags:
  - menu-bar
  - file-transfer
  - ios
  - wi-fi
repository: "https://github.com/samir-bujawdeh/RetroDrop"
website: "https://samir-bujawdeh.github.io/RetroDrop/"
license: "MIT"
licenseUrl: "https://github.com/samir-bujawdeh/RetroDrop/blob/main/LICENSE"
download: "https://github.com/samir-bujawdeh/RetroDrop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/samir-bujawdeh/RetroDrop"
  - "https://github.com/samir-bujawdeh/RetroDrop/blob/main/LICENSE"
  - "https://github.com/samir-bujawdeh/RetroDrop/releases/latest"
  - "https://samir-bujawdeh.github.io/RetroDrop/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/samir-bujawdeh/RetroDrop/main/Resources/AppIcon.icns"
    credit: "The RetroDrop authors"
    license: "MIT; upstream app icon, trademarks retained"
---

RetroDrop runs a small web and mail server on your Mac so older iPhones can send photos and videos to it over the home network. iOS 6 and later use a Safari upload page, and iOS 5 uses the Mail route. Files are saved to a Pictures folder, and the newest arrivals appear in the menu bar. It is for people with old iPhones that cannot use iCloud, AirDrop or a cable.

It requires macOS 14 or later and is a universal build that runs on Apple silicon and Intel. The app is not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. While the server is running, anyone on the same Wi-Fi can upload files. There is no password, and the connections use plain HTTP and mail protocols, so use it only on networks you trust.
