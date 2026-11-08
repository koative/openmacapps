---
name: "LiteEdit"
summary: "A small code editor for opening a project folder, reading files and making quick edits."
category: "Developer tools"
tags: ["code-editor", "text-editor", "lightweight"]
repository: "https://github.com/arietan/lite-edit"
website: "https://arietan.github.io/lite-edit/"
license: "MIT"
licenseUrl: "https://github.com/arietan/lite-edit/blob/main/LICENSE"
download: "https://github.com/arietan/lite-edit/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/arietan/lite-edit", "https://github.com/arietan/lite-edit/blob/main/LICENSE", "https://github.com/arietan/lite-edit/releases", "https://github.com/arietan/lite-edit/blob/main/README.md", "https://github.com/arietan/lite-edit/releases/tag/v1.1.6", "https://github.com/arietan/lite-edit/blob/main/Package.swift", "https://github.com/arietan/homebrew-lite-edit/blob/main/Casks/lite-edit.rb", "https://arietan.github.io/lite-edit/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/arietan/lite-edit/main/LiteEdit.icns", "credit": "arietan and LiteEdit contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

LiteEdit opens a project folder in a sidebar tree so you can read through code and make small changes without starting a full IDE. Press Command-P to jump to a file by name, or Command-G to go to a line.

- Syntax highlighting covers more than 20 languages, among them Swift, Python, Rust, Go, JSON and YAML.
- Files open in tabs, with line numbers and a status bar that shows the cursor position and the detected language.
- Find and Replace accepts regular expressions and reports how many matches it found.
- Command-Shift-L selects all occurrences at once and edits them with multiple cursors, which helps when renaming something within one file.
- Option-Up and Option-Down move the current line, and Command-Shift-K deletes it.

When you quit, LiteEdit keeps the open folder, tabs, cursor positions and window state, and brings them back on the next launch. Right-click an item in the sidebar to reveal it in Finder.

The project draws a firm line around its scope. There are no extensions, no language server support, no built-in terminal and no Git interface, and the README sends you to VS Code, Xcode or Sublime Text for those. The app is written in Swift on AppKit, and the release DMG is well under 1 MB.

LiteEdit needs macOS 13 or later, and the release build runs on Apple silicon only. It is not signed with a Developer ID or notarized, so macOS may call it damaged on first launch until you clear the quarantine flag with the `xattr` command from the README. Installing from the project's Homebrew tap clears that flag for you.
