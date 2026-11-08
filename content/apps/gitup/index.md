---
name: "GitUp"
summary: "A Mac Git client built around an interactive history graph and reversible operations."
category: "Developer tools"
tags: ["git", "version-control", "native", "git-client"]
alternativeTo: ["tower", "fork"]
repository: "https://github.com/git-up/GitUp"
website: "https://gitup.co"
license: "GPL-3.0"
licenseUrl: "https://github.com/git-up/GitUp/blob/master/LICENSE"
download: "https://github.com/git-up/GitUp/releases"
freeDownload: true
homebrew: "gitup-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/git-up/GitUp", "https://github.com/git-up/GitUp/blob/master/LICENSE", "https://github.com/git-up/GitUp/releases", "https://gitup.co", "https://raw.githubusercontent.com/git-up/GitUp/master/README.md", "https://github.com/git-up/GitUp/releases/tag/v1.5.0", "https://www.git-tower.com/pricing", "https://git-fork.com"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/git-up/GitUp/blob/master/GitUp/Application/Application.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "GitUp contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

GitUp opens a repository as a live map of its commits and branches. Any change, made in GitUp or outside it, appears in the graph at once. Select a commit and press the Space bar to see its message and diff.

You change history directly in the map:

- Rewrite, split, delete and reorder commits, or fixup and squash them.
- Cherry-pick, merge and rebase.
- Undo and redo almost any operation with Command-Z, rebases and merges included.
- Step back to an earlier state through snapshots, which record every change to the repository.

Search covers branches, tags and every commit by message, author or diff content. GitUp skips the git command-line tool and reads the repository database on disk directly. Its core is published separately as GitUpKit, a framework for building other Git interfaces.

Version 1.5.0 is a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it needs macOS 12.4 or later. Builds tagged with a "b" go out on a separate Continuous channel. Homebrew carries it as gitup-app, maintained outside the project.

Tower and Fork are paid Git clients that run on Windows as well as the Mac. GitUp is Mac-only and free under GPL-3.0.
