---
name: "DeepSeek Status"
summary: "Menu bar app showing whether DeepSeek is in peak or off-peak pricing, with an optional API balance."
category: "AI"
tags:
  - menu-bar
  - usage-tracking
  - language-models
repository: "https://github.com/owenzhao/DeepSeekStatus"
website: "https://github.com/owenzhao/DeepSeekStatus"
license: "MIT"
licenseUrl: "https://github.com/owenzhao/DeepSeekStatus/blob/main/LICENSE"
download: "https://github.com/owenzhao/DeepSeekStatus/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/owenzhao/DeepSeekStatus"
  - "https://github.com/owenzhao/DeepSeekStatus/blob/main/LICENSE"
  - "https://github.com/owenzhao/DeepSeekStatus/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/owenzhao/DeepSeekStatus/releases/download/v1.6/DeepSeekStatus-1.6.zip"
    credit: "Zhao Xin"
    license: "MIT; upstream app icon, trademarks retained"
---

DeepSeek Status is a menu bar app that shows whether DeepSeek is in its peak or off-peak period, with a countdown to the next change. Off-peak prices are half the peak price, and the app follows the schedule in Beijing time. With an API key saved in the Keychain it also shows the account balance, and an optional LithosAI card shows that provider's credits and model prices. It suits people who time their API calls around DeepSeek's discounted hours.

It needs macOS 14 or later and is a universal build. The zip on the Releases page is signed and notarized. Without a saved API key, the pricing panel makes no account requests. The app also contacts Sparkle's update feed, checks Apple's public China holiday calendar at most once a day, and, only if you enable it, signs in to LithosAI. The README says there is no analytics or telemetry. Prices are kept in a table in the app and may change.
