---
name: "OpenChamber"
summary: "A desktop workspace for running, comparing and reviewing OpenCode AI coding sessions, with remote access from other devices."
category: "AI"
tags:
  - coding-agents
  - agents
  - git
  - cross-platform
repository: https://github.com/openchamber/openchamber
website: https://openchamber.dev
license: "MIT"
licenseUrl: https://github.com/openchamber/openchamber/blob/main/LICENSE
download: https://github.com/openchamber/openchamber/releases/latest
homebrew: "openchamber"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/openchamber/openchamber
  - https://github.com/openchamber/openchamber/blob/main/LICENSE
  - https://github.com/openchamber/openchamber/releases/latest
  - https://github.com/openchamber/openchamber/blob/main/packages/electron/package.json
assets:
  - path: ./assets/icon.png
    source: https://github.com/openchamber/openchamber/blob/main/packages/electron/resources/icons/icon.icns
    credit: "OpenChamber contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

OpenChamber is a graphical front end for the OpenCode coding agent. It organises agent sessions by project, shows the diffs each run produces, and helps take a change through review to a GitHub pull request. You can send one task to several models at once and compare what each built, set a goal that the agent keeps working toward, preview a running web app beside the chat, and schedule recurring prompts.

The desktop app bundles a matching OpenCode command-line tool, so no separate install is needed; you still need accounts or API keys for the model providers you configure in OpenCode. Sessions can also be opened from a phone, browser or VS Code through an optional end-to-end encrypted relay, SSH or a tunnel. OpenChamber is an independent project, not made by the OpenCode team.

The macOS builds are notarized, come in Apple silicon and Intel versions, and need macOS 13 or later.
