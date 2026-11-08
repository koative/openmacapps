---
name: Clash Party
summary: A desktop GUI for the Mihomo (Clash Meta) proxy core, with subscription management, TUN mode and config overrides.
category: Internet
tags:
  - proxy
  - network
  - menu-bar
  - cross-platform
repository: https://github.com/mihomo-party-org/clash-party
website: https://clashparty.org/
license: GPL-3.0
licenseUrl: https://github.com/mihomo-party-org/clash-party/blob/smart_core/LICENSE
download: https://github.com/mihomo-party-org/clash-party/releases
freeDownload: true
homebrew: "clash-party"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/mihomo-party-org/clash-party
  - https://github.com/mihomo-party-org/clash-party/blob/smart_core/LICENSE
  - https://github.com/mihomo-party-org/clash-party/releases
  - https://formulae.brew.sh/cask/clash-party
  - https://clashparty.org/
  - https://raw.githubusercontent.com/mihomo-party-org/clash-party/smart_core/README.md
  - https://clashparty.org/docs/handson
  - https://github.com/mihomo-party-org/clash-party/releases/tag/v2.0.4
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/mihomo-party-org/clash-party/smart_core/build/icon.png
    credit: mihomo-party-org and Clash Party contributors
    license: GPL-3.0 repository asset; Clash Party name and logo retained by the project
---

Clash Party gives the Mihomo proxy core, also known as Clash Meta, a window and a menu of settings. You import a subscription, pick a node to turn the proxy on and choose a proxy mode.

The app is a client, and the proxies come from the subscription you import. Its quick-start guide uses a paid proxy service that sponsors the project as the example, and the README and website promote the same service. Two cores come bundled, standard Mihomo and a Smart core whose rule override uses an AI model to pick the best node automatically.

- TUN mode works out of the box, without installing a separate service.
- Most common Mihomo settings can be changed in the interface.
- Overrides let you rewrite any part of a configuration file.
- WebDAV backup saves and restores the configuration in one step.
- Sub-Store is built in for managing subscriptions.
- Several colour themes are available.

Version 2.0.4 added a simple mode. It edits subscriptions, proxy groups, rules, rule sets, DNS and domain sniffing visually, and it can manage local nodes and import node links.

The project was called Mihomo Party, and each release still carries installers under both names. The Mac downloads are PKG installers, with separate Apple silicon and Intel packages for macOS 11 and later and a second pair for macOS 10.15. Windows and Linux builds come from the same releases page. The README, release notes and documentation are written in Chinese.
