---
name: "StayUp"
summary: "Menu bar utility that keeps a Mac awake, including lid-closed on battery, and follows local AI agent and render jobs."
category: "Utilities"
tags:
  - sleep
  - menu-bar
  - battery
  - coding-agents
alternativeTo:
  - amphetamine
repository: "https://github.com/NongKnot/StayUp"
website: "https://getstayup.app"
license: "MIT"
licenseUrl: "https://github.com/NongKnot/StayUp/blob/main/LICENSE"
download: "https://github.com/NongKnot/StayUp/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "Checked 2026-11-06: the author has announced at https://getstayup.app that StayUp is closing down and will receive no new updates."
sources:
  - "https://github.com/NongKnot/StayUp"
  - "https://github.com/NongKnot/StayUp/blob/main/LICENSE"
  - "https://github.com/NongKnot/StayUp/releases"
  - "https://getstayup.app"
---

StayUp is a small menu bar app for Apple silicon Macs that keeps the Mac awake while local work is running. Its Auto mode watches sources such as Claude Code, Codex, Cursor, Ollama and LM Studio, keeps the Mac awake while their work is active and lets it sleep after a grace period you set. Its manual mode runs on a timer. It was built for long local agent runs, renders and downloads that should continue with the lid closed, and it also offers a virtual display for remote desktop tools on Macs without a lid.

Requires macOS 13 or later on Apple silicon. Lid-closed operation on battery depends on a privileged helper that asks for a password once during setup; without it, the menu says the lid-closed promise is off. The project does not collect telemetry, and Sparkle updates are optional. The project's site now says StayUp is closing down and recommends Vorssaint, an open-source alternative. The last release, 1.4.2, is dated 2026-07-28, and the project does not state whether its builds are notarized.
