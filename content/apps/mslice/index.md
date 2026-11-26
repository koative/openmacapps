---
name: "mSLICE"
summary: "Cuts pieces out of video and audio files with the I and O keys and exports them without re-encoding."
category: "Media"
tags: ["video", "audio", "trimming", "ffmpeg", "lossless", "finder-extension", "mcp"]
repository: "https://github.com/starbudweiser/mSLICE"
website: "https://starbudweiser.github.io/wshowcase/#mSLICE"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mSLICE/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mSLICE/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-27"
verified: "2026-11-27"
sources: ["https://github.com/starbudweiser/mSLICE", "https://github.com/starbudweiser/mSLICE/blob/main/LICENSE", "https://github.com/starbudweiser/mSLICE/releases/tag/v1.20.2", "https://github.com/starbudweiser/mSLICE/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mSLICE window with a planet video in the player, a timeline of thumbnails and waveform with three orange pieces, and the list of pieces with an Export 3 pieces button on the right.", "source": "https://github.com/starbudweiser/mSLICE/blob/main/docs/screenshot.png", "credit": "mSLICE authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mSLICE/blob/main/docs/screenshot.png", "credit": "mSLICE authors", "license": "MIT (mSLICE repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mSLICE/blob/main/assets/icon-1024.png", "credit": "mSLICE authors", "license": "MIT; upstream app icon, trademarks retained"}]
icon: ./assets/icon.png
---

mSLICE trims audio and video files. Press I to set an in point and O to set an out point, and the range becomes a piece. A file can hold as many pieces as you like, and each piece has handles you can drag on the timeline. The timeline shows thumbnails, the waveform and keyframes. It zooms with Command and the scroll wheel, plays with J, K and L, and steps one frame or one keyframe at a time.

- Export writes one numbered file per piece, or one merged file. Nothing is overwritten, and the original file is never modified.
- Without re-encoding, the streams are copied directly, so a multi-gigabyte file is trimmed in a fraction of a second with no quality loss. A video piece then starts on the previous keyframe, and the interface shows it. Re-encoding to H.264, H.265 or ProRes uses the hardware encoder.
- Input is anything ffprobe reads, and output can be MP4, MOV, MKV, WebM, MP3, M4A, WAV, FLAC, AIFF, Opus or the original container.
- The Find tab spots shots, scenes and sounds with the Vision and SoundAnalysis models built into macOS, then turns the matching passages into pieces. An optional face model, downloaded only on request, groups characters.
- A Finder right-click extracts pieces, or trims the start and end of several files at once.

An optional AI agent, through a chat panel or the bundled MCP server, can cut, merge and export on request. It only ever creates new files. The interface is in French, English, Spanish and Italian, and the app checks GitHub releases for updates. The release is built for Apple silicon, requires macOS 14, and is Developer ID signed and notarized.
