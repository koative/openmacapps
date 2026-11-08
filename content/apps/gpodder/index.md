---
name: gPodder
summary: A long-running podcast client that subscribes to feeds, downloads episodes and keeps them organised offline.
category: Media
tags:
  - podcasts
  - rss
  - downloads
  - cross-platform
repository: https://github.com/gpodder/gpodder
website: https://gpodder.github.io
license: GPL-3.0-or-later
licenseUrl: https://github.com/gpodder/gpodder/blob/master/COPYING
download: https://github.com/gpodder/gpodder/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/gpodder/gpodder
  - https://github.com/gpodder/gpodder/blob/master/COPYING
  - https://github.com/gpodder/gpodder/blob/master/README.md
  - https://github.com/gpodder/gpodder/releases
  - https://gpodder.github.io
  - https://gpodder.github.io/docs/user-manual.html
  - https://gpodder.github.io/docs/macos.html
  - https://gpodder.github.io/docs/youtube.html
  - https://github.com/gpodder/gpodder/releases/tag/3.11.5
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gpodder/gpodder/master/tools/mac-osx/icon.icns
    credit: gPodder project
    license: GPL-3.0-or-later repository asset; gPodder name and logo retained by the project
---

gPodder subscribes to podcast feeds, checks them on a schedule and downloads new episodes to your disk, then plays them in the audio or video player you choose. The check runs anywhere from every 10 minutes to every 12 hours, or only when you ask.

- Subscriptions import from OPML files or iTunes, and the list can be backed up.
- A per-podcast episode limit deletes the oldest downloads as new ones arrive.
- Episodes sync to MP3 players.
- YouTube channels subscribe like feeds. Built-in support sees the 15 most recent videos, and the youtube-dl extension lifts that limit.
- Extensions add further behaviour, and `gpo` gives you a command-line interface.

gPodder has been in development since 2005. The macOS download is a ZIP holding gPodder.app; version 3.11.5 from December 2024 is the newest. That build is Intel-only and unsigned, so Gatekeeper rejects it. MacPorts packages it as well, and the source is on GitHub.

The optional gpodder.net service keeps subscriptions in step across devices and needs its own account. Downloads and settings live in gPodder's home folder, which you can move.
