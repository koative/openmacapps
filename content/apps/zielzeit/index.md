---
name: "Zielzeit"
summary: "Menu bar app projecting the year your Scalable Capital portfolio reaches its goal, using read-only CLI data."
category: "Productivity"
tags:
  - finance
  - investing
  - portfolio
  - menu-bar
repository: "https://github.com/Mannafee/zielzeit-scalable-capital"
website: "https://mannafee.github.io/zielzeit-scalable-capital/"
license: "MIT"
licenseUrl: "https://github.com/Mannafee/zielzeit-scalable-capital/blob/main/LICENSE"
download: "https://github.com/Mannafee/zielzeit-scalable-capital/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Mannafee/zielzeit-scalable-capital"
  - "https://github.com/Mannafee/zielzeit-scalable-capital/blob/main/LICENSE"
  - "https://github.com/Mannafee/zielzeit-scalable-capital/releases"
  - "https://mannafee.github.io/zielzeit-scalable-capital/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Mannafee/zielzeit-scalable-capital/main/docs/icon.png"
    credit: "Istiaque Mannafee Shaikat"
    license: "MIT; upstream app icon, trademarks retained"
---

Zielzeit shows in the menu bar the year your Scalable Capital portfolio is projected to reach a goal you set. It reads balance, savings plans, deposits and holdings through five read-only commands of the official Scalable CLI, projects three scenarios from your deposits and trailing return, and translates each position into weeks gained or lost. It is for Scalable Capital investors who want a progress view of their savings. The interface is available in English, German, French, Spanish and Italian.

It needs macOS 15 or later on Apple silicon or Intel, a Scalable Capital brokerage account, and the Scalable CLI (`sc`) 1.0 or newer, installed with Homebrew, enabled on your account and logged in. The app walks you through those steps on first launch. The download is ad-hoc signed and not notarized, so the first launch is blocked until you allow it in System Settings. The app is not sandboxed and runs with your normal user permissions. The README says it has no networking code of its own.
