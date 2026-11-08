---
name: "CompressO"
summary: "Shrinks videos, images and audio files on your own computer, down to a target file size if you set one."
category: "Media"
tags:
  - compression
  - video
  - images
  - offline
  - cross-platform
  - video-converter
repository: https://github.com/codeforreal1/compressO
website: https://compresso.codeforreal.com
license: "AGPL-3.0"
licenseUrl: https://github.com/codeforreal1/compressO/blob/main/LICENSE
download: https://github.com/codeforreal1/compressO/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/codeforreal1/compressO
  - https://github.com/codeforreal1/compressO/blob/main/LICENSE
  - https://github.com/codeforreal1/compressO/releases
  - https://raw.githubusercontent.com/codeforreal1/compressO/main/README.md
  - https://compresso.codeforreal.com
  - https://github.com/codeforreal1/compressO/releases/tag/4.1.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/codeforreal1/compressO/main/src-tauri/icons/128x128@2x.png
    credit: "CompressO contributors"
    license: "AGPL-3.0 repository asset; name and icon retained by the author"
---

CompressO makes video, image and audio files smaller on your own computer. Drop a file on its window, pick a preset or set a target size such as 10 MB, and it searches for the best quality that fits under that size. The compression itself runs through tools such as FFmpeg.

- Trim, crop, rotate, flip and straighten with a live preview before compressing, and compare the result with the original before you save it.
- Convert between formats, turn videos into GIFs, extract a video's audio, and convert SVG to PNG, JPEG or WebP.
- Set the codec, quality, resolution, frame rate and speed for video, and add, keep or extract subtitle tracks.
- Watch a folder, such as your screen recordings, so new files are compressed as they arrive.

On a Mac you can also drop or paste files on its menu bar icon. A `compresso` command, installed from Settings > CLI, compresses from Terminal with your presets. An MCP server lets AI agents such as Claude call the same compression.

The developer says the app works offline and makes no network requests apart from its update check. The project site adds that it needs no account and sets no file size limits.

The site lists macOS 13 or later, with separate DMGs for Apple silicon and Intel. The builds are not notarized, and the README says so. Gatekeeper can report the app as damaged or from an unverified developer, and the README's fix is to run `xattr -cr` on the app. The Homebrew cask from the developer's own tap removes the quarantine flag for you.
