---
name: "BaoLianDeng"
summary: "macOS proxy client for Clash and mihomo subscriptions, with per-app routing and a Rust proxy engine."
category: "Internet"
tags:
  - proxy
  - vpn
  - network
  - privacy
repository: "https://github.com/madeye/BaoLianDeng"
website: "https://madeye.github.io/BaoLianDeng/"
license: "MIT"
licenseUrl: "https://github.com/madeye/BaoLianDeng/blob/main/LICENSE"
download: "https://github.com/madeye/BaoLianDeng/releases"
homebrew: "baoliandeng"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/madeye/BaoLianDeng"
  - "https://github.com/madeye/BaoLianDeng/blob/main/LICENSE"
  - "https://github.com/madeye/BaoLianDeng/releases"
  - "https://madeye.github.io/BaoLianDeng/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/madeye/BaoLianDeng/main/BaoLianDeng/Assets.xcassets/AppIcon.appiconset/AppIcon.png"
    credit: "Max Lv"
    license: "MIT; upstream app icon, trademarks retained"
---

BaoLianDeng sends traffic through Clash-format proxy subscriptions using Apple's transparent proxy API. You can choose which apps go through the proxy and which bypass it, add and refresh subscriptions, switch proxy groups, and view traffic charts. The engine is meow-rs, a Clash- and mihomo-compatible kernel written in Rust. It suits people who already use Clash-style subscriptions and want a native client. The app is also listed on the Mac App Store.

The release is a .pkg installer. After installing, enable the network extension under System Settings → General → Login Items & Extensions → Network Extensions. The README's source build needs macOS 14.0 or later; the release notes do not state a minimum version. The project does not say whether the package is notarized. Some upstream outbounds, including TUIC, WireGuard, SSH and ShadowsocksR, are not supported.
