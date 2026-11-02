---
name: "Lyric Fever"
summary: "Shows time-synced lyrics for Spotify and Apple Music in the menu bar, a karaoke window or a fullscreen view."
category: "Media"
tags:
  - lyrics
  - music
  - menu-bar
  - translation
  - native
repository: https://github.com/aviwad/LyricFever
website: https://github.com/aviwad/LyricFever
license: "MIT"
licenseUrl: https://github.com/aviwad/LyricFever/blob/main/LICENSE
download: https://github.com/aviwad/LyricFever/releases
homebrew: "lyric-fever"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/aviwad/LyricFever
  - https://github.com/aviwad/LyricFever/blob/main/LICENSE
  - https://github.com/aviwad/LyricFever/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/aviwad/LyricFever/main/LyricFever/Support%20Files/Assets.xcassets/AppIcon.appiconset/Icon-1024.png
    credit: "Avi Wadhwa"
    license: "MIT; upstream project asset, trademarks retained"
---

Lyric Fever follows whatever is playing in the Spotify desktop app or Apple Music and shows the current line of the lyrics in the menu bar. A floating karaoke window keeps lyrics on screen with adjustable colours, and a fullscreen mode in the style of Apple Music shows them over colours taken from the album art. Lyrics can be translated with Apple's on-device translation, Japanese can be romanized, and fetched lyrics are cached for offline use.

Lyrics come from Spotify first, with LRCLIB and NetEase as fallbacks, and Apple Music tracks are matched to Spotify's catalogue to find them. The app needs macOS Sequoia or later, and it includes Amplitude analytics and Sparkle updates. It is a spiritual successor to LyricsX.
