---
name: "Stik"
summary: "Opens a floating sticky note on a global shortcut and saves what you type as a Markdown file."
category: "Productivity"
tags:
  - notes
  - markdown
  - keyboard-shortcuts
  - note-taking
repository: https://github.com/0xMassi/stik_app
website: https://www.stik.ink/
license: "MIT"
licenseUrl: https://github.com/0xMassi/stik_app/blob/main/LICENSE
download: https://www.stik.ink/download
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/0xMassi/stik_app
  - https://github.com/0xMassi/stik_app/blob/main/LICENSE
  - https://www.stik.ink/download
  - https://github.com/0xMassi/stik_app/releases
  - https://raw.githubusercontent.com/0xMassi/stik_app/main/README.md
  - https://github.com/0xMassi/stik_app/releases/tag/v0.9.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/0xMassi/stik_app/main/src-tauri/icons/128x128%402x.png
    credit: "Massi and Stik contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Stik opens a floating post-it over your work when you press Command-Shift-S in any app. You type, close it, and Stik writes the note to `~/Documents/Stik/` as an ordinary Markdown file. There is no onboarding and no account, and every shortcut can be changed in settings.

- Command-Shift-D dictates into the open note, and Command-Shift-V opens a new post-it that is already listening. WhisperKit runs the speech model on the Mac's Neural Engine.
- Command-Shift-C appends text selected in another app, such as Safari or Terminal, to a Clips note.
- Notes go into folders you name, are found through a command palette, and can be pinned to the desktop as floating stickies.
- The editor works on Markdown source, with highlights, wiki links, task lists, tables, slash commands, your own templates and an optional Vim mode.
- A note can be locked with AES-256 encryption and opened with Touch ID or the device password.

Stik is built with Tauri and Rust, requires macOS 14 or later and asks for the Accessibility permission for its global shortcuts. Version 0.9.0 comes as separate disk images for Apple silicon and Intel. The Apple silicon app is notarized, though its disk image is not. A built-in updater fetches new versions in the background.

Semantic search and folder suggestions use Apple's NaturalLanguage framework on the Mac. To sync, you turn on iCloud Drive in settings, point Stik at a folder that Dropbox or Syncthing already watches, or push a folder to a git remote. Notes can be imported straight from Apple Notes. The developer says anonymous analytics stay off unless you opt in and never include note content.
