---
name: Latest
summary: "Lists available updates and their release notes for Mac App Store and Sparkle-based apps."
category: Utilities
tags:
  - updates
  - maintenance
repository: https://github.com/mangerlahn/Latest
website: https://max.codes/latest
license: GPL-3.0
licenseUrl: https://github.com/mangerlahn/Latest/blob/main/LICENSE.md
download: https://github.com/mangerlahn/Latest/releases
freeDownload: true
homebrew: "latest"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/mangerlahn/Latest", "https://github.com/mangerlahn/Latest/blob/main/LICENSE.md", "https://github.com/mangerlahn/Latest/blob/main/README.md", "https://github.com/mangerlahn/Latest/releases", "https://github.com/mangerlahn/Latest/releases/tag/0.11", "https://max.codes/latest"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/mangerlahn/Latest/blob/1301cf6eb23391065691482fb52569fe70f9a3e2/Latest/Resources/Assets.xcassets/AppIcon.appiconset/256.png
    credit: Latest contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Latest lists the apps on your Mac that have updates waiting and shows what changed in each. You read the release notes and start an update right away, without opening each app.

Its coverage is limited to two kinds of app: apps installed through the Mac App Store, and apps that update themselves with the Sparkle framework.

Release notes also stay available for apps that are already current. If an app updated itself yesterday, you can look up what that version changed. Each app's notes appear in the same layout, whoever wrote them. On Macs with a Touch Bar you can scroll the list and update apps from the bar.

The app is developed in its author's spare time, and updates come at irregular intervals. Version 0.11 appeared in June 2025. Translations are handled through Weblate.

Latest needs macOS 10.15 or later. The download is a DMG with a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. It is free under the GPL v3, and Homebrew users can install it as a cask.
