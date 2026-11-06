---
name: "Orchestrator"
summary: "Experimental Mac app for browsing repositories, running Codex conversations, managing Kanban tasks and reviewing local code."
category: "Developer tools"
tags:
  - coding-agents
  - git
  - kanban
  - code-review
repository: "https://github.com/zachealy1/orchestrator"
website: "https://zachealy1.github.io/orchestrator/"
license: "MIT"
licenseUrl: "https://github.com/zachealy1/orchestrator/blob/main/LICENSE"
download: "https://github.com/zachealy1/orchestrator/releases/download/v0.2.0-beta.3/Orchestrator_aarch64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/zachealy1/orchestrator"
  - "https://github.com/zachealy1/orchestrator/blob/main/LICENSE"
  - "https://github.com/zachealy1/orchestrator/releases"
  - "https://zachealy1.github.io/orchestrator/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/zachealy1/orchestrator/main/src-tauri/icons/icon.icns"
    credit: "Zac Healy"
    license: "MIT; upstream app icon, trademarks retained"
---

Orchestrator puts repository browsing, Codex conversations, Kanban tasks, subagent activity and local code review in one Mac app. It is for developers who run coding agents against their own repositories and want the tasks, diffs and reviews in the same window. The project calls the 0.2.0-beta.3 release an experimental community beta, and some integrations are marked experimental in its documentation.

The beta supports Apple silicon and Intel Macs running macOS 15 or later, with separate DMGs for each. It is ad-hoc signed and not notarized, so macOS may block the first launch and you must allow it explicitly; the README says never to disable Gatekeeper globally. Normal AI tasks need your own Codex account. The README also says production releases send minimal daily installation activity to PostHog by default, which can be turned off under Settings → Privacy.
