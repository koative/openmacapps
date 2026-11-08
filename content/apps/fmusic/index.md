---
name: "fmusic"
summary: "A SwiftUI player for a local music library, with album art, tag editing and synced lyrics."
category: "Media"
tags:
  - music
  - audio-player
  - metadata
  - music-player
repository: https://github.com/wandercn/fmusic
website: https://github.com/wandercn/fmusic
license: "GPL-3.0"
licenseUrl: https://github.com/wandercn/fmusic/blob/master/LICENSE
download: https://github.com/wandercn/fmusic/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/wandercn/fmusic
  - https://github.com/wandercn/fmusic/blob/master/LICENSE
  - https://github.com/wandercn/fmusic/releases
  - https://raw.githubusercontent.com/wandercn/fmusic/master/README.md
  - https://github.com/wandercn/fmusic/releases/tag/1.1.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/wandercn/fmusic/master/Shared/Assets.xcassets/AppIcon.appiconset/512%401x.png
    credit: "wandercn and fmusic contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

fmusic plays music stored on your Mac. Import a folder from the toolbar, the menu or Command-O, and it reads album details and cover art from the files, then sorts each album by track number so songs keep their original order.

- It plays FLAC, MP3, WAV, M4A, AIFF and M4R files.
- Playback runs in order, repeats the list or one song, or shuffles.
- Search matches loosely against song title, artist and album.
- Right-clicking a song lets you edit its title, album, artist and track number and save them into the file, which works best with FLAC, MP3 and M4A.
- A file details view shows the path and lets you rename the file.

fmusic requires macOS 11 or later. Version 1.1.1 is a Universal disk image for Apple silicon and Intel, and it is not notarized, so macOS may refuse to open it until you remove the quarantine attribute. The developer notes that the earlier, notarized 1.1.0 runs only on Apple silicon. The README is written in Chinese.

Lyrics are downloaded automatically into `~/Music/Lyrics`, and the lyrics view opens by default. When a lyrics file has timing tags, the current line is highlighted karaoke-style. There is a simple favorites feature, but no playlists; version 1.1.1 removed the unfinished playlist code.
