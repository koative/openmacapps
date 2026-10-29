---
name: "Prism Download Manager"
summary: "A download manager that splits files over many connections, resumes after crashes and takes links from browser extensions."
category: "Internet"
tags:
  - download-manager
  - downloads
  - bittorrent
  - video
  - cross-platform
repository: https://github.com/FortoGraphy/prism-download-manager
website: https://prismdl.site/
license: "MIT"
licenseUrl: https://github.com/FortoGraphy/prism-download-manager/blob/main/LICENSE
download: https://github.com/FortoGraphy/prism-download-manager/releases
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/FortoGraphy/prism-download-manager
  - https://github.com/FortoGraphy/prism-download-manager/blob/main/LICENSE
  - https://github.com/FortoGraphy/prism-download-manager/releases
  - https://prismdl.site/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/FortoGraphy/prism-download-manager/main/app/src-tauri/icons/icon.icns
    credit: "Jan Sechovec and Prism contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Prism takes over downloads from the browser and fetches each file over several parallel connections, rebalancing the remaining parts as connections finish and resuming where it stopped after a crash, sleep or lost network. Queues, schedules, speed limits, categories, a site grabber and a clipboard monitor cover larger batches, and it also handles FTP, HLS and DASH streams, BitTorrent and magnet links.

Video and audio downloads from YouTube and other sites go through yt-dlp and ffmpeg, which Prism installs and updates itself. Browser extensions for Chromium browsers and Firefox hand links to the app. It is built with Rust and Tauri for macOS 11 or later on Apple silicon and Intel, plus Windows and Linux; the young project's Mac builds are not notarized, so the first launch needs manual approval.
