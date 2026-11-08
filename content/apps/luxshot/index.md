---
name: LuxShot
summary: A menu bar tool that reads text, QR codes and barcodes from any area of the screen you select.
category: Utilities
tags:
  - ocr
  - menu-bar
  - text-extraction
  - screenshots
repository: https://github.com/lukebuild/LuxShot
website: https://github.com/lukebuild/LuxShot
license: GPL-3.0
licenseUrl: https://github.com/lukebuild/LuxShot/blob/main/LICENSE
download: https://github.com/lukebuild/LuxShot/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/lukebuild/LuxShot
  - https://github.com/lukebuild/LuxShot/blob/main/LICENSE
  - https://github.com/lukebuild/LuxShot/releases
  - https://github.com/lukebuild/LuxShot/blob/main/README.md
  - https://github.com/lukebuild/LuxShot/releases/tag/v1.0.1
  - https://github.com/lukebuild/LuxShot/releases/tag/v1.0.0
  - https://github.com/lukebuild/LuxShot/blob/main/LuxShot/ScanStore.swift
  - https://github.com/lukebuild/LuxShot/blob/main/LuxShot/OCRManager.swift
  - https://github.com/lukebuild/LuxShot/blob/main/LuxShot/ScreenCaptureManager.swift
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lukebuild/LuxShot/main/LuxShot/Assets.xcassets/AppIcon.appiconset/icon_512x512.png
    credit: lukebuild and LuxShot contributors
    license: GPL-3.0 repository asset; project name and icon retained by the project
---

Press Command-Shift-E, drag across part of the screen, and LuxShot turns whatever sits inside the box into text on the clipboard. Recognition runs through Apple's Vision framework on the Mac. If the selection holds a QR code or a barcode, you get the decoded content in place of the recognised text.

The selection uses the same crosshair as the screenshot tool built into macOS. Three switches in the menu bar panel decide what happens next. Line Breaks keeps the original lines; with it off, LuxShot joins everything into one run of text. Auto Copy, on by default, puts the result on the clipboard. Open Links sends the first web address it finds to your browser.

LuxShot needs macOS 14 or later. The release is a small ZIP holding an Apple silicon app. It is not notarized, so the first launch has to be approved by Control-clicking the app and choosing Open, or from Privacy & Security in System Settings.

Each scan joins a list of recent captures, labelled with the app that was in front when you took it. From the list you can copy an item again, have macOS speech read it aloud, open a link it contains or delete it. Open Full Library shows a larger window with the whole history and, for each scan, the captured image beside its text. The developer says no data leaves the Mac.
