---
name: "Open Video Downloader"
summary: "A desktop front end for yt-dlp that downloads video, audio, subtitles and playlists from many sites."
category: "Media"
tags:
  - video
  - downloads
  - youtube
  - cross-platform
alternativeTo:
  - 4k-video-downloader
repository: https://github.com/jely2002/youtube-dl-gui
website: https://jely2002.github.io/youtube-dl-gui/
license: "AGPL-3.0"
licenseUrl: https://github.com/jely2002/youtube-dl-gui/blob/main/LICENSE
download: https://github.com/jely2002/youtube-dl-gui/releases
freeDownload: true
homebrew: "open-video-downloader"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/jely2002/youtube-dl-gui
  - https://github.com/jely2002/youtube-dl-gui/blob/main/LICENSE
  - https://github.com/jely2002/youtube-dl-gui/releases
  - https://formulae.brew.sh/cask/open-video-downloader
  - https://raw.githubusercontent.com/jely2002/youtube-dl-gui/main/README.md
  - https://jely2002.github.io/youtube-dl-gui/
  - https://github.com/jely2002/youtube-dl-gui/releases/tag/app-v3.2.1
  - https://www.4kdownload.com/products/videodownloader-42
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/jely2002/youtube-dl-gui/main/src-tauri/icons/icon.icns
    credit: "Jelle Glebbeek and Open Video Downloader contributors"
    license: "AGPL-3.0 repository asset; name and logo retained by the project"
---

Open Video Downloader, still named youtube-dl-gui on GitHub, puts a window in front of yt-dlp. Add a video or playlist link, choose the resolution, frame rate and a format such as MP4 or MKV, and queue it. Progress and errors for each download appear in the app.

- Audio-only downloads extract just the sound track.
- Captions and video metadata are saved with the file when available.
- Whole playlists download in one go.
- Output folders and filenames follow presets or your own templates.
- Sign-in works through browser cookie files, basic authentication or video passwords.

The queue spreads several downloads out so the Mac stays responsive. The app updates itself and its copy of yt-dlp automatically, follows the system's light or dark mode, and has shortcuts for queueing videos, with notifications for progress.

Another desktop downloader, 4K Video Downloader Plus, also fetches video from many sites, with a free Starter plan and paid licenses above it. Open Video Downloader is open source under AGPL-3.0, and every download goes through yt-dlp.

Version 3.2.1 is a Tauri app with separate disk images for Apple silicon and Intel. The Apple silicon app is signed with a Developer ID and notarized, and needs macOS 10.13 or later. It is also the open-video-downloader Homebrew cask. The developers ask you to stay within local law and each site's terms.
