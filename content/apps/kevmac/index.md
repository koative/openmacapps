---
name: "kevMac"
summary: "Asks yes/no, multiple-choice and rating questions about a pasted document and runs the models locally on Apple silicon."
category: "AI"
tags:
  - local-ai
  - privacy
  - apple-silicon
repository: "https://github.com/arinltte/kevMac"
website: "https://github.com/arinltte/kevMac"
license: "MIT"
licenseUrl: "https://github.com/arinltte/kevMac/blob/main/LICENSE"
download: "https://github.com/arinltte/kevMac/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/arinltte/kevMac"
  - "https://github.com/arinltte/kevMac/blob/main/LICENSE"
  - "https://github.com/arinltte/kevMac/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/arinltte/kevMac/main/kevMac/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "kevMac contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

kevMac is a local front end for the kev family of decision models. You paste a document, such as a support message, a review or an article, build yes/no, multiple-choice or rating questions as simple forms, and get answers with animated probability bars and a plain-text report. The app converts the forms into the engine's JSON and back, and can re-ask multiple-choice questions under shuffled option orders to show whether an answer holds. It suits people who want calibrated answers about documents without sending them to a website.

It requires macOS 14.6 or later on an Apple silicon Mac (M1 or later); Xcode is only needed to build from source. The first launch installs uv, Python 3.13 and the engine into `~/.kevMac` and downloads about 1.6 GB of default model weights, so plan for roughly 3 GB of free space. The larger models are marked experimental and need far more memory. The README does not say the build is notarized; it gives a Terminal command to clear the quarantine flag if macOS blocks the app. Apart from setup, engine updates and an optional app-update check, the README says the app makes no network calls and sends no telemetry.
