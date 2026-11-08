---
name: "Museeks"
summary: "A cross-platform player for the music files on your computer, with playlists, a queue, cover art and .m3u import."
category: "Media"
tags: ["music", "audio-player", "cross-platform", "music-player"]
repository: "https://github.com/martpie/museeks"
website: "https://museeks.io"
license: "MIT"
licenseUrl: "https://github.com/martpie/museeks/blob/master/LICENSE"
download: "https://github.com/martpie/museeks/releases"
freeDownload: true
homebrew: "museeks"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/martpie/museeks", "https://github.com/martpie/museeks/blob/master/LICENSE", "https://github.com/martpie/museeks/releases", "https://museeks.io", "https://raw.githubusercontent.com/martpie/museeks/master/README.md", "https://github.com/martpie/museeks/releases/tag/0.23.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/martpie/museeks/master/src-tauri/icons/app-icon.png", "credit": "Pierre de la Martinière and Museeks contributors", "license": "MIT repository asset; trademarks retained"}]
---

Museeks plays the music files already on your Mac. Its library lists tracks so you can play them, build playlists and line songs up in a queue. It handles MP3, MP4, M4A/AAC, FLAC, WAV, Ogg and 3GPP files.

- The library refreshes automatically.
- Shuffle and loop sit beside queue management for the current session.
- Playback speed can be changed, and cover art is shown for each album.
- Playlists can be imported from and exported to `.m3u` files.
- It has a dark theme and a sleep-mode blocker.

The author keeps the feature set small on purpose rather than competing with bigger, better-known players, and asks for feature requests as GitHub issues. If the app freezes or crashes, the README suggests resetting it by deleting the contents of `~/Library/Application Support/museeks`, which Settings can open for you.

Museeks is built with Tauri and Rust, with a React interface, and runs on Linux and Windows as well. The macOS release is a universal disk image for Apple silicon and Intel. In version 0.23.4 the app inside is Developer ID-signed and notarized and declares macOS 10.13 or later. Homebrew and other package managers carry community-maintained copies that may trail the latest release.
