---
name: "MacYT"
summary: "Native macOS window for yt-dlp that inspects a video link, lets you pick a format and saves video or audio."
category: "Media"
tags:
  - downloads
  - video
  - youtube
  - yt-dlp
alternativeTo:
  - 4k-video-downloader
repository: "https://github.com/sameerbajaj/MacYT"
website: "https://sameerbajaj.com/tools/macyt/"
license: "MIT"
licenseUrl: "https://github.com/sameerbajaj/MacYT/blob/main/LICENSE"
download: "https://github.com/sameerbajaj/MacYT/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/sameerbajaj/MacYT"
  - "https://github.com/sameerbajaj/MacYT/blob/main/LICENSE"
  - "https://github.com/sameerbajaj/MacYT/releases"
  - "https://sameerbajaj.com/tools/macyt/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/sameerbajaj/MacYT/main/MacYT/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "MacYT contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

MacYT is a SwiftUI front end for yt-dlp. You paste a video link, the app fetches the available information, and you choose a video quality or an audio-only export, then save the file to a folder you pick. FFmpeg handles merging separate streams and converting audio when it is installed. It is for people who already use yt-dlp in the terminal and want a Mac window with a download list instead.

Requires macOS 15 or later on Apple silicon or Intel (the project file sets the deployment target to 15.7), plus yt-dlp; FFmpeg is optional but needed for the best video quality and for audio conversion. The app is not notarized, so macOS may block the first launch until you allow it under System Settings › Privacy & Security. The `latest` release is rebuilt automatically from the main branch, so it can be ahead of tagged versions.
