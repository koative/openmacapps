---
name: "Needle"
summary: "Shows the playing track's cover and title in the empty corner beside the Dock, for any app in Now Playing."
category: "Media"
tags:
  - music
  - now-playing
  - dock
  - media-controls
repository: "https://github.com/Yvsleyen00941/Needle"
website: "https://yorben.me/needle/"
license: "MIT"
licenseUrl: "https://github.com/Yvsleyen00941/Needle/blob/main/LICENSE"
download: "https://github.com/Yvsleyen00941/Needle/releases/latest"
homebrew: "yvsleyen00941/tap/needle"
freeDownload: true
featured: false
added: "2026-11-15"
verified: "2026-11-15"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Yvsleyen00941/Needle"
  - "https://github.com/Yvsleyen00941/Needle/blob/main/LICENSE"
  - "https://github.com/Yvsleyen00941/Needle/releases"
  - "https://yorben.me/needle/"
  - "https://github.com/Yvsleyen00941/homebrew-tap/blob/main/Casks/needle.rb"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Yvsleyen00941/Needle/blob/main/brand/icon.png
    credit: Yorben Vander Sleyen
    license: MIT; upstream app icon, trademarks retained
---

Needle puts what's playing in the empty corner beside the Dock: the album cover, the title in the cover's own colour and the artist underneath, with no bar or background. It works with anything that shows up in Control Center's Now Playing, including Music, Spotify, Podcasts and browsers.

Click the cover to play or pause. Click the title for a larger card with the full title and album, a line you drag to move through the track, previous and next, and a button that opens the playing app. Two fingers or the scroll wheel over the corner skip tracks, and a right-click opens the same menu as the menu bar icon.

The layout shrinks with the space the Dock leaves, from cover, title and a small track clock on a wide screen to the cover alone beside a long Dock on a laptop. When the music pauses the corner dims, and after five minutes of quiet it clears.

Since macOS 15.4 the Now Playing service answers only Apple's own programs, so Needle loads a small helper library into the system's perl to read it. The developer says Needle makes no network requests. It shares its placement and design with Tape, the same developer's stock ticker, which sits on the other side of the Dock by default.

It needs macOS 26 or later on Apple silicon or Intel. The build is signed with a Developer ID but not notarized, so the first launch needs Open Anyway in System Settings under Privacy & Security.
