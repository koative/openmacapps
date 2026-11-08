---
name: "Clipbara"
summary: "A clipboard history that slides up as a row of cards, with pinboards, Quick Look, and an optional iPhone companion."
category: "Productivity"
tags:
  - clipboard
  - history
  - pinboards
  - quick-look
  - clipboard-manager
alternativeTo:
  - paste
repository: "https://github.com/mobrava/Clipbara"
website: "https://github.com/mobrava/Clipbara"
license: "GPL-3.0"
licenseUrl: "https://github.com/mobrava/Clipbara/blob/main/LICENSE"
download: "https://github.com/mobrava/Clipbara/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/mobrava/Clipbara"
  - "https://github.com/mobrava/Clipbara/blob/main/LICENSE"
  - "https://github.com/mobrava/Clipbara/releases"
  - "https://apps.apple.com/app/apple-store/id6803537696"
  - https://raw.githubusercontent.com/mobrava/Clipbara/main/README.md
  - https://github.com/mobrava/Clipbara/releases/tag/v1.5.2
  - https://pasteapp.io/
  - https://pasteapp.io/pricing
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/mobrava/Clipbara/main/Clipbara/Resources/Assets.xcassets/AppIcon.appiconset/512.png"
    credit: "mobrava"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Clipbara keeps a history of everything you copy. Press Shift-Command-V and a strip of clip cards slides up from the bottom of the screen while the app you were using keeps focus. Type to search, pick a clip with the arrow keys or a click, and it lands on the clipboard ready for Command-V.

- It records images, files, links, colors, HTML and plain or rich text, and search filters by type and date.
- Space opens Quick Look on a clip, and Command-E edits a text clip in place.
- Pinboards hold the clips you reuse, numbered so Command-1 to Command-9 switch between them.
- Clip Queue lets you copy several items and paste them back in order.
- `clipbara://` links open the panel or start a queue from Raycast, Alfred or Shortcuts.

Apps on the excluded list, a password manager for example, never reach the history. The developer says the history stays on the Mac unless you turn on iCloud sync, and that there is no account or analytics.

The same code produces two builds. The GitHub DMG is free, Developer ID-signed and notarized, and can paste straight into the active app once you grant Accessibility. The Mac App Store build is sandboxed and sold after a trial, and it alone offers iCloud sync and the iPhone companion, which needs iOS 26. Both need macOS 14 or later; the DMG holds a Universal app for Apple silicon and Intel. Releases up to v1.1.11 carry the old name, PasteClip.

Paste also keeps a searchable history with pinboards, and it syncs across Mac, iPhone and iPad for a subscription or a lifetime plan. Clipbara's DMG build is free and has no sync.
