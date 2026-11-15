---
name: "Hamster Video"
summary: "Saves videos from pasted links up to 4K, or their audio as MP3, through a queue built on yt-dlp and FFmpeg."
category: "Media"
tags:
  - video
  - downloads
  - yt-dlp
  - ffmpeg
  - mp3
alternativeTo:
  - 4k-video-downloader
repository: "https://github.com/SpookSpectrum/hamster-video"
website: "https://spookspectrum.github.io/hamster-video/"
license: "MIT"
licenseUrl: "https://github.com/SpookSpectrum/hamster-video/blob/main/LICENSE"
download: "https://github.com/SpookSpectrum/hamster-video/releases/latest"
freeDownload: true
featured: false
added: "2026-11-15"
verified: "2026-11-15"
sources:
  - "https://github.com/SpookSpectrum/hamster-video"
  - "https://github.com/SpookSpectrum/hamster-video/blob/main/LICENSE"
  - "https://github.com/SpookSpectrum/hamster-video/releases/latest"
  - "https://github.com/SpookSpectrum/hamster-video/releases/tag/v1.0.1"
  - "https://github.com/SpookSpectrum/hamster-video/tree/main/third_party"
  - "https://spookspectrum.github.io/hamster-video/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/SpookSpectrum/hamster-video/blob/ce67cce7da57e154a7709ebc182499545b793f03/assets/hamster-icon.png
    credit: Hamster Video contributors
    license: MIT; upstream app icon, AI-generated artwork per the README, trademarks retained
icon: ./assets/icon.png
---

Paste a video link into Hamster Video, pick a folder, a resolution ceiling and an output format, and it adds the download to a queue. You can also keep only the audio as an MP3. The work is done by yt-dlp and FFmpeg, which ship inside the app, so the sites it can read are the ones yt-dlp supports.

Each download can be shaped before it starts:

- resolution up to 4K, when the source offers it
- H.264 in MP4, the original codecs without re-encoding, or a conversion to HEVC
- an audio track in another language, when the source has one
- pause, resume, cancel and retry from the queue

HEVC conversion does not always make the file smaller, and choosing a language only picks an existing track. There is no browser cookie import, no subtitle download and no built-in updater, so new versions come from the releases page.

4K Video Downloader Plus also saves subtitles and whole channels. Hamster Video has neither and puts its options into codecs and audio tracks instead.

The app needs macOS 15 or later. Version 1.0.1 comes as separate Apple silicon and Intel disk images of about 85 and 92 MB. They are ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. The app's own code is MIT licensed; the bundled FFmpeg, LAME and dav1d keep their licenses, with their sources in the repository.
