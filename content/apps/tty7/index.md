---
name: "tty7"
summary: "A GPU-rendered terminal whose shells keep running after the app quits, with agent and SSH tools."
category: "Developer tools"
tags: ["terminal", "ssh", "persistence", "agents", "cross-platform", "terminal-emulator"]
repository: "https://github.com/l0ng-ai/tty7"
website: "https://tty7.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/l0ng-ai/tty7/blob/main/LICENSE"
download: "https://github.com/l0ng-ai/tty7/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/l0ng-ai/tty7", "https://github.com/l0ng-ai/tty7/blob/main/LICENSE", "https://github.com/l0ng-ai/tty7/releases", "https://raw.githubusercontent.com/l0ng-ai/tty7/main/README.md", "https://tty7.io", "https://tty7.io/getting-started/installation.md", "https://tty7.io/reference/privacy.md", "https://github.com/l0ng-ai/tty7/releases/tag/v26.10.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/l0ng-ai/tty7/main/assets/app-icon.png", "credit": "tty7 contributors", "license": "Apache-2.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Quit tty7 and the shells you started keep running, because a background server owns the shells and panes, not the window. After a reboot, the layout, the screen contents and supported agent conversations come back, with no tmux involved.

- Tabs and splits, with Command-P opening Search Everywhere for actions, open tabs, hosts and past agent sessions.
- Editor-style input in every pane: history-based suggestions, tab completion with explanations, highlighted syntax, multi-line editing and Control-R fuzzy history search, with no plugin to install.
- A side panel on Command-J with the process tree and listening ports, a file tree, diffs and read-only GitHub issues and pull requests, signed in through `gh`.
- SSH written in Rust, with saved profiles, passwords in the keychain, an SFTP browser, port forwarding and jump hosts.

For remote work, tty7 installs an unprivileged server on the other machine. Files, repositories, panes and Git data then stay there, and you can reconnect from any client and carry on.

Separate DMGs cover Apple silicon and Intel Macs, both Developer ID-signed and notarized. macOS 14 and later is the tested range. The app checks for updates every six hours, on a stable or nightly channel you pick. The documentation says nothing else leaves your machine apart from remote-server downloads and the GitHub tab's requests, and there is no telemetry or account.

Coding agents get their own handling. The terminal picks out 28 agent CLIs, among them Claude Code and Codex, from the command running in a pane, and never wraps them. Install an agent's hook in settings and its tab gets a status dot, plus a notification when it needs you. The bundled `tty7` command lets a script, or another agent, open a pane, send it a task, wait until it is free and read back the result.
