---
name: "GitComet"
summary: "A fast Git client built for very large repositories, with history, staging, diffs and built-in merge tools."
category: "Developer tools"
tags: ["git", "git-client", "version-control", "diff", "cross-platform"]
alternativeTo: ["fork", "tower"]
repository: "https://github.com/Auto-Explore/GitComet"
website: "https://gitcomet.dev"
license: "AGPL-3.0-only"
licenseUrl: "https://github.com/Auto-Explore/GitComet/blob/dev/LICENSE-AGPL-3.0"
download: "https://github.com/Auto-Explore/GitComet/releases"
homebrew: "gitcomet"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/Auto-Explore/GitComet", "https://github.com/Auto-Explore/GitComet/blob/dev/LICENSE-AGPL-3.0", "https://github.com/Auto-Explore/GitComet/blob/dev/NOTICE", "https://github.com/Auto-Explore/GitComet/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Auto-Explore/GitComet/blob/dev/assets/gitcomet-512.png", "credit": "AutoExplore Oy", "license": "AGPL-3.0-only; upstream project asset, trademarks retained"}]
---

GitComet is a graphical Git client written in Rust, started because existing tools slowed down on huge codebases such as Chromium. It covers everyday work, including staging, committing, branching, pull and push, worktrees and full history, and can keep several repositories open with background fetching. Inline and side-by-side diffs, two- and three-way merge views, Git LFS and git-annex support are included, and it can also act as the `git difftool` and `git mergetool` for the command line.

It relies on your installed Git and expects version 2.53 or newer; with an older Git some features are switched off, and the version bundled with Apple's developer tools may be too old. Separate DMGs are published for Apple silicon and Intel, and the macOS build targets macOS 13 or later.

The open-source edition is free for personal and commercial use. The developer, AutoExplore, plans a paid Professional edition with AI agent, GitHub and Azure DevOps integrations and test coverage workflows.
