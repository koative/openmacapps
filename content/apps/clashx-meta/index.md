---
name: "ClashX.Meta"
summary: "A rule-based proxy client for the menu bar, maintained by MetaCubeX as a fork of ClashX."
category: "Internet"
tags:
  - proxy
  - menu-bar
  - network
  - routing
repository: https://github.com/MetaCubeX/ClashX.Meta
website: https://github.com/MetaCubeX/ClashX.Meta
license: "AGPL-3.0"
licenseUrl: https://github.com/MetaCubeX/ClashX.Meta/blob/master/LICENSE
download: https://github.com/MetaCubeX/ClashX.Meta/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/MetaCubeX/ClashX.Meta"
  - "https://github.com/MetaCubeX/ClashX.Meta/blob/master/LICENSE"
  - "https://github.com/MetaCubeX/ClashX.Meta/releases"
  - "https://raw.githubusercontent.com/MetaCubeX/ClashX.Meta/master/README.md"
  - "https://github.com/MetaCubeX/ClashX.Meta/releases/tag/v1.4.47"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MetaCubeX/ClashX.Meta/master/ClashX/Images.xcassets/AppIcon.appiconset/icon_256x256%402x.png
    credit: "MetaCubeX and ClashX contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

ClashX.Meta sits in the menu bar and sends your Mac's traffic through proxy servers according to the rules in a Clash configuration file. You bring the servers and the configuration. MetaCubeX maintains it as a fork of ClashX.

- Local HTTP, HTTPS and SOCKS proxies.
- Shadowsocks, VMess, SOCKS5 and Trojan servers.
- GeoIP rules, in a configuration format modelled on Surge.
- Netfilter TCP redirect.

Configuration files live in `~/.config/clash`, and `config.yaml` is the default. You can keep several files there and switch between them from the Config menu. Opening a `clash://install-config` link imports a remote configuration, and `clash://update-config` reloads the one in use.

Some settings only take effect in one place. Ports belong in the `config.yaml` that the app generates, since it ignores the General section of your own files, and a change needs a relaunch. A custom menu bar icon goes in the same folder as `menuImage.png`. A `proxyIgnoreList.plist` there replaces the default list of hosts that skip the system proxy.

With the menu open, Option-Command-C copies a shell command with the external IP address. Releases are a zipped app with Apple silicon and Intel code in one binary; version 1.4.47 needs macOS 13 or later.
