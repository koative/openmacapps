---
name: TBD (To Be Downloaded)
summary: 'Downloads video and audio through yt-dlp from a link you paste on the Mac or send from a phone on the same Wi-Fi.'
category: Media
tags:
- downloads
- video
- yt-dlp
alternativeTo:
- 4k-video-downloader
repository: https://github.com/eliorpom-cmd/to-be-downloaded
website: https://www.tbd.yt/
license: AGPL-3.0
licenseUrl: https://github.com/eliorpom-cmd/to-be-downloaded/blob/main/LICENSE
download: https://github.com/eliorpom-cmd/to-be-downloaded/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/eliorpom-cmd/to-be-downloaded
- https://github.com/eliorpom-cmd/to-be-downloaded/blob/main/LICENSE
- https://github.com/eliorpom-cmd/to-be-downloaded/releases
- https://raw.githubusercontent.com/eliorpom-cmd/to-be-downloaded/main/README.md
- https://github.com/eliorpom-cmd/to-be-downloaded/releases/tag/v1.3.0
- https://www.tbd.yt/
- https://www.4kdownload.com/products/videodownloader-42
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/eliorpom-cmd/to-be-downloaded/main/docs/assets/icon.png
  credit: TBD contributors
  license: AGPL-3.0 repository asset; no separate icon terms stated
---

TBD downloads video and audio from a link you paste into its one text field, handing the actual work to yt-dlp. If a video link is already on the clipboard, the field offers it. The title and thumbnail appear before the download starts.

Each yt-dlp job fetches the video stream, then the audio, then joins the two. TBD folds those stages into a single progress bar that only moves forward.

- Video comes as MP4 with H.264 preferred, or as MOV, MKV or WebM without re-encoding.
- Audio can be M4A, Opus, MP3, FLAC or WAV.
- Trim downloads only the ranges you mark, and each range becomes its own file.
- A playlist link opens a picker for the whole list, a selection or just the linked video.
- Jobs run two at a time by default, can be paused, and resume after you quit.

Option-Command-V downloads the link on the clipboard from any app. Remote Control stays off until you turn it on, then serves a web page on your Wi-Fi where a phone can queue links for the Mac.

FFmpeg is not bundled. First launch asks before fetching it, or links to a copy you already have. Once a day, the app checks for new versions of itself, yt-dlp and FFmpeg. TBD needs no account, and the developer says it has no telemetry. It requires macOS 13 or later on an Apple silicon Mac, and the DMG holds a notarized app.

4K Video Downloader Plus covers playlists too, and adds whole channels and subtitle files in SRT. It runs on Windows, macOS and Ubuntu and keeps part of its features behind a paid license. TBD is a Mac-only front end for the open-source yt-dlp, and its phone access is a web page served by the Mac.
