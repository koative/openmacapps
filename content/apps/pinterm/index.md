---
name: "PinTerm"
summary: "Menu bar app for small floating terminal windows that run a real shell through Ghostty and can stay on top."
category: "Developer tools"
tags:
  - terminal
  - menu-bar
  - widgets
  - ghostty
repository: "https://github.com/taotao7/PinTerm"
website: "https://github.com/taotao7/PinTerm"
license: "MIT"
licenseUrl: "https://github.com/taotao7/PinTerm/blob/main/LICENSE"
download: "https://github.com/taotao7/PinTerm/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/taotao7/PinTerm"
  - "https://github.com/taotao7/PinTerm/blob/main/LICENSE"
  - "https://github.com/taotao7/PinTerm/releases"
---

PinTerm puts terminals in small, independent windows managed from the menu bar. Each window runs its own shell or command in a real pseudo-terminal, rendered by the Ghostty engine (libghostty), so it reads your Ghostty configuration unless you point it at another file. Windows can be pinned above other apps, resized from any edge and restored after a restart. Presets open btop, htop or a calendar. It suits a status terminal or a development server you want to keep in view while you work elsewhere.

Requires Apple silicon and macOS 13 or later. The current release, 0.4.2, is ad-hoc signed and not notarized, so the first launch must be allowed in System Settings › Privacy & Security. Restarting restores windows and their commands, not running processes, and saved commands run again automatically. Quitting ends terminal-managed tasks, but detached background processes may keep running.
