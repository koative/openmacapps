---
name: "Shandian Download"
summary: "Native download manager for magnet, torrent, ed2k and direct links that hands stalled BitTorrent tasks to another engine."
category: "Internet"
tags:
  - download-manager
  - bittorrent
  - yt-dlp
  - downloads
repository: "https://github.com/chenmozhe008/shandian-download"
website: "https://github.com/chenmozhe008/shandian-download"
license: "GPL-3.0"
licenseUrl: "https://github.com/chenmozhe008/shandian-download/blob/master/LICENSE"
download: "https://github.com/chenmozhe008/shandian-download/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/chenmozhe008/shandian-download"
  - "https://github.com/chenmozhe008/shandian-download/blob/master/LICENSE"
  - "https://github.com/chenmozhe008/shandian-download/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/chenmozhe008/shandian-download/master/Resources/AppIcon.icns"
    credit: "Shandian Download contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Shandian Download handles magnet links, torrent files, ed2k links, HTTP and cloud-drive direct links, and video pages from services such as YouTube and Bilibili, which are downloaded through yt-dlp. When a BitTorrent task stalls near zero, it can hand the task to a cloud-drive offline service or a locally installed Thunder, then bring the finished file back to its chosen folder and remove the cloud copy. Its download engine is a customized build of Gopeed. It suits people who want one native Mac client for links that ordinary clients cannot fetch.

The README says it needs macOS 14 or later and provides separate zip files for Apple silicon and Intel. The build is not notarized by Apple, so the first launch must be allowed in System Settings under Privacy & Security with Open Anyway. The cloud and Thunder handoffs depend on those outside services, and some sources, such as WeChat video channel links, need the browser extension.
