---
name: "MusicBrainz Picard"
summary: "Match albums to MusicBrainz and clean up the tags in a local music collection."
category: "Media"
tags: ["music", "metadata", "tagging"]
repository: "https://github.com/metabrainz/picard"
website: "https://picard.musicbrainz.org/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/metabrainz/picard/blob/master/COPYING.txt"
download: "https://github.com/metabrainz/picard/releases"
freeDownload: true
homebrew: "musicbrainz-picard"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/metabrainz/picard", "https://github.com/metabrainz/picard/blob/master/COPYING.txt", "https://github.com/metabrainz/picard/blob/master/README.md", "https://github.com/metabrainz/picard/releases", "https://picard.musicbrainz.org/downloads/", "https://picard.musicbrainz.org/", "https://picard.musicbrainz.org/quick-start/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/metabrainz/picard/blob/master/resources/images/256x256/macos_icon.png", "credit": "MusicBrainz Picard contributors", "license": "GPL-2.0-or-later; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Picard reads a folder of music files, works out which album release each track belongs to, and writes MusicBrainz data back into the tags. Nothing is written until you save. Working album by album lets it use the MusicBrainz release data as fully as possible.

- Files with no tags at all can still be identified through AcoustID audio fingerprints, which match the sound itself.
- Inserting a CD looks up the whole disc by its disc ID, and Picard can submit new disc IDs.
- Picard can find and download the cover art for each matched album.
- A scripting language controls how tags are written and how files are renamed and sorted into folders.
- Plugins extend what Picard does, and you can write your own.

It handles MP3, FLAC, Ogg, M4A, WMA, WAV and other common formats, and the data comes from the community-maintained MusicBrainz database, which covers millions of releases.

Picard 3.0.4 needs macOS 13 or later and comes as two separate builds, one for Apple silicon and one for Intel Macs, each on its own DMG. Version 2.13.3 stays on the download page for Intel Macs running macOS 10.14 or later. The app inside the 3.0.4 DMG is signed by the MetaBrainz Foundation and notarized. Picard is licensed under GPL 2.0 or later and also runs on Windows and Linux.
