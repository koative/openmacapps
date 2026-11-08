---
name: "HandBrake"
summary: "Converts video files and unprotected DVDs and Blu-rays to MP4, MKV or WebM with presets or detailed settings."
category: "Media"
tags: ["video", "conversion", "cross-platform", "video-converter"]
repository: "https://github.com/HandBrake/HandBrake"
website: "https://handbrake.fr"
license: "GPL-2.0-only"
licenseUrl: "https://github.com/HandBrake/HandBrake/blob/master/LICENSE"
download: "https://handbrake.fr/downloads.php"
freeDownload: true
homebrew: "handbrake-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/HandBrake/HandBrake", "https://github.com/HandBrake/HandBrake/blob/master/LICENSE", "https://handbrake.fr", "https://handbrake.fr/downloads.php", "https://handbrake.fr/features.php", "https://raw.githubusercontent.com/HandBrake/HandBrake/master/README.markdown", "https://github.com/HandBrake/HandBrake/releases/tag/1.11.2"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/HandBrake/HandBrake/master/graphics/Logo/HandBrake-v1-128x128.png", "credit": "Copyright HandBrake Team <https://handbrake.fr>", "license": "CC-BY-SA-4.0; https://creativecommons.org/licenses/by-sa/4.0/"}]
---

HandBrake takes a video you already have and encodes a new copy for a phone, a TV box, a game console or the web. Open a file or a disc, pick a preset for the target device, and add the job to the queue.

When a preset is not enough, the settings go deep:

- AV1, H.265, H.264, MPEG-4, MPEG-2, VP8 and VP9 video, with optional hardware encoding
- Opus, AAC, MP3, FLAC, Vorbis, AC3 and E-AC3 audio, or passthrough of the original tracks
- subtitles, chapter markers and title or range selection
- filters such as deinterlace, denoise, crop and scale, checked in a live preview

Results are saved as MP4, MKV or WebM. HandBrake reads most common video files, from camera footage to screen recordings, and DVD or Blu-ray discs without copy protection. Batch scan fills the queue with many files at once, and HDR passes through.

The Mac download is a Universal disk image that needs macOS 10.13 or later, and the 1.11.2 app inside is Developer ID-signed and notarized. A separate HandBrakeCLI image holds the command-line version. The download page states that HandBrake is free and needs no account, and names three official sources: handbrake.fr, the GitHub project and Flathub. Before you upgrade, empty the queue and back up custom presets, because they may not be compatible with the new version.

Most of the code is under GPL-2.0, with some parts under BSD 3-Clause. HandBrake builds on FFmpeg, x264, x265 and SVT-AV1.
