---
name: "Agent Island"
summary: "Shows coding agent status, approvals and questions in the MacBook notch, and jumps to the matching terminal tab."
category: "Developer tools"
tags:
  - coding-agents
  - notch
  - agents
  - menu-bar
repository: "https://github.com/Tiwari1999/Agent-Island"
website: "https://agentisland.in"
license: "MIT"
licenseUrl: "https://github.com/Tiwari1999/Agent-Island/blob/main/LICENSE"
download: "https://github.com/Tiwari1999/Agent-Island/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Tiwari1999/Agent-Island"
  - "https://github.com/Tiwari1999/Agent-Island/blob/main/LICENSE"
  - "https://github.com/Tiwari1999/Agent-Island/releases"
  - "https://agentisland.in"
---

Agent Island turns the MacBook notch into a panel that lists the coding agents you run: Claude Code, Codex, Cursor, Gemini CLI and OpenCode. Each row shows status, current task, context pressure and the remaining limit windows. You can allow or deny permission prompts and answer agent questions from the notch, and clicking a row jumps to that agent's exact terminal tab in Warp, iTerm2, Terminal.app, kitty, WezTerm and others. It is for developers who run several agents at once. The README says it reads only what the agents already write to your disk, with no server, telemetry or API key.

It requires macOS 14 or later on Apple silicon or Intel, plus at least one supported agent. The prebuilt DMG is Apple silicon only and is not notarized, so its first launch needs right-click and Open. The Homebrew formula builds the app on your Mac in about a minute and avoids that warning; it needs the Command Line Tools rather than full Xcode. The README notes one caveat: the terminal and the notch cannot both be interactive for the same prompt, so only one place accepts input at a time.
