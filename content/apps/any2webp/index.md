---
name: "Any2WebP"
summary: "Converts images, animations and short video clips to WebP or GIF in local batches, with a frame-by-frame comparison."
category: "Media"
tags:
  - webp
  - gif
  - image-converter
  - animation
  - batch-processing
repository: "https://github.com/ixiehao/Any2WebP"
website: "https://ixiehao.github.io/Any2WebP/"
license: "MIT"
licenseUrl: "https://github.com/ixiehao/Any2WebP/blob/main/LICENSE"
download: "https://github.com/ixiehao/Any2WebP/releases/latest"
macos: "26"
arch: apple-silicon
notarized: false
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources:
  - "https://github.com/ixiehao/Any2WebP"
  - "https://github.com/ixiehao/Any2WebP/blob/main/LICENSE"
  - "https://github.com/ixiehao/Any2WebP/releases/latest"
  - "https://github.com/ixiehao/Any2WebP/releases/tag/v0.2.30"
  - "https://github.com/ixiehao/Any2WebP/blob/main/PRIVACY.md"
  - "https://ixiehao.github.io/Any2WebP/"
screenshots:
  - src: ./assets/screenshot.png
    alt: "Any2WebP comparing an animated GIF and its lossless WebP export side by side on a shared timeline."
    source: https://github.com/ixiehao/Any2WebP/blob/b9a160372597c7e2f16cb3f22f2f366047192111/docs/assets/any2webp-en.png
    credit: Any2WebP contributors
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/ixiehao/Any2WebP/blob/b9a160372597c7e2f16cb3f22f2f366047192111/docs/assets/any2webp-en.png
    credit: Any2WebP contributors
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/ixiehao/Any2WebP/blob/b9a160372597c7e2f16cb3f22f2f366047192111/app/icon.png
    credit: Any2WebP contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Any2WebP turns images into WebP or GIF files. Drag photos, screenshots or animations into the window, pick a format and export the batch; each still becomes its own file. WebP starts out lossless, and either format can aim for a target file size. Encoding runs on the Mac with the bundled libwebp.

After an export, the source and the result play side by side on one timeline. You can compare frames and check the real file size, frame delays, loop count and transparency before using the file.

It also makes and edits animations:

- combine a series of stills into one animation, ordered by dragging their thumbnails
- trim part of an MP4, MOV or WebM clip and set its frame rate and size
- reorder, delete, insert or replace frames in an existing GIF, WebP or APNG, and change their durations

Inputs include JPEG, PNG, HEIC, AVIF, TIFF, PSD, JPEG XL and more, besides the video formats. Video import needs FFmpeg and ffprobe; the Help menu checks for them and can install them through Homebrew. The app is built with Tauri.

It needs macOS 26 or later on Apple silicon. Version 0.2.30 is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings. Apart from update checks against GitHub, the app sends nothing; media and file names stay on the Mac.
