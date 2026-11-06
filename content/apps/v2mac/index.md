---
name: "V2Mac"
summary: "Native SwiftUI client for Xray-core with subscriptions, latency tests, routing and TUN mode, for Apple silicon Macs."
category: "Internet"
tags:
  - proxy
  - vpn-client
  - network
repository: "https://github.com/v2macapp/v2mac"
website: "https://v2macapp.github.io/"
license: "GPL-3.0"
licenseUrl: "https://github.com/v2macapp/v2mac/blob/main/LICENSE"
download: "https://github.com/v2macapp/v2mac/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/v2macapp/v2mac"
  - "https://github.com/v2macapp/v2mac/blob/main/LICENSE"
  - "https://github.com/v2macapp/v2mac/releases"
  - "https://v2macapp.github.io/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/v2macapp/v2mac/releases/download/v1.8.0/V2Mac-1.8.0.dmg"
    credit: "V2Mac contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

V2Mac is a menu bar client for Xray-core, the engine behind VLESS, VMess, Trojan, Shadowsocks and Hysteria2 proxies. You paste a subscription link, pick a server, and it provides a local SOCKS5 and HTTP proxy, or routes the whole Mac through a TUN tunnel. Rules can send traffic by region, site or app, and Proxifier profiles can be imported. It suits people who already run Xray or V2Ray servers and want a native Mac client, not a hosted VPN service.

The app needs macOS 26 or later on Apple silicon. The DMG is not notarized, so the first launch needs Open Anyway in System Settings; a Homebrew cask is also published. The README says the app has no analytics or telemetry. Secure Sandbox is marked beta, and its components are downloaded only when you first open it. The project is GPL-3.0 and bundles Xray-core under MPL-2.0.
