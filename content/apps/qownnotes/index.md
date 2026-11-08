---
name: "QOwnNotes"
summary: "Manages plain-text Markdown notes with search, scripting, and optional Nextcloud integration."
category: "Writing"
tags: ["markdown", "notes", "plain-text", "note-taking"]
alternativeTo: ["bear"]
repository: "https://github.com/pbek/QOwnNotes"
website: "https://www.qownnotes.org/"
license: "GPL-2.0"
licenseUrl: "https://github.com/pbek/QOwnNotes/blob/main/LICENSE"
download: "https://github.com/pbek/QOwnNotes/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/pbek/QOwnNotes", "https://github.com/pbek/QOwnNotes/blob/main/LICENSE", "https://github.com/pbek/QOwnNotes/blob/main/README.md", "https://github.com/pbek/QOwnNotes/releases", "https://raw.githubusercontent.com/pbek/QOwnNotes/main/README.md", "https://www.qownnotes.org/installation/macos.html", "https://raw.githubusercontent.com/pbek/QOwnNotes/main/webpage/src/installation/macos.md", "https://github.com/pbek/QOwnNotes/releases/tag/v26.11.6", "https://bear.app/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/pbek/QOwnNotes/blob/main/icons/icon.png", "credit": "QOwnNotes contributors", "license": "GPL-2.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

QOwnNotes edits a folder of Markdown files: you point it at a directory, and each note is a plain text file you can also open in any other editor. The first line of a note becomes its file name, and renaming follows edits to that line unless you switch the behavior off. When another program changes a file, QOwnNotes reloads it and can show what changed.

- Search matches any part of a word and highlights the hits inside the note.
- Notes can link to each other with `[[Note]]` links, which get auto-completion and backlinks.
- Tags can be nested, notes can sit in subfolders, and you can switch between several note folders.
- Notes can be encrypted with AES-256, or with PGP or Keybase through scripts.
- A script repository installs add-ons from inside the app, and built-in AI support works with providers such as OpenAI and Groq.

Sync is left to you. Notes in a Nextcloud or ownCloud folder sync through that server, which also gives access to older versions and trashed notes once the QOwnNotes server app is installed. Syncthing or Dropbox work too, and imports cover Evernote and Joplin.

Bear also writes Markdown notes, organized with tags and synced through iCloud between Mac, iPhone and iPad. QOwnNotes keeps loose files in folders you choose and runs on Linux and Windows as well.

The GitHub disk image `QOwnNotes.dmg` holds a Universal app for Apple silicon and Intel and needs macOS 13. It is not notarized, so the first launch goes through Open Anyway in the Security settings. `QOwnNotesQt5.dmg` is the legacy Qt5 build, which you update by hand.
