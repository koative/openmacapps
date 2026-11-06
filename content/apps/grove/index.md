---
name: "Grove"
summary: "Native Mac app that lists Git worktrees across your projects, with each branch, path and set of local changes."
category: "Developer tools"
tags:
  - git
  - version-control
  - worktrees
  - coding-agents
repository: "https://github.com/codeacme17/grove"
website: "https://github.com/codeacme17/grove"
license: "Apache-2.0"
licenseUrl: "https://github.com/codeacme17/grove/blob/dev/LICENSE"
download: "https://github.com/codeacme17/grove/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/codeacme17/grove"
  - "https://github.com/codeacme17/grove/blob/dev/LICENSE"
  - "https://github.com/codeacme17/grove/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/codeacme17/grove/releases/download/v0.1.1/Grove-0.1.1-macOS-universal.dmg"
    credit: "Grove contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Grove gives Git worktrees a single home. Agents and developers often create extra worktrees for parallel tasks, and across several projects they are hard to find. Grove lists your projects, their branches, worktree paths and uncommitted changes in one window, with projects in a sidebar or as tabs. You can inspect diffs, pull updates and switch branches from there instead of hunting through folders and terminals. It is aimed at developers who run several branches or coding agents at once.

It runs on macOS 14 or later, on Apple silicon and Intel, and needs Git installed on the Mac. The release DMG is a universal build signed with a Developer ID certificate and notarized by Apple. The README also covers a source build with a Swift 6 toolchain. The project is Apache-2.0 licensed.
