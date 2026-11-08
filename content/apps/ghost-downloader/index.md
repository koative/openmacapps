---
name: "Ghost Downloader"
summary: "A cross-platform download manager for HTTP, BitTorrent, FTP and streaming video, with a browser extension for grabbing media."
category: "Internet"
tags:
  - download-manager
  - downloads
  - bittorrent
  - video
  - cross-platform
repository: https://github.com/XiaoYouChR/Ghost-Downloader-3
website: https://gd.xychr.com/
license: "GPL-3.0"
licenseUrl: https://github.com/XiaoYouChR/Ghost-Downloader-3/blob/main/LICENSE
download: https://github.com/XiaoYouChR/Ghost-Downloader-3/releases
freeDownload: true
homebrew: "ghost-downloader"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/XiaoYouChR/Ghost-Downloader-3
  - https://github.com/XiaoYouChR/Ghost-Downloader-3/blob/main/LICENSE
  - https://github.com/XiaoYouChR/Ghost-Downloader-3/releases
  - https://raw.githubusercontent.com/XiaoYouChR/Ghost-Downloader-3/main/README.md
  - https://gd.xychr.com/en/docs/
  - https://github.com/XiaoYouChR/Ghost-Downloader-3/releases/tag/v4.5.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/XiaoYouChR/Ghost-Downloader-3/main/app/assets/logo_macOS.png
    credit: "XiaoYouChR and Ghost Downloader contributors"
    license: "GPL-3.0; upstream project icon, trademarks retained"
---

Ghost Downloader handles several kinds of download in one app. Paste a link or let the browser extension pass it over, and the app fetches it: ordinary HTTP files, magnet links and torrents, FTP, eD2k, HLS (M3U8) and MPEG-DASH streams.

- For YouTube and Bilibili it lets you pick the quality, subtitles, a clip, whole playlists or multi-part episodes.
- GitHub and Hugging Face downloads can go through mirrors to speed them up.
- The browser extension lists the media it finds on a page and puts a download button on videos. Ordinary browser downloads are taken over by the desktop app, along with the site's login state.
- You can change a task's URL, headers or proxy while it runs, and other tools can drive it through an RPC interface compatible with aria2.
- A `ghd` command-line tool, installed from Settings, probes, adds, pauses and waits on tasks from Terminal.

HTTP downloads are chunked without a merge step at the end, the app detects your bandwidth on its own, and it can present a real browser's TLS fingerprint to sites that screen out bots. Feature Packs add more abilities as plugins, though the plugin API is not yet public.

The same app runs on Windows, Linux and Android. On the Mac it needs macOS 13 or later, with separate disk images for Apple silicon and Intel. The Apple silicon build of version 4.5.0 is Developer ID-signed and notarized.
