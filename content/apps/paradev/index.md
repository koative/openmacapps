---
name: "Paradev"
summary: "Desktop workspace that runs Claude Code, Codex and other coding agents in parallel, each in its own Git worktree."
category: "Developer tools"
tags:
  - coding-agents
  - ai
  - git
  - worktrees
  - terminal
  - code-review
repository: "https://github.com/ParadevAI/Paradev"
website: "https://paradev.com"
license: "MIT"
licenseUrl: "https://github.com/ParadevAI/Paradev/blob/main/LICENSE.md"
download: "https://github.com/ParadevAI/Paradev/releases/latest"
macos: "13"
arch: both
notarized: true
homebrew: "superset"
freeDownload: true
featured: false
added: "2026-11-23"
verified: "2026-11-23"
screenshots:
  - src: ./assets/agents.png
    alt: The Paradev sidebar with agent tasks grouped by repository, and a Claude Code session on the right that has edited a test file and passed 20 of 20 runs.
    source: https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/marketing/public/images/readme/agents-working.gif
    credit: Paradev contributors
  - src: ./assets/diff-viewer.png
    alt: Paradev's diff viewer with four changed files, added lines in green and a review comment on line 19 with an Ask Claude Code action.
    source: https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/marketing/public/images/readme/diff-viewer.png
    credit: Paradev contributors
sources:
  - "https://github.com/ParadevAI/Paradev"
  - "https://github.com/ParadevAI/Paradev/blob/main/LICENSE.md"
  - "https://github.com/ParadevAI/Paradev/releases/tag/desktop-v2.0.11"
  - "https://docs.paradev.com/install"
  - "https://paradev.com/pricing"
  - "https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/desktop/src/renderer/routes/_authenticated/layout.tsx"
  - "https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/desktop/src/main/lib/analytics/index.ts"
  - "https://formulae.brew.sh/cask/superset"
  - "https://github.com/koative/openmacapps/issues/81"
assets:
  - path: ./assets/agents.png
    source: https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/marketing/public/images/readme/agents-working.gif
    credit: Paradev contributors
    license: "MIT; upstream project asset, trademarks retained"
  - path: ./assets/diff-viewer.png
    source: https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/marketing/public/images/readme/diff-viewer.png
    credit: Paradev contributors
    license: "MIT; upstream project asset, trademarks retained"
  - path: ./assets/icon.png
    source: https://github.com/ParadevAI/Paradev/blob/17bbe6500096902186d300690da77c485dbd8e22/apps/desktop/src/resources/build/icons/icon.png
    credit: Paradev contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Paradev is a desktop app for running several coding agents at once. Each task gets its own workspace: a Git worktree on its own branch, with its own terminal. Agents edit separate copies of the files, so one cannot overwrite another, though their branches can still conflict when merged.

It runs Claude Code, Codex, OpenCode, Gemini CLI, Cursor Agent, Amp and any other command-line agent on the plans and API keys you already have. Claude Code, Codex, OpenCode and Pi can also run as a chat where you approve each action with a click.

- The sidebar groups sessions by project and shows which agents are working or waiting for you, with a chime and a Dock badge.
- A diff viewer lets you comment on lines and send them back to an agent, then commit, open a pull request and watch its checks.
- An in-app browser shows each workspace's dev server, and its Design mode sends a clicked element to an agent.
- Terminals keep running when you close or update the app.
- A CLI, an MCP server and an SDK let other agents drive it.

You need Git and at least one coding agent. The GitHub CLI is optional and enables the pull request features.

The app requires signing in to a Paradev account with GitHub or Google, even on the free plan. The free plan covers local workspaces, the desktop app and the CLI. Paid plans add remote access, scheduled automations, the iPhone and iPad app and cloud workspaces. The app sends usage events to PostHog and crash reports to Sentry, and it has no setting to turn the usage events off.

Paradev was previously named Superset, so the app installs as Superset.app and the CLI command is still `superset`. Version 2.0.11 needs macOS 13 or later and ships separate Apple silicon and Intel builds, signed with a Developer ID and notarized. It also installs with Homebrew.
