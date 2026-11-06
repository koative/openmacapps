---
name: "NullPlayer"
summary: "Open-source music and video player with skinnable classic windows, local and server libraries, radio and stream support."
category: "Media"
tags:
  - music-player
  - audio-player
  - streaming
repository: "https://github.com/ad-repo/nullplayer"
website: "https://nullplayer.fyi"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/ad-repo/nullplayer/blob/main/LICENSE"
download: "https://github.com/ad-repo/nullplayer/releases/latest/download/NullPlayer.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ad-repo/nullplayer"
  - "https://github.com/ad-repo/nullplayer/blob/main/LICENSE"
  - "https://github.com/ad-repo/nullplayer/releases/tag/0.34.2"
  - "https://nullplayer.fyi"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ad-repo/nullplayer/main/Sources/NullPlayer/Resources/AppIcon.png"
    credit: "NullPlayer project"
    license: "GPL-3.0-only with NullPlayer trademark terms; upstream app icon, trademarks retained"
---

NullPlayer is a macOS media player that plays local files and libraries from Plex, Jellyfin, Emby, Navidrome or Subsonic, YouTube, and internet radio. It has a 21-band and a 10-band equalizer, EQ profiles for tracks, albums or artists, gapless playback, and casting to Sonos, Chromecast, DLNA and AirPlay. Its interface can be skinned: it renders classic `.wsz` and Winamp Modern `.wal` skins, Windows Media Player `.wmz` skins, Sonique skins and its own JSON skins, and it includes several visualizers. The README says the code was written clean-room and does not contain Winamp source code.

It suits people who want a skinnable player for a self-hosted music library and online sources. Command-line tools for YouTube downloads and stream ripping, yt-dlp and ffmpeg, are optional and are not bundled; install them with Homebrew if you need those features.

NullPlayer needs macOS 14 or later. The DMG is signed with a Developer ID and notarized, though macOS may still ask you to confirm the first launch. The code is GPL-3.0-only, and the license adds a trademark term: the NullPlayer name, logo and icon are not licensed, so modified versions must use a different name and branding.
