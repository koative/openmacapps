---
name: "Overdrive"
summary: "Music player that plays your existing music folders, with synced lyrics, volume leveling and Last.fm scrobbling."
category: "Media"
tags:
  - music
  - music-player
  - lyrics
  - audio
  - local-first
repository: "https://github.com/skhaz/overdrive"
website: "https://github.com/skhaz/overdrive"
license: "MIT"
licenseUrl: "https://github.com/skhaz/overdrive/blob/main/LICENSE"
download: "https://github.com/skhaz/overdrive/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/skhaz/overdrive"
  - "https://github.com/skhaz/overdrive/blob/main/LICENSE"
  - "https://github.com/skhaz/overdrive/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/skhaz/overdrive/releases/download/v1.0.74/Overdrive.zip
    credit: Overdrive contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Overdrive plays the music already on your Mac without an import step: add a folder and its albums appear, and new files show up automatically. It has lyrics that sync to the song and can be edited, a same-volume setting, discovery picks from your library, per-song play counts and playlists. Last.fm scrobbling and loved tracks are optional. It is for people who keep a local music library and want a player that never changes their files.

Requires macOS 26 or later. It can be installed from the maintainer's Homebrew tap or from the release zip. The zip is ad-hoc signed and not notarized, which we checked on v1.0.70, so the first launch must be allowed in System Settings. Last.fm features need an account and a Last.fm key built into the app. YouTube music videos open in a small window that needs a Google sign-in, and YouTube can show ads.
