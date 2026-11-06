---
name: "QuotaBar"
summary: "Menu bar and desktop meters for AI coding limits across Claude, Codex, Cursor and other tools, read on your Mac."
category: "AI"
tags:
  - usage-tracking
  - menu-bar
  - coding-agents
repository: "https://github.com/QuotaBar/QuotaBar"
website: "https://quota.bar"
license: "MIT"
licenseUrl: "https://github.com/QuotaBar/QuotaBar/blob/main/LICENSE"
download: "https://github.com/QuotaBar/QuotaBar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/QuotaBar/QuotaBar"
  - "https://github.com/QuotaBar/QuotaBar/blob/main/LICENSE"
  - "https://github.com/QuotaBar/QuotaBar/releases"
  - "https://quota.bar"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/QuotaBar/QuotaBar/main/iOS/App/Assets.xcassets/AppIcon.appiconset/icon-1024.png"
    credit: "QuotaBar contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

QuotaBar shows how much of each AI coding service's quota you have used, when each window resets and an estimate of what the usage cost. It reads the sign-ins that tools such as Claude Code and Codex already keep on the Mac, and you can paste a key for services without a local sign-in. The numbers can appear in the menu bar, a notch panel, an edge dock or desktop cards. It is for people who run several coding assistants and want their limits in one view.

It needs macOS 14 or later on Apple silicon or Intel. The README says builds are signed with a Developer ID and notarized by Apple, and that it is distributed outside the App Store because it reads other apps' sign-ins. Spend figures are estimates from local session logs, not a bill. Some sign-ins are encrypted, so macOS asks for keychain access once. The app connects to the providers you enable, to quota.bar for update checks and feedback, and to a few public endpoints for status pages, exchange rates and model prices. The README says there is no analytics or telemetry.
