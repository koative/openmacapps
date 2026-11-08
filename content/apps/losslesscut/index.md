---
name: "LosslessCut"
summary: "Trim and rearrange video or audio segments without re-encoding supported media."
category: "Media"
tags: ["video", "trimming", "conversion", "video-editor"]
repository: "https://github.com/mifi/lossless-cut"
website: "https://losslesscut.app"
license: "GPL-2.0"
licenseUrl: "https://github.com/mifi/lossless-cut/blob/master/LICENSE"
download: "https://github.com/mifi/lossless-cut/releases"
freeDownload: true
homebrew: "losslesscut"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/mifi/lossless-cut", "https://github.com/mifi/lossless-cut/blob/master/LICENSE", "https://github.com/mifi/lossless-cut/blob/master/README.md", "https://github.com/mifi/lossless-cut/releases", "https://raw.githubusercontent.com/mifi/lossless-cut/master/README.md", "https://losslesscut.app", "https://losslesscut.app/docs/features", "https://losslesscut.app/docs/troubleshooting", "https://losslesscut.app/docs/requirements"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/mifi/lossless-cut/blob/master/src/renderer/src/icon.svg", "credit": "LosslessCut contributors", "license": "GPL-2.0; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

LosslessCut cuts the parts you want out of a video or audio file and saves them without re-encoding, so an export takes seconds and the picture keeps its original quality. Open a recording, mark segments on the timeline, and export each one as its own file or join them into one.

Cuts can only start on a keyframe. The export therefore begins at the keyframe before your cut point, anywhere from a fraction of a second to several seconds early, depending on how the file was encoded. An experimental smart cut mode can cut between keyframes, though it fails on many files.

- Segments can be split by length, file size or count, or created from detected scene changes, black frames and silence.
- Tracks can be added, removed or extracted, for example to drop an audio language or attach a subtitle file.
- Remuxing moves a file to another container, such as MKV to MP4, without touching the streams.
- Files from the same camera with matching codec settings merge losslessly.
- Segment lists import from chapters, CSV, EDL and DaVinci Resolve or Final Cut Pro XML, and export as CSV, SRT subtitles or YouTube chapter timestamps.

Files the built-in player cannot show are played through FFmpeg, and the export still comes from the original data. LosslessCut also shows the FFmpeg commands it ran, so you can repeat them in Terminal, and it has a basic command-line interface and HTTP API.

The DMGs on GitHub are separate builds for Apple silicon and Intel. The PKG in the same release does not work.
