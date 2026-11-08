---
name: "Lockin"
summary: "Focus blocker that closes listed websites and apps during timed sessions and comes back if force-quit."
category: "Productivity"
tags:
  - focus
  - timer
  - pomodoro
repository: "https://github.com/sigma-prog/lockin"
website: "https://github.com/sigma-prog/lockin"
license: "MIT"
licenseUrl: "https://github.com/sigma-prog/lockin/blob/main/LICENSE"
download: "https://github.com/sigma-prog/lockin/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/sigma-prog/lockin"
  - "https://github.com/sigma-prog/lockin/blob/main/LICENSE"
  - "https://github.com/sigma-prog/lockin/releases/latest"
assets:
  - path: ./assets/icon.png
    source: https://github.com/sigma-prog/lockin/releases/download/v1.0.0/Lockin.zip
    credit: Lockin contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Lockin closes distracting websites and apps during focus sessions. Its README says a launchd supervisor restarts it within a second if it is force-quit. Blocked sites are closed by reading the tab addresses in Safari or Chrome through Apple Events, so the app does not need a VPN, proxy or browser extension. It suits people who want a free blocker they cannot quickly switch off in the middle of a session.

The release zip is an Apple silicon build. The app's own minimum system version is macOS 14.0, although the README badge says 13.0. The app is not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. On first run macOS asks for permission to control System Events and your browsers. Intel Macs need a build from source.
