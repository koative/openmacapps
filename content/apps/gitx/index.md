---
name: "GitX"
summary: "A community-maintained Mac Git client for browsing history, staging changes and committing, continuing the GitX lineage."
category: "Developer tools"
tags:
  - git
  - version-control
  - git-client
alternativeTo:
  - tower
  - fork
repository: "https://github.com/gitx/gitx"
website: "https://github.com/gitx/gitx"
license: "GPL-2.0-only"
licenseUrl: "https://github.com/gitx/gitx/blob/master/COPYING"
download: "https://github.com/gitx/gitx/releases"
freeDownload: true
homebrew: "gitx"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/gitx/gitx"
  - "https://github.com/gitx/gitx/blob/master/COPYING"
  - "https://github.com/gitx/gitx/releases"
  - "https://github.com/rowanj/gitx"
  - https://github.com/gitx/gitx/blob/master/README.markdown
  - https://github.com/gitx/gitx/releases/tag/1.8
  - https://www.git-tower.com/
  - https://fork.dev/
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/gitx/gitx/master/assets/AppIcon-macOS-Default-256x256%402x.png"
    credit: "GitX contributors"
    license: "GPL-2.0-only; upstream app icon, trademarks retained"
---

GitX gives a Git repository two main views on the Mac: a history view for browsing commits and a staging view for choosing changes and writing the commit message. The app has passed through several forks over the years. This community-run repository pulls that work back into one maintained version.

Recent releases keep up with changes in Git. GitX reads and writes repositories that use the newer reftable reference format as well as the traditional one, including bare repositories and linked worktrees, and opening a repository leaves its storage format alone. Version 1.8 can migrate a repository to reftable. It also shows real diffs for newly staged files, offers to repair worktree links after a repository moves and accepts folders dropped on its Dock icon.

SHA-256 repositories are not supported. Command-line operations need Git 2.45 or newer, selected in Preferences.

Releases come as separate disk images for Apple silicon and Intel. The 1.8 Apple silicon app needs macOS 13 and is Developer ID-signed and notarized. The Homebrew cask picks the right build and puts a `gitx` command on the shell PATH.

Tower and Fork run on both Mac and Windows and list interactive rebase and merge-conflict tools among their features. Fork is sold after a free evaluation. GitX is Mac-only and licensed under GPL-2.0.
