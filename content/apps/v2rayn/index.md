---
name: "v2rayN"
summary: "A desktop proxy client that manages Xray, sing-box and other cores, with subscriptions and routing rules."
category: "Internet"
tags:
  - proxy
  - network
  - cross-platform
repository: https://github.com/2dust/v2rayN
website: https://v2rayn.2dust.link
license: GPL-3.0
licenseUrl: https://github.com/2dust/v2rayN/blob/master/LICENSE
download: https://github.com/2dust/v2rayN/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/2dust/v2rayN
  - https://github.com/2dust/v2rayN/blob/master/LICENSE
  - https://github.com/2dust/v2rayN/releases
  - https://github.com/2dust/v2rayN/wiki/Release-files-introduction
  - https://github.com/2dust/v2rayN/wiki/List-of-supported-cores
  - https://github.com/2dust/v2rayN/wiki/Description-of-subscription
  - https://github.com/2dust/v2rayN/wiki/Description-of-system-proxy-routing
  - https://github.com/2dust/v2rayN/wiki/Description-of-proxy-chain
  - https://github.com/2dust/v2rayN/releases/tag/7.25.6
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/2dust/v2rayN/master/v2rayN/v2rayN.Desktop/v2rayN.icns
    credit: "2dust and v2rayN contributors"
    license: "GPL-3.0 repository asset; name and logo retained by the project"
---

v2rayN is a desktop client for proxy cores. You add servers or subscription links, pick a node, and the app writes the configuration and runs the core behind it. Release packages bundle Xray, sing-box and mihomo. Other cores, among them v2fly, Hysteria 2, NaiveProxy and TUIC, can be downloaded separately and driven from the same window.

Subscriptions can carry VMess, Shadowsocks, SOCKS, VLESS, Trojan, Hysteria 2, TUIC, WireGuard and AnyTLS servers, either as standard share links or in v2rayN's own link format, which also works as a backup of a profile.

- On each start the app can point the macOS system proxy at the core, clear it, or leave it as other software set it.
- Routing rules in the core decide which traffic goes through the proxy and which goes direct, for example splitting domestic from foreign destinations.
- A subscription group can pass through a front proxy first, such as an office HTTP proxy, or leave through a landing proxy that keeps a fixed exit address.
- Subscription updates can send custom HTTP headers.

Builds exist for Intel and Apple silicon Macs and need macOS 13.6 or later. A ZIP and a DMG are offered. The DMG is not signed, so macOS calls the app damaged until you clear its extended attributes with the `xattr -cr` command given in the project wiki. Release files carry GPG signatures. The Android counterpart is a separate project, v2rayNG.
