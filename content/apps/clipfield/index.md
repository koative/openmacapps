---
name: "Clipfield"
summary: "Menu bar clipboard manager with searchable history, a Shift-Command-V picker and optional encryption at rest."
category: "Utilities"
tags:
  - clipboard-manager
  - clipboard
  - keyboard-shortcuts
  - menu-bar
alternativeTo:
  - paste
repository: "https://github.com/jolleyDesign/clipfield"
website: "https://github.com/jolleyDesign/clipfield"
license: "MIT"
licenseUrl: "https://github.com/jolleyDesign/clipfield/blob/main/LICENSE"
download: "https://github.com/jolleyDesign/clipfield/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jolleyDesign/clipfield"
  - "https://github.com/jolleyDesign/clipfield/blob/main/LICENSE"
  - "https://github.com/jolleyDesign/clipfield/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jolleyDesign/clipfield/releases/download/v0.1.0/Clipfield.dmg"
    credit: "Alex Jolley"
    license: "MIT; upstream app icon, trademarks retained"
---

Clipfield is a clipboard manager that keeps a searchable history of text, styled text, images, files and links. A Shift-Command-V picker opens over the current app and pastes the chosen item into it. Items can be pinned, moved into folders and reused as snippets with fill-in fields. It ignores copies that password managers mark as private, lets you exclude apps, and can encrypt stored clips with a key kept in the Keychain. It suits people who copy and paste the same material many times a day.

It needs macOS 14 or later and is built for Apple silicon only. The release disk image is signed with a Developer ID and notarized, although the repository's build notes still describe an ad-hoc build. Auto-paste needs Accessibility permission. The README says clips stay on the device and asks contributors to keep the app free of network calls, analytics and telemetry.
