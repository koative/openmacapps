---
name: "ClashBar"
summary: "Runs the mihomo proxy core from the menu bar, with config profiles, node switching, rules and the system proxy setting."
category: "Internet"
tags:
  - proxy
  - network
  - menu-bar
repository: "https://github.com/Sitoi/ClashBar"
website: "https://clashbar.sitoi.workers.dev"
license: "GPL-3.0"
licenseUrl: "https://github.com/Sitoi/ClashBar/blob/main/LICENSE"
download: "https://github.com/Sitoi/ClashBar/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/Sitoi/ClashBar"
  - "https://github.com/Sitoi/ClashBar/blob/main/LICENSE"
  - "https://github.com/Sitoi/ClashBar/releases"
  - "https://raw.githubusercontent.com/Sitoi/ClashBar/main/README.md"
  - "https://github.com/Sitoi/ClashBar/releases/tag/v0.3.6"
  - "https://clashbar.sitoi.workers.dev"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/Sitoi/ClashBar/main/docs/public/clashbar-logo.png"
    credit: "Sitoi"
    license: "GPL-3.0; upstream project logo, trademarks retained"
---

ClashBar runs the mihomo proxy core, the Clash-compatible engine, from a panel in the menu bar. Import or select a configuration profile, start the core, pick Rule, Global or Direct mode, test node latency and switch nodes, then turn on the system proxy once a node works.

The panel has five pages:

- Proxy holds profiles, modes, the system proxy switch, nodes, latency and providers.
- Rules shows rule counts and filters, and updates rule providers.
- Connections lists active connections, which you can filter and close.
- Logs filters output by level and keyword.
- System covers language, the status bar, ports and options such as `allow-lan` and IPv6.

The panel also shows live traffic and memory use. The interface is in Simplified Chinese and English, and the README and documentation site are in Chinese.

Only one mihomo or Clash-family client should control the system proxy at a time. The system proxy works only when ClashBar sits in Applications, and the first time you enable it the app asks for an administrator password to install a helper.

ClashBar needs macOS 13. The current release has separate Apple silicon and Intel DMGs, with or without a bundled mihomo core; the no-core builds are under 2 MB. The Apple silicon build is not notarized. Homebrew users can install it from the developer's tap.
