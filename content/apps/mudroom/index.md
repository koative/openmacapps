---
name: "Mudroom"
summary: "Runs coding agents in a local Linux micro-VM on a clone of your project, then lets you review their changes."
category: "Developer tools"
tags:
  - coding-agents
  - git
  - security
repository: "https://github.com/Kernel-Hunter/mudroom"
website: "https://kernel-hunter.github.io/mudroom/"
license: "MIT"
licenseUrl: "https://github.com/Kernel-Hunter/mudroom/blob/main/LICENSE"
download: "https://github.com/Kernel-Hunter/mudroom/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Kernel-Hunter/mudroom"
  - "https://github.com/Kernel-Hunter/mudroom/blob/main/LICENSE"
  - "https://github.com/Kernel-Hunter/mudroom/releases"
  - "https://kernel-hunter.github.io/mudroom/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Kernel-Hunter/mudroom/main/App/AppIcon.png"
    credit: "Karim Masmoudi"
    license: "MIT; upstream app icon, trademarks retained"
---

Mudroom runs a coding agent such as Claude Code, Codex, Gemini CLI, opencode or Aider on a clone of your project, inside a Linux micro-VM. Network access is limited to the hosts you allow, and your real folder is never mounted. When the agent finishes, you review its changes like a pull request, then apply all of them, some files, some hunks, or none, and undo an apply later. It suits people who want agents to work unattended without touching their working tree.

The Mac app and CLI need macOS 26 or later on Apple silicon. Intel Macs, Linux and Windows get the CLI, which uses Docker or Podman. The README says Mudroom is ad-hoc signed and not notarized, so the install script and Homebrew cask remove the quarantine flag; a browser download needs System Settings, Privacy & Security, Open Anyway, or the `xattr` command. The README calls it an early prototype with rough edges and breaking changes. The project is free and MIT licensed.
