---
name: "Cate"
summary: "An infinite canvas workspace that arranges editors, terminals, and browser panels for parallel coding agents."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - code-editor
  - workspaces
repository: "https://github.com/0-AI-UG/cate"
website: "https://cate.cero-ai.com"
license: "MIT"
licenseUrl: "https://github.com/0-AI-UG/cate/blob/main/LICENSE"
download: "https://github.com/0-AI-UG/cate/releases"
freeDownload: true
homebrew: "cate"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/0-AI-UG/cate"
  - "https://github.com/0-AI-UG/cate/blob/main/LICENSE"
  - "https://github.com/0-AI-UG/cate/releases"
  - "https://github.com/0-AI-UG/cate/blob/main/README.md"
  - "https://github.com/0-AI-UG/cate/releases/tag/v2.0.5"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/0-AI-UG/cate/main/ios/Cate/Assets.xcassets/AppIcon.appiconset/AppIcon.png"
    credit: "0-AI UG"
    license: "MIT; upstream project asset, trademarks retained"
---

Cate is a workspace for running several coding agents at once. Open a project folder and it becomes an infinite canvas where you place terminals, Monaco editors, browser panels and file viewers. Run Claude Code, Codex or another agent CLI in a Cate terminal, and each panel marks its agent as running, done or waiting for you, with a notification when one needs an answer.

- Type what you are working on and Cate creates a git worktree and branch, each with its own coloured area on the canvas.
- Terminals return with their scrollback when you reopen a project, and agents reattach with their resume commands.
- A usage view tracks token use and API-equivalent cost per agent and model, and shows how much of your Claude Code or Codex plan limits is used.
- Inside a Cate terminal, a `cate` command lets agents drive a browser panel, read another terminal or start other agents.

Panels can float on the canvas, dock into tabs and splits, or move to their own window, and the layout is saved per project. Git tools include multi-repo source control, side-by-side diffs and ripgrep search, with Command-K for commands, panels and files.

Releases include DMG and ZIP builds for Apple silicon and Intel Macs, alongside Windows and Linux packages.

A workspace can also live on an SSH host or a WSL distro, with terminals, git and agents running on that machine. You can pair other computers or an iPhone by QR code to share a live workspace, either on the same network or through the Cate Connect service, which the project says is end-to-end encrypted. Every paired device gets full access.
