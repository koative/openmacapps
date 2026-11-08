---
name: "GitButler"
summary: "A graphical Git workspace for organizing parallel changes and preparing commits."
category: "Developer tools"
tags: ["git", "version-control", "source-available", "git-client"]
repository: "https://github.com/gitbutlerapp/gitbutler"
website: "https://gitbutler.com"
license: "FSL-1.1-MIT"
licenseUrl: "https://github.com/gitbutlerapp/gitbutler/blob/master/LICENSE.md"
download: "https://gitbutler.com/downloads"
freeDownload: true
homebrew: "gitbutler"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/gitbutlerapp/gitbutler", "https://github.com/gitbutlerapp/gitbutler/blob/master/LICENSE.md", "https://gitbutler.com/downloads", "https://raw.githubusercontent.com/gitbutlerapp/gitbutler/master/README.md", "https://docs.gitbutler.com/features/branch-management/virtual-branches"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/gitbutlerapp/gitbutler/master/crates/gitbutler-tauri/icons/release/128x128@2x.png", "credit": "GitButler", "license": "FSL-1.1-MIT; upstream project asset, trademarks retained"}]
sourceAvailability: "source-available"
licenseNotes: "FSL-1.1-MIT restricts competing commercial use. Each version becomes available under MIT two years after its release."
---

GitButler opens any existing Git repository and lets you keep several lines of work going at once. Several branches can be applied to one working directory, each shown as a vertical lane with its own staging area. You drag each change into the lane it belongs to and commit every branch on its own, with no checkout in between.

- Stacked branches build on one another, and amending or editing any commit restacks the branches automatically.
- Commits can be uncommitted, reworded, amended, moved, split or squashed by drag and drop.
- An operations timeline records what you did, so you can undo or revert any step.
- Rebases always finish. Conflicted commits are marked, and you resolve them later in any order.
- After you sign in to GitHub, GitLab or Bitbucket, the app opens and updates pull requests and shows CI status.

Built-in AI handlers can draft commit messages, branch names and pull request descriptions. The app can also install hooks and skills for coding agents, and the same features are available from the `but` command-line tool.

Apple silicon and Intel Macs get separate DMGs. Both apps are Developer ID-signed and notarized, and both declare macOS 10.13 as their minimum.

The license is the Functional Source License with an MIT future license. You can read, use and modify the code. Building a competitor with it is off limits. Each release converts to the MIT license two years after it ships. Until then the code is source available, which is short of an open-source license.
