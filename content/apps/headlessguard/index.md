---
name: "Headless Guard"
summary: "Finds and stops orphaned headless browsers left by automation, leaving your normal Chrome session alone."
category: "Developer tools"
tags:
  - headless-browser
  - automation
  - browser
  - cleanup
repository: "https://github.com/study8677/HeadlessGuard"
website: "https://github.com/study8677/HeadlessGuard"
license: "MIT"
licenseUrl: "https://github.com/study8677/HeadlessGuard/blob/main/LICENSE"
download: "https://github.com/study8677/HeadlessGuard/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/study8677/HeadlessGuard"
  - "https://github.com/study8677/HeadlessGuard/blob/main/LICENSE"
  - "https://github.com/study8677/HeadlessGuard/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/study8677/HeadlessGuard/releases/download/v0.1.0/HeadlessGuard-v0.1.0-macOS-arm64.zip
    credit: Headless Guard contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Headless Guard looks for browsers that automation tools such as Playwright, Puppeteer, Selenium or Chrome-for-Testing launched and then left running after their task ended. It groups each browser's processes into one session, shows the evidence it found, and can stop the dedicated automation launcher first. It is observe-only by default, and it never touches ordinary Chrome windows or standard profiles. It is for developers and agents that drive browsers headlessly.

It requires macOS 13 or later. The prebuilt release is an Apple Silicon archive; source builds work on the architecture your Swift toolchain provides. The release is ad-hoc signed and not notarized, so right-click the app and choose Open the first time. The README says it runs locally with no administrator access, no network requests and no telemetry, and cleanup happens only when you choose it.
