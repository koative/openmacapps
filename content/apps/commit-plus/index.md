---
name: "Commit+"
summary: "Native SwiftUI Git client with revision browsing, selective apply and revert, Git LFS tools, Git Flow and interactive rebase."
category: "Developer tools"
tags:
  - git-client
  - git
  - native
alternativeTo:
  - fork
  - tower
repository: "https://github.com/Commit-Plus/commit-plus"
website: "https://commitplus.app"
license: "AGPL-3.0"
licenseUrl: "https://github.com/Commit-Plus/commit-plus/blob/main/LICENSE"
download: "https://github.com/Commit-Plus/commit-plus/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Commit-Plus/commit-plus"
  - "https://github.com/Commit-Plus/commit-plus/blob/main/LICENSE"
  - "https://github.com/Commit-Plus/commit-plus/releases/tag/v1.1.24"
  - "https://commitplus.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Commit-Plus/commit-plus/main/macgit/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-512%402x.png"
    credit: "Commit+ contributors"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Commit+ is a Git client for macOS, written in Swift and SwiftUI. It covers everyday work such as committing, fetching, pushing, branching, merging, rebasing, stashing, worktrees and submodules. It also offers interactive rebase from the History view, applying or reverting a commit by file, hunk or line with a preview, browsing any revision without checking it out, Git LFS management, and Git Flow without a separate git-flow install. Account features are optional: they add settings sync, provider integrations and AI-assisted commit messages, which use Apple Intelligence or an API key you supply.

It suits people who want a native, graphical Git client as an alternative to Fork or Tower. Git must already be installed, through Homebrew or the Command Line Tools.

Commit+ requires macOS 26.2 or later. The release DMG is an Apple silicon build, and the README says it is signed and notarized. The README warns that rewriting published history with interactive rebase may require a force push.
