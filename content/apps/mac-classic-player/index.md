---
name: "Mac Classic Player"
summary: "A lightweight video and audio player modelled on Media Player Classic, with a playlist and thorough keyboard control."
category: "Media"
tags:
  - video
  - audio-player
  - keyboard-shortcuts
  - video-player
alternativeTo:
  - potplayer
repository: https://github.com/piro0919/mac-classic-player
website: https://mcp.kkweb.io/
license: "MIT"
licenseUrl: https://github.com/piro0919/mac-classic-player/blob/main/LICENSE
download: https://github.com/piro0919/mac-classic-player/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/piro0919/mac-classic-player
  - https://github.com/piro0919/mac-classic-player/blob/main/LICENSE
  - https://github.com/piro0919/mac-classic-player/releases/latest
  - https://mcp.kkweb.io/
  - https://mcp.kkweb.io/privacy
  - https://raw.githubusercontent.com/piro0919/mac-classic-player/main/README.md
  - https://github.com/piro0919/mac-classic-player/releases/tag/v0.4.2
  - https://potplayer.tv/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/piro0919/mac-classic-player/main/assets/icon.png
    credit: "piro0919"
    license: "MIT repository asset; name and icon retained by piro0919"
---

Mac Classic Player starts playing a video or audio file as soon as you drag it onto the window or pick it with the O key. There is no library to import first. The controls follow Media Player Classic, and almost every one of them has a single key:

- Space plays and pauses, as does a click anywhere in the window. S stops and returns to the beginning.
- The left and right arrows seek five seconds, and the number keys 0 to 9 jump to points from 0% to 90% of the track.
- The up and down arrows set the volume, M mutes and F switches to full screen.
- A and D step back and forward through the playlist, which loops.
- I overlays the current track's tags (title, artist, album, year), and ? brings up the full list of shortcuts.

It plays MOV, MP4 and WebM video and MP3, M4A and WAV audio. Volume and window size come back as you left them at the last quit.

The developer says the app has no analytics, crash reporting or accounts. Two requests do leave the Mac. When an audio file has artist or album tags, those two fields go to Apple's iTunes Search API to fetch cover art, and no setting turns that off. Update checks download a small file from the GitHub releases page.

The release is a DMG for Apple silicon Macs running macOS 11 or later, built with Tauri. It is not signed with a Developer ID and not notarized.

PotPlayer, from Kakao, is a Windows player with hardware decoding through DXVA, CUDA and QuickSync, 3D output modes and support for many subtitle formats. Mac Classic Player runs on the Mac and sticks to six file types.
