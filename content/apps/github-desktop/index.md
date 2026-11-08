---
name: "GitHub Desktop"
summary: "A desktop Git workflow for reviewing diffs, committing changes, and working with branches."
category: "Developer tools"
tags: ["git", "github", "version-control", "git-client"]
alternativeTo: ["tower", "fork"]
repository: "https://github.com/desktop/desktop"
website: "https://github.com/apps/desktop"
license: "MIT"
licenseUrl: "https://github.com/desktop/desktop/blob/development/LICENSE"
download: "https://desktop.github.com/download"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/desktop/desktop", "https://github.com/desktop/desktop/blob/development/LICENSE", "https://desktop.github.com/download", "https://github.com/desktop/desktop/blob/development/README.md", "https://github.com/desktop/desktop/blob/development/docs/process/what-is-desktop.md", "https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop", "https://docs.github.com/en/desktop/overview/supported-operating-systems-for-github-desktop", "https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop", "https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-a-pull-request-in-github-desktop", "https://www.git-tower.com/", "https://fork.dev/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/desktop/desktop/blob/development/app/static/common/logo-64x64%402x.png", "credit": "GitHub Desktop contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

GitHub Desktop lists the changes in a Git repository as you edit files, so you can choose what goes into a commit, write the message and push it without typing Git commands. You keep working in your usual editor and switch back to the Changes tab to review.

- Diffs appear unified or split side by side. Whitespace changes can be hidden, and a right-click expands the whole file.
- Clicking changed lines leaves them out of the commit, which lets you split one file's edits across several commits.
- Discarded changes are saved to a dated file in the Trash and can be recovered until you empty it.
- Commits can name co-authors.
- You can check out the branch behind a pull request to read its commit history and status checks. Comments on the pull request still have to be written on GitHub.

Signing in with a GitHub or GitHub Enterprise account connects the app to remote repositories there. The team's product document says the app exists to extend GitHub, with only basic support for other hosts, and that it puts workflows for beginners and collaborative teams first. GitHub Desktop needs macOS 12 or later, with separate downloads for Apple silicon and Intel Macs.

Tower and Fork both list interactive rebase and tools for resolving merge conflicts among their features, and Fork asks for a paid licence after a free evaluation. GitHub Desktop is free and MIT-licensed, an Electron app written in TypeScript.
