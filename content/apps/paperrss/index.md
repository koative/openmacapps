---
name: "PaperRss"
summary: "Paper-style RSS reader with optional AI summaries and translation, plus FreshRSS and Miniflux sync."
category: "Internet"
tags:
  - rss
  - reading
  - translation
  - feeds
alternativeTo:
  - reeder
repository: "https://github.com/ohmyangboy/PaperRss"
website: "https://rss.1leaf.cc"
license: "GPL-3.0"
licenseUrl: "https://github.com/ohmyangboy/PaperRss/blob/main/LICENSE"
download: "https://github.com/ohmyangboy/PaperRss/releases/download/v1.5.2/PaperRss-v1.5.2.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ohmyangboy/PaperRss"
  - "https://github.com/ohmyangboy/PaperRss/blob/main/LICENSE"
  - "https://github.com/ohmyangboy/PaperRss/releases"
  - "https://rss.1leaf.cc"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ohmyangboy/PaperRss/main/PaperRss/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png"
    credit: "Yonghao Yang"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

PaperRss is an RSS reader for macOS with a calm, paper-like reading view: serif type, a three-column layout and a magazine view with page-turn effects. Translation, summaries and explanations are optional AI features. They call the provider you configure with your own API key, which can be an OpenAI-compatible endpoint, DeepSeek, Google Gemini or a custom endpoint, and they can be left off. Subscriptions can stay on the Mac or sync with FreshRSS or Miniflux. It is for people who read many feeds and want reading to come before AI.

It requires macOS 14.0 or later, and the README lists both Apple silicon and Intel Macs. The v1.5.2 DMG is Developer ID signed and notarized, so it opens without a security override. The README also offers a Homebrew cask and an install script that checks signatures. The project describes itself as still under active development, so bugs are possible. It is local-first rather than offline: feed refreshes, sync, page and image loads, update checks and AI requests connect to outside services.
