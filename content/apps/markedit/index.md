---
name: "MarkEdit"
summary: "Edits Markdown files as highlighted source in a plain Mac window, with optional extensions for preview and themes."
category: "Writing"
tags: ["markdown", "text-editor", "native", "markdown-editor"]
alternativeTo: ["typora", "ia-writer"]
repository: "https://github.com/MarkEdit-app/MarkEdit"
website: "https://github.com/MarkEdit-app/MarkEdit"
license: "MIT"
licenseUrl: "https://github.com/MarkEdit-app/MarkEdit/blob/main/LICENSE"
download: "https://github.com/MarkEdit-app/MarkEdit/releases"
freeDownload: true
homebrew: "markedit"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/MarkEdit-app/MarkEdit", "https://github.com/MarkEdit-app/MarkEdit/blob/main/LICENSE", "https://raw.githubusercontent.com/MarkEdit-app/MarkEdit/main/README.md", "https://github.com/MarkEdit-app/MarkEdit/releases", "https://github.com/MarkEdit-app/MarkEdit/releases/tag/v1.37.1", "https://typora.io/"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.png", "alt": "MarkEdit showing a Markdown document in its native Mac editor.", "source": "https://raw.githubusercontent.com/MarkEdit-app/MarkEdit/main/Screenshots/01.png", "credit": "MarkEdit contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/MarkEdit-app/MarkEdit/main/Icon.png", "credit": "MarkEdit contributors", "license": "MIT; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://raw.githubusercontent.com/MarkEdit-app/MarkEdit/main/Screenshots/01.png", "credit": "MarkEdit contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

MarkEdit opens Markdown files and shows the source with syntax highlighting, the way TextEdit handles plain text. You type the markup yourself. The editor follows the GitHub Flavored Markdown spec and adds no syntax of its own.

Editing runs on CodeMirror 6, and the window behaves like any other Mac app:

- Multiple cursors and code folding.
- Million-line files open and edit without trouble, according to the developer.
- Shortcuts and AppleScript can drive it.
- System text features work in the text, including Writing Tools, inline predictions and force-touch lookup.

Anything beyond editing comes from extensions. A built-in manager installs the official ones, which add a rendered preview, hidden syntax, themes, visual table editing and AI writing help. You can also write your own in CSS, JavaScript or as CodeMirror extensions. The developer says MarkEdit collects no user data.

Typora hides the markup and renders formatting as you type. MarkEdit keeps every asterisk and hash in view, and a preview is something you add.

Version 1.37.1 needs macOS 26, and older builds for macOS 12 to 15 stay on the releases page. The main DMG holds a Universal app, Developer ID-signed and notarized, and a smaller Apple silicon-only DMG sits beside it. The app checks for updates by itself.
