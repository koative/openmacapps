---
name: "MC Download Manager"
summary: "Download manager for Safari, Chrome and Firefox with up to 16 parallel connections, resumable transfers and web video capture."
category: "Internet"
tags:
  - download-manager
  - browser
  - video
repository: "https://github.com/mstcvk/mc-download-manager"
website: "https://github.com/mstcvk/mc-download-manager"
license: "MIT"
licenseUrl: "https://github.com/mstcvk/mc-download-manager/blob/main/LICENSE"
download: "https://github.com/mstcvk/mc-download-manager/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mstcvk/mc-download-manager"
  - "https://github.com/mstcvk/mc-download-manager/blob/main/LICENSE"
  - "https://github.com/mstcvk/mc-download-manager/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mstcvk/mc-download-manager/main/App/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Mesut Çevik"
    license: "MIT; upstream app icon, trademarks retained"
---

MC Download Manager takes over downloads started in Safari, Chrome, Brave, Opera and Firefox through a shared browser extension, then fetches them over up to 16 parallel HTTP connections (8 by default). It falls back to a single stream when a server does not support ranges, and it stores segment state on disk so paused or interrupted downloads continue after a restart. Videos, HLS and DASH streams on a page can be downloaded through a bundled copy of yt-dlp with ffmpeg merging. The app lives in the menu bar, watches the clipboard for links, and sorts finished files into categories.

It suits people who download large files or web video often and want a queue with more control than the browser offers. Interface text is available in English and Turkish.

The app requires macOS 13 or later and is distributed as a DMG. The README says builds that are not notarized trigger a Gatekeeper warning on first launch, and the notarization of this release could not be confirmed; if macOS blocks it, allow the app under System Settings, Privacy & Security. Each browser needs its own setup step: Safari needs the extension enabled, and ad-hoc builds also need Develop, Allow Unsigned Extensions; Chrome loads the extension unpacked until it is published on the Web Store.
