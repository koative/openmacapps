---
name: "QuickLook Video"
summary: "Adds Finder thumbnails, Quick Look previews and Get Info metadata for video and audio formats macOS does not read."
category: "Media"
tags:
  - quick-look
  - video
  - previews
  - finder
  - metadata
repository: https://github.com/Marginal/QuickLookVideo
website: https://github.com/Marginal/QuickLookVideo
license: "GPL-2.0-or-later"
licenseUrl: https://github.com/Marginal/QuickLookVideo/blob/master/LICENSE.txt
download: https://github.com/Marginal/QuickLookVideo/releases
freeDownload: true
homebrew: "quicklook-video"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/Marginal/QuickLookVideo
  - https://github.com/Marginal/QuickLookVideo/blob/master/LICENSE.txt
  - https://github.com/Marginal/QuickLookVideo/releases
  - https://apps.apple.com/us/app/quicklook-video/id6759566961
  - https://raw.githubusercontent.com/Marginal/QuickLookVideo/master/README.md
  - https://github.com/Marginal/QLVideo/wiki/Getting-Started
  - https://github.com/Marginal/QuickLookVideo/releases/tag/rel-313
assets:
  - path: ./assets/icon.png
    source: https://github.com/Marginal/QuickLookVideo/releases/download/rel-312/QLVideo_312.dmg
    credit: "Marginal and QuickLook Video contributors"
    license: "GPL-2.0-or-later; AppIcon.icns from the official release app bundle, trademarks retained"
---

QuickLook Video gets Finder to show thumbnails, Quick Look previews and Get Info details for audio and video files that macOS leaves blank. On its own the system reads mostly MPEG codecs inside ISO containers. After you run the app once, Finder handles a much longer list:

- Containers such as Matroska, WebM, AVI, Windows Media, Ogg, Flash Video, Real Media and MXF.
- Video codecs including VP8, VP9, AV1, H.266, Theora, HAP, DivX and Cinepak.
- Audio codecs such as Vorbis, WavPack, ATRAC and Windows Media Audio.
- Spotlight metadata, so dimensions, duration and codecs appear in Get Info and files can be found by subtitle text and chapter titles.

Version 3 does this with two Media Extensions for AVFoundation, one for formats and one for codecs, plus a Spotlight extension. Perian once filled the same gap for the old QuickTime framework. You do not need to keep the app open afterwards. Its Refresh button clears the thumbnail caches, and you may have to relaunch Finder or log out before new thumbnails show up. Spotlight then re-indexes your media, so CPU and disk use run high for a few minutes.

Thumbnails use embedded cover art when a file has it, otherwise a frame about a quarter of the way in. The File menu can add, replace or remove cover art in MKV, WebM, MP4 and unencrypted M4V files. A Finder service opens a contact sheet for the selected video.

Quick Look previews have no subtitles, chapters or audio track switching. The installation guide lists macOS 26 Tahoe for the current release, and release 2.24 remains for macOS 12 and later. The app is Universal and notarized, and the same app is on the Mac App Store.
