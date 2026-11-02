---
name: "Emdash"
summary: "A desktop workspace for running several AI coding agents in parallel, each in its own Git worktree, then reviewing and merging."
category: "AI"
tags:
  - coding-agents
  - git
  - worktrees
  - code-review
  - cross-platform
repository: https://github.com/generalaction/emdash
website: https://emdash.com
license: "Apache-2.0"
licenseUrl: https://github.com/generalaction/emdash/blob/main/LICENSE.md
download: https://github.com/generalaction/emdash/releases
homebrew: "emdash"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/generalaction/emdash
  - https://github.com/generalaction/emdash/blob/main/LICENSE.md
  - https://emdash.com/docs/telemetry
  - https://github.com/generalaction/emdash/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/generalaction/emdash/blob/main/apps/emdash-desktop/src/assets/images/emdash/emdash.icns
    credit: "General Action, Inc."
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Emdash runs command-line coding agents such as Claude Code, Codex, OpenCode, Amp or GitHub Copilot side by side. Each task gets its own Git worktree and branch, so several agents can work on the same repository without stepping on each other, and you review the diffs, open pull requests, check CI and merge from the same window.

It works on local projects or on remote machines over SSH, and it can pull issues from GitHub, Linear, Jira and other trackers into a task. Emdash does not include any model: it drives the agent CLIs you already have installed, and those agents send your code and prompts to their own providers. For agents that support lifecycle hooks, it adds tagged entries to the agent's user-level configuration.

Separate builds are available for Apple silicon and Intel Macs. Anonymous usage telemetry is on by default in release builds and can be switched off in Settings → General → Privacy & Telemetry; signing in to an account is optional.
