---
name: "VPN Bypass"
summary: "Routes chosen domains and services around a VPN from the menu bar, or sends only selected traffic through it."
category: "Internet"
tags:
  - vpn
  - routing
  - network
  - menu-bar
repository: "https://github.com/GeiserX/VPN-Bypass"
website: "https://geiserx.github.io/VPN-Bypass/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/GeiserX/VPN-Bypass/blob/main/LICENSE"
download: "https://github.com/GeiserX/VPN-Bypass/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/GeiserX/VPN-Bypass"
  - "https://github.com/GeiserX/VPN-Bypass/blob/main/LICENSE"
  - "https://github.com/GeiserX/VPN-Bypass/releases"
  - "https://github.com/GeiserX/VPN-Bypass/blob/main/README.md"
  - "https://geiserx.github.io/VPN-Bypass/getting-started/"
  - "https://github.com/GeiserX/VPN-Bypass/releases/tag/v6.1.0"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/GeiserX/VPN-Bypass/main/assets/AppIcon.icns"
    credit: "GeiserX"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

VPN Bypass decides, from the menu bar, which traffic goes through your VPN. Corporate VPN clients often send everything through the tunnel and lock their own split-tunnelling settings, so streaming stalls, AirPlay breaks and personal traffic crosses the company network. You pick the services or domains that should skip the tunnel, and the app adds the routes, restores them after every reconnect or network change, and re-resolves domains as their addresses move.

- Three modes: Bypass sends listed destinations around the VPN, VPN Only sends just those through it, and Custom applies rules in order, each exiting direct, through a chosen VPN, an HTTP or SOCKS5 proxy, or a Tailscale peer.
- A catalogue of 75 services, including government sites and main banks for six countries. You can also add your own domains, wildcards and subnets.
- An optional Lookups view, off by default, lists the names your Mac resolves, most frequent first, and adds one with a click.
- The `vpnb` command-line tool and Shortcuts actions reach the same settings, so a Focus or a Wi-Fi network can switch the mode.

It recognises clients including GlobalProtect, Cisco AnyConnect, WireGuard, FortiClient, Zscaler, Cloudflare WARP and Proton VPN, and tells you when a VPN's kill switch leaves the routes without effect. A small root helper, installed after one administrator prompt, does the routing. Optional per-app routing needs a Network Extension, which you approve in macOS when you turn it on; everything else runs without a kernel or system extension.

VPN Bypass needs macOS 13 or later. The 6.1.0 DMG is a Universal build for Apple silicon and Intel, Developer ID-signed and notarized.
