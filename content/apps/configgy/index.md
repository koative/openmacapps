---
name: "Configgy"
summary: "Menu bar app that backs up and restores Zen Browser, Claude Code and chosen folders as dated zips in a cloud folder."
category: "Utilities"
tags:
  - backup
  - sync
  - cloud-storage
  - menu-bar
repository: "https://github.com/rocavence/Configgy-app"
website: "https://configgy.rocavence.com"
license: "CC-BY-NC-SA-4.0"
sourceAvailability: "source-available"
licenseNotes: "CC BY-NC-SA 4.0, a Creative Commons licence written for content rather than software. You may use, share and adapt the code for noncommercial purposes if you give credit and license your adaptations under the same terms. Commercial use is not allowed."
licenseUrl: "https://github.com/rocavence/Configgy-app/blob/main/LICENSE"
download: "https://github.com/rocavence/Configgy-app/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/rocavence/Configgy-app"
  - "https://github.com/rocavence/Configgy-app/blob/main/LICENSE"
  - "https://github.com/rocavence/Configgy-app/releases"
  - "https://configgy.rocavence.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/rocavence/Configgy-app/main/Configgy/Resources/Assets.xcassets/AppIcon.appiconset/icon_256.png"
    credit: "rocavence"
    license: "CC-BY-NC-SA-4.0; upstream app icon, trademarks retained"
---

Configgy backs up and restores selected Mac settings: Zen Browser profile files, Claude Code settings, skills and memory, and any folders you choose. Each backup is a dated zip written to a cloud folder you already use, such as Dropbox, iCloud Drive or Google Drive. Backups are tested before they are moved into place, and a restore shows a preview and keeps a copy of anything it replaces. It suits people who move between Macs and want their tool setup back.

It requires macOS 14 or later. The release zip is self-signed and not notarized by Apple, so the first launch needs right-click and Open, or removal of the quarantine attribute. Some folders may need Full Disk Access. Logins, tokens, keys and similar secrets are excluded by design, but check what each target copies before you rely on it. The licence is noncommercial share-alike.
