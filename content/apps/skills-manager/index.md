---
name: "Skills Manager"
summary: "A desktop app that keeps one library of AI agent skills and installs them into Claude Code, Codex, Cursor and other tools."
category: "AI"
tags:
  - coding-agents
  - agents
  - sync
  - cross-platform
repository: https://github.com/xingkongliang/skills-manager
website: https://skillsmanager.dev
license: "MIT"
licenseUrl: https://github.com/xingkongliang/skills-manager/blob/main/LICENSE
download: https://github.com/xingkongliang/skills-manager/releases
homebrew: "skills-manager"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/xingkongliang/skills-manager
  - https://github.com/xingkongliang/skills-manager/blob/main/LICENSE
  - https://github.com/xingkongliang/skills-manager/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/xingkongliang/skills-manager/blob/main/src-tauri/icons/icon.png
    credit: "Tianliang Zhang"
    license: "MIT; upstream project asset, trademarks retained"
---

Skills Manager collects the skill folders used by AI coding agents into one central library and copies or links them into each tool's skills directory. Skills can come from Git repositories, local folders, archives or the skills.sh marketplace, and presets switch a group of skills on or off for one agent at a time, globally or per project.

It shows what each agent actually has installed, including skills added outside the app, can check Git-based skills for upstream updates, and offers a command-line helper that agents can call to install or move skills themselves. An optional backup feature signs in to GitHub and keeps the library in a private repository, which also syncs it between Macs.

Builds are provided for Apple silicon and Intel Macs. Releases from 1.29.0 onward are signed and notarized, and the app only installs updates when you confirm them.
