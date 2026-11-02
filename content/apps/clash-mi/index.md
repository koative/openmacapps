---
name: "Clash Mi"
summary: "A cross-platform proxy client built on the mihomo (Clash.Meta) core, with subscription import and a built-in web dashboard."
category: "Internet"
tags:
  - proxy
  - network
  - cross-platform
repository: https://github.com/KaringX/clashmi
website: https://clashmi.app
license: "GPL-3.0"
licenseUrl: https://github.com/KaringX/clashmi/blob/main/LICENSE
download: https://clashmi.app/download
homebrew: "clash-mi"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/KaringX/clashmi
  - https://github.com/KaringX/clashmi/blob/main/LICENSE
  - https://clashmi.app/guide/macos
  - https://github.com/KaringX/clashmi/releases
  - https://clashmi.app/download
assets:
  - path: ./assets/icon.png
    source: https://github.com/KaringX/clashmi/blob/main/assets/images/app_icon_256.png
    credit: "KaringX"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Clash Mi is a graphical client for the mihomo proxy core, the maintained fork of Clash also known as Clash.Meta. It runs configurations in mihomo's YAML format and can import subscription links from a proxy provider, then routes traffic according to the rules in that configuration. The zashboard web panel is bundled for people who prefer a browser dashboard.

The app does not provide proxy servers; you need your own configuration or a subscription from a provider. The same Flutter app is published for iOS, Android, Windows and Linux.

On the Mac it needs macOS 12 or later and ships as a universal disk image. The project's guide says the first launch has to be allowed in the Security & Privacy settings. Most GitHub releases are tagged as pre-releases, and the website links to separate stable and beta builds.
