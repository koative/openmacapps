---
name: "kooky"
summary: "Minimal native macOS terminal for AI coding agents with sidebar workspaces, split panes and session history."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - workspaces
  - ssh
repository: "https://github.com/iAmCorey/kooky"
website: "https://github.com/iAmCorey/kooky"
license: "MIT"
licenseUrl: "https://github.com/iAmCorey/kooky/blob/main/LICENSE"
download: "https://github.com/iAmCorey/kooky/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iAmCorey/kooky"
  - "https://github.com/iAmCorey/kooky/blob/main/LICENSE"
  - "https://github.com/iAmCorey/kooky/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/iAmCorey/kooky/main/branding/AppIcon.png"
    credit: "kooky contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

kooky is a terminal for working with AI coding agents. Workspaces sit in a sidebar, each with its own tabs and split panes, and a menu launches supported agents such as Claude Code, Codex and Gemini CLI. It shows which agents are waiting for input, lists past conversations you can resume, and adds Git worktrees and SSH workspaces. The README says it has no accounts or telemetry and keeps its state on your device. It suits developers who run several agents at once.

Requires macOS 14 or later. The release build is ad hoc signed and not notarized, so Gatekeeper blocks the first launch. The README describes three ways to allow it; its system-wide Gatekeeper option must be turned back on afterwards. Building from source needs Xcode 26 or later.
