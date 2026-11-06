---
name: "Cotabby"
summary: "Inline AI autocomplete for almost any Mac text field, using Apple Intelligence or a local model; Tab accepts a word at a time."
category: "AI"
tags:
  - autocomplete
  - local-ai
  - menu-bar
  - privacy
repository: "https://github.com/FuJacob/cotabby"
website: "https://cotabby.app"
license: "AGPL-3.0"
licenseUrl: "https://github.com/FuJacob/cotabby/blob/main/LICENSE"
download: "https://github.com/FuJacob/cotabby/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/FuJacob/cotabby"
  - "https://github.com/FuJacob/cotabby/blob/main/LICENSE"
  - "https://github.com/FuJacob/cotabby/releases"
  - "https://cotabby.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/FuJacob/cotabby/main/Cotabby/Assets.xcassets/AppIcon.appiconset/512.png"
    credit: "Cotabby contributors"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Cotabby shows AI suggestions as gray text next to the cursor in almost any text field on the Mac. Pressing Tab accepts the next word, a second key takes the whole suggestion, and typing on ignores it. It also completes emoji names, runs small inline macros for math, unit and currency conversion and dates, and can fix a likely typo with one key. Suggestions are never shown in password fields.

Suggestions come from Apple Intelligence, from a small open model downloaded from the menu bar and run on the Mac through llama.cpp, or from an OpenAI-compatible server you set up, such as Ollama. The two built-in engines work offline, and the app has no analytics or telemetry. It is for people who want phone-style text prediction across all their Mac apps without sending what they type to a cloud service.

Cotabby needs macOS 14 or later; the Apple Intelligence engine needs macOS 26 on a supported Mac, and the downloadable models take about 0.8 to 5 GB. It asks for Accessibility and Input Monitoring access, and optionally Screen Recording for on-screen context. The DMG is universal, signed with a Developer ID and notarized. The app is still labelled beta.
