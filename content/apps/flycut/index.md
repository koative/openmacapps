---
name: Flycut
summary: "Keeps a history of copied text and pastes earlier clips from an on-screen bezel opened with Shift-Command-V."
category: Productivity
tags:
  - clipboard
  - keyboard-shortcuts
  - history
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/TermiT/Flycut
website: https://github.com/TermiT/Flycut
license: MIT
licenseUrl: https://github.com/TermiT/Flycut/blob/master/license.txt
download: https://github.com/TermiT/Flycut/releases
freeDownload: true
homebrew: "flycut"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/TermiT/Flycut", "https://github.com/TermiT/Flycut/blob/master/license.txt", "https://github.com/TermiT/Flycut/blob/master/readme.md", "https://github.com/TermiT/Flycut/releases", "https://raw.githubusercontent.com/TermiT/Flycut/master/readme.md", "https://raw.githubusercontent.com/TermiT/Flycut/master/help.md", "https://github.com/TermiT/Flycut/releases/tag/1.9.6", "https://pasteapp.io/", "https://pasteapp.io/pricing"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/TermiT/Flycut/blob/8a2401470eda37de3e5774a5aa8bb2d249c8bbf6/flycut.icns
    credit: Flycut contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Flycut records each piece of text you copy, so earlier clips stay within reach after the clipboard changes. Press Shift-Command-V. A translucent bezel appears in the middle of the screen. Hold Command and use the arrow keys to step through the history, then press Return to paste the clip shown.

The bezel has its own keys:

- The number keys jump straight to a position in the history.
- Delete removes the clip shown, and S saves it as a text file on the Desktop.
- F switches to a separate favorites store, and Shift-F moves the current clip there.
- Esc closes the bezel without pasting.

The menu bar icon lists recent clips and can clear the history or merge it into one entry. Option-click the icon to pause recording while you copy something sensitive, such as a password. A sticky bezel setting removes the need to hold Command, and the hotkey can be changed in preferences.

Flycut grew out of Jumpcut. It was written for developers who copy pieces of code. On macOS 10.14 and later it needs the Accessibility permission. The GitHub build, 1.9.6 from December 2020, is a Universal app, Developer ID-signed and notarized, that runs on macOS 10.10 or later. The same app is on the Mac App Store, and an iOS version exists.

Paste, sold by subscription or as a lifetime purchase, syncs clips across Mac, iPhone and iPad and sorts them into pinboards. Flycut is MIT-licensed and shows one clip at a time in its bezel.
