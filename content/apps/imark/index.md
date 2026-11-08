---
name: "Imark"
summary: "A Markdown reader that live-reloads on save, previews in Quick Look, and stores your comments inside the file."
category: "Writing"
tags:
  - markdown
  - reading
  - quick-look
  - previews
repository: "https://github.com/migsilva89/imark"
website: "https://imarkmd.com"
license: "MIT"
licenseUrl: "https://github.com/migsilva89/imark/blob/main/LICENSE"
download: "https://github.com/migsilva89/imark/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/migsilva89/imark"
  - "https://github.com/migsilva89/imark/blob/main/LICENSE"
  - "https://github.com/migsilva89/imark/releases"
  - "https://github.com/migsilva89/imark/blob/main/README.md"
  - "https://imarkmd.com"
  - "https://github.com/migsilva89/imark/releases/tag/v0.6.9"
  - "https://github.com/migsilva89/imark/releases/tag/v0.6.9-universal-test"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/migsilva89/imark/main/Support/AppIcon.icns"
    credit: "Miguel Silva"
    license: "MIT; upstream project asset, trademarks retained"
---

Imark opens a `.md` file as a rendered page and keeps it in step with the copy on disk. When you save in another editor, the view updates in place and keeps your scroll position, even through the delete-and-rename that some editors use for an atomic save.

Comments are its other job. You select a phrase and write a note, and Imark writes it into the Markdown source as an HTML comment, which means the note survives email, a commit or another app. Pressing Space on a Markdown file in Finder shows the same rendering through Quick Look.

- GitHub-flavored Markdown renders with tables, footnotes, front matter, syntax highlighting, Mermaid diagrams and KaTeX math.
- Ticking a task-list box writes the change back to the file.
- A foldable outline sits in the sidebar, and `[[note]]` wiki-links open files from the same folder, with back and forward history.
- Tabs, find with a match counter and on-device translation of a selection round it out.

Documents render with network requests blocked and remote images refused. Imark needs macOS 14 or later. The 0.6.9 disk image holds an Apple silicon build, signed with a Developer ID and notarized; a Universal build for Intel Macs is still in testing.

A pencil switch in the toolbar turns the page into a plain text editor with line numbers and marks beside changed lines. While edits are unsaved, live reload stops, and a save is refused if the file changed underneath you. The toolbar's Open in… item passes the file to editors such as Zed, Sublime, VS Code and Cursor, or to Claude and ChatGPT. A bundled review skill lets Claude Code and Codex open a plan and wait for your comments.
