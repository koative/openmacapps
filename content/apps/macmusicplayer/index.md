---
name: "MacMusicPlayer"
summary: "A menu bar music player for local folders, with quick song search and multiple libraries."
category: "Media"
tags:
  - music
  - audio-player
  - menu-bar
  - music-player
repository: "https://github.com/samzong/MacMusicPlayer"
website: "https://samzong.github.io/MacMusicPlayer/"
license: "MIT"
licenseUrl: "https://github.com/samzong/MacMusicPlayer/blob/main/LICENSE"
download: "https://github.com/samzong/MacMusicPlayer/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/samzong/MacMusicPlayer"
  - "https://github.com/samzong/MacMusicPlayer/blob/main/LICENSE"
  - "https://github.com/samzong/MacMusicPlayer/releases"
  - "https://raw.githubusercontent.com/samzong/MacMusicPlayer/main/README.md"
  - "https://samzong.github.io/MacMusicPlayer/"
  - "https://github.com/samzong/MacMusicPlayer/releases/tag/v0.6.0"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/samzong/MacMusicPlayer/main/MacMusicPlayer/Assets.xcassets/AppIcon.appiconset/icon_256x256_2x.png"
    credit: "samzong"
    license: "MIT; upstream project asset, trademarks retained"
---

MacMusicPlayer plays the audio files in folders you choose and stays in the menu bar, with no Dock icon. Press Command-F to open a Spotlight-style song picker, type part of a title, artist or file name, and pick the track to play.

- It plays MP3, M4A, WAV, FLAC, AAC, OGG and AIFF files.
- You can keep several music libraries, switch between them, and press Command-R to rescan the current one.
- Playback runs in order, repeats one song or plays at random.
- Media keys control playback, and the app remembers the last library and track you played.

Launch at login and a setting that keeps the Mac awake are both on by default. The interface comes in English, Simplified and Traditional Chinese, Japanese and Korean, and follows light and dark mode.

MacMusicPlayer needs macOS 13 or later. The GitHub release is a DMG for Apple silicon only. It is ad-hoc signed and not notarized, so macOS can warn on first launch that the developer is unidentified. Control-click the app and choose Open once. The Homebrew cask from the samzong/tap tap installs the same DMG and clears the quarantine flag.

A Download window (Command-D) searches YouTube and SoundCloud and fetches playlists with their thumbnails. You tick the songs you want, then pick a format and the target library. It relies on yt-dlp and ffmpeg, which the Homebrew install adds for you; with the DMG you install both yourself. YouTube search also needs the address and key of a custom search proxy service, entered in Settings. Song titles and artists show up best when files are named "Artist - Title".
