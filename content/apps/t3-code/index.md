---
name: "T3 Code"
summary: "A desktop control surface for running Codex, Claude Code, Cursor and other coding agents from one window."
category: "AI"
tags:
  - coding-agents
  - agents
  - git
  - cross-platform
repository: https://github.com/pingdotgg/t3code
website: https://t3.codes
license: "MIT"
licenseUrl: https://github.com/pingdotgg/t3code/blob/main/LICENSE
download: https://github.com/pingdotgg/t3code/releases
homebrew: "t3-code"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/pingdotgg/t3code
  - https://github.com/pingdotgg/t3code/blob/main/LICENSE
  - https://github.com/pingdotgg/t3code/releases
  - https://github.com/pingdotgg/t3code/blob/main/docs/user/faq.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/pingdotgg/t3code/main/assets/prod/black-macos-1024.png
    credit: "T3 Tools Inc."
    license: "MIT; upstream project asset, trademarks retained"
---

T3 Code is a desktop front end for the coding agents you already have on your machine. It starts threads with Codex, Claude Code, Cursor, Grok Build, OpenCode, Antigravity or fx, shows their output and diffs, and keeps work in separate git worktrees so several tasks can run at once. A companion web app and phone apps can connect to the same machine for remote access.

It does not include a model of its own. At least one supported agent has to be installed and signed in first, and usage counts against that provider's subscription or API plan. The Mac download comes in Apple silicon and Intel builds from GitHub Releases, with separate nightly builds for early testing.

The developers describe the project as very early, so expect bugs. The FAQ says prompts and code go straight to your provider, but the app sends basic product usage events such as provider, model and token totals; set `T3CODE_TELEMETRY_ENABLED=false` to turn them off.
