---
name: "Agents Island"
summary: "A notch overlay that shows what Claude Code, Codex and other coding agents are doing, with approvals and quick jumps."
category: "Developer tools"
tags:
  - coding-agents
  - menu-bar
  - usage-tracking
  - native
repository: "https://github.com/mustafahalabi/agents-island"
website: "https://github.com/mustafahalabi/agents-island"
license: "MIT"
licenseUrl: "https://github.com/mustafahalabi/agents-island/blob/main/LICENSE"
download: "https://github.com/mustafahalabi/agents-island/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mustafahalabi/agents-island"
  - "https://github.com/mustafahalabi/agents-island/blob/main/LICENSE"
  - "https://github.com/mustafahalabi/agents-island/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mustafahalabi/agents-island/main/assets/AppIcon.icns"
    credit: "Mustafa Halabi and Mohammad Hammoud"
    license: "MIT; upstream app icon, trademarks retained"
---

Agents Island shows each coding agent running on your Mac in a pill at the top of the screen, the notch on notched Macs and a floating pill otherwise. Hover to see a card per agent with its status, task list, subagents and model; click to jump to the agent's terminal tab; approve or deny Claude Code permission requests from the island. It reads local transcripts and process data, and can also watch agents on SSH hosts. It suits developers who run several agent sessions at once.

It requires macOS 14 or later, on Apple silicon or Intel. The README says builds from v0.4.6 on are signed and notarized, and that v0.3.0 through v0.4.5 were not and should not be used. Permission approvals need a one-click hook install, and click-to-jump asks for Automation permission and sometimes Accessibility. The app checks GitHub for updates once a day unless you turn that off; the project says there is no telemetry.
