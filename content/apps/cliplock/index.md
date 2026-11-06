---
name: "ClipLock"
summary: "Menu bar clipboard history that encrypts entries with AES-256-GCM, keeps the key in the Keychain and can hide likely secrets."
category: "Utilities"
tags:
  - clipboard
  - menu-bar
  - encryption
  - privacy
alternativeTo:
  - paste
repository: "https://github.com/ed0157/ClipLock"
website: "https://github.com/ed0157/ClipLock"
license: "MIT"
licenseUrl: "https://github.com/ed0157/ClipLock/blob/main/LICENSE"
download: "https://github.com/ed0157/ClipLock/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ed0157/ClipLock"
  - "https://github.com/ed0157/ClipLock/blob/main/LICENSE"
  - "https://github.com/ed0157/ClipLock/blob/main/NOTICE.md"
  - "https://github.com/ed0157/ClipLock/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ed0157/ClipLock/main/Resources/AppIcon.icns"
    credit: "ed0157"
    license: "Copyright 2026 ed0157, all rights reserved; not covered by the MIT code license (see NOTICE.md); trademarks retained"
---

ClipLock keeps a history of what you copy in the menu bar. Text is stored encrypted on disk with AES-256-GCM, and the key sits in your login Keychain. One menu item clears the history and the key together. For private keys, API keys, tokens and `password=` text, you choose whether to save them partly hidden (the default, showing the first five characters), skip them, or save them in full. Items that password managers mark as concealed are never saved. It suits people who copy passwords and tokens all day. It stores up to 200 items, 10 MB per copy and 50 MB in total.

It needs macOS 13 or later and runs on Apple silicon and Intel. The app is not notarized by Apple, so macOS blocks the first launch; allow it under System Settings → Privacy & Security. On macOS 15.4 and later, you may also need to allow pasting from other apps. Hidden secrets are still stored, and ordinary entries appear as plain text in the menu. There is no sync between Macs, history never expires, and the app is not sandboxed.
