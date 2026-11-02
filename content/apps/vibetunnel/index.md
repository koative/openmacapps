---
name: "VibeTunnel"
summary: "A menu bar server that mirrors your Mac's terminal sessions into a web browser so you can watch and drive them from any device."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - menu-bar
  - remote-control
repository: https://github.com/amantus-ai/vibetunnel
website: https://vibetunnel.sh
license: "MIT"
licenseUrl: https://github.com/amantus-ai/vibetunnel/blob/main/LICENSE
download: https://github.com/amantus-ai/vibetunnel/releases
homebrew: "vibetunnel"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/amantus-ai/vibetunnel
  - https://github.com/amantus-ai/vibetunnel/blob/main/LICENSE
  - https://github.com/amantus-ai/vibetunnel/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/amantus-ai/vibetunnel/main/mac/VibeTunnel/Assets.xcassets/AppIcon.appiconset/icon_1024x1024%201.png
    credit: "Amantus Machina and VibeTunnel contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

VibeTunnel runs a small server from the menu bar and shows your terminal sessions in a web dashboard at `localhost:4020`. Prefix a command with `vt` (for example `vt npm test`, or `vt --shell` for an interactive shell) and its session appears in the browser, where you can watch output and type into it. It is aimed at keeping an eye on long builds and terminal-based AI coding agents from a phone or another computer; sessions are also recorded in asciinema format.

The dashboard stays on your Mac unless you open it up. For remote access the project recommends Tailscale, and ngrok and Cloudflare tunnels are also supported; logins use your macOS account password by default. The app installs the `vt` script in `/usr/local/bin`, and the first session scans your home folder for Git repositories, which can trigger macOS privacy prompts.

The Mac app needs macOS 14 or later on Apple silicon; Intel Macs and Linux can use the npm package instead. Every release so far is a 1.0 beta.
