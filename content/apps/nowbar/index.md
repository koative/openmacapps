---
name: "nowbar"
summary: "Menu bar item that replaces Apple's static Now Playing glyph with the album art of whatever is playing."
category: "Media"
tags:
  - menu-bar
  - music
  - audio
repository: "https://github.com/arian-shamaei/nowbar"
website: "https://github.com/arian-shamaei/nowbar"
license: "MIT"
licenseUrl: "https://github.com/arian-shamaei/nowbar/blob/main/LICENSE"
download: "https://github.com/arian-shamaei/nowbar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/arian-shamaei/nowbar"
  - "https://github.com/arian-shamaei/nowbar/blob/main/LICENSE"
  - "https://github.com/arian-shamaei/nowbar/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/arian-shamaei/nowbar/main/icon/icon_1024.png"
    credit: "Arian Shamaei"
    license: "MIT; upstream app icon, trademarks retained"
---

nowbar swaps the Now Playing glyph in the menu bar for the artwork of the current track. Clicking it opens the usual Now Playing card, and when nothing is playing it lists recent sources with play and skip buttons. It works with Music, Spotify, browsers and other apps that publish now-playing data. It is for people who want to see what is playing without opening Control Center.

It requires macOS 13 or later on an Apple silicon Mac, since the release binary is arm64 only. The direct download is not notarized, so the first launch needs right-click and Open. It reads system now-playing data through `media-control`, which you install separately with Homebrew. A Mac App Store version also exists; the README says it covers only Music and Spotify.
