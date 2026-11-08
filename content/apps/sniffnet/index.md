---
name: Sniffnet
summary: Shows your network traffic by adapter, with filters, live charts, per-host details and PCAP import and export.
category: Utilities
tags:
- network
- monitoring
- packet-analysis
- cross-platform
repository: https://github.com/GyulyVGC/sniffnet
website: https://sniffnet.app
license: MIT OR Apache-2.0
licenseUrl: https://github.com/GyulyVGC/sniffnet/blob/main/LICENSE-MIT
download: https://github.com/GyulyVGC/sniffnet/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/GyulyVGC/sniffnet
- https://github.com/GyulyVGC/sniffnet/blob/main/LICENSE-MIT
- https://github.com/GyulyVGC/sniffnet/blob/main/LICENSE-APACHE
- https://github.com/GyulyVGC/sniffnet/releases
- https://sniffnet.app
- https://raw.githubusercontent.com/GyulyVGC/sniffnet/main/README.md
- https://github.com/GyulyVGC/sniffnet/releases/tag/v1.5.1
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/GyulyVGC/sniffnet/main/resources/packaging/macos/graphics/sniffnet.icns
  credit: Giuliano Bellini and Sniffnet contributors
  license: MIT OR Apache-2.0; upstream project asset, trademarks retained
---

Sniffnet shows what your computer is sending and receiving over the network. You choose a network adapter, optionally set filters, and the app turns the traffic into overall statistics and real-time charts of its intensity, along with a list of connections you can search and inspect as they happen.

- Remote hosts are labelled with their domain name, ASN and geographic location, with the ASN and location data coming from MaxMind.
- It recognises more than 6,000 upper-layer services, protocols, trojans and worms, and picks out connections inside your local network.
- It shows which programs are generating traffic, and you can mark hosts, services and programs as favourites.
- Custom notifications fire when network events you define occur, and imported IP blacklists flag connections that may be dangerous.
- Capture reports can be exported as PCAP files, and PCAP files can be imported.

Sniffnet also runs on Windows and Linux. Version 1.5.1 offers separate disk images for Apple silicon and Intel Macs, and the README asks you to install the dependencies it lists for your operating system as well.

Monitoring carries on while the window is minimised. The interface is built with iced, a GUI library for Rust, comes in several styles including custom themes, and is translated into more than 25 languages. The project's Wiki serves as the full manual, and the README's troubleshooting section suggests setting `ICED_BACKEND=tiny-skia` to switch to a CPU renderer if the interface shows glitches.
