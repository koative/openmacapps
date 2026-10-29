---
name: "Textus"
summary: "A Markdown editor that formats as you type, with export, math, diagrams and an optional AI assistant using your own provider."
category: "Writing"
tags:
  - markdown
  - markdown-editor
  - text-editor
  - ai-writing
  - cross-platform
alternativeTo:
  - typora
repository: https://github.com/CatVinci-Studio/Textus
website: https://textus.catvinci.com
license: "MIT"
licenseUrl: https://github.com/CatVinci-Studio/Textus/blob/main/LICENSE
download: https://github.com/CatVinci-Studio/Textus/releases
homebrew: "textus"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/CatVinci-Studio/Textus
  - https://github.com/CatVinci-Studio/Textus/blob/main/LICENSE
  - https://github.com/CatVinci-Studio/Textus/releases
  - https://textus.catvinci.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/CatVinci-Studio/Textus/main/src-tauri/icons/icon.icns
    credit: "CatVinci Studio"
    license: "MIT; upstream app icon, trademarks retained"
---

Textus edits plain .md files and renders Markdown in place while you write, covering tables, task lists, footnotes, code blocks, math and Mermaid diagrams. Documents export to PDF, Word, HTML and other formats, and the editor works fully offline without an account.

Its AI assistant suggests continuations, flags typos and grammar, proposes edits and leaves review comments, but only after you connect a provider yourself: sign in with a ChatGPT or Claude account, add an API key, or point it at a local model through Ollama. A plugin system with graph view, Vim mode and version history is in testing in the 1.3 beta channel. Builds cover Apple silicon and Intel Macs, Windows and Linux.
