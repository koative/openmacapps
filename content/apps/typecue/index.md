---
name: TypeCue
summary: Types a prepared script into any app one block per hotkey press, as real keystrokes,
  for demos, tutorials and screencasts.
category: Productivity
tags:
- presentations
- keyboard
- automation
- menu-bar
repository: https://github.com/alexpolonsky/TypeCue
website: https://typecue.app
license: MIT
licenseUrl: https://github.com/alexpolonsky/TypeCue/blob/main/LICENSE
download: https://github.com/alexpolonsky/TypeCue/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/alexpolonsky/TypeCue
- https://github.com/alexpolonsky/TypeCue/blob/main/LICENSE
- https://github.com/alexpolonsky/TypeCue/releases
- https://typecue.app
- https://raw.githubusercontent.com/alexpolonsky/TypeCue/main/README.md
- https://github.com/alexpolonsky/TypeCue/releases/tag/v0.1.1
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/alexpolonsky/TypeCue/main/Sources/TypeCue/Assets.xcassets/AppIcon.appiconset/icon_256%402x.png
  credit: Alex Polonsky
  license: MIT; upstream project asset, trademarks retained
---

Write your demo as a list of text blocks, click into any text field, and press Control-Option-X. TypeCue types the next block there as real keystrokes at a human pace, so every take comes out the same and free of typos. Each press sends one block, and pressing again mid-block stops the typing.

Markers inside a block direct the pace:

- `[0.5]` or `[2]` pauses for that many seconds.
- `[speed:40]` types at 40 ms per character until `[speed:default]` restores your usual speed.
- `[enter]` presses Return, which sends the message in a chat app.
- Line breaks go out as Shift-Return, so a multi-line block does not submit early.

Brackets it does not recognize, such as `array[0]`, are typed as written. Any language and keyboard layout works, right-to-left ones too: characters on your current layout become keystrokes, and the rest arrive by direct Unicode entry. A floating panel can show every block as typed, typing, next or upcoming without taking focus from the target app. The hotkey can be changed in settings.

Scripts are a plain JSON file in Application Support. Three `typecue://` links activate a script, reset the session or reload the file, and the app mirrors its state to `state.json`. Claude Code, Cursor or another agent with access to your Mac can therefore write a script and drive it, and the repository ships an agent skill for that.

Accessibility is the one permission TypeCue asks for. macOS blocks synthetic typing into password fields for every app, and TypeCue flashes a warning when that happens. The developer says it makes no network calls and has no account or analytics, which is also why it never updates itself; Homebrew users upgrade with `brew upgrade`. The 0.1.1 DMG holds a Universal app for macOS 14 or later, Developer ID-signed and notarized.
