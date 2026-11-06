---
name: "ZenTime"
summary: "Calm exam practice timer with a time budget per question, a soft chime when time runs out and a PDF report."
category: "Education"
tags:
  - timer
  - pdf
  - learning
repository: "https://github.com/PatpateePhangern/ZenTime"
website: "https://github.com/PatpateePhangern/ZenTime"
license: "MIT"
licenseUrl: "https://github.com/PatpateePhangern/ZenTime/blob/main/LICENSE"
download: "https://github.com/PatpateePhangern/ZenTime/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/PatpateePhangern/ZenTime"
  - "https://github.com/PatpateePhangern/ZenTime/blob/main/LICENSE"
  - "https://github.com/PatpateePhangern/ZenTime/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/PatpateePhangern/ZenTime/main/ZenTime/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Patpatee Phangern"
    license: "MIT; upstream app icon, trademarks retained"
---

ZenTime helps you practise timed exams. You enter the total time, the number of questions and the marks for each, then work through the paper with a live timer for each question and one for the whole exam. Questions that run over their budget are highlighted, a soft chime plays when time is up, and the finished session can be saved as a styled PDF through the macOS save panel. It suits students practising past papers under exam conditions.

It needs macOS 13 or later and is built with SwiftUI and AppKit, with no third-party dependencies. The DMG is ad-hoc signed and not notarized by Apple, so the first launch is blocked. The README describes three ways past this: right-click and Open, Open Anyway under Privacy & Security, or clearing the quarantine attribute with `xattr`. It is MIT-licensed.
