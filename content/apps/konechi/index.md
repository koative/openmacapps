---
name: "Konechi"
summary: "Tiny menu bar indicator showing whether the default network route is Ethernet, Wi-Fi or offline, with VPN use flagged."
category: "Utilities"
tags:
  - menu-bar
  - network
  - system-monitoring
repository: "https://github.com/piro0919/konechi"
website: "https://konechi.kkweb.io/"
license: "MIT"
licenseUrl: "https://github.com/piro0919/konechi/blob/main/LICENSE"
download: "https://github.com/piro0919/konechi/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/piro0919/konechi"
  - "https://github.com/piro0919/konechi/blob/main/LICENSE"
  - "https://github.com/piro0919/konechi/releases/latest"
  - "https://konechi.kkweb.io/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/piro0919/konechi/releases/download/v0.1.4/Konechi-0.1.4.dmg"
    credit: "piro0919"
    license: "MIT; upstream app icon, trademarks retained"
---

Konechi shows at a glance whether your Mac is on Ethernet or Wi-Fi. The stock menu bar only indicates Wi-Fi, so Konechi reads the primary interface of the default route from the system configuration and shows its type as a character's face: on top form for Ethernet, doing fine for Wi-Fi, and out of energy when offline. A padlock badge appears when traffic goes through a VPN. The menu lists the service, device, IP address, router, link speed where macOS reports one, and live throughput. It suits people who move between a cable and Wi-Fi and want the connection type visible.

It needs macOS 14 or later on Apple silicon; the release build is arm64 only. The app is ad-hoc signed and not notarized, so macOS warns on first launch and you must allow it in System Settings. The interface defaults to English and falls back to Japanese when the system language is Japanese. Wi-Fi does not report a link speed, so the menu shows a dash for it.
