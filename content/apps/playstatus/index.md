---
name: "PlayStatus"
summary: "Controls Apple Music and Spotify from the menu bar, with lyrics, play history, Last.fm scrobbling and a floating player."
category: "Media"
tags:
  - music
  - menu-bar
  - media-controls
  - lyrics
repository: "https://github.com/nbolar/PlayStatus"
website: "https://github.com/nbolar/PlayStatus"
license: "MIT"
licenseUrl: "https://github.com/nbolar/PlayStatus/blob/master/LICENSE"
download: "https://github.com/nbolar/PlayStatus/releases/latest"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/nbolar/PlayStatus"
  - "https://github.com/nbolar/PlayStatus/blob/master/LICENSE"
  - "https://github.com/nbolar/PlayStatus/releases/latest"
  - "https://raw.githubusercontent.com/nbolar/PlayStatus/master/README.md"
  - "https://github.com/nbolar/PlayStatus/releases/tag/v3.1.3"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/nbolar/PlayStatus/master/PlayStatus/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Nikhil Bolar"
    license: "MIT repository asset; app name and icon retained by Nikhil Bolar"
---

PlayStatus shows the Apple Music or Spotify track that is playing in the menu bar, and a click opens a player with artwork, transport controls, a seekable progress bar, search, lyrics and credits. You choose whether the menu bar shows the artist, the song, both or just an icon.

The player comes in three sizes. Regular mode holds everything, mini mode keeps the artwork and quick controls, and detached mode turns it into a floating window that can stay on top. Clicking the title jumps to the source app, and with Apple Music you can favorite the current track.

- A History tab lists recent tracks, with a count for repeats and a mark for early skips. It stays on the Mac and holds up to 5,000 plays.
- Last.fm scrobbling signs in through the browser, keeps the session key in the Keychain and queues plays while offline.
- Shortcuts actions, Spotlight phrases and a `playstatus://` URL scheme control playback from Raycast, Alfred, Stream Deck or a shell script.
- Global hotkeys cover play, skip, the popover and detached mode.

Version 3.1.3 needs macOS 15. The release is a ZIP with a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and Sparkle handles updates. A Homebrew cask lives in the developer's own tap.

Control works through AppleScript, so macOS asks for Automation permission for Music and Spotify on first launch. Lyrics come from Apple Music or LRCLIB, and artwork lookups can use public Apple endpoints.
