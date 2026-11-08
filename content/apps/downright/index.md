---
name: "Downright"
summary: "A Markdown editor and reader that opens ordinary .md files in place and keeps their source exactly as written."
category: "Writing"
tags:
  - markdown
  - text-editor
  - reader
  - quick-look
  - offline
  - markdown-editor
alternativeTo:
  - typora
repository: https://github.com/ezzy1630/Downright
website: https://downright.cc
license: "MIT"
licenseUrl: https://github.com/ezzy1630/Downright/blob/main/LICENSE
download: https://downright.cc/download/
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/ezzy1630/Downright
  - https://github.com/ezzy1630/Downright/blob/main/LICENSE
  - https://downright.cc/download/
  - https://github.com/ezzy1630/Downright/releases
  - https://downright.cc
  - https://github.com/ezzy1630/Downright/blob/main/README.md
  - https://typora.io/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ezzy1630/Downright/main/Resources/AppIcon.png
    credit: "Downright contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Downright opens Markdown files as ordinary Mac documents. You open a .md file from Finder wherever it already sits, with no library or vault to import it into, and work on it formatted in the Document view or as raw text in the Source view. The two views keep the same position and selection, and the rendering never rewrites or normalizes what is on disk.

- It renders CommonMark and GitHub-flavored Markdown with tables, task lists, callouts, footnotes, math, and Mermaid and PlantUML diagrams.
- If another app or a coding agent changes an open file, Downright refreshes it in place, keeps unsaved local edits, and can show word-level differences for review.
- Local snapshots build a version timeline.
- Quick Look previews and Finder thumbnails cover Markdown files, and documents export to HTML and PDF.
- The `down` and `md` terminal commands open files, export them and read a document or its outline without launching the app.

It also handles .markdown, .mdx, .qmd, .rmd and a few other extensions, with six themes and editable keyboard shortcuts.

The developer says the app works offline and needs no account. Version 1.0.22 is a Universal app for Apple silicon and Intel that requires macOS 14 or later, and it is Developer ID-signed and notarized. Updates arrive through Sparkle, including after a Homebrew install from the developer's own tap.

Typora shows formatting live while you type in a single view and is sold after a free trial. Downright keeps the formatted reading view and the exact source as separate views.
