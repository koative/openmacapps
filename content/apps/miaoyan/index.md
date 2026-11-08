---
name: "MiaoYan"
summary: "Keeps Markdown notes as plain files in a folder you choose and edits them in a three-column window."
category: "Writing"
tags: ["markdown", "notes", "local-first", "distraction-free", "note-taking"]
alternativeTo: ["bear"]
repository: "https://github.com/tw93/MiaoYan"
website: "https://miaoyan.app"
license: "MIT"
licenseUrl: "https://github.com/tw93/MiaoYan/blob/main/LICENSE"
download: "https://github.com/tw93/MiaoYan/releases"
freeDownload: true
homebrew: "miaoyan"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/tw93/MiaoYan", "https://github.com/tw93/MiaoYan/blob/main/LICENSE", "https://github.com/tw93/MiaoYan/blob/main/README.md", "https://github.com/tw93/MiaoYan/releases", "https://github.com/tw93/MiaoYan/releases/tag/V4.8.0", "https://miaoyan.app", "https://bear.app/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/tw93/MiaoYan/main/Resources/app.icon/Assets/43.png", "credit": "Tw93 and MiaoYan contributors", "license": "MIT; upstream project asset, trademarks retained; the icon artwork the project shows in its README"}]
screenshots: []
---

MiaoYan opens a folder of Markdown files and shows it in three columns: folders, the notes inside, and the editor. You pick the folder in Preferences, and every note stays a plain `.md` file there.

Writing happens in plain Markdown with syntax highlighting. Press Command-backslash to put a rendered preview beside the editor, or switch to preview alone. The editor handles:

- wikilinks between notes
- LaTeX math and Mermaid diagrams
- version history and automatic formatting
- slide decks, split on `---` lines and shown with reveal.js

Sync is left to the folder. MiaoYan never signs in to a cloud account; put the folder in iCloud Drive or one kept by a sync client such as Nutstore, and it reads and writes the files like any other. Before switching folders it checks for read and write access and keeps the old path if the new one fails. The developer says the app collects no data.

A `miao` command-line tool can open, create, search, list and print notes from Terminal, installed separately with a script from the repository.

Bear also writes in Markdown, but it organizes notes by tags inside its own library. MiaoYan keeps your folder structure and the files themselves.

The GitHub DMG holds a Universal app for Apple silicon and Intel, needs macOS 12 or later, and is notarized. That build and the Homebrew cask are the free MIT-licensed version. A paid App Store edition covers the Mac, iPhone and iPad with one purchase.
