---
name: "Seahelm"
summary: "Native macOS workspace for coding agents in git worktrees, with split panes, status tracking and Ghostty rendering."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - git-worktrees
  - ghostty
repository: "https://github.com/BetaYao/seahelm"
website: "https://www.seahelm.dev"
license: "MIT"
licenseUrl: "https://github.com/BetaYao/seahelm/blob/main/LICENSE"
download: "https://github.com/BetaYao/seahelm/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/BetaYao/seahelm"
  - "https://github.com/BetaYao/seahelm/blob/main/LICENSE"
  - "https://github.com/BetaYao/seahelm/releases/latest"
  - "https://www.seahelm.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/BetaYao/seahelm/main/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png"
    credit: "Seahelm Contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Seahelm is a native workspace for running several coding agents at once. Each git worktree gets a tab, panes can be split inside a worktree, and a status pill at the top of the screen flags worktrees where an agent is running, waiting or broken. Claude Code and Codex get native hook integration, agents can drive the workspace from a CLI, and sessions keep running after you quit the app. It is for developers who work across branches with Claude Code, Codex or similar agents.

It needs macOS 14.0 or later. Release zips are published for Apple silicon and Intel, and the README also offers a curl-to-shell installer. The README does not say whether the release zips are notarized, so the first launch may need approval in System Settings. The author says nearly all of the code was written by coding agents and not reviewed line by line.
