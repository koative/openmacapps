---
name: "MarkText"
summary: "Edits Markdown in a live rendered view, with KaTeX math, GitHub Flavored Markdown, and focus and typewriter modes."
category: "Writing"
tags: ["markdown", "editor", "distraction-free", "markdown-editor"]
alternativeTo: ["typora", "ia-writer"]
repository: "https://github.com/marktext/marktext"
website: "https://github.com/marktext/marktext"
license: "MIT"
licenseUrl: "https://github.com/marktext/marktext/blob/develop/LICENSE"
download: "https://github.com/marktext/marktext/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/marktext/marktext", "https://github.com/marktext/marktext/blob/develop/LICENSE", "https://github.com/marktext/marktext/blob/develop/README.md", "https://github.com/marktext/marktext/releases", "https://github.com/marktext/marktext/releases/tag/v0.23.0", "https://marktext.me/docs/basics", "https://marktext.me/docs/editing", "https://marktext.me/docs/themes", "https://typora.io/", "https://formulae.brew.sh/cask/mark-text"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/marktext/marktext/blob/develop/packages/desktop/build/icons/icon.png", "credit": "MarkText contributors", "license": "MIT; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

MarkText renders Markdown formatting in the same view where you type. It hides syntax characters that are not needed on screen, so you write and edit the formatted text directly, and what you save is still a Markdown file.

- It follows the CommonMark and GitHub Flavored Markdown specs, with partial support for Pandoc's Markdown.
- Math written for KaTeX, front matter and emoji are handled as extensions.
- Source Code mode shows the raw markup, Typewriter mode keeps the cursor in the middle of the window, and Focus mode fades out every line except the current one.
- Images can be pasted straight from the clipboard into a document.
- Finished documents export to HTML or PDF.

Key bindings cover paragraph types and inline styles, and the command palette (Shift-Command-P) lists every available command. The app has 33 built-in themes, among them Cadmium Light, Nord and Material Dark.

Typora also renders Markdown inline while you edit. Its site offers a 15-day trial and then a paid licence for up to three devices, while MarkText is free under the MIT license.

MarkText needs macOS 13 Ventura or later. There is no Universal build: the GitHub release page has separate DMG installers for Apple silicon (arm64) and Intel (x64). The README still shows a Homebrew command, but Homebrew disabled its `mark-text` cask on 1 September 2026 because the app does not pass Gatekeeper. The same project also publishes builds for Windows and Linux.
