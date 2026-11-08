---
name: "Neon Vision Editor"
summary: "A lightweight Swift editor for code and Markdown, built for quick edits rather than full IDE workflows."
category: "Developer tools"
tags: ["code-editor", "markdown", "text-editor"]
repository: "https://github.com/h3pdesign/Neon-Vision-Editor"
website: "https://h3pdesign.github.io/Neon-Vision-Editor/"
license: "Apache-2.0"
licenseUrl: "https://github.com/h3pdesign/Neon-Vision-Editor/blob/main/LICENSE"
download: "https://github.com/h3pdesign/Neon-Vision-Editor/releases"
freeDownload: true
homebrew: "neon-vision-editor"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/h3pdesign/Neon-Vision-Editor", "https://github.com/h3pdesign/Neon-Vision-Editor/blob/main/LICENSE", "https://github.com/h3pdesign/Neon-Vision-Editor/releases", "https://h3pdesign.github.io/Neon-Vision-Editor/", "https://apps.apple.com/de/app/neon-vision-editor/id6758950965", "https://raw.githubusercontent.com/h3pdesign/Neon-Vision-Editor/main/README.md", "https://github.com/h3pdesign/Neon-Vision-Editor/releases/tag/v2.1.7"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/h3pdesign/Neon-Vision-Editor/main/docs/images/NeonVisionEditorIcon.png", "credit": "h3pdesign", "license": "Apache-2.0 repository asset; trademarks retained"}]
---

Open scripts, config files and Markdown in Neon Vision Editor for quick edits without setting up an IDE project. Files open in tabs, Quick Open (Command-P) jumps between them, and the project sidebar also holds Find in Files and Git changes.

- Syntax highlighting covers many languages, including TeX/LaTeX and Typst, with regex find and replace, Emmet expansion and an optional lightweight Vim mode.
- Markdown, HTML and SVG files get a preview pane on request; PDF and PNG files open in a preview automatically.
- Markdown exports to PDF as paginated or single-page output, and math renders offline with bundled KaTeX.
- A side-by-side diff compares a tab with the file on disk or with another open tab.
- There are 30 built-in color themes plus custom colors.

The direct GitHub build adds a terminal tab, a Python project runner and the `nve` command-line helper, which the App Store version leaves out. The same editor also runs on iPhone, iPad and Apple Vision Pro. The v2.1.7 download is an Apple silicon build, Developer ID-signed and notarized. The README describes the app as designed and tested for macOS 26, with compatibility work for macOS 15.

Large files are handled in stages: past a size threshold the app defers features such as the minimap and full syntax analysis, and files of 100 MB or more open read-only, showing only the first 4 MB. AI features are optional. Apple Intelligence is the default provider where available, others such as OpenAI, Anthropic and Gemini are opt-in, and keys go in the Keychain. The project states it collects no telemetry.
