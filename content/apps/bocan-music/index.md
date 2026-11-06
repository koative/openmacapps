---
name: "Bòcan Music"
summary: "Native local music and podcast player with gapless playback, a 10-band EQ and smart playlists."
category: "Media"
tags:
  - music-player
  - audio-player
  - podcasts
repository: "https://github.com/bocan/bocan-music"
website: "https://bocan.app/"
license: "Apache-2.0"
licenseUrl: "https://github.com/bocan/bocan-music/blob/main/LICENSE"
download: "https://github.com/bocan/bocan-music/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bocan/bocan-music"
  - "https://github.com/bocan/bocan-music/blob/main/LICENSE"
  - "https://github.com/bocan/bocan-music/releases"
  - "https://bocan.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/bocan/bocan-music/releases/download/v2.24.0/Bocan.dmg"
    credit: "Chris Funderburg (Bòcan Music project)"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Bòcan Music plays audio from your own library and from podcasts. It is a native Swift and SwiftUI app, and its README stresses gapless playback, a 10-band graphic EQ, ReplayGain, crossfade and smart playlists. It reads common formats directly and others through an FFmpeg bridge. It suits people who keep their music as local files and want a library-focused player with no subscription.

It needs macOS 15 or later and runs on Apple silicon only, since the release binary is arm64. The DMG is notarized by Apple, so it opens normally. Some features are opt-in or marked experimental: the Deep Dive lookups to MusicBrainz and Wikipedia stay off until you turn them on, and Immersive Mode is labelled experimental. Phone Sync works with the separate Android companion app.
