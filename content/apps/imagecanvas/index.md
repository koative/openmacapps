---
name: "ImageCanvas"
summary: "Native macOS reference board for arranging local images on an infinite canvas without copying the originals."
category: "Design"
tags:
  - images
  - reference
  - moodboard
repository: "https://github.com/viktorkpkn/ImageCanvas"
website: "https://github.com/viktorkpkn/ImageCanvas"
license: "MIT"
licenseUrl: "https://github.com/viktorkpkn/ImageCanvas/blob/main/LICENSE"
download: "https://github.com/viktorkpkn/ImageCanvas/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/viktorkpkn/ImageCanvas"
  - "https://github.com/viktorkpkn/ImageCanvas/blob/main/LICENSE"
  - "https://github.com/viktorkpkn/ImageCanvas/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/viktorkpkn/ImageCanvas/releases/download/v0.5.0/ImageCanvas-0.5.0-build4.zip
    credit: ImageCanvas contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

ImageCanvas shows images from folders or dropped files on a zoomable canvas. They can be arranged as a tiled grid, a cascading column grid or a grid at native resolution, and you can pan, rotate, flip and resize them and add text objects. Files are referenced where they already are and are never modified. Boards are saved locally, and a snapshot of a board can be copied or saved to Pictures. Pen drawings last only for the session. It suits moodboards and quick reviews of large download folders.

Requires macOS 14 or later. Releases are neither notarized nor signed with a Developer ID, so macOS may block the first launch. The README asks you to check the archive's SHA-256 against the release page and then use System Settings → Privacy & Security → Open Anyway. The built-in update check runs only when you request it, and it verifies GitHub's published digest, which is integrity checking rather than publisher authentication. Building from source requires Xcode 27 beta 3 or later.
