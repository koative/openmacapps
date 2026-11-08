---
name: "Notes"
summary: "Keeps Markdown notes in nested folders and tags, with a Kanban board view for task lists."
category: "Writing"
tags:
  - notes
  - markdown
  - cross-platform
  - note-taking
alternativeTo:
  - bear
repository: https://github.com/nuttyartist/notes
website: https://www.notes-foss.com/
license: "MPL-2.0"
licenseUrl: https://github.com/nuttyartist/notes/blob/master/LICENSE
download: https://github.com/nuttyartist/notes/releases
freeDownload: true
homebrew: "notes-better"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/nuttyartist/notes", "https://github.com/nuttyartist/notes/blob/master/LICENSE", "https://github.com/nuttyartist/notes/releases", "https://www.notes-foss.com/", "https://raw.githubusercontent.com/nuttyartist/notes/master/README.md", "https://raw.githubusercontent.com/nuttyartist/notes/master/LICENSE", "https://github.com/nuttyartist/notes/releases/tag/v2.3.1", "https://bear.app/"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nuttyartist/notes/master/src/images/notes_icon.icns
    credit: "nuttyartist and Notes contributors"
    license: "MPL-2.0; upstream project asset, trademarks retained"
---

Notes keeps running in the background and comes forward when you press its global shortcut. It opens a window where you type in Markdown and file the note in a folder. Folders nest, and tags cut across them, so one note can sit in a project folder and still turn up under a tag.

- Markdown task lists can be shown as a Kanban board. The free version shows the board read-only; editing it needs a Pro license.
- Feed view puts several selected notes one after another in the editor.
- Light, Dark and Sepia themes are built in.
- Many actions have keyboard shortcuts, from creating a note to toggling the folder panel.

Notes are plain text kept in a local SQLite database, which on the Mac lives in `~/.config/Awesomeness`. The developers say the app tracks nothing.

The app is written in C++ with Qt and runs on Windows, Linux and macOS. Bear also keeps Markdown notes organized by tags, and it runs on iPhone and iPad as well as the Mac. Notes has no mobile app, and sync is on its list of planned features.

Version 2.3.1 from October 2024 is the latest release. Its main Mac DMG installs an app named Notes Better, Universal for Apple silicon and Intel, notarized, requiring macOS 11 or later.
