---
name: Subler
summary: Mux video, audio, chapter and subtitle tracks into MP4 files and tag them with movie and TV metadata.
category: Media
tags:
- video
- subtitles
- metadata
repository: https://github.com/SublerApp/Subler
website: https://subler.org/
license: GPL-2.0
licenseUrl: https://github.com/SublerApp/Subler/blob/main/LICENSE
download: https://github.com/SublerApp/Subler/releases
freeDownload: true
homebrew: "subler"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/SublerApp/Subler
- https://github.com/SublerApp/Subler/blob/main/LICENSE
- https://github.com/SublerApp/Subler/blob/main/COPYING
- https://github.com/SublerApp/Subler/releases
- https://raw.githubusercontent.com/SublerApp/Subler/main/README.md
- https://subler.org/
- https://github.com/SublerApp/Subler/releases/tag/1.9.5
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/SublerApp/Subler/main/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
  credit: Subler developers
  license: GPL-2.0 repository asset; no separate icon terms stated
---

Subler takes video, audio, chapter, subtitle and closed-caption tracks from MOV, MP4 or MKV files and muxes them into a single MP4. Then you tag the file with the details of the movie or TV episode it holds.

- Subtitles become TX3G or WebVTT tracks that play on iPhone, iPad, Apple TV, iPod and in QuickTime.
- Raw streams load directly: H.264 elementary streams (.h264, .264), AAC, AC3, Scenarist closed captions (.scc) and VobSub (.idx).
- Metadata editing follows the iTunes style of tags.
- A lookup searches TheMovieDB, TVDB and the iTunes Store for movies and TV shows and fills in the details.

Subler requires macOS 10.13 or later. The current release is a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.

The license is mixed. Most of the code is under GPLv2, a few files use GPLv2-or-later, LGPL or BSD-style terms, and the app as a whole is distributed under GPLv2.
