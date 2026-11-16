---
name: qLOOKS
summary: "Adds Quick Look previews and Finder thumbnails for formats macOS skips, from alpha MOV and MKV to SVG, archives and 3D models."
category: Utilities
tags:
  - quick-look
  - previews
  - thumbnails
  - video
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/qLOOKS
website: https://github.com/starbudweiser/qLOOKS
license: MIT
licenseUrl: https://github.com/starbudweiser/qLOOKS/blob/main/LICENSE
download: "https://github.com/starbudweiser/qLOOKS/releases/latest"
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/qLOOKS
  - https://github.com/starbudweiser/qLOOKS/blob/main/LICENSE
  - https://github.com/starbudweiser/qLOOKS/releases
  - https://raw.githubusercontent.com/starbudweiser/qLOOKS/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/qLOOKS/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/qLOOKS/releases/download/v1.1.1/qLOOKS-1.1.1.zip
    credit: qLOOKS contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The qLOOKS window showing the list of supported formats (video, vector images, 3D models, archives) by version."
    source: https://github.com/starbudweiser/qLOOKS/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
qLOOKS fills the gaps in Quick Look. Select a file in the Finder, press the space bar, and formats that macOS shows as a blank icon get a real preview and a thumbnail.

It began with QuickTime movies that carry transparency, in ProRes 4444, PNG or Animation codecs. A video decoder extension plays the PNG and Animation codecs, which recent macOS versions no longer decode, and the preview bar switches between a checkerboard, dark or light background with looped playback.

Coverage now includes:

- MKV video, SVG, EPS and Illustrator files;
- folders and archives;
- Markdown and source code;
- application bundles, GPX tracks on a map and 3D models.

A Formats page in the app lists what each version supports. The video decoder has to be switched on once in System Settings, under Login Items and Extensions, Media Extensions. Releases are arm64 builds for macOS 15 or later, notarized, in four languages, and the app updates itself unless you turn that off.
