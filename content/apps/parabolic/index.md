---
name: "Parabolic"
summary: "A yt-dlp front end for downloading video and audio from hundreds of sites in common formats."
category: "Media"
tags:
  - video
  - downloads
  - youtube
  - cross-platform
alternativeTo:
  - 4k-video-downloader
repository: https://github.com/NickvisionApps/Parabolic
website: https://github.com/NickvisionApps/Parabolic
license: "MIT"
licenseUrl: https://github.com/NickvisionApps/Parabolic/blob/main/LICENSE
download: https://github.com/NickvisionApps/Parabolic/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/NickvisionApps/Parabolic
  - https://github.com/NickvisionApps/Parabolic/blob/main/LICENSE
  - https://github.com/NickvisionApps/Parabolic/releases
  - https://github.com/NickvisionApps/Parabolic/blob/main/README.md
  - https://github.com/NickvisionApps/Parabolic/releases/tag/2026.5.0
  - https://www.4kdownload.com/products/videodownloader-42
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/NickvisionApps/Parabolic/main/resources/org.nickvision.tubeconverter.png
    credit: "Nickvision"
    license: "MIT repository asset; Parabolic name and logo retained by Nickvision"
---

Parabolic saves video and audio from YouTube and the hundreds of other sites that yt-dlp can read. You give it a link, pick a format, and follow the download in the app's window.

- Video comes out as MP4 or WebM, audio as MP3, Opus, FLAC or WAV.
- Several downloads run at the same time.
- Metadata and subtitles can be downloaded with the media.
- A time frame setting saves only part of a video, cut with ffmpeg.
- Browser extensions add a right-click menu entry: a Firefox add-on, and a Chrome extension you load by hand.

The arm64 Mac app carries its own copies of yt-dlp, ffmpeg and aria2c inside the bundle. It is built from the project's GNOME interface, the one Linux users get, while Windows has a separate WinUI version.

Releases for macOS are ZIP files, one for Apple silicon and one for Intel, each around 140 MB. The 2026.5.0 arm64 app is not code-signed. Its Info.plist sets macOS 10.15 as the minimum.

4K Video Downloader Plus also handles playlists and subtitles, and adds 8K downloads and automatic downloads of new videos from creators and playlists you subscribe to in the app. Its free version has quantity limits, and a paid license unlocks the rest. Parabolic is free under the MIT license.

The project warns that videos on YouTube and other sites can be protected by copyright law, and that its authors take no responsibility for unlawful use.
