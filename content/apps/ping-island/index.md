---
name: "Ping Island"
summary: "A notch and menu bar panel that shows AI coding agent sessions and lets you answer their prompts in place."
category: "Developer tools"
tags:
  - notch
  - coding-agents
  - menu-bar
  - notifications
repository: https://github.com/erha19/ping-island
website: https://erha19.github.io/ping-island/
license: "Apache-2.0"
licenseUrl: https://github.com/erha19/ping-island/blob/main/LICENSE.md
download: https://github.com/erha19/ping-island/releases/latest
homebrew: "ping-island"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/erha19/ping-island
  - https://github.com/erha19/ping-island/blob/main/LICENSE.md
  - https://github.com/erha19/ping-island/releases
  - https://github.com/erha19/ping-island/blob/main/docs/privacy-policy.md
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/erha19/ping-island/main/PingIsland/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Ping Island contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Ping Island watches the AI coding agents running on your Mac and stays small until one needs you. It then expands from the notch so you can approve or deny a tool call, answer a question, or jump straight back to the right terminal, tmux pane or IDE window; the status can also be dragged out into a floating companion, and external displays are supported. It works with Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot, OpenCode, Qwen Code, Kimi CLI and a growing list of other agents, and can follow sessions on remote machines over SSH.

It works by installing hooks into each agent's configuration files, such as `~/.gemini/settings.json`, and asks for Accessibility and Apple Events access for window switching. It needs macOS 14 or later. Anonymous usage telemetry is optional, but the consent box in first-run onboarding is preselected; it can be turned off in settings.
