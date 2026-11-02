---
name: "Nimbalyst"
summary: "A visual workspace for Codex and Claude Code that runs parallel agent sessions and reviews their edits in WYSIWYG editors."
category: "AI"
tags:
  - coding-agents
  - markdown
  - diagrams
  - git
  - kanban
  - cross-platform
repository: https://github.com/nimbalyst/nimbalyst
website: https://nimbalyst.com
license: "MIT"
licenseUrl: https://github.com/nimbalyst/nimbalyst/blob/main/LICENSE
download: https://github.com/nimbalyst/nimbalyst/releases
homebrew: "nimbalyst"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/nimbalyst/nimbalyst
  - https://github.com/nimbalyst/nimbalyst/blob/main/LICENSE
  - https://github.com/nimbalyst/nimbalyst/blob/main/LICENSING.md
  - https://github.com/nimbalyst/nimbalyst/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nimbalyst/nimbalyst/main/packages/electron/icon.png
    credit: "Nimbalyst Inc."
    license: "MIT; upstream project asset, trademarks retained"
---

Nimbalyst is a desktop workspace for working alongside coding agents. Codex and Claude Code run side by side, with OpenCode and GitHub Copilot in alpha, and each session can get its own git worktree so several run in parallel. Sessions sit on a kanban board, can be searched and resumed, and are linked to the files they touched.

Instead of reading raw diffs, you review an agent's edits inside visual editors for Markdown, Mermaid diagrams, Excalidraw drawings, mockups, CSV files and data models, or in a Monaco code editor, and accept or reject each change. Plans, bugs and to-dos live as plain files in the repository where both you and the agent can update them. Git staging, AI-drafted commits, an embedded terminal and MCP servers are built in, and an iOS companion app shows which sessions are waiting on you.

The agents themselves need their own accounts or API keys. The app sends anonymous usage analytics to PostHog unless you turn them off under Settings, Advanced, Analytics; real-time collaboration goes through a separate sync service run by Nimbalyst. Builds are available for Apple silicon and Intel Macs on macOS 12 or later, and early-access alpha releases are opt-in.
