---
name: "Stop Stutter"
summary: "Turns off Apple's peer-to-peer Wi-Fi (AWDL) while chosen game-streaming apps run, which can help when AWDL causes stutter."
category: "Utilities"
tags:
  - streaming
  - network
  - gaming
  - wi-fi
repository: "https://github.com/burakgon/stop-stutter"
website: "https://github.com/burakgon/stop-stutter"
license: "MIT"
licenseUrl: "https://github.com/burakgon/stop-stutter/blob/main/LICENSE"
download: "https://github.com/burakgon/stop-stutter/releases/download/v0.1.0/StopStutter-0.1.0-universal.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/burakgon/stop-stutter"
  - "https://github.com/burakgon/stop-stutter/blob/main/LICENSE"
  - "https://github.com/burakgon/stop-stutter/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/burakgon/stop-stutter/releases/download/v0.1.0/StopStutter-0.1.0-universal.zip
    credit: Stop Stutter contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Stop Stutter is a menu bar app for people who stream games from a PC or a cloud service. While a selected client runs, such as Moonlight, GeForce NOW, Parsec, Steam Link or Punktfunk, a small privileged helper keeps the `awdl0` interface down, and it restores AWDL when the last selected app quits. AirDrop, peer-to-peer AirPlay and some Continuity features may be unavailable during a session. Whether it helps depends on whether AWDL causes your stutter; the README says it does not claim a measured performance gain for each client.

It requires macOS 14 or later; the universal release is a zip, and the Liquid Glass styling needs macOS 26. The build is Developer ID signed and notarized. After install you must enable the helper under System Settings, General, Login Items & Extensions, which requires administrator approval. The project is MIT-licensed.
