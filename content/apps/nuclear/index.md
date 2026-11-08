---
name: "Nuclear"
summary: "A desktop music player that finds and streams tracks from several online sources through plugins."
category: "Media"
tags: ["music", "audio-player", "streaming", "music-player"]
repository: "https://github.com/nukeop/nuclear"
website: "https://nuclearplayer.com/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/nukeop/nuclear/blob/master/LICENSE"
download: "https://github.com/nukeop/nuclear/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/nukeop/nuclear", "https://github.com/nukeop/nuclear/blob/master/LICENSE", "https://github.com/nukeop/nuclear/blob/master/README.md", "https://github.com/nukeop/nuclear/releases", "https://nuclearplayer.com/", "https://github.com/nukeop/nuclear/releases/tag/player%401.54.2"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/nukeop/nuclear/blob/master/packages/player/src-tauri/icons/icon.png", "credit": "Nuclear contributors", "license": "AGPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Type a song, album or artist into Nuclear's search and it streams the track from whichever source its plugins find. When several candidates turn up for a queued track, you can see the list and switch to a different one.

Almost everything runs through plugins. They supply streaming sources, metadata, playlists and dashboard content, and a built-in store installs them. Around that sit the usual library tools:

- an artist's biography, discography and related artists on one page, plus album track listings
- a play queue you can shuffle, repeat and reorder by dragging tracks
- favorites, and playlists you build or import from other services and JSON files
- synced lyrics, a local listening history with charts, and built-in or custom CSS themes

Two features reach outside the window. Nuclear Jam shows a QR code that lets a phone or tablet on your network control playback. An optional MCP server, switched on under Settings, lets an AI agent such as Claude Code drive the player. The README says the player has no ads or tracking.

What you can play depends on the sources the installed plugins reach. The release page has separate DMGs for Apple silicon and Intel. The site warns that macOS may block the app from opening and gives a Terminal command that clears the quarantine flag. The app is built with Tauri and updates itself.
