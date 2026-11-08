---
name: "Wave Terminal"
summary: "A terminal with tiled blocks for shells, remote file editing, previews, a browser and AI chat."
category: "Developer tools"
tags:
  - terminal
  - ssh
  - cross-platform
  - terminal-emulator
alternativeTo:
  - putty
repository: https://github.com/wavetermdev/waveterm
website: https://www.waveterm.dev
license: "Apache-2.0"
licenseUrl: https://github.com/wavetermdev/waveterm/blob/main/LICENSE
download: https://www.waveterm.dev/download
freeDownload: true
homebrew: "wave"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/wavetermdev/waveterm
  - https://github.com/wavetermdev/waveterm/blob/main/LICENSE
  - https://www.waveterm.dev/download
  - https://github.com/wavetermdev/waveterm/releases
  - https://raw.githubusercontent.com/wavetermdev/waveterm/main/README.md
  - https://github.com/wavetermdev/waveterm/releases/tag/v0.14.5
  - https://www.chiark.greenend.org.uk/~sgtatham/putty/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/wavetermdev/waveterm/main/build/icons/512x512.png
    credit: "Command Line Inc. and Wave Terminal contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Wave Terminal lays out shells, editors, file previews, web pages and an AI chat as blocks in one window. You drag blocks to arrange them and expand any one to full screen, then drop back to the tiled view.

Remote sessions over SSH survive network changes and restarts of the app and reconnect by themselves. On a remote host you can open files in the built-in editor, with syntax highlighting, or preview Markdown, images, video, PDFs and CSV files inline.

- The `wsh` command manages the workspace from the shell and copies files between local and remote hosts.
- Command blocks run a single command in isolation so you can watch it.
- API keys and other secrets go into the system's secret store and are available in SSH sessions.
- Tab themes, terminal styles and background images change the look.

Wave AI reads terminal output and scrollback, and it can edit files after you approve the change, keeping a backup. You bring keys for OpenAI, Claude, Gemini and other providers, or run local models through Ollama or LM Studio. The developers say no account is required, and the beta includes some free AI credits.

PuTTY is a plain SSH and Telnet client with an xterm-style terminal. Wave adds remote editing, previews and persistent sessions around the shell.

Wave needs macOS 11 or later, with separate Apple silicon and Intel downloads. It is under the Apache 2.0 license.
