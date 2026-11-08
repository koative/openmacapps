---
name: Yippy
summary: Keeps a history of what you copy in a panel opened by a hotkey, with search and password-manager exclusions.
category: Productivity
tags:
  - clipboard
  - history
  - keyboard-shortcuts
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/mattDavo/Yippy
website: https://github.com/mattDavo/Yippy
license: MIT
licenseUrl: https://github.com/mattDavo/Yippy/blob/master/LICENSE
download: https://github.com/mattDavo/Yippy/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since June 2021."
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/mattDavo/Yippy
  - https://github.com/mattDavo/Yippy/blob/master/LICENSE
  - https://github.com/mattDavo/Yippy/blob/master/README.md
  - https://github.com/mattDavo/Yippy/releases
  - https://github.com/mattDavo/Yippy/releases/tag/2.8.1
  - https://pasteapp.io/
assets:
  - path: ./assets/icon.png
    source: https://github.com/mattDavo/Yippy/blob/c9fb7ea754bbe9e5fd6aa22678e825e9c9a17d9d/Yippy/Resources/Assets.xcassets/AppIcon.appiconset/256.png
    credit: Yippy contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.jpg
    source: https://github.com/mattDavo/Yippy/blob/c9fb7ea754bbe9e5fd6aa22678e825e9c9a17d9d/images/screenshot.jpg
    credit: Yippy contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.jpg
    alt: Yippy clipboard-history panel displaying previously copied items.
    source: https://github.com/mattDavo/Yippy/blob/c9fb7ea754bbe9e5fd6aa22678e825e9c9a17d9d/images/screenshot.jpg
    credit: Yippy contributors
icon: ./assets/icon.png
---

Yippy keeps a history of what you copy and opens it in a panel from a hotkey, so something you copied an hour ago can go back on the clipboard. You can change the hotkey, and since version 2.8 the panel has a basic search.

- A setting caps how many items the history keeps.
- One toggle shows text with consistent formatting, and another pastes text without the formatting it was copied with.
- The panel comes in several sizes, including centred ones, and follows the mouse across displays.
- Yippy can start at login.

Since version 2.4.1, Yippy skips items marked with the transient, concealed or auto-generated pasteboard types, along with copies from 1Password and KeeWeb, so passwords from those sources stay out of the history.

No release has followed 2.8.1 in June 2021. That build is Intel-only and needs macOS 10.13 or later, so Apple silicon Macs run it through Rosetta 2. Homebrew can also install it as a cask.

Paste keeps a clipboard history across Mac, iPhone and iPad. Yippy works on the Mac alone.
