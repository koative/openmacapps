---
name: YouTube Music Desktop App
summary: An unofficial YouTube Music desktop client with custom shortcuts, Discord
  presence, Last.fm scrobbling and a remote-control API.
category: Media
tags:
- music
- streaming
- cross-platform
- music-player
repository: https://github.com/ytmdesktop/ytmdesktop
website: https://ytmdesktop.github.io
license: GPL-3.0
licenseUrl: https://github.com/ytmdesktop/ytmdesktop/blob/development/LICENSE
download: https://github.com/ytmdesktop/ytmdesktop/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/ytmdesktop/ytmdesktop
- https://github.com/ytmdesktop/ytmdesktop/blob/development/LICENSE
- https://github.com/ytmdesktop/ytmdesktop/releases
- https://ytmdesktop.github.io
- https://raw.githubusercontent.com/ytmdesktop/ytmdesktop/development/README.md
- https://github.com/ytmdesktop/ytmdesktop/releases/tag/v2.1.0
- https://github.com/ytmdesktop/ytmdesktop/releases/tag/v2.0.12
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/ytmdesktop/ytmdesktop/development/src/assets/icons/ytmd.png
  credit: YouTube Music Desktop App contributors
  license: GPL-3.0; upstream project asset, trademarks retained
---

YouTube Music Desktop App puts the YouTube Music web player in a window of its own, outside your browser, and adds controls the website lacks. It is an unofficial client.

- Global shortcuts bind any key to a player action, so you can skip a track from any app.
- A desktop notification shows each new song.
- Discord can show what you are playing, and Last.fm can receive your scrobbles.
- A CSS file of your own restyles the player.
- Extra buttons in the player bar save the current track to your library or a playlist.
- A sleep timer stops playback after a set time.

Version 2.1 rebuilt much of the app's internals and added timed lyrics, taken from YouTube Music itself, in the lyrics tab. A companion server lets third-party apps talk to the player and extend it.

On the Mac, releases come as separate ZIPs for Apple silicon and Intel, and the Apple silicon build of 2.1.0 needs macOS 13 or later. A Homebrew cask exists, kept by the community.

Because the app hooks into the YouTube Music site, changes on Google's side can break it. Version 2.0.12 fixed one such change that stopped the app from loading.
