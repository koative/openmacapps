---
name: "RunCat Neo"
summary: "An animated runner in the menu bar, with a dashboard that can show custom metrics read from local JSON files."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - animation
repository: https://github.com/runcat-dev/RunCatNeo
website: https://runcat-dev.github.io/RunCatNeo/
license: "Apache-2.0"
licenseUrl: https://github.com/runcat-dev/RunCatNeo/blob/main/LICENSE
download: https://apps.apple.com/us/app/runcat-neo/id6757801838
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/runcat-dev/RunCatNeo
  - https://github.com/runcat-dev/RunCatNeo/blob/main/LICENSE
  - https://apps.apple.com/us/app/runcat-neo/id6757801838
  - https://runcat-dev.github.io/RunCatNeo/
  - https://runcat-dev.github.io/RunCatNeo/content.md
  - https://github.com/runcat-dev/RunCatNeo/blob/main/README.md
  - https://github.com/runcat-dev/RunCatNeo/blob/main/docs/CustomMetricsSchema.md
  - https://runcat-dev.github.io/RunnerGallery/
assets:
  - path: ./assets/icon.png
    source: https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d6/db/70/d6db70db-7ee8-32be-ab32-503cfa954ee8/AppIcon-0-0-85-220-0-6-0-2x.png/512x512bb.png
    credit: "Takuto Nakamura and RunCat developers"
    license: "Official app icon from the App Store listing; trademark of its developer, not covered by the Apache-2.0 code license"
---

RunCat Neo shows your Mac's CPU load as a cat running in the menu bar. The busier the processor, the faster the cat runs, and it slows to a stroll when the Mac is idle.

RunCat Neo is a new app for current macOS, not an update of the original RunCat. It needs macOS 26 or later, comes from the Mac App Store, where the listing includes in-app purchases, and is translated into ten languages.

Click the menu bar item to open a dashboard with CPU, memory, storage, battery and network readings. You can add your own cards to it. Point RunCat Neo at a local JSON file in the documented format, under Metrics and then Custom Metrics in settings, and a card redraws each time the file changes. Each row shows your text as written, with an optional progress bar for a value between 0 and 1. A separate Metrics Bar item can show a short value from each source.

Whatever writes the file supplies the data, so a small script can track GPU temperature, a Bitcoin price or Claude Code usage. The project ships samples for Claude Code's status line, a Codex hook and Bitcoin. The developer says the app reacts to file-system events, never polls the file and makes no network calls of its own.

The cat can be swapped for other runners, including ones you build from your own keyframe animation. Community runners are shared through the separate Runner Gallery site.
