---
name: "Zed"
summary: "Edits code with language servers, Git, a debugger, real-time collaboration and an optional AI agent."
category: "Developer tools"
tags: ["code-editor", "collaboration", "development"]
alternativeTo: ["sublime-text", "visual-studio-code", "ultraedit"]
repository: "https://github.com/zed-industries/zed"
website: "https://zed.dev"
license: "GPL-3.0-or-later AND Apache-2.0"
licenseUrl: "https://github.com/zed-industries/zed/blob/main/LICENSE-GPL"
download: "https://zed.dev/download"
freeDownload: true
homebrew: "zed"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/zed-industries/zed", "https://github.com/zed-industries/zed/blob/main/LICENSE-APACHE", "https://zed.dev/download", "https://github.com/zed-industries/zed/blob/main/LICENSE-GPL", "https://zed.dev/docs/macos", "https://zed.dev/docs/telemetry", "https://zed.dev/docs/collaboration/overview", "https://zed.dev/docs/remote-development", "https://zed.dev/pricing", "https://github.com/zed-industries/zed/blob/main/README.md", "https://zed.dev"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/zed-industries/zed/blob/main/crates/zed/resources/app-icon.png", "credit": "Zed contributors", "license": "GPL-3.0-or-later; project trademarks retained"}]
icon: "./assets/icon.png"
---

Open a folder in Zed and you can jump between files and symbols and edit with language intelligence supplied by Tree-sitter grammars and language servers. The editor is written in Rust and draws its interface on the GPU.

- Multibuffers show excerpts from many files in one editable view, which helps with project-wide refactors.
- The Git panel shows staged and unstaged changes and the current branch.
- A debugger connects to languages through the Debug Adapter Protocol.
- Remote development runs a headless Zed server over SSH while the interface stays on the Mac.
- Vim emulation and an extension system cover keybindings, themes and extra languages.

Real-time collaboration lets several people edit the same project with shared cursors and voice chat in channels. It requires signing in, and sharing a project gives collaborators access to its files. The AI agent panel works with Zed-hosted models, your own API keys from providers, or local models.

Compared with Visual Studio Code, Zed covers the same everyday editing, Git and debugging work, but VS Code extensions do not run in it. Zed uses its own extension format instead.

The editor itself is free. Zed Pro is an optional paid plan that adds hosted AI models and unlimited edit predictions; the editor works without it when you use your own keys or no AI. Zed sends usage metrics and crash reports by default, and both can be turned off in settings. Hosted AI and collaboration also send data to Zed's servers.

Zed runs on macOS 12 or later on Apple silicon and Intel Macs, per its documentation. Most of the code is GPL-3.0-or-later, with some components under Apache-2.0.
