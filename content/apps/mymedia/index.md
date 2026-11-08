---
name: "MyMedia"
summary: "Shows your local movies and TV shows as a library, using the metadata already embedded in the files, and plays them."
category: "Media"
tags:
  - video
  - collections
  - metadata
  - video-player
alternativeTo:
  - infuse
repository: https://github.com/photangralenphie/MyMedia
website: https://github.com/photangralenphie/MyMedia
license: "MIT"
licenseUrl: https://github.com/photangralenphie/MyMedia/blob/main/LICENSE
download: https://github.com/photangralenphie/MyMedia/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/photangralenphie/MyMedia
  - https://github.com/photangralenphie/MyMedia/blob/main/LICENSE
  - https://github.com/photangralenphie/MyMedia/releases
  - https://github.com/photangralenphie/MyMedia/releases/tag/v3.0.0
  - https://github.com/photangralenphie/MyMedia/releases/tag/v2.0.1
  - https://github.com/photangralenphie/MyMedia/releases/tag/v1.1
  - https://raw.githubusercontent.com/photangralenphie/MyMedia/main/README.md
  - https://firecore.com/infuse
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/photangralenphie/MyMedia/main/AppIcon-macOS-Default-1024x1024@2x.png
    credit: "Jonas Helmer"
    license: "MIT; upstream project icon, trademarks retained"
---

MyMedia turns the movie and TV files on your own disks into a browsable library with artwork, descriptions and episode lists. It is meant as an alternative to Apple's TV app, which the README says lacks much of what local media needs. Everything shown comes from the metadata already inside each file. MyMedia cannot edit that metadata yet, so you tag files beforehand; the README recommends Subler for this.

You add single files or whole folders. Once imported, the library offers:

- unwatched tracking for movies, shows and individual episodes
- collections, pins and favorites, with separate genre lists for films and series
- search across titles, people and descriptions, plus a page for each person listing everything they are credited in
- list and table views alongside the artwork layout, and a detail page for each episode

Videos play in the built-in player, which supports Picture in Picture, or in your default video app. An optional local HTTP API, added in version 3, lets other apps browse the library and stream files; the companion MyMedia for Android TV uses it. The API has no authentication, so the README advises keeping it on a trusted network.

Infuse also builds an artwork-rich library, but it downloads the metadata itself and reaches files on network shares, Plex, Emby, Jellyfin and cloud storage. MyMedia relies on the tags you have already written into your files.

MyMedia needs macOS 15 or later. Version 3.0 is an Apple silicon build in a DMG, and the app inside is notarized. The interface is in English and German, and Homebrew users can install it from the developer's tap.
