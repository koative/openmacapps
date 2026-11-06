---
name: "Open Contexts"
summary: "Window switcher that lists each window separately in most-recently-used order, with an app bar and saved window groups."
category: "Productivity"
tags:
  - window-management
  - app-switcher
  - menu-bar
  - productivity
repository: "https://github.com/zshnb/open-contexts"
website: "https://opencontexts.app/"
license: "Apache-2.0"
licenseUrl: "https://github.com/zshnb/open-contexts/blob/main/LICENSE"
download: "https://github.com/zshnb/open-contexts/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/zshnb/open-contexts"
  - "https://github.com/zshnb/open-contexts/blob/main/LICENSE"
  - "https://github.com/zshnb/open-contexts/releases"
  - "https://opencontexts.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/zshnb/open-contexts/releases/download/v0.5.1/OpenContexts-0.5.1-universal.dmg"
    credit: "Open Contexts contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Open Contexts takes over ⌘Tab with a switcher that lists individual windows rather than whole apps, most recently used first. A sidebar or bottom bar keeps windows visible at the edge of the screen, and you can group windows by task into saved sets that persist across restarts. It is for people who work with many windows of the same app, such as several browser windows or editor projects, and want them within reach.

The app needs macOS 13 or later and Accessibility permission to switch windows. The DMG is a universal build, but the author has not verified macOS 13 on physical devices. It is not notarized: the release is signed with a self-signed certificate and Gatekeeper blocks the first launch, so allow it in System Settings or remove the quarantine attribute from the app. Trackpad switching gestures are not supported, and full-screen behaviour still needs testing in more setups.
