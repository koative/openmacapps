---
name: "Nimclip"
summary: "A local-first clipboard history in the menu bar, with tags, favourites and OCR search for copied images."
category: "Productivity"
tags:
  - clipboard
  - history
  - ocr
  - menu-bar
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/hukdoesn/Nimclip
website: https://hukdoesn.github.io/Nimclip/
license: "Apache-2.0"
licenseUrl: https://github.com/hukdoesn/Nimclip/blob/main/LICENSE
download: https://github.com/hukdoesn/Nimclip/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/hukdoesn/Nimclip
  - https://github.com/hukdoesn/Nimclip/blob/main/LICENSE
  - https://github.com/hukdoesn/Nimclip/releases
  - https://raw.githubusercontent.com/hukdoesn/Nimclip/main/README.md
  - https://raw.githubusercontent.com/hukdoesn/Nimclip/main/README_EN.md
  - https://hukdoesn.github.io/Nimclip/
  - https://pasteapp.io/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/hukdoesn/Nimclip/main/Cliplet/Assets.xcassets/AppIcon.appiconset/app-icon-256%402x.png
    credit: "hukdoesn and Nimclip contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Nimclip records what you copy and keeps it in a panel behind the menu bar icon. Press Command-Shift-V, type to search, move with the arrow keys and press Return to paste an earlier item into the app you were using.

- It saves text, links, code, rich text and images, together with the name and icon of the app each item came from.
- Filters narrow the list to text, links, code or images, and you can favourite items or give them coloured tags.
- Merge mode joins several text items in the order you pick and pastes them at once.
- Copied images are indexed with macOS's Vision text recognition, so you can find a screenshot by a word inside it. Older images can be indexed in one batch.

Holding Option over an item shows a full preview, and any item can be pasted as plain text. Copying the same thing twice moves it to the top instead of storing a duplicate. By default the history keeps 500 items for two days; both limits are adjustable, and favourites are never cleaned up automatically. Pasting straight into another app needs the Accessibility permission. Without it Nimclip only copies the item and you press Command-V yourself.

The developer says history stays in a local database on the Mac, with no account and no upload, and that the update check only fetches public release information from GitHub. Paste also syncs its history across Mac, iPhone and iPad. Nimclip stays on one Mac.

Nimclip needs macOS 15 or later. Releases are separate ZIP files for Apple silicon and Intel. The README describes how to open the app if macOS blocks it the first time. The interface switches between Simplified Chinese and English.
