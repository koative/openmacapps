---
name: "Macxelio"
summary: "Menu bar proxy client for macOS built on Xray-core, with rule-based routing, share-link import and dev tool proxy setup."
category: "Internet"
tags:
  - proxy
  - menu-bar
  - network
  - vpn
repository: "https://github.com/dalirnet/macxelio"
website: "https://dalirnet.github.io/macxelio/"
license: "MIT"
licenseUrl: "https://github.com/dalirnet/macxelio/blob/main/LICENSE"
download: "https://github.com/dalirnet/macxelio/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dalirnet/macxelio"
  - "https://github.com/dalirnet/macxelio/blob/main/LICENSE"
  - "https://github.com/dalirnet/macxelio/releases/latest"
  - "https://dalirnet.github.io/macxelio/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/dalirnet/macxelio/main/Resources/AppIcon.icns"
    credit: "dalirnet"
    license: "MIT; upstream app icon, trademarks retained"
---

Macxelio is a menu bar client for Xray-core proxy servers, including VLESS, VMess, Trojan, Shadowsocks, SOCKS and HTTP, with TLS and REALITY transport. From the menu you can switch proxies, choose Global, Rule or Direct mode, and turn the macOS system proxy or DNS on and off. Routing rules match by domain, IP, GeoIP or GeoSite, and a pasted share link fills in the server form. It can also point your shell, git, Docker, editors and package managers at the proxy. It is a client only, so you bring your own server details.

It needs macOS 13.0 or later and runs on Apple silicon and Intel. On first launch it downloads the Xray-core it needs. The app is not notarized, so right-click it and choose Open the first time, or allow it under System Settings → Privacy & Security. Because it changes the system proxy and DNS, check the status it shows after switching.
