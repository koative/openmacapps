---
name: "PinShell"
summary: "Pins local HTML files as always-on-top overlay windows, with click-through mode for screen recordings and streams."
category: "Productivity"
tags:
  - overlay
  - screen-recording
  - streaming
  - html
  - menu-bar
repository: "https://github.com/niyongsheng/PinShell"
website: "https://github.com/niyongsheng/PinShell"
license: "Apache-2.0"
licenseUrl: "https://github.com/niyongsheng/PinShell/blob/main/LICENSE"
download: "https://github.com/niyongsheng/PinShell/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/niyongsheng/PinShell"
  - "https://github.com/niyongsheng/PinShell/blob/main/LICENSE"
  - "https://github.com/niyongsheng/PinShell/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/niyongsheng/PinShell/main/Resources/PinShell.icns"
    credit: "PinShell contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

PinShell shows a local HTML file in a transparent window that floats above other windows and stays across Spaces. Typical uses are rotating social handles, a LIVE indicator or a watermark over a screen recording or stream. Click-through mode passes mouse events to the windows underneath, and a built-in template gallery provides four starting overlays. It suits streamers who build overlays in HTML, CSS and JavaScript.

Requires macOS 13 or later. The README documents building from source with `make` and Xcode command-line tools. The v1.3.0 DMG is ad-hoc signed and not notarized, so the first launch must be allowed in System Settings. Only local `file://` pages load, and in click-through mode the page cannot receive clicks. The app checks GitHub Releases for updates every 24 hours.
