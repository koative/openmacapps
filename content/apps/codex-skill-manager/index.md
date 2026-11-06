---
name: "Codex Skill Manager"
summary: "Manages local skills for Codex, Claude Code, OpenCode and Copilot: preview, import and delete them, or install more from Clawdhub."
category: "AI"
tags:
  - coding-agents
  - agents
  - markdown
repository: "https://github.com/Dimillian/CodexSkillManager"
website: "https://github.com/Dimillian/CodexSkillManager"
license: "MIT"
licenseUrl: "https://github.com/Dimillian/CodexSkillManager/blob/main/LICENSE"
download: "https://github.com/Dimillian/CodexSkillManager/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Dimillian/CodexSkillManager"
  - "https://github.com/Dimillian/CodexSkillManager/blob/main/LICENSE"
  - "https://github.com/Dimillian/CodexSkillManager/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Dimillian/CodexSkillManager/main/Icon.iconset/icon_512x512.png"
    credit: "Thomas Ricouard"
    license: "MIT; upstream app icon, trademarks retained"
---

Codex Skill Manager is a SwiftUI app for the skill folders that coding agents load. It lists the skills installed for Codex, Claude Code, OpenCode and GitHub Copilot, including custom project folders, renders each SKILL.md as formatted Markdown with previews of the files it references, and lets you import a skill from a folder or zip or delete one. Badges show which agents have a skill and at which version.

It also browses Clawdhub, a public skill catalog, with search and a list of recent additions, downloads skills into the agents you pick, updates installed ones, and can publish your own skills there after logging in. It is for developers who collect many agent skills and want to review and manage them outside the terminal.

The README lists macOS 26, but the 1.3.3 release notes and the app bundle target macOS 15 or later; the download is a universal zip, signed and notarized, and later updates arrive through Sparkle. Version 1.3.3 from January 2026 is the latest release, and the repository has had no commits since then.
