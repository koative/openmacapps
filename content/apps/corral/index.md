---
name: "Corral"
summary: "Mac client for coding agents such as Claude Code and Codex, running on a Corral host, with side-by-side sessions."
category: "Developer tools"
tags:
  - coding-agents
  - claude-code
  - native
  - terminal
repository: "https://github.com/corral-dev/corral-apple"
website: "https://github.com/corral-dev/corral-apple"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/corral-dev/corral-apple/blob/main/LICENSE"
download: "https://github.com/corral-dev/corral-apple/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/corral-dev/corral-apple"
  - "https://github.com/corral-dev/corral-apple/blob/main/LICENSE"
  - "https://github.com/corral-dev/corral-apple/blob/main/BRAND_POLICY.md"
  - "https://github.com/corral-dev/corral-apple/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/corral-dev/corral-apple/blob/main/macOS/AppIcon.icon/Assets/AppIcon.png"
    credit: "Corral project (corral-dev)"
    license: "Artwork reserved under BRAND_POLICY.md, not covered by GPL-3.0; trademarks retained"
---

Corral is a client for coding agents that run on a Corral host, a command-line tool on your own macOS or Linux machine. From the Mac app you follow Claude Code, Codex, OpenCode, Cursor and Pi sessions in one list, read replies, answer questions and send the next instruction. You can open up to four sessions side by side, switch each pane between chat and the agent's terminal, and filter by project. It suits people who leave agents running on a machine at home or in the office and want to follow them from their Mac. The name and artwork are reserved under the project's brand policy, separately from the GPL.

Requires macOS 26 or later for the Mac app, and a Corral host with an installed assistant; you pair the two with `corral remote pair` on the host. The Mac app's 0.3.165 disk image is notarized by Apple: it is Developer ID signed and stapled, as checked with Gatekeeper. The host has to stay awake for agents and remote access to keep working, and access from other networks needs your own relay. The README says the iPhone app is a source beta that you build with Xcode.
