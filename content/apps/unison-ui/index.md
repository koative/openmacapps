---
name: "Unison UI"
summary: "Native macOS front end for the Unison file synchronizer, with sync profiles and conflict review over SSH."
category: "Utilities"
tags:
  - file-sync
  - sync
  - backup
  - ssh
repository: "https://github.com/bcourbage/unison-ui-mac"
website: "https://bcourbage.github.io/unison-ui-mac/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/bcourbage/unison-ui-mac/blob/main/LICENSE"
download: "https://github.com/bcourbage/unison-ui-mac/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bcourbage/unison-ui-mac"
  - "https://github.com/bcourbage/unison-ui-mac/blob/main/LICENSE"
  - "https://github.com/bcourbage/unison-ui-mac/releases/latest"
  - "https://bcourbage.github.io/unison-ui-mac/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/bcourbage/unison-ui-mac/releases/download/v1.0.0/unison-ui-mac-1.0.0.app.zip"
    credit: "Bruno Courbage"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

Unison UI puts the Unison file synchronizer behind a native window. It runs two-way sync between local folders and remote machines over SSH, keeps sync profiles, and shows every proposed change and conflict for review before any file is touched. Profiles can also be opened from the command line for review. It suits people who keep folders in step with a server or another Mac and want Unison's engine with a visual front end instead of the terminal.

It needs macOS 15 or later on Apple silicon. The release zip is Developer ID signed and notarized, and it embeds Unison 2.54.0. The remote side must run a compatible Unison for SSH profiles. Update checks can include an optional, anonymous system profile.
