---
name: "Search"
summary: "Small WebKit browser with side or top tabs, a built-in ad blocker, element hiding, reading mode and Chrome extension support."
category: "Internet"
tags:
  - browser
  - privacy
  - vertical-tabs
  - extensions
alternativeTo:
  - google-chrome
  - arc
repository: "https://github.com/driceroland/Search"
website: "https://searchbrowser.app"
license: "MIT"
licenseUrl: "https://github.com/driceroland/Search/blob/main/LICENSE"
download: "https://searchbrowser.app"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/driceroland/Search"
  - "https://github.com/driceroland/Search/blob/main/LICENSE"
  - "https://github.com/driceroland/Search/releases"
  - "https://searchbrowser.app"
---

Search is a minimal browser from the design studio Office Commun. It runs on the WebKit engine that ships with macOS, so the app is only a few megabytes. The window holds a row of tabs, along the top or down the left side, and the page; one field takes both addresses and search terms. Ads and trackers are blocked at the network level by default, any page element can be hidden per site for good, and there are reading mode, a floating video window, split view and private tabs.

Passwords and passkeys live in the macOS keychain, and saved logins can be imported from Chrome, Arc, Dia, Brave or Edge. Extensions from the Chrome Web Store run on WebKit's extension engine, with Search supplying some Chrome APIs that WebKit lacks. There is no sync, account or telemetry; history and settings stay on the Mac. It is a single-window browser for people who want few distractions and a small set of built-in tools.

Search needs macOS 14 or later, and extension support needs macOS 15.4. The main download is for Apple silicon; an Intel build is attached to each GitHub release. Release builds are signed with a Developer ID and notarized, and the app checks for updates once a day. The "Search" name and icon belong to Office Commun, so forks must be renamed.
