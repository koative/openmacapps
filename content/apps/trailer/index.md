---
name: "Trailer"
summary: "A menu bar tracker for pull requests and issues on GitHub and GitHub Enterprise, with comment notifications."
category: "Developer tools"
tags: ["github", "menu-bar", "notifications"]
repository: "https://github.com/ptsochantaris/trailer"
website: "https://ptsochantaris.github.io/trailer/"
license: "MIT"
licenseUrl: "https://github.com/ptsochantaris/trailer/blob/main/LICENSE.txt"
download: "https://github.com/ptsochantaris/trailer/releases"
freeDownload: true
homebrew: "trailer"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ptsochantaris/trailer", "https://github.com/ptsochantaris/trailer/blob/main/LICENSE.txt", "https://github.com/ptsochantaris/trailer/releases", "https://ptsochantaris.github.io/trailer/", "https://raw.githubusercontent.com/ptsochantaris/trailer/main/README.md", "https://raw.githubusercontent.com/ptsochantaris/trailer/main/LICENSE.txt", "https://github.com/ptsochantaris/trailer/releases/tag/v1.9.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/ptsochantaris/trailer/main/Trailer/Images.xcassets/AppIcon.appiconset/trailer1024-256.png", "credit": "Paul Tsochantaris", "license": "MIT repository asset; trademarks retained"}]
---

Trailer keeps the pull requests and issues you care about on GitHub or GitHub Enterprise in a menu bar list and tells you when someone comments. You create a GitHub API token, paste it into the setup window, and Trailer starts syncing.

- Items fall into sections such as Mine, Participated, Mentioned, Merged, Closed and All.
- Labels and CI status can be shown next to each item.
- Notification Center alerts cover comments, merges and status changes.
- Typing filters the list, and choosing an item, alert or comment opens it on GitHub.

The menu bar item turns red when comments are unread. Trailer lists everything from the repositories you watch on GitHub, so a long watch list means noisy notifications and slower syncs. Per-repository display settings in Preferences cut that down, and "Set all PRs" and "Set all issues" change every visible repository at once.

Version 1.9.0, from August 2026, rebuilt the menu bar item for macOS 26, sped up sync parsing and moved the app to Swift 6. It requires macOS 15.6 or later, where 1.8.11 ran on macOS 11 and up. The download is a ZIP with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The developer notes that AI tools were used in this release.

An iOS version, a command-line Trailer for Mac, Linux and Windows, and an Android app by another developer are linked in the README.
