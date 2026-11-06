---
name: "Phosphor"
summary: "Manages iPhone and iPad from macOS: browse and export local backups, messages, photos and contacts without iCloud."
category: "Utilities"
tags:
  - ios
  - iphone
  - backup
  - file-transfer
repository: "https://github.com/momenbasel/Phosphor"
website: "https://momenbasel.github.io/Phosphor/"
license: "MIT"
licenseUrl: "https://github.com/momenbasel/Phosphor/blob/main/LICENSE"
download: "https://github.com/momenbasel/Phosphor/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/momenbasel/Phosphor"
  - "https://github.com/momenbasel/Phosphor/blob/main/LICENSE"
  - "https://github.com/momenbasel/Phosphor/releases"
  - "https://momenbasel.github.io/Phosphor/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/momenbasel/Phosphor/main/Resources/AppIcon.svg"
    credit: "Moamen Basel and Phosphor Contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Phosphor is a manager for iPhone, iPad and iPod touch. It creates local backups without iCloud, browses and extracts backup contents, and exports iMessage and SMS conversations to CSV, HTML, text or JSON. It also exports contacts and calendars, browses files on the device, drags files in and out, installs and removes IPA apps, and shows syslog and crash reports. It is for people who want their device data on a Mac without iCloud or a paid tool.

Requires macOS 14.0 or later and pymobiledevice3, installed with pipx; libimobiledevice is an optional fallback. The README says it supports iOS 17 to 26. The README does not say whether the build is notarized. Encrypted backups open with their password, which can optionally be saved in the Keychain.
