---
name: "FSNotes"
summary: "Keeps notes as Markdown or plain-text files in folders you choose, with search, tags and links."
category: "Writing"
tags: ["notes", "markdown", "native", "note-taking"]
alternativeTo: ["bear"]
repository: "https://github.com/glushchenko/fsnotes"
website: "https://fsnot.es"
license: "MIT"
licenseUrl: "https://github.com/glushchenko/fsnotes/blob/master/LICENSE"
download: "https://github.com/glushchenko/fsnotes/releases"
freeDownload: true
homebrew: "fsnotes"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/glushchenko/fsnotes", "https://github.com/glushchenko/fsnotes/blob/master/LICENSE", "https://fsnot.es", "https://github.com/glushchenko/fsnotes/blob/master/README.md", "https://github.com/glushchenko/fsnotes/releases/tag/v7.5.1", "https://bear.app/faq/where-are-bears-notes-located/"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.webp", "alt": "FSNotes for macOS displaying its note list and editor in dark mode.", "source": "https://fsnot.es/img/fsnotes7/FSNotes7_macOS_Dark.webp?v=2", "credit": "FSNotes contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/glushchenko/fsnotes/master/FSNotes/Images.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "FSNotes contributors", "license": "MIT; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.webp", "source": "https://fsnot.es/img/fsnotes7/FSNotes7_macOS_Dark.webp?v=2", "credit": "FSNotes contributors", "license": "Upstream project website asset; trademarks retained"}]
---

FSNotes edits notes that are ordinary Markdown or plain-text files in folders you pick, so any other text editor can open the same notes. You write in GitHub Flavored Markdown and search the whole collection from the keyboard. The developer says it stays quick past 10,000 notes.

- Tags and `[[links]]` connect notes to each other.
- Code blocks, Mermaid diagrams and MathJax render inside the note.
- Private notes can be encrypted with AES-256.
- Notes can come from several folders and open in an external editor when you prefer one.
- Optional Git backups make scheduled commits, so you can look back through a note's history.

Sync goes through iCloud Drive or Dropbox. FSNotes for iPhone reads the same folders over iCloud Drive. Notes stay usable without an internet connection, and there is no account to create.

Bear also writes Markdown on the Mac and iPhone, but it keeps notes in its own SQLite database. FSNotes leaves them as separate files you can move, back up or edit with anything.

The GitHub release is a ZIP with a notarized Universal app for Apple silicon and Intel, and it needs macOS 12.4 or later. The App Store version is paid, updates automatically, and its purchases support further development. The source is MIT-licensed.
