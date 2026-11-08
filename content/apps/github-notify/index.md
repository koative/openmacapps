---
name: "GithubNotify"
summary: "Changes a menu bar icon's colour when you have unread GitHub notifications, checking once a minute."
category: "Developer tools"
tags:
  - github
  - notifications
  - menu-bar
  - developer-utilities
repository: "https://github.com/erik/github-notify"
website: "https://github.com/erik/github-notify"
license: "MIT"
licenseUrl: "https://github.com/erik/github-notify/blob/master/LICENSE"
download: "https://github.com/erik/github-notify/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release or commit since October 2017, as of 2026-11-06."
sources:
  - "https://github.com/erik/github-notify"
  - "https://github.com/erik/github-notify/blob/master/LICENSE"
  - "https://github.com/erik/github-notify/releases"
  - "https://raw.githubusercontent.com/erik/github-notify/master/README.md"
  - "https://raw.githubusercontent.com/erik/github-notify/master/GithubNotify/AppDelegate.swift"
  - "https://github.com/erik/github-notify/releases/tag/v0.1.3"
---

GithubNotify puts an icon in the menu bar that changes colour when you have unread GitHub notifications. Hover over it and a tooltip gives the unread count, so you can leave github.com closed until something arrives.

The app checks your notifications every 60 seconds. Its menu has three commands: refresh now, open github.com/notifications in your browser, and quit. Sign-in goes through GitHub OAuth.

Building it yourself takes Carthage and an OAuth application of your own, registered on GitHub with permission to read notifications. Its callback URL has to be github-notify://oauth. The client ID and secret go into a .secrets file before you build with Xcode.

The last release, 0.1.3 from October 2017, has had no change since. It is an Intel app for macOS 10.10 or later, so Apple silicon Macs run it through Rosetta 2. The app has only an ad hoc signature, and Gatekeeper rejects it.
