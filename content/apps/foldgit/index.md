---
name: "FoldGit"
summary: "Native Git client for macOS that keeps every repository and worktree in one sidebar, with diffs, staging and commits."
category: "Developer tools"
tags:
  - git
  - developer-utilities
  - native
alternativeTo:
  - fork
  - tower
repository: "https://github.com/dufu1991/foldgit"
website: "https://foldgit.com"
license: "MIT"
licenseUrl: "https://github.com/dufu1991/foldgit/blob/main/LICENSE"
download: "https://github.com/dufu1991/foldgit/releases/download/v0.5.0/FoldGit-macOS-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/dufu1991/foldgit"
  - "https://github.com/dufu1991/foldgit/blob/main/LICENSE"
  - "https://github.com/dufu1991/foldgit/releases/tag/v0.5.0"
  - "https://foldgit.com"
assets:
  - path: ./assets/icon.png
    source: https://github.com/dufu1991/foldgit/releases/download/v0.5.0/FoldGit-macOS-arm64.dmg
    credit: FoldGit contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

FoldGit shows all of your repositories in one sidebar, grouped by folder or by custom group, and lists linked worktrees under their repository. The window covers the commit graph, unified and side-by-side diffs, hunk staging, amend and revert, branch and tag management, and history search. It suits developers who work across many repositories and want a small, macOS-style client for reviewing and committing changes.

It requires an Apple Silicon Mac on macOS 26 or later, plus Git. The DMG is not notarized, so if macOS blocks the first launch, allow it in System Settings or run the `xattr` command from the README. The app is MIT-licensed and free to download; donations are optional. The author describes the Windows client as minimal.
