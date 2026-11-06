---
name: "mu"
summary: "Coding agent built on pi that sends yes/no decisions to a small judge model; desktop app for macOS, Windows and Linux."
category: "Developer tools"
tags:
  - coding-agents
  - ai-agent
  - local-ai
alternativeTo:
  - claude-code
repository: "https://github.com/qybaihe/mu"
website: "https://usemu.dev"
license: "MIT"
licenseUrl: "https://github.com/qybaihe/mu/blob/main/LICENSE"
download: "https://github.com/qybaihe/mu/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/qybaihe/mu"
  - "https://github.com/qybaihe/mu/blob/main/LICENSE"
  - "https://github.com/qybaihe/mu/releases"
  - "https://usemu.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/qybaihe/mu/main/desktop/resources/icon.png"
    credit: "mu contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

mu is a coding agent built on the pi agent. Many of the decisions a coding agent makes are yes/no questions, such as whether a command is safe to run or whether a task is really finished. Instead of asking the main model or applying fixed rules, mu sends each of these questions to a small judge model. It is aimed at people who use coding agents every day and want fewer approval prompts without clicking Allow blindly. It ships as a desktop app and as the `mu` command-line tool.

The desktop app is available for macOS, Windows and Linux, and the macOS build covers Apple silicon and Intel. The latest release, v0.3.8, is signed with a Developer ID and notarized by Apple, according to its release notes. You need a provider account or API key for the main model. The default judge, Jev, is free for a limited time through OpenCode, which receives the content being judged. A fully local judge, mude 1.0, needs an Apple silicon Mac running macOS 14 or later with at least 8 GB of memory. The project says the desktop app sends no telemetry or crash reports.
