---
name: "NetFluss"
summary: "A menu bar network monitor for live upload and download rates, traffic history, router bandwidth and speed tests."
category: "Utilities"
tags:
  - menu-bar
  - network
  - system-monitoring
  - vpn
repository: https://github.com/rana-gmbh/NetFluss
website: https://www.ranagmbh.de/netfluss/
license: "GPL-3.0"
licenseUrl: https://github.com/rana-gmbh/NetFluss/blob/main/LICENSE
download: https://github.com/rana-gmbh/NetFluss/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/rana-gmbh/NetFluss
  - https://github.com/rana-gmbh/NetFluss/blob/main/LICENSE
  - https://github.com/rana-gmbh/NetFluss/releases
  - https://raw.githubusercontent.com/rana-gmbh/NetFluss/main/README.md
  - https://www.ranagmbh.de/netfluss/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/rana-gmbh/NetFluss/main/Packaging/Resources/AppIcon.icns
    credit: "Rana GmbH"
    license: "GPL-3.0 repository asset; trademarks retained"
---

NetFluss puts your Mac's current upload and download rates in the menu bar. Click the figures and a popover breaks the traffic down by network adapter, shows your external, internal and router IP addresses, and lists the five processes moving the most data right now.

- A statistics window keeps traffic history by adapter and by app, with ranges from one hour to one year.
- A speed test window runs M-Lab or Cloudflare tests and keeps a local history of results, each with a notes field.
- Router monitoring reads whole-network WAN throughput from Fritz!Box, UniFi, OpenWRT and OPNsense routers.
- Network Slice is a live window that ranks the hosts, services and apps your Mac is talking to. It works from netstat counters rather than packet capture.

Over time the app has taken on jobs beyond monitoring. It can switch DNS resolvers from the popover, using built-in presets or your own, and apply rules per Wi-Fi network. It lists nearby Wi-Fi networks and joins them. It also contains a small VPN client that imports OpenVPN, WireGuard and IKEv2 profiles from a provider, so you can connect without the provider's own app. A menu bar mark shows when any VPN is up, including ones started by other clients such as Tunnelblick or Tailscale. DNS changes and some VPN work go through a privileged helper you install once.

The developer says NetFluss sends no telemetry, and its own online lookups (update check, public IP and country) can each be turned off. The app runs on macOS 13 Ventura and later, though its OpenVPN and WireGuard support requires Sonoma. Releases are ZIP files on GitHub, signed and notarized with Rana GmbH's Developer ID according to the project, and the app updates itself. A Windows version is in beta.
