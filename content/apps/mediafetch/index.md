---
name: "MediaFetch"
summary: "Native SwiftUI front end for yt-dlp that downloads online videos with format choices, playlists and FFmpeg conversion."
category: "Media"
tags:
  - video
  - yt-dlp
  - youtube
  - downloads
alternativeTo:
  - 4k-video-downloader
repository: "https://github.com/jyps1090013-stack/MediaFetch"
website: "https://github.com/jyps1090013-stack/MediaFetch"
license: "GPL-3.0"
licenseUrl: "https://github.com/jyps1090013-stack/MediaFetch/blob/main/LICENSE"
download: "https://github.com/jyps1090013-stack/MediaFetch/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jyps1090013-stack/MediaFetch"
  - "https://github.com/jyps1090013-stack/MediaFetch/blob/main/LICENSE"
  - "https://github.com/jyps1090013-stack/MediaFetch/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jyps1090013-stack/MediaFetch/releases/download/v1.0.0/MediaFetch-macOS.ARM64.dmg"
    credit: "jyps1090013-stack"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

MediaFetch puts a native window in front of yt-dlp for downloading online videos. It detects YouTube and Bilibili links, lets you choose video quality, output format or audio-only, downloads whole playlists, and shows progress, speed and logs for each task. Browser cookies or a `cookies.txt` file can be used for sites that need a login. It also converts media files through FFmpeg. It suits people who want a graphical front end to yt-dlp and FFmpeg rather than Terminal commands.

The app needs yt-dlp and FFmpeg installed separately, usually through Homebrew, with their paths set in Settings. The release DMG is an arm64 build, signed with an Apple Development certificate and not notarized, so the first launch has to be allowed in System Settings. Its Info.plist sets macOS 26.5 as the minimum version. The README leaves copyright and website terms compliance to the user.
