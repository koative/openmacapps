---
name: "ShadowsocksX-NG"
summary: "A menu bar client for Shadowsocks servers that runs local SOCKS5 and HTTP proxies, with groups, subscriptions and rule presets."
category: "Privacy & security"
tags:
  - proxy
  - network
  - menu-bar
repository: "https://github.com/shadowsocks/ShadowsocksX-NG"
website: "https://github.com/shadowsocks/ShadowsocksX-NG"
license: "GPL-3.0"
licenseUrl: "https://github.com/shadowsocks/ShadowsocksX-NG/blob/develop/LICENSE"
download: "https://github.com/shadowsocks/ShadowsocksX-NG/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/shadowsocks/ShadowsocksX-NG"
  - "https://github.com/shadowsocks/ShadowsocksX-NG/blob/develop/LICENSE"
  - "https://github.com/shadowsocks/ShadowsocksX-NG/releases"
  - "https://raw.githubusercontent.com/shadowsocks/ShadowsocksX-NG/develop/README.md"
  - "https://github.com/shadowsocks/ShadowsocksX-NG/releases/tag/v2.0.0-alpha.2"
  - "https://github.com/shadowsocks/ShadowsocksX-NG/releases/tag/v1.10.3"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/shadowsocks/ShadowsocksX-NG/develop/ShadowsocksX-NG/Assets.xcassets/AppIcon.appiconset/Icon_512x512.png"
    credit: "Shadowsocks contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

ShadowsocksX-NG connects your Mac to Shadowsocks servers you already have and runs local SOCKS5 and HTTP proxies for Mac apps to use. Servers, subscriptions and routing are all handled from its menu bar icon. The project makes the client only and supplies no servers or subscriptions.

The current line, ShadowsocksX-NG 2, is a rewrite still in development, and its releases so far are alphas. It needs macOS 15 or later and an Apple silicon Mac. The 2.0.0-alpha.2 disk image is signed with a Developer ID and notarized. The older 1.x app remains on the releases page, but it is no longer maintained.

- Add or import servers, sort them into groups and mark favourites, or follow an HTTPS subscription in the SIP-008 format, with the traffic and expiry figures your provider reports.
- Pick global, rules or direct mode. Rules mode has presets built around the GFW List and mainland China addresses, and each preset takes your own rules.
- Use Shadowsocks 2022 ciphers and identity headers, test latency, and spread load over several servers through upstream `sslocal`.
- Run the bundled v2ray-plugin or Cloak, or set up your own plugins. The v2ray-plugin Hysteria2 transport works only when the server runs that mode too.

Devices on your network can share the proxies once you switch on the LAN listeners, which start off and can ask for credentials. The server library and listener settings are encrypted on the Mac with age. The developers say diagnostic reports leave out passwords, plugin options and subscription URLs. The interface is in English and Simplified Chinese, and the app can start at login.
