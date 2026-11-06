---
name: "Sonar"
summary: "Native SwiftUI music player for local files and NetEase Cloud Music, with synced lyrics and a menu bar panel."
category: "Media"
tags:
  - music
  - music-player
  - lyrics
  - menu-bar
repository: "https://github.com/can4hou6joeng4/Sonar"
website: "https://github.com/can4hou6joeng4/Sonar"
license: "GPL-3.0"
licenseUrl: "https://github.com/can4hou6joeng4/Sonar/blob/main/LICENSE"
download: "https://github.com/can4hou6joeng4/Sonar/releases/download/v1.0.1/SonarMac.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/can4hou6joeng4/Sonar"
  - "https://github.com/can4hou6joeng4/Sonar/blob/main/LICENSE"
  - "https://github.com/can4hou6joeng4/Sonar/releases/download/v1.0.1/SonarMac.dmg"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/can4hou6joeng4/Sonar/main/Sonar/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png"
    credit: "Sonar contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Sonar is a GPL-3.0 music player built with SwiftUI; the repository also holds an iOS app. On the Mac it plays local MP3, FLAC, M4A and WAV files, reads ID3 tags, and matches same-named .lrc files for synced lyrics. It adds a menu bar panel and a notch player, and it can search NetEase Cloud Music. It suits people with a local music folder who want an offline player with lyrics.

The Mac app needs macOS 14 or later. The DMG is ad-hoc signed and not notarized, so allow the first launch in System Settings or clear the quarantine attribute with xattr, as the README explains. Online songs, covers and lyrics come from third-party services, and the NetEase features need a login cookie that you enter in Settings.
