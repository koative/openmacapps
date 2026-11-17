---
name: mSTICK
summary: "Puts encrypted sticky notes on the desktop as real windows, with Markdown, stacks, reminders and global shortcuts."
category: Productivity
tags:
  - sticky-notes
  - notes
  - markdown
  - encryption
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mSTICK
website: https://github.com/starbudweiser/mSTICK
license: MIT
licenseUrl: https://github.com/starbudweiser/mSTICK/blob/main/LICENSE
download: "https://github.com/starbudweiser/mSTICK/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mSTICK
  - https://github.com/starbudweiser/mSTICK/blob/main/LICENSE
  - https://github.com/starbudweiser/mSTICK/releases
  - https://raw.githubusercontent.com/starbudweiser/mSTICK/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mSTICK/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mSTICK/releases/download/v1.1.2/mSTICK.zip
    credit: mSTICK contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "Several mSTICK sticky notes on the desktop, including a stacked group, showing checklists, Markdown, Smart Calc and a reminder."
    source: https://github.com/starbudweiser/mSTICK/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
mSTICK puts notes on your desktop as real windows, each written in Markdown that is styled as you type. Notes can float above other windows, stay glued to the desktop or appear on every desktop, and you can stack them into groups you drag around.

Two shortcuts help when the desktop is crowded. Fan view, on ⌥F, flips through your notes like a deck of cards, and Peek, on ⌥`, brings the last note above any app.

Inside a note you find:

- Smart Calc, which names values and shows results inline;
- slash commands;
- reminders written in plain language, such as a day and time.

Notes are encrypted on disk with AES-GCM, and the key stays in the Keychain. There is no account or server. Sync between Macs is optional and goes through a folder such as iCloud Drive. Export works to Markdown, plain text or an archive you can import again. Notes cannot hold images, and reminders do not repeat. The app is inspired by Hold My Notes and not affiliated with it. Releases are arm64 builds for macOS 14 or later, notarized, in four languages.
