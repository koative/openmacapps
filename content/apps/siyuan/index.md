---
name: "SiYuan"
summary: "Keeps notes as blocks you can reference, embed and query, stored in a workspace folder on your Mac."
category: "Writing"
tags: ["notes", "markdown", "knowledge-base", "note-taking"]
alternativeTo: ["notion", "obsidian"]
repository: "https://github.com/siyuan-note/siyuan"
website: "https://b3log.org/siyuan/en/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/siyuan-note/siyuan/blob/master/LICENSE"
download: "https://github.com/siyuan-note/siyuan/releases"
freeDownload: true
homebrew: "siyuan"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/siyuan-note/siyuan", "https://github.com/siyuan-note/siyuan/blob/master/LICENSE", "https://github.com/siyuan-note/siyuan/blob/master/README.md", "https://github.com/siyuan-note/siyuan/releases", "https://raw.githubusercontent.com/siyuan-note/siyuan/master/README.md", "https://b3log.org/siyuan/en/", "https://b3log.org/siyuan/en/pricing.html", "https://github.com/siyuan-note/siyuan/releases/tag/v3.8.9", "https://obsidian.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/siyuan-note/siyuan/master/app/src/assets/icon-mac.png", "credit": "SiYuan contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained"}]
---

SiYuan breaks every note into content blocks, so you can link to a single paragraph in another document, or embed it, and see the backlinks from the other side. You write in a Markdown editor that renders as you type, with list outlining and block zoom-in for working on one branch at a time.

- Blocks take custom attributes, and an SQL query embedded in a document collects every block that matches it.
- A database block shows records in a table view.
- Flashcards turn your notes into spaced-repetition reviews.
- Documents hold math formulas, charts, flowcharts, Gantt charts and staves.
- Export covers standard Markdown with its assets, PDF, Word and HTML.
- AI writing and question answering run through the OpenAI API, and Tesseract handles OCR.

Everything sits in a workspace folder on disk. Each notebook is a folder of `.sy` documents stored as JSON, with assets, templates and plugins in folders of their own. Do not put that workspace in a third-party sync folder; the project warns this can corrupt data.

Syncing between devices needs a paid membership, either for SiYuan's own cloud storage or for linking your own S3 or WebDAV storage. Working locally costs nothing, including commercial use. The Mac release comes as two DMGs, one for Apple silicon and one for Intel, and there are apps for iPhone and Android too.

Obsidian also keeps notes on your Mac, as plain Markdown files that any text editor can open. SiYuan stores its documents as JSON instead. In exchange, every block has its own address, which you can reference, query or embed.
