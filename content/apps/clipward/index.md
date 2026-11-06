---
name: "Clipward"
summary: "Clipboard manager with encrypted history, skipped password-manager copies and a clipboard that clears itself after pasting."
category: "Productivity"
tags:
  - clipboard-manager
  - encryption
  - menu-bar
  - privacy
alternativeTo:
  - paste
repository: "https://github.com/ypankovych/clipward"
website: "https://clipward.dev"
license: "MIT"
licenseUrl: "https://github.com/ypankovych/clipward/blob/main/LICENSE"
download: "https://github.com/ypankovych/clipward/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ypankovych/clipward"
  - "https://github.com/ypankovych/clipward/blob/main/LICENSE"
  - "https://github.com/ypankovych/clipward/releases"
  - "https://clipward.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ypankovych/clipward/main/Resources/AppIcon.icns"
    credit: "Yaroslav Pankovych"
    license: "MIT; upstream app icon, trademarks retained"
---

Clipward records everything you copy, including text, images, files and colours, and brings an earlier item back with a shortcut (Option-Command-C by default). It encrypts saved history on disk, ignores copies that password managers mark as concealed, and by default skips copies made in Keychain Access, Passwords, 1Password and Bitwarden. After you paste an item from history, it clears the clipboard after a minute. It suits people who copy passwords and tokens and want a private history without an account or network access.

It works on macOS 10.13 or later, on Apple silicon and Intel. The app is not notarized by Apple, so the first launch is blocked: on macOS 15 and later, use Open Anyway under Privacy & Security; on older systems, right-click and choose Open. Pasting into other apps needs Accessibility access. Release builds are ad-hoc signed, so after an update macOS may ask again for Keychain and Accessibility access. The project says it makes no network connections and collects no telemetry.
