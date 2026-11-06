---
name: "Tracexy"
summary: "Native macOS network analyzer that groups live or saved captures into sessions by process, host and protocol."
category: "Developer tools"
tags:
  - network
  - inspection
  - monitoring
repository: "https://github.com/RockxyApp/Tracexy"
website: "https://rockxy.io/tracexy"
license: "AGPL-3.0"
licenseUrl: "https://github.com/RockxyApp/Tracexy/blob/main/LICENSE"
download: "https://github.com/RockxyApp/Tracexy/releases"
homebrew: "tracexy"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/RockxyApp/Tracexy"
  - "https://github.com/RockxyApp/Tracexy/blob/main/LICENSE"
  - "https://github.com/RockxyApp/Tracexy/releases"
  - "https://rockxy.io/tracexy"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/RockxyApp/Tracexy/releases/download/v0.9.2/Tracexy-0.9.2-17.dmg"
    credit: "Rockxy LLC"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

Tracexy captures network traffic on a Mac and groups it into sessions: which process talked to which host, over which protocols, and how much data moved. Raw packet fields and hex stay one click away. It can also open saved `.pcap` and `.pcapng` files. It suits developers and support staff who need to see which app is talking to what, without decrypting HTTPS.

The DMG is a universal build for Apple silicon and Intel and requires macOS 14 or later. The app is notarized by Apple. Live capture uses a privileged helper that you approve once in System Settings; opening saved captures does not need it. Limits include no TLS or QUIC decryption and no deep HTTP/2, HTTP/3 or WebSocket decoding. Paid Pro license keys are optional and are entered under Settings, then License.
