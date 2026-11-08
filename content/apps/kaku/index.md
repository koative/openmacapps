---
name: Kaku
summary: A WezTerm-based terminal preconfigured with fonts, themes, Mac shortcuts and optional AI help.
category: Developer tools
tags:
- terminal
- shell
- coding-agents
- terminal-emulator
repository: https://github.com/tw93/Kaku
website: https://kaku.fun
license: MIT
licenseUrl: https://github.com/tw93/Kaku/blob/main/LICENSE.md
download: https://github.com/tw93/Kaku/releases
freeDownload: true
homebrew: "kaku"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/tw93/Kaku
- https://github.com/tw93/Kaku/blob/main/LICENSE.md
- https://github.com/tw93/Kaku/releases
- https://formulae.brew.sh/cask/kaku
- https://kaku.fun
- https://raw.githubusercontent.com/tw93/Kaku/main/README.md
- https://github.com/tw93/Kaku/releases/tag/V0.29.0
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/tw93/Kaku/main/assets/logo.icns
  credit: Tw93
  license: MIT repository asset; Kaku name and logo retained by the author
---

Kaku opens as a ready-to-use terminal: JetBrains Mono, a light or dark theme that can follow the system, shell completions and syntax highlighting are set up before you type anything. It is built on WezTerm, so the full Lua configuration is still there when you want it, and most existing WezTerm configs carry over.

Cmd-T opens a tab and Cmd-D splits a pane. Windows, panes and working directories come back after a restart. A right-click menu covers pasting, searching, splitting and closing, and Cmd-click opens URLs and file paths even when a long URL wraps across lines.

- An optional assistant suggests a fix when a command fails, and Cmd-Shift-E puts it at the prompt for you to check.
- Typing `#` and a description at the prompt turns it into a command.
- Cmd-L opens a chat about the terminal output or project files.
- `kaku remote` gives a link for using the same session from a browser on another computer.
- Shortcuts open Lazygit and the Yazi file manager if they are installed.

For the AI parts you bring a provider: `kaku ai` links your existing Codex connection, or an API service you configure. Kaku does not provide or relay that service, and the terminal works the same without it.

Kaku runs only on macOS and needs no account. The download is a DMG holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. Homebrew has it as the `kaku` cask. `kaku update` or Check for Updates in the app menu installs new versions.
