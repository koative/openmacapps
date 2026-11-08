---
name: Pasty
summary: Brings back clipboard history through a search panel, a bottom strip of cards, or a panel under the notch.
category: Productivity
tags:
  - clipboard
  - pinboards
  - search
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/IvyGain/Pasty
website: https://ivygain.github.io/Pasty/
license: MIT
licenseUrl: https://github.com/IvyGain/Pasty/blob/main/LICENSE
download: https://github.com/IvyGain/Pasty/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/IvyGain/Pasty
  - https://github.com/IvyGain/Pasty/blob/main/LICENSE
  - https://github.com/IvyGain/Pasty/blob/main/README.md
  - https://github.com/IvyGain/Pasty/releases
  - https://ivygain.github.io/Pasty/
  - https://github.com/IvyGain/Pasty/releases/tag/v0.4.13
  - https://pasteapp.io/
assets:
  - path: ./assets/icon.png
    source: https://github.com/IvyGain/Pasty/blob/5ec620baa4eefa16531535ac03bc2dd11bb52954/Sources/Pasty/Resources/Assets/Pasty.iconset/icon_256x256.png
    credit: Pasty contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Pasty keeps what you copy in a local history and gives you three ways to bring it back. Shift-Command-V opens a search panel in the middle of the screen, and Option-Shift-V slides up a strip of cards along the bottom edge. On a Mac with a notch, moving the pointer onto the notch drops a panel down from the top, and you can drag a card from it straight into the document you are editing.

Search accepts filters as well as keywords. `type:link`, `source:Safari` and `pinboard:` narrow the list, `>1d` keeps only the last day, and a pattern between slashes runs as a regular expression.

- Command-1 to 9 pastes one of the first nine clips, and Shift-Return pastes plain text.
- Shift-click and Command-click select several clips; Return pastes them in order, Option-Return as one block.
- Pinboards carry colors, and snippets can contain variables such as `{{date}}` and `{{cursor}}`.
- Code clips get syntax highlighting, and images go through on-device text recognition.
- Control-Shift-P pauses capture for 60 seconds.

Pasty needs macOS 14 and the Accessibility permission for automatic pasting. The 0.4.13 DMG holds an app built for Apple silicon only, with an ad-hoc signature, so the first launch needs Open from the right-click menu. The releases page also lists betas up to 0.10.0.

Clips sit in a SQLite database under `~/Library/Application Support/Pasty`, and Settings can wipe it in one step. The developer says Pasty has no account, telemetry or analytics. Paste offers pinboards too, plus sync between Mac, iPhone and iPad; Pasty has no sync yet.
