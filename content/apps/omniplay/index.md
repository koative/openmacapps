---
name: "OmniPlay (觅影)"
summary: "Poster-wall video player for local disks, NAS and media-server libraries, with TMDB metadata."
category: "Media"
tags:
  - video
  - self-hosted
  - local-first
alternativeTo:
  - infuse
repository: "https://github.com/nandieling/OmniPlay"
website: "https://github.com/nandieling/OmniPlay"
license: "AGPL-3.0"
licenseUrl: "https://github.com/nandieling/OmniPlay/blob/main/LICENSE"
download: "https://github.com/nandieling/OmniPlay/releases/download/1.10/OmniPlay-1.10-mac-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nandieling/OmniPlay"
  - "https://github.com/nandieling/OmniPlay/blob/main/LICENSE"
  - "https://github.com/nandieling/OmniPlay/releases/tag/1.10"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nandieling/OmniPlay/main/OmniPlay%E5%BC%80%E6%BA%90-mac-ARM/OmniPlay/Assets.xcassets/AppIcon.appiconset/1.png"
    credit: "OmniPlay contributors (nandieling)"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

OmniPlay (觅影) scans local folders, external drives, mounted NAS shares, WebDAV sources and Plex, Emby or Jellyfin libraries, then builds a poster wall with TMDB and Douban metadata, episode stills and ratings. Playback runs through mpv and FFmpeg, and on macOS a video can be opened straight from Finder. It suits people who keep a film and TV collection on their own storage and want a library view rather than a file browser.

It needs macOS 14 or later on Apple silicon; the repository also contains an Intel build. The README does not say whether the DMG is notarized, so the first launch may need approval in System Settings. The interface switches between Simplified Chinese and English. TMDB can be unreachable from some networks, and the README describes a proxy gateway for that case. The player is built on MPVKit-GPL, a GPL-licensed build of mpv.
