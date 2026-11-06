---
name: "Notchpad"
summary: "Modular panel for the MacBook notch with a file shelf, system readouts, timers and live Claude Code sessions."
category: "Utilities"
tags:
  - notch
  - menu-bar
  - system-monitoring
  - coding-agents
  - widgets
repository: "https://github.com/BirdyTheDev/notchpad"
website: "https://github.com/BirdyTheDev/notchpad"
license: "MIT"
licenseUrl: "https://github.com/BirdyTheDev/notchpad/blob/main/LICENSE"
download: "https://github.com/BirdyTheDev/notchpad/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/BirdyTheDev/notchpad"
  - "https://github.com/BirdyTheDev/notchpad/blob/main/LICENSE"
  - "https://github.com/BirdyTheDev/notchpad/releases"
---

Notchpad turns the area around the MacBook notch into a panel of modules you choose and order yourself. Closed, it shows readouts such as battery, CPU, memory, network speed or the next calendar event. Hovering opens tabs for live Claude Code sessions with token usage, a file shelf, Unity projects, MCP server health, a keep-awake switch, shell command shortcuts and a pomodoro timer. It is for people who use Claude Code all day and want its status and their system stats in one place at the top of the screen.

The README says it needs macOS 14 or later on Apple silicon and has no dependencies. It does not say whether the published DMG is notarized, and it notes that a downloaded build must be signed with a Developer ID and notarized or macOS will refuse to open it. Claude Code sessions are always started with `--dangerously-skip-permissions`, and the README says there is no setting to turn that off. Lid-closed keep-awake changes a system-wide sleep setting through an admin-authorised helper. The app is not affiliated with Anthropic.
