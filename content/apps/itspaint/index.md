---
name: "ItsPaint"
summary: "A small paint and markup app for numbering steps, pixelating details and drawing on screenshots."
category: "Design"
tags:
  - drawing
  - annotation
  - screenshots
alternativeTo:
  - microsoft-paint
repository: https://github.com/joshlin2201/itspaint
website: https://itspaintmac.com/
license: "MIT"
licenseUrl: https://github.com/joshlin2201/itspaint/blob/main/LICENSE
download: https://github.com/joshlin2201/itspaint/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/joshlin2201/itspaint
  - https://github.com/joshlin2201/itspaint/blob/main/LICENSE
  - https://github.com/joshlin2201/itspaint/releases
  - https://apps.apple.com/us/app/itspaint/id6796493980?mt=12
  - https://github.com/joshlin2201/itspaint/blob/main/README.md
  - https://itspaintmac.com/
  - https://github.com/joshlin2201/itspaint/releases/tag/v0.24.0
  - https://apps.microsoft.com/detail/9pcfs5b6t72h
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/joshlin2201/itspaint/main/App/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: "Josh Lin"
    license: "MIT; upstream project asset, trademarks retained"
---

ItsPaint opens a screenshot or a blank canvas and gives you Paint-style tools to mark it up. You number the steps, point with arrows, pixelate or cover anything private, then drag the image straight into a bug report or chat without saving a file first.

- Step badges number themselves and can start from any number, so a sequence can continue across screenshots.
- Pixelate turns an area into a mosaic. It hides detail but is not redaction, so real secrets need a filled shape on top.
- Spotlight dims everything outside a box, and the highlighter uses its own ink.
- File > New from Screenshot opens the system's screenshot crosshair, and a shortcut you switch on in settings does the same from any app.
- Exports go to nine formats, from PNG and HEIC to AVIF, PDF and ICO, and a PDF can be signed and saved back.

The painting side has pencil, brushes including a spray nib, fill, clone and eyedropper, along with lasso and Instant Alpha selections, a pixel grid and snapping. One command removes a flat background from logos and product shots, though it fails on hair.

Microsoft Paint is a Windows app. ItsPaint carries its plain canvas over to the Mac and adds the markup tools above. The app leaves out the network entitlement, so the sandbox blocks any connection, and the README lists commands to confirm that on your own copy.

ItsPaint needs macOS 14 or later. It comes free from the Mac App Store, from a Homebrew tap, or as a disk image holding a Universal app that is signed with a Developer ID and notarized. Its drawing engine, PaintKit, is also published as a Swift package for other apps.
