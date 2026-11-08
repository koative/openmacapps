---
name: "IVPN"
summary: "The open-source desktop client for connecting to the IVPN service."
category: "Privacy & security"
tags: ["vpn", "network", "privacy", "vpn-client"]
alternativeTo: ["nordvpn", "cyberghost"]
repository: "https://github.com/ivpn/desktop-app"
website: "https://www.ivpn.net"
license: "GPL-3.0"
licenseUrl: "https://github.com/ivpn/desktop-app/blob/development/LICENSE.md"
download: "https://www.ivpn.net/apps-macos"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ivpn/desktop-app", "https://github.com/ivpn/desktop-app/blob/development/LICENSE.md", "https://www.ivpn.net/apps-macos", "https://github.com/ivpn/desktop-app/blob/development/readme.md", "https://www.ivpn.net/en/apps-macos/", "https://www.ivpn.net/en/pricing/", "https://github.com/ivpn/desktop-app/releases/tag/v3.16.1", "https://www.cyberghostvpn.com/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/ivpn/desktop-app/blob/development/ui/buildResources/appicons/icons/256x256.png", "credit": "IVPN contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

IVPN for Mac connects your Mac to the IVPN service and holds the connection to rules you set. You choose WireGuard or OpenVPN and a server, and the app manages the tunnel. Connecting needs an IVPN subscription.

- The firewall acts as a kill switch, on demand or always on, and guards against DNS, IPv6 and disconnection leaks.
- Multi-hop routes traffic through several servers in separate jurisdictions.
- Split tunnelling lets chosen apps bypass the VPN, and LAN traffic can be allowed.
- AntiTracker blocks ads, malicious websites and trackers.
- Trusted Wi-Fi rules connect or disconnect automatically depending on the network you join.
- V2Ray and obfs4 help get through where VPNs are censored.

WireGuard connections can be quantum-resistant, with keys and IP addresses rotated on a schedule you choose. Custom DNS servers can use DNS over HTTPS. The VPN can be paused for a while, and a command-line client sits beside the window.

The current version needs macOS 12 or later, with separate downloads for Intel and Apple silicon. The Apple silicon app is signed with a Developer ID and notarized. An older 3.15.6 build remains available for macOS 10.15.

CyberGhost also sells a VPN with a Mac app, run from a Romanian headquarters, with one subscription covering up to seven devices. IVPN registers accounts anonymously, and its entire desktop client is published under GPL-3.0: the daemon, written mostly in Go, that runs with system privileges, the Electron interface and the CLI.
