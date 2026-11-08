---
name: "LyricsX"
summary: "Shows synchronized lyrics for the current song on the desktop or in the menu bar, fetched from several sources."
category: "Media"
tags:
  - music
  - menu-bar
  - desktop
repository: "https://github.com/ddddxxx/LyricsX"
website: "https://github.com/ddddxxx/LyricsX"
license: "MPL-2.0"
licenseUrl: "https://github.com/ddddxxx/LyricsX/blob/master/LICENSE"
download: "https://github.com/ddddxxx/LyricsX/releases"
freeDownload: true
homebrew: "lyricsx"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/ddddxxx/LyricsX"
  - "https://github.com/ddddxxx/LyricsX/blob/master/LICENSE"
  - "https://github.com/ddddxxx/LyricsX/releases"
  - "https://apps.apple.com/app/lyricsx/id1254743014"
  - "https://raw.githubusercontent.com/ddddxxx/LyricsX/master/README.md"
  - "https://github.com/ddddxxx/LyricsX/releases/tag/v1.6.3"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/ddddxxx/LyricsX/master/LyricsX/Assets.xcassets/AppIcon.appiconset/icon_256x256.png"
    credit: "ddddxxx and LyricsX contributors"
    license: "MPL-2.0; upstream app icon, trademarks retained"
---

LyricsX watches the song playing in your music player, looks up timed lyrics for it and shows the current line on the desktop or in the menu bar. You start a track as usual, and the words follow along without a search on your part.

- Lyrics are fetched automatically from several online lyrics sources, listed in the LyricsKit project.
- The desktop overlay takes your choice of font, color and position.
- Double-clicking a line jumps playback to that point in the song.
- If the timing drifts, you correct the offset from the status menu.
- Dragging a file in or out imports or exports lyrics.
- The app can open and quit together with your music player.

Supported players are listed in the companion MusicPlayer project. For Chinese songs, LyricsX converts between Traditional and Simplified characters on its own.

Lyrics are saved in LRCX, a format of the developer's that adds per-word timing and translations to plain LRC. Ordinary LRC editors still work on these files, though there is no official LRCX editor yet.

Installation works through Homebrew, the Mac App Store or a ZIP on GitHub. That download, version 1.6.3 from April 2022, is a Universal app for Apple silicon and Intel Macs, needs macOS 10.11 or later and is Developer ID-signed and notarized.
