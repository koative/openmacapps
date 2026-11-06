---
name: "Volt"
summary: "Public-beta code editor on the VS Code core that drives Claude Code, Codex and other agents, with hunk-by-hunk review."
category: "Developer tools"
tags:
  - coding-agents
  - code-editor
  - cross-platform
repository: "https://github.com/LeulAria/volt"
website: "https://getvolt.dev"
license: "MIT"
licenseUrl: "https://github.com/LeulAria/volt/blob/main/LICENSE.txt"
download: "https://github.com/LeulAria/volt/releases/download/v0.0.6/volt-stable-0.0.6-darwin-universal.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/LeulAria/volt"
  - "https://github.com/LeulAria/volt/blob/main/LICENSE.txt"
  - "https://github.com/LeulAria/volt/releases"
  - "https://getvolt.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/LeulAria/volt/main/brand/volt.icns"
    credit: "Volt contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Volt is an editor built on the VS Code core for working with coding agents. Claude Code, Codex, Grok or a local model through Ollama runs in a chat beside your code, terminal and an in-app browser. Every agent edit stays pending until you keep or undo it hunk by hunk, and each turn is checkpointed in Git. Extensions come from Open VSX. It suits developers who already use an agent CLI or API key and want the editor and the review step in one window.

The macOS DMG is universal, and the README says builds from version 0.0.4 onward are signed with an Apple Developer ID and notarized. The README does not state a minimum macOS version. The project is public beta and below 1.0, so expect changes between releases; Windows and Linux builds exist but have had little testing. The README says there is no telemetry endpoint, but prompts and file contents go to the model you choose, and tab prediction is on by default and sends code around the cursor to that model.
