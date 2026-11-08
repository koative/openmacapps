---
name: "Shuffle"
summary: "A GPU-rendered file manager with tabs, dual panes, and a fuzzy command palette as a Finder alternative."
category: "Utilities"
tags:
  - files
  - finder
  - tabs
  - keyboard-shortcuts
  - file-manager
repository: "https://github.com/WizenPainter/shuffle"
website: "https://shuffleapp.co"
license: "MIT"
licenseUrl: "https://github.com/WizenPainter/shuffle/blob/master/LICENSE"
download: "https://github.com/WizenPainter/shuffle/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/WizenPainter/shuffle"
  - "https://github.com/WizenPainter/shuffle/blob/master/LICENSE"
  - "https://github.com/WizenPainter/shuffle/releases"
  - "https://raw.githubusercontent.com/WizenPainter/shuffle/master/README.md"
  - "https://shuffleapp.co"
  - "https://github.com/WizenPainter/shuffle/releases/tag/v0.5.0"
  - "https://github.com/WizenPainter/shuffle/releases/tag/v0.5.2"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/WizenPainter/shuffle/master/AppIcon.icns"
    credit: "Jaime Guzman"
    license: "MIT; upstream project asset, trademarks retained"
---

Shuffle browses and moves files in tabs and side-by-side panes, with most actions on the keyboard. Press Command-P and type a few letters of a path to find any file or folder in your home directory, or press the slash key to filter the folder you are in.

- Dragging a tab to the edge of the window splits it in two, and every pane keeps separate tabs, back history and filter.
- Space opens a preview pane that highlights code, renders Markdown and CSV tables, lists archive contents, scrolls through PDFs and plays video and audio.
- An optional command bar at the bottom moves through folders like a shell, with `cd` and Tab completion.
- Dropbox, Google Drive, OneDrive and iCloud are listed automatically beside mounted disks, along with a Connect to Server dialog.
- Dozens of preset themes, among them Catppuccin, Dracula and Nord, can be adjusted color by color while you watch.

File lists are drawn on the GPU through Metal and virtualized, with folders of 100,000 items as the stated target. Slow and network drives load in the background. Copies never overwrite an existing file, and a move between drives deletes the originals only after checking they are unchanged. Undo leaves alone any copy you have edited since.

Shuffle is written in Rust on GPUI, the UI framework behind the Zed editor. It is still at version 0.x, early but usable by its own description. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it needs macOS 12 or later. Updates arrive through a built-in updater. The whole app is free under the MIT license; the developer says a one-time purchase for extra features may come later, never a subscription.
