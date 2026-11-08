---
name: "Catch"
summary: "A menu bar broadcatcher that watches RSS feeds and hands new episodes to your BitTorrent client or a script."
category: "Internet"
tags: ["menu-bar", "rss", "downloads"]
repository: "https://github.com/mipstian/catch"
website: "https://github.com/mipstian/catch"
license: "MIT"
licenseUrl: "https://github.com/mipstian/catch/blob/main/LICENSE.txt"
download: "https://github.com/mipstian/catch/releases"
freeDownload: true
homebrew: "catch"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since March 2022."
sources: ["https://github.com/mipstian/catch", "https://github.com/mipstian/catch/blob/main/LICENSE.txt", "https://github.com/mipstian/catch/releases", "https://raw.githubusercontent.com/mipstian/catch/main/README.md", "https://github.com/mipstian/catch/releases/tag/2.3"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/mipstian/catch/main/Resources/App/Assets.xcassets/AppIcon.appiconset/icon-mac256.png", "credit": "Giorgio Calderolla", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Catch does broadcatching: you give it RSS or Atom feeds of torrents, and it picks up new episodes as they appear in them. It sits in the menu bar and checks the feeds in the background, with optional Notification Center alerts when something arrives.

Each new item goes either to your BitTorrent client or to a custom script, so you can send links wherever your setup needs them. You can add as many feeds as you like, and feeds from ShowRSS get special handling. If you only want Catch to work at certain times, you can limit it to chosen hours of the day.

The interface is translated into 11 languages. Version 2.3 is a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it declares macOS 10.12 as its minimum. It is distributed as a ZIP on GitHub under the MIT license.

Catch finds and hands off torrent links. It does not download the files itself, so you still need a BitTorrent client or your own script to receive them.
