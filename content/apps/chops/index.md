---
name: "Chops"
summary: "Gathers the skill and agent files of Claude Code, Cursor, Codex and other coding agents into one library to search and edit."
category: "Developer tools"
tags:
  - coding-agents
  - markdown
  - organization
  - search
repository: https://github.com/Shpigford/chops
website: https://chops.md
license: "FSL-1.1-MIT"
sourceAvailability: source-available
licenseNotes: "Chops uses the Functional Source License 1.1 with an MIT future license. Using, changing or redistributing a version for a competing commercial product or service is not permitted; each version also becomes available under MIT two years after its release."
licenseUrl: https://github.com/Shpigford/chops/blob/main/LICENSE
download: https://github.com/Shpigford/chops/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/Shpigford/chops
  - https://github.com/Shpigford/chops/blob/main/LICENSE
  - https://github.com/Shpigford/chops/releases
  - https://chops.md
  - https://raw.githubusercontent.com/Shpigford/chops/main/README.md
  - https://github.com/Shpigford/chops/releases/tag/v1.16.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/Shpigford/chops/releases/download/v1.16.0/Chops.dmg
    credit: "Sabotage Media LLC"
    license: "Icon file (Chops.app/Contents/Resources/ChopsIcon.icns) from the official release DMG; FSL-1.1-MIT project asset, trademarks retained"
---

Chops collects the skill and agent files that coding assistants keep in hidden folders and shows them in one three-column library. Pick a tool in the sidebar, choose a skill, and edit it on the right; Command-S saves straight back to the original file.

- It reads skills and agents for Claude Code, Cursor, Codex, Windsurf, Copilot, Aider and Amp. For Copilot and Aider it finds only project-level files, and you can add custom scan paths.
- Full-text search covers names, descriptions and file contents.
- Collections group skills without moving or changing the files on disk.
- New skills and agents start from the right boilerplate for each tool.
- It browses and installs skills from the skills.sh registry and from remote servers running OpenClaw, Hermes or other layouts.

Chops watches those folders with FSEvents, so edits made elsewhere show up as they happen. A skill symlinked into several tools' folders appears once, with a badge for each tool. The editor parses YAML frontmatter and Cursor's `.mdc` rule files.

The app runs outside the macOS sandbox because it needs to read dotfiles anywhere in your home folder. It requires macOS 15 Sequoia. The DMG on GitHub holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it updates itself through Sparkle.

The code is source-available under the Functional Source License with an MIT future license. You cannot use a version to build a competing commercial product, and each version turns MIT two years after release.
