---
name: "Netty"
summary: "A menu bar dot that shows whether the internet really answers, with latency, jitter, packet loss and speed tests."
category: "Utilities"
tags:
  - network
  - menu-bar
  - monitoring
  - native
repository: "https://github.com/alvaldes/netty"
website: "https://alvaldes.github.io/netty/"
license: "GPL-3.0"
licenseUrl: "https://github.com/alvaldes/netty/blob/main/LICENSE"
download: "https://github.com/alvaldes/netty/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/alvaldes/netty"
  - "https://github.com/alvaldes/netty/blob/main/LICENSE"
  - "https://github.com/alvaldes/netty/releases/latest"
  - "https://alvaldes.github.io/netty/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/alvaldes/netty/main/docs/assets/icon.png"
    credit: "Netty contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Netty sits in the menu bar as a dot that turns green, yellow or red. It asks Apple's captive portal check and Google whether the internet really answers, so Wi-Fi without a connection or a hotel sign-in page counts as offline. It also times handshakes to 1.1.1.1 and 8.8.8.8 for latency, jitter and loss, runs Apple's built-in speed test on demand or on a schedule, and notifies you when the connection drops and comes back. It suits people who want a constant, glanceable read on their connection rather than a full network dashboard.

Netty needs macOS 26 or later. The app is not notarized by Apple yet, so the first launch has to be allowed under System Settings, Privacy & Security. It sends its checks to Apple, Google and Cloudflare, and asks GitHub for the latest release unless you turn update checks off; the project says it has no analytics or telemetry. Speed tests use real data, and the Location permission is optional, used only to show the Wi-Fi network name.
