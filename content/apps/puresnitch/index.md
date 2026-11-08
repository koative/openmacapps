---
name: "PureSnitch"
summary: "Shows which hosts each app on your Mac connects to, with optional host-wide blocking through the built-in packet filter."
category: "Privacy & security"
tags:
  - firewall
  - network
  - privacy
  - security
alternativeTo:
  - little-snitch
repository: https://github.com/momenbasel/puresnitch
website: https://www.moamenbasel.com/puresnitch/
license: "MIT"
licenseUrl: https://github.com/momenbasel/puresnitch/blob/main/LICENSE
download: https://github.com/momenbasel/puresnitch/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/momenbasel/puresnitch
  - https://github.com/momenbasel/puresnitch/blob/main/LICENSE
  - https://github.com/momenbasel/puresnitch/releases
  - https://raw.githubusercontent.com/momenbasel/puresnitch/main/README.md
  - https://www.moamenbasel.com/puresnitch/
  - https://www.obdev.at/products/littlesnitch/index.html
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/momenbasel/puresnitch/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Moamen Basel"
    license: "MIT; upstream app icon, trademarks retained"
---

PureSnitch lists the connections your Mac has open, grouped by the process that made them, with upload and download rates for each app. Sort and filter the table to see which hosts a program talks to, or glance at the menu bar item for current throughput and a five-minute traffic graph.

Blocking is a separate switch. Enforcement is off until an administrator turns it on, and then rules that deny IPv4 addresses, address ranges in CIDR form and ports go into the macOS `pf` packet filter. Those rules cover the whole Mac. The release cannot block one app and leave another alone, because per-process filtering needs a Network Extension entitlement that the shipping build does not have.

- An experimental DNS proxy on loopback forwards queries over DNS over HTTPS to Cloudflare, Quad9, Google or your own server. Only clients you point at it by hand use it.
- Blocklists from 1Hosts, OISD, StevenBlack and HaGeZi apply to that proxy.
- The rules manager can search, enable, disable and delete rules, but new persistent rules come only from DNS proxy alerts.
- Home, Public Wi-Fi and Lockdown profiles are stored labels; only Default is enforced.

A privileged helper does the monitoring, so the app has to sit in /Applications and you approve it under Login Items & Extensions. Before uninstalling, turn Enforcement off and choose Remove Helper. The developer says the app sends no telemetry and needs no account.

Little Snitch, which PureSnitch imitates in layout, pops up an alert whenever an app tries to connect, so you can allow or deny it. PureSnitch shows its alerts only for requests sent to its DNS proxy. Its code is MIT-licensed, and the signed, notarized DMG is a Universal build for macOS 13 or later.
