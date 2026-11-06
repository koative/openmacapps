---
name: "latte"
summary: "Menu bar downloader for video and audio from many websites, built on yt-dlp, with ffmpeg for merging formats."
category: "Internet"
tags:
  - downloads
  - video
  - audio
  - menu-bar
alternativeTo:
  - 4k-video-downloader
repository: "https://github.com/arinltte/latte"
website: "https://github.com/arinltte/latte"
license: "MIT"
licenseUrl: "https://github.com/arinltte/latte/blob/main/LICENSE"
download: "https://github.com/arinltte/latte/releases/download/v0.3.1/latte-macOS-v031.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/arinltte/latte"
  - "https://github.com/arinltte/latte/blob/main/LICENSE"
  - "https://github.com/arinltte/latte/releases"
---

latte lives in the menu bar. Paste one or more links and it downloads the video or audio from sites such as YouTube, Vimeo, TikTok, Reddit and many news outlets, using a yt-dlp engine it installs itself. It can embed thumbnails and metadata, burn in subtitles, and read cookies from Chrome, Firefox, Brave or Edge to fetch private or login-only media. It suits people who want a quick one-off download without a browser extension or a terminal.

It requires macOS 14 or later; the app bundle declares 14.6 as its minimum, while the README says 14. The universal DMG is not notarized, so the README asks you to remove the quarantine flag with `xattr` before the first launch. ffmpeg is recommended for merging high-quality formats. Safari cookies are not supported, and private Facebook videos fail with a parse error.
