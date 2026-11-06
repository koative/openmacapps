---
name: "AgentBar"
summary: "Menu bar and notch queue for approving permission requests from AI coding agents, with a per-repo decision history."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - notch
repository: "https://github.com/michalstrnadel/AgentBar"
website: "https://github.com/michalstrnadel/AgentBar"
license: "MIT"
licenseUrl: "https://github.com/michalstrnadel/AgentBar/blob/main/LICENSE"
download: "https://github.com/michalstrnadel/AgentBar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/michalstrnadel/AgentBar"
  - "https://github.com/michalstrnadel/AgentBar/blob/main/LICENSE"
  - "https://github.com/michalstrnadel/AgentBar/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/michalstrnadel/AgentBar/main/Resources/AppIcon.icns"
    credit: "Michal Strnadel"
    license: "MIT; upstream app icon, trademarks retained"
---

AgentBar collects permission requests from coding agents such as Claude Code, Codex, Copilot and Gemini CLI into one queue. You can allow or deny a command from the menu bar or from the notch, or deny it with a note that the agent reads. It records what you decided, counted per repository, and shows session status and quota meters. Rules are the only thing it answers on its own, and only rules you typed yourself. It is for developers who run several agent sessions at once.

Requires macOS 12 or later, on Apple silicon or Intel. The app is signed with the project's own certificate and is not notarized by Apple, so first launch needs the Open Anyway step. The installer adds hook entries to agent settings files, keeps backups beside them, and can be undone from Settings → Agents. The Claude quota lookup is off by default. The README says the app is local-only with no telemetry.
