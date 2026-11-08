---
name: "Everything by mdfind"
summary: "A desktop file search window built on the Spotlight index, with filters, bookmarks, and built-in previews."
category: "Utilities"
tags:
  - search
  - files
  - previews
repository: "https://github.com/appledragon/everythingByMdfind"
website: "https://github.com/appledragon/everythingByMdfind"
license: "Apache-2.0"
licenseUrl: "https://github.com/appledragon/everythingByMdfind/blob/master/LICENSE.md"
download: "https://github.com/appledragon/everythingByMdfind/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/appledragon/everythingByMdfind"
  - "https://github.com/appledragon/everythingByMdfind/blob/master/LICENSE.md"
  - "https://github.com/appledragon/everythingByMdfind/releases"
  - "https://raw.githubusercontent.com/appledragon/everythingByMdfind/master/README.md"
  - "https://github.com/appledragon/everythingByMdfind/releases/tag/v1.4.3"
  - "https://raw.githubusercontent.com/appledragon/everythingByMdfind/master/everything.py"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/appledragon/everythingByMdfind/master/icon.svg"
    credit: "appledragon"
    license: "Apache-2.0; upstream project asset, trademarks retained (rasterised from the upstream SVG)"
---

Everything by mdfind runs your searches through mdfind, the command-line side of Spotlight, and shows the hits in a sortable table with a preview pane. You type a name or a phrase from inside a file, then narrow the list by size range, extension, case, full or partial match and folder.

- Bookmarks run ready-made searches for files over 50 MB, videos, audio, images, archives and applications.
- The preview pane shows text with encoding detection, common image formats including HEIC and animated GIF, SVG, and audio or video with a player that can also open in its own window.
- Tabs keep separate searches open side by side, each with its own results and settings.
- Selected files can be opened, deleted, copied, moved or renamed in a batch, or dragged into another app.
- Results export to JSON, Excel, HTML, Markdown or CSV.

The app is written in Python with PyQt6 and can be run from source. The release download is a ZIP holding a Universal app for Apple silicon and Intel that lists macOS 10.14 as its minimum. That 1.4.3 build is unsigned, so Gatekeeper blocks it on first launch.

A disk space view charts the largest folders under your home folder or any folder in the results, and double-clicking a bar drills into its subfolders. Large result sets load in batches as you scroll. Six themes are included, among them Tokyo Night and two Chinolor themes based on traditional Chinese colours.
