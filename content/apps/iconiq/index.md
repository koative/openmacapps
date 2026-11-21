---
name: iCONIQ
summary: "Keeps a personal icon library on a Mac, imports IconJar libraries and captures icons from icon websites."
category: Design
tags:
  - icons
  - asset-library
  - svg
  - iconjar
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/iCONIQ
website: "https://starbudweiser.github.io/wshowcase/#iCONIQ"
license: MIT
licenseUrl: https://github.com/starbudweiser/iCONIQ/blob/main/LICENSE
download: https://github.com/starbudweiser/iCONIQ/releases
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-17'
sources:
  - https://github.com/starbudweiser/iCONIQ
  - https://github.com/starbudweiser/iCONIQ/blob/main/LICENSE
  - https://github.com/starbudweiser/iCONIQ/releases
  - https://raw.githubusercontent.com/starbudweiser/iCONIQ/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/iCONIQ/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/iCONIQ/releases/download/v1.0.2/iCONIQ.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
  - path: ./assets/ai-control.png
    source: https://github.com/starbudweiser/iCONIQ/blob/main/docs/ai-control.png
    credit: Starbudweiser
    license: MIT
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The iCONIQ main window showing a grid of 60 colourful line icons organised in four collections, with icon portals in the sidebar."
    source: https://github.com/starbudweiser/iCONIQ/blob/main/docs/screenshot.png
    credit: Starbudweiser
  - src: ./assets/ai-control.png
    alt: "iCONIQ settings, AI control tab: permission, connected AI clients, default filing collections and rules, default folder colour and folder protection."
    source: https://github.com/starbudweiser/iCONIQ/blob/main/docs/ai-control.png
    credit: Starbudweiser
---

iCONIQ stores your icons in a library you can search, tag and drag from. You build it by importing IconJar libraries and jars, icon folders, and SVG, PNG or ICNS files.

A built-in browser opens the icon websites you add yourself, each with an optional search pattern. It detects the icons on a page, and a capture mode adds one to your library with a click. Downloaded images and ZIP files are imported directly.

Finding and using icons:

- search by name and tags, with favorites and recents;
- collections and groups to file them;
- copy as SVG or as an image, or drag out to any app;
- export to PNG.

The app links with MiCONE. Every icon exported from MiCONE lands in a MiCONE collection, and exporting it again updates it in place wherever it was filed.

An optional MCP server ships inside the app, so an AI agent such as Claude Code, Codex or Cursor can work with the library. It makes an app icon and a Finder-style folder icon from one image with MiCONE's engine. It sets the folder icon on a folder and files both in a collection. It also lists and creates collections and groups, and searches icons. It is off by default, each client is approved once in the settings, and it works while iCONIQ is closed. The previous folder icon is backed up, system folders and app bundles are refused, and nothing is deleted.

iCONIQ is inspired by IconJar and not affiliated with its authors. Data lives in Application Support. Updates come from GitHub releases with a Developer ID signature check. Releases are arm64 builds for macOS 14 or later, notarized, with the interface in English, French, Spanish and Italian.
