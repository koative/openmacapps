---
name: "Pesto Clipboard"
summary: "Menu bar clipboard history for text, images and files, with search and quick paste from the keyboard."
category: "Productivity"
tags:
  - clipboard-manager
  - clipboard
  - search
  - menu-bar
alternativeTo:
  - paste
repository: "https://github.com/matthewpick/pesto-clipboard"
website: "https://pestoclipboard.com"
license: "MIT"
licenseUrl: "https://github.com/matthewpick/pesto-clipboard/blob/main/LICENSE"
download: "https://github.com/matthewpick/pesto-clipboard/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/matthewpick/pesto-clipboard"
  - "https://github.com/matthewpick/pesto-clipboard/blob/main/LICENSE"
  - "https://github.com/matthewpick/pesto-clipboard/releases/latest"
  - "https://pestoclipboard.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/matthewpick/pesto-clipboard/main/PestoClipboard/PestoClipboard/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png"
    credit: "Matthew Pick"
    license: "MIT (repository); upstream app icon, trademarks retained"
---

Pesto Clipboard keeps a history of what you copy, including text, images and files, and stores more than 500 items. A menu bar popover lists them with search. Cmd-Shift-V opens it, number keys or the arrows pick an item, and Shift-Return pastes it as plain text. Clipboard content from password managers is ignored by default. It suits people who copy a lot and want the earlier items a keystroke away.

It requires macOS 14.0 or later. The README does not say whether the release build is notarized. The app does not use the App Sandbox, and its history is an unencrypted Core Data SQLite file in `~/Library/Application Support/PestoClipboard`. The README relies on FileVault for encryption at rest and says deleting that folder clears the history.
