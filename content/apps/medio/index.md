---
name: "Medio"
summary: "A small text diff checker that highlights word-level differences between two passages as you type."
category: "Developer tools"
tags:
  - diff
  - text
  - developer-utilities
repository: https://github.com/nuance-dev/medio
website: https://github.com/nuance-dev/medio
license: "MIT"
licenseUrl: https://github.com/nuance-dev/medio/blob/main/LICENSE
download: https://github.com/nuance-dev/medio/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/nuance-dev/medio
  - https://github.com/nuance-dev/medio/blob/main/LICENSE
  - https://github.com/nuance-dev/medio/releases
  - https://github.com/nuance-dev/medio/blob/main/README.md
  - https://github.com/nuance-dev/medio/releases/tag/v3.2.0
  - https://github.com/nuance-dev/medio/commits/main
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nuance-dev/medio/main/Medio/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-256.png
    credit: "Nuanced (nuance-dev)"
    license: "MIT repository asset; trademarks retained"
---

Medio is for the moment when you have two versions of a paragraph, a config snippet or a reply and need to see what changed. You enter the two texts, and the differences are highlighted word by word. Editing either text updates the highlights as you type, so you can keep revising and watch the comparison follow.

It is a small app built with SwiftUI and AppKit. Since version 3.0 the comparison itself comes from Differ, an open-source Swift diffing package. The developer says Claude 3.5 Sonnet wrote the first version within a day, and that Medio was used to build itself.

The source now offers Auto, Dark and Light appearance modes, with an icon that matches. The Auto setting, which follows the system theme, was merged in October 2026, after the last release.

The download on the GitHub releases page, tagged v3.2.0 from late 2024, is a ZIP of about 1.3 MB containing a Universal app for Apple silicon and Intel. It needs macOS 14 or later and is Developer ID-signed and notarized. The author, a designer writing a first Swift app, warns that it is probably buggy and asks for reports on GitHub Issues.
