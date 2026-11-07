---
name: "MP4Flow"
summary: "Free local video-to-MP4 converter with trim, crop, rotate, merge and brightness adjustments; uses FFmpeg."
category: "Media"
tags:
  - video
  - video-converter
  - files
  - local-first
repository: "https://github.com/ixiehao/MP4Flow"
website: "https://ixiehao.github.io/MP4Flow/"
license: "MIT"
licenseUrl: "https://github.com/ixiehao/MP4Flow/blob/main/LICENSE"
download: "https://github.com/ixiehao/MP4Flow/releases/download/v1.5.0/MP4Flow-1.5.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/ixiehao/MP4Flow"
  - "https://github.com/ixiehao/MP4Flow/blob/main/LICENSE"
  - "https://github.com/ixiehao/MP4Flow/releases"
  - "https://ixiehao.github.io/MP4Flow/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/ixiehao/MP4Flow/releases/download/v1.5.1/MP4Flow-1.5.1-arm64.dmg
    credit: MP4Flow contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

MP4Flow converts video files to MP4 on your Mac. Smart Convert copies compatible video without re-encoding and uses hardware acceleration when it is available. You can merge clips in queue order, trim, crop, rotate, correct the aspect ratio, brighten and lightly denoise, set a target size, and pick audio tracks and subtitles. The queue and settings survive a relaunch. The README says all processing stays on the Mac and no videos are uploaded. It suits people who need batch MP4 exports without an editor.

It requires macOS 13 or later on Apple silicon or Intel, and FFmpeg with ffprobe, which the app does not bundle; the README suggests `brew install ffmpeg`. Burning subtitles needs an FFmpeg build with libass, such as ffmpeg-full. The experimental Smart Enhance upscale needs Apple silicon and macOS 27. The GitHub build is not notarized, so macOS blocks the first launch and you have to allow it in System Settings.
