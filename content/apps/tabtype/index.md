---
name: "TabType"
summary: "Free on-device autocomplete that suggests ghost text in most Mac apps, running a local llama.cpp model."
category: "AI"
tags:
  - local-ai
  - autocomplete
  - ai-writing
repository: "https://github.com/nilava/TabType"
website: "https://github.com/nilava/TabType"
license: "MIT"
licenseUrl: "https://github.com/nilava/TabType/blob/main/LICENSE"
download: "https://github.com/nilava/TabType/releases/download/v2.1.0/TabType-2.1.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nilava/TabType"
  - "https://github.com/nilava/TabType/blob/main/LICENSE"
  - "https://github.com/nilava/TabType/releases/download/v2.1.0/TabType-2.1.0.dmg"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/nilava/TabType/releases/download/v2.1.0/TabType-2.1.0.dmg"
    credit: "TabType contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

TabType is an MIT-licensed autocomplete for macOS. As you type it shows dimmed suggestions in the text field, and Tab accepts them a word at a time. The suggestions come from a local Qwen3 or Gemma GGUF model run through llama.cpp on your Mac. It suits writers who want predictive text without a cloud service; the README says it has no account, no subscription and no telemetry.

It needs macOS 14 or later on Apple silicon. The README labels it an early alpha built by one maintainer with heavy AI assistance, and the DMG is not notarized, so allow the first launch in System Settings. Its only network requests are model downloads, the public model list and update checks, and it does not read password fields.
