---
name: "LidOn"
summary: "Menu bar app that keeps a MacBook running with the lid closed while a timer, command or AI agent needs it."
category: "Utilities"
tags:
  - menu-bar
  - power
  - sleep
  - coding-agents
alternativeTo:
  - amphetamine
repository: "https://github.com/jayden0903/LidOn"
website: "https://jayden0903.github.io/LidOn/"
license: "MIT"
licenseUrl: "https://github.com/jayden0903/LidOn/blob/main/LICENSE"
download: "https://github.com/jayden0903/LidOn/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jayden0903/LidOn"
  - "https://github.com/jayden0903/LidOn/blob/main/LICENSE"
  - "https://github.com/jayden0903/LidOn/releases/latest"
  - "https://jayden0903.github.io/LidOn/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jayden0903/LidOn/main/Resources/AppIcon.icns"
    credit: "jayden0903"
    license: "MIT; upstream app icon, trademarks retained"
---

LidOn keeps a MacBook running with the lid closed, but only while there is a reason to. You can hold Fn for half a second before closing the lid, turn it on from the menu for a set time, run a command with `lidon run`, or let an AI agent (Claude Code, Codex or Cursor) request it through an MCP server. The request ends when the agent releases it, when its time runs out, or when the agent session ends. Safeguards sleep the Mac on serious thermal pressure, at 45 °C battery temperature or at 10 % battery when unplugged, and a watchdog restores normal sleep if LidOn crashes. It suits people who start long builds or agent tasks and want to close the lid.

It needs macOS 14 or later on a MacBook, with Apple silicon or Intel; the build is universal, and the README says Intel has been tested less. The zip is not notarized, so allow it under System Settings → Privacy & Security on first launch. Installing asks for your administrator password to add a sudoers rule for `pmset`, and LidOn uses the private `kPMSetClamshellSleepState` selector, so a macOS update may break it.
