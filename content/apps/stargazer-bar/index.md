---
name: "Stargazer Bar"
summary: "Menu bar app for GitHub star counts, release download totals and maintainer alerts on public and private repositories."
category: "Developer tools"
tags:
  - menu-bar
  - git
  - notifications
  - monitoring
repository: "https://github.com/jazzyalex/stargazer-bar"
website: "https://jazzyalex.github.io/stargazer-bar/"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/jazzyalex/stargazer-bar/blob/main/LICENSE"
download: "https://github.com/jazzyalex/stargazer-bar/releases/download/v0.7.1/Stargazer-Bar-0.7.1.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jazzyalex/stargazer-bar"
  - "https://github.com/jazzyalex/stargazer-bar/blob/main/LICENSE"
  - "https://github.com/jazzyalex/stargazer-bar/releases"
  - "https://jazzyalex.github.io/stargazer-bar/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jazzyalex/stargazer-bar/main/GHMenuStars/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Alex M"
    license: "BSD-3-Clause code license; icon terms not stated upstream; trademarks retained"
---

Stargazer Bar keeps GitHub numbers in the menu bar. For public repositories it shows star counts and trend charts, and it totals release downloads. For private repositories, where stars do not apply, it shows what needs attention: a failing build, a new pull request or an unanswered issue. It is aimed at maintainers who want to follow a launch or a release without keeping GitHub open in a browser. The app reads GitHub directly, with no backend.

The README says the release is a signed and notarized Apple silicon DMG, and it does not state a minimum macOS version. Public repositories can be tracked without an account. Private repositories need a read-only fine-grained token, which is stored in the Keychain. The README describes no telemetry; Sparkle checks for updates.
