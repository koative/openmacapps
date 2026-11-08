---
name: "MoonProxy"
summary: "A desktop client for frp tunnels that manages frpc, proxy rules, health checks and traffic stats."
category: "Internet"
tags:
  - network
  - tunneling
  - self-hosted
repository: https://github.com/MoonProxyHQ/moonproxy-desktop
website: https://moonproxy.app
license: "MIT"
licenseUrl: https://github.com/MoonProxyHQ/moonproxy-desktop/blob/main/LICENSE
download: https://github.com/MoonProxyHQ/moonproxy-desktop/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/MoonProxyHQ/moonproxy-desktop
  - https://github.com/MoonProxyHQ/moonproxy-desktop/blob/main/LICENSE
  - https://github.com/MoonProxyHQ/moonproxy-desktop/releases
  - https://github.com/MoonProxyHQ/moonproxy-desktop/releases/tag/v1.2.0
  - https://raw.githubusercontent.com/MoonProxyHQ/moonproxy-desktop/main/README.en.md
  - https://github.com/MoonProxyHQ/moonproxy-desktop/tree/main/src/locales
  - https://moonproxy.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MoonProxyHQ/moonproxy-desktop/main/docs/app-icons/icon_512x512%402x-macos.png
    credit: "MoonProxyHQ"
    license: "MIT; upstream project asset, trademarks retained"
---

MoonProxy gives frp's client a window. You can publish a service on your Mac or your network, such as a NAS, a home blog or a local port for webhook callbacks, through an frps server without writing `frpc.toml` or running frpc in a terminal. You bring the server, either one you host or a public one you trust. MoonProxy handles only the client side and leaves frp's own behaviour unchanged.

- frpc ships inside the app, so nothing else needs installing. MoonProxy can later fetch newer frpc versions from frp's GitHub releases, check them against a SHA256 hash and swap them in.
- TCP, UDP, HTTP and HTTPS rules sit together on one tab, up to 50 of them since version 1.2.
- A start button shows four states: stopped, connecting, connected or error. The home tab charts upload and download rates, connection count and total traffic.
- Each local port is checked for reachability on a timer that backs off from 3 to 24 seconds, so a dead tunnel shows up quickly.
- Closing the window leaves frpc running from the menu bar. The app can launch at login and connect only on chosen weekdays and hours.

The developers say configs and tokens stay on your Mac and that MoonProxy does not relay your data. The interface comes in English and Simplified Chinese, and the app installs as 月神代理, its Chinese name.

Separate DMGs exist for Apple silicon and Intel, and the app asks for macOS 10.15 or later. The README says the builds are ad-hoc signed and not notarized, so the first launch needs right-click and Open.
