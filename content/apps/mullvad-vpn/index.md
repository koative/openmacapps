---
name: "Mullvad VPN"
summary: "The open-source Mac client for managing a Mullvad VPN connection."
category: "Privacy & security"
tags: ["vpn", "network", "privacy", "vpn-client"]
alternativeTo: ["nordvpn", "cyberghost"]
repository: "https://github.com/mullvad/mullvadvpn-app"
website: "https://mullvad.net"
license: "GPL-3.0"
licenseUrl: "https://github.com/mullvad/mullvadvpn-app/blob/main/LICENSE.md"
download: "https://mullvad.net/download/vpn/macos"
freeDownload: true
homebrew: "mullvad-vpn"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://www.cyberghostvpn.com/pricing", "https://github.com/mullvad/mullvadvpn-app", "https://github.com/mullvad/mullvadvpn-app/blob/main/LICENSE.md", "https://github.com/mullvad/mullvadvpn-app/blob/main/README.md", "https://mullvad.net/en/download/vpn/macos", "https://mullvad.net/en/pricing"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/mullvad/mullvadvpn-app/blob/main/dist-assets/icon.icns", "credit": "Mullvad VPN contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Mullvad VPN connects your Mac to Mullvad's servers. You pick a country or a single server, press Connect, and your traffic leaves through that location.

- Tunnels use WireGuard, with multihop through two servers and options to carry the traffic over TCP, Shadowsocks or QUIC.
- Anti-censorship settings, port probing and traffic obfuscation are built in.
- A kill switch built into the firewall uses atomic operations so traffic does not leak.
- Split tunneling lets chosen apps bypass the VPN.
- WireGuard keys rotate automatically.

On the desktop the app has three parts: a background service that holds the tunnel, the graphical window and a `mullvad` command-line tool. You can also send support requests from inside the app.

The client is free, but the network needs a paid Mullvad account. Creating one gives you an account number straight away, and one account covers up to five devices. Mullvad says it keeps no logs of user activity.

CyberGhost's pricing page lists plans from one month to two years. Mullvad charges one flat monthly rate whatever the length of the plan, and its desktop and mobile client source is public under the GPL v3.

The current release, 2026.5, needs macOS 15 Sequoia or later. The default download is a small installer, signed with a Developer ID and notarized, that fetches the app. A standalone installer is offered for when that method does not work.
