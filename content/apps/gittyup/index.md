---
name: "Gittyup"
summary: "A graphical Git client for reading history, inspecting changes, and preparing commits."
category: "Developer tools"
tags: ["git", "version-control", "cross-platform", "git-client"]
alternativeTo: ["tower", "fork"]
repository: "https://github.com/Murmele/Gittyup"
website: "https://murmele.github.io/Gittyup"
license: "MIT"
licenseUrl: "https://github.com/Murmele/Gittyup/blob/master/LICENSE.md"
download: "https://github.com/Murmele/Gittyup/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Murmele/Gittyup", "https://github.com/Murmele/Gittyup/blob/master/LICENSE.md", "https://github.com/Murmele/Gittyup/releases", "https://raw.githubusercontent.com/Murmele/Gittyup/master/README.md", "https://murmele.github.io/Gittyup/", "https://github.com/Murmele/Gittyup/releases/tag/gittyup_v2.0.0", "https://github.com/Murmele/Gittyup/releases/tag/gittyup_v1.4.0", "https://formulae.brew.sh/cask/gittyup", "https://fork.dev/", "https://www.git-tower.com/mac"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Murmele/Gittyup/blob/master/rsrc/Gittyup.iconset/icon_256x256.png", "credit": "Gittyup contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Gittyup lets you browse a repository's commit history, read each change in a diff view and stage your own work, all in one window. It continues GitAhead, an earlier client whose code it forked.

- Single lines stage with a checkbox or the S key, unstage with U and revert with R.
- Blame view adds a timeline showing who changed each line.
- Rebase and merge conflicts, binary files included, are resolved inside the app.
- Commits can be amended, starred for quick lookup and written from a message template.
- Tabs keep several repositories open, and Ctrl-M maximizes the history or diff pane.

Version 2.0.0 moved to Qt 6 and added support for SHA-256 repositories. It shipped in November 2025 with Linux packages only. The newest macOS build is 1.4.0 from May 2024, an Intel-only DMG that Gatekeeper rejects. Homebrew disabled its gittyup cask in September 2026 because it fails Gatekeeper checks. Building from source is the other route, and the README covers both Intel and Apple silicon.

Fork and Tower are paid Git clients for Mac and Windows, each with a free evaluation or trial. Gittyup is open source under the MIT license, but its Mac builds trail the other platforms.
