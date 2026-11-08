---
name: "qView"
summary: "A minimal image viewer that keeps the window free of toolbars and opens pictures quickly."
category: "Media"
tags:
  - images
  - minimal
  - cross-platform
repository: https://github.com/jurplel/qView
website: https://interversehq.com/qview/
license: "GPL-3.0"
licenseUrl: https://github.com/jurplel/qView/blob/main/LICENSE
download: https://github.com/jurplel/qView/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/jurplel/qView
  - https://github.com/jurplel/qView/blob/main/LICENSE
  - https://github.com/jurplel/qView/releases
  - https://interversehq.com/qview/
  - https://interversehq.com/qview/download/
  - https://github.com/jurplel/qView/releases/tag/7.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/jurplel/qView/main/dist/mac/qView.icns
    credit: "jurplel and qView contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

qView is an image viewer that shows a picture in a window with nothing but a title bar. There are no toolbars, so the image gets the space.

It reads the common formats, including BMP, GIF, JPEG, PNG, TIFF and WebP. It preloads images on several threads, so stepping through a folder stays quick. Its developer says it opens almost instantly and uses little memory and CPU.

- Animated GIFs come with playback controls.
- You can rotate and mirror the image you are viewing.
- A file history lists the pictures you opened recently.
- A long list of preferences can be configured.

qView is built on Qt and also runs on Windows and Linux, aiming to feel native on each. It is free under the GPLv3.

Version 7.1 offers a Universal DMG for Apple silicon and Intel that needs macOS 12 or later, plus a legacy DMG for macOS 10.13 and later. Homebrew users can install it with `brew install qview`, and nightly builds are linked from the download page.
