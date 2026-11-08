---
name: "Lapce"
summary: "Edits code with built-in language server support, optional Vim-style modal editing, remote development and a terminal."
category: "Developer tools"
tags: ["code-editor", "development", "cross-platform"]
alternativeTo: ["sublime-text", "visual-studio-code"]
repository: "https://github.com/lapce/lapce"
website: "https://lap.dev/lapce/"
license: "Apache-2.0"
licenseUrl: "https://github.com/lapce/lapce/blob/master/LICENSE"
download: "https://github.com/lapce/lapce/releases"
freeDownload: true
homebrew: "lapce"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/lapce/lapce", "https://github.com/lapce/lapce/blob/master/LICENSE", "https://github.com/lapce/lapce/releases", "https://raw.githubusercontent.com/lapce/lapce/master/README.md", "https://lap.dev/lapce/", "https://github.com/lapce/lapce/releases/tag/v0.4.6", "https://code.visualstudio.com/api/get-started/your-first-extension"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/lapce/lapce/blob/master/extra/images/logo.png", "credit": "Lapce contributors", "license": "Apache-2.0; project trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://github.com/lapce/lapce/blob/master/extra/images/screenshot.png", "credit": "Lapce contributors", "license": "Apache-2.0; project trademarks retained"}]
screenshots: [{"src": "./assets/screenshot.png", "alt": "Lapce on macOS showing a Rust project, code completion, file navigation, and an integrated terminal.", "source": "https://github.com/lapce/lapce/blob/master/extra/images/screenshot.png", "credit": "Lapce contributors"}]
icon: "./assets/icon.png"
---

Lapce opens a project folder and edits it with completion, diagnostics and code actions delivered over the Language Server Protocol, which the editor supports out of the box. Vim-style modal editing is built in too, and you can switch it off.

Remote development lets you keep editing in the window on your Mac while the project stays on a remote machine. Each release ships proxy builds for macOS, Linux and Windows to go with it. A built-in terminal runs commands inside the workspace without leaving the editor.

Plugins are WASI modules. Any language that compiles to WASI works for writing one, such as C, Rust or AssemblyScript.

The editor is written in Rust. Its interface uses Floem, a GUI toolkit from the same team. Text lives in the rope structure from the Xi editor, and wgpu does the drawing.

Lapce is still at version 0.4. The macOS download is a single DMG holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.

Visual Studio Code inspired Lapce's remote mode, and its extensions start life as TypeScript or JavaScript projects. Lapce plugins compile to WASI instead, so you can write them in Rust or C.
