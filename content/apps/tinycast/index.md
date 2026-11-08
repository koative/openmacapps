---
name: Tinycast
summary: Launch apps, search files, recall clipboard items, and run shortcuts from one palette.
category: Productivity
tags:
  - launcher
  - clipboard
  - shortcuts
alternativeTo:
  - alfred
  - raycast
  - textexpander
repository: https://github.com/abue-ammar/tinycast
website: https://tinycast.dev
license: AGPL-3.0-or-later
licenseUrl: https://github.com/abue-ammar/tinycast/blob/main/LICENSE
download: https://github.com/abue-ammar/tinycast/releases
homebrew: "tinycast"
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/abue-ammar/tinycast
  - https://github.com/abue-ammar/tinycast/blob/main/LICENSE
  - https://github.com/abue-ammar/tinycast/blob/main/README.md
  - https://github.com/abue-ammar/tinycast/releases
  - "https://raw.githubusercontent.com/abue-ammar/tinycast/main/README.md"
  - "https://tinycast.dev/"
  - "https://github.com/abue-ammar/tinycast/releases/tag/v0.12.11"
  - "https://www.raycast.com/"
  - "https://www.alfredapp.com/"
  - "https://textexpander.com/"
assets:
  - path: ./assets/icon.svg
    source: https://github.com/abue-ammar/tinycast/blob/291996cd6c0ea783857c1667de9917b0cb273fb6/website/public/favicon.svg
    credit: Tinycast contributors
    license: AGPL-3.0-or-later; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.svg
---

Tinycast opens a search palette from a shortcut you choose, such as Option-Space. Type to launch an app, find a file or a menu item, do a calculation or bring back something you copied.

A new install turns on only the launcher, the calculator and clipboard history. Clipboard history keeps text and images for three months and skips copies from Keychain Access and Passwords. Everything else waits until you switch it on:

- Text snippets that expand from a keyword in any app, with Markdown and placeholders.
- Window management with 35 commands for halves, thirds and moving between displays.
- Raycast extensions installed from the Raycast Store, running in JavaScriptCore without Node.
- AI chat and text actions such as rewrite and translate, through Apple Intelligence, tools such as Claude or Codex, or your own API key.
- Calendar, floating notes, quicklinks, per-app hotkeys, a hyper key and an app uninstaller.

Coming from Raycast, you can import a `.rayconfig` export from Raycast 2.0 or later to bring over shortcuts, favorites, snippets and clipboard history. Raycast sells a Pro plan on top of its free launcher. Tinycast needs no account, and the developer says it collects no telemetry and will stay free. Alfred also launches apps and searches files, with extra features sold as its Powerpack.

TextExpander is built around text expansion, runs on Mac, Windows, Chrome, iPhone and iPad, and shares snippets across a team. In Tinycast, snippets are one feature among many, off until you switch them on.

Tinycast needs macOS 26. The DMG and ZIP on GitHub are Apple silicon builds, and the DMG is Developer ID-signed and notarized. Intel Macs install through the project's Homebrew tap, and Universal builds also appear on the releases page. A separate `tinycast@beta` cask follows beta releases.
