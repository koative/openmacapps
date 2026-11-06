---
name: "Vigil"
summary: "Native macOS app that runs manager and worker trees of Claude Code, Codex and OpenCode agents, each in its own terminal."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - claude-code
  - developer-utilities
repository: "https://github.com/butterlatte-zhang/vigil"
website: "https://butterlatte-zhang.github.io/vigil/"
license: "GPL-3.0"
licenseUrl: "https://github.com/butterlatte-zhang/vigil/blob/main/LICENSE"
download: "https://github.com/butterlatte-zhang/vigil/releases/latest/download/Vigil-macos.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/butterlatte-zhang/vigil"
  - "https://github.com/butterlatte-zhang/vigil/blob/main/LICENSE"
  - "https://github.com/butterlatte-zhang/vigil/releases"
  - "https://butterlatte-zhang.github.io/vigil/"
---

Vigil runs trees of coding agents. A manager agent hands tasks to worker agents, and each node keeps its own native terminal session and full transcript, which can be replayed read-only. Results roll up to the manager as summaries, so its context stays small. Claude Code, Codex and OpenCode can be mixed in one tree. It is for developers who already use these CLIs and want them coordinated from one Mac app.

It requires macOS 14 or later on Apple silicon and at least one agent CLI on your PATH. The release DMG is signed and notarized, but macOS may still ask you to confirm opening it on first launch. Settings are JSON files under ~/.config/vigil. The code is GPL-3.0; the README points organizations that cannot comply with the GPL to a separate commercial license.
