---
name: "fre:ac"
summary: "Converts audio between MP3, AAC, Opus, FLAC and other formats, and rips CDs with track names looked up online."
category: "Media"
tags:
  - audio
  - conversion
  - metadata
  - cross-platform
repository: https://github.com/enzo1982/freac
website: https://www.freac.org
license: "GPL-2.0-or-later"
licenseUrl: https://github.com/enzo1982/freac/blob/master/COPYING
download: https://github.com/enzo1982/freac/releases/latest
freeDownload: true
homebrew: "freac"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/enzo1982/freac
  - https://github.com/enzo1982/freac/blob/master/COPYING
  - https://github.com/enzo1982/freac/releases
  - https://freac.org/latest-release/
  - https://formulae.brew.sh/cask/freac
  - https://www.freac.org/
  - https://github.com/enzo1982/freac/releases/tag/v1.1.7
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/enzo1982/freac/master/icons/freac.svg
    credit: "Robert Kausch and fre:ac contributors"
    license: "GPL-2.0-or-later repository asset; fre:ac name and logo retained by the project"
---

You add audio files or insert a CD, choose an output format, and fre:ac writes new files in that format. It converts in any direction between MP3, M4A/AAC, FLAC, Opus, Ogg Vorbis, WMA, WavPack, Monkey's Audio, WAV and others. A whole music library can go through at once, and the output keeps its folder and file names.

- The CD ripper fetches artist and track names from the CDDB/GNUdb database before it starts and writes them into the tags.
- After a rip, fre:ac can tell you whether AccurateRip verified it or had no entry for the disc.
- The tag editor has a rating field, and MusicBrainz data and sort-order fields are supported in ID3v2, APEv2, MP4, WMA and Vorbis Comment tags.
- The MP3, AAC, Opus and Speex encoders spread work across several CPU cores.
- Since version 1.1.7, a splitting tool cuts the output into several files by duration, file count or metadata.

The Mac download page lists two disk images. The macOS 11 image holds a Universal app for Apple silicon and Intel. The other targets Intel and PowerPC Macs back to Mac OS X 10.5. In both, the app is signed with a Developer ID and notarized. Version 1.1.7 came out in March 2023 and is still the current release.

Tags and file names take full Unicode, so Japanese, Cyrillic or Arabic titles stay in their own script. The interface comes in 43 languages, and the same program runs on Windows, Linux, FreeBSD and Haiku.

