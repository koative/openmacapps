---
name: "Maestro"
summary: "A keyboard-driven desktop app for running and supervising several AI coding agents across projects at once."
category: "Developer tools"
tags:
  - coding-agents
  - agents
  - workspaces
  - cross-platform
repository: https://github.com/RunMaestro/Maestro
website: https://runmaestro.ai
license: "AGPL-3.0"
licenseUrl: https://github.com/RunMaestro/Maestro/blob/main/LICENSE
download: https://github.com/RunMaestro/Maestro/releases
freeDownload: true
homebrew: "maestro"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/RunMaestro/Maestro
  - https://github.com/RunMaestro/Maestro/blob/main/LICENSE
  - https://github.com/RunMaestro/Maestro/releases
  - https://formulae.brew.sh/cask/maestro
  - https://raw.githubusercontent.com/RunMaestro/Maestro/main/README.md
  - https://runmaestro.ai
  - https://github.com/RunMaestro/Maestro/releases/tag/v1.0.2
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/RunMaestro/Maestro/main/build/icon.icns
    credit: "RunMaestro and Maestro contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Maestro runs several command-line coding agents side by side in one window. You give each agent a project or branch, send it work from the keyboard, and follow every session with its own history.

Claude Code, OpenAI Codex, OpenCode and Factory Droid are supported, with Copilot CLI, Qwen3 Coder and Oh My Pi in beta. At least one of them has to be installed and signed in already. Maestro passes each request through to that agent, so the MCP tools, skills and permissions you set up there still apply.

GitHub releases include separate Apple silicon and Intel disk images, next to Windows and Linux builds.

- Auto Run works through a Markdown checklist or a written goal, giving each task a fresh session.
- Git worktrees let agents work on separate branches while you keep using the main checkout.
- A built-in web server with a QR code lets you check on agents from a phone, on the local network or through a Cloudflare tunnel.
- `maestro-cli` runs playbooks without the window, for example from cron or a CI pipeline, with plain or JSONL output.
- Group Chat makes one agent the moderator, which routes a question to the others and collects their answers.

Each agent also gets a plain command terminal next to the AI one. Maestro imports sessions you started before installing it. When a provider is overloaded or a quota runs out, it resends the prompt after the wait and resumes Auto Run batches.
