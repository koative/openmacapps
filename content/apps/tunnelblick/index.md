---
name: "Tunnelblick"
summary: "A Mac interface for importing OpenVPN profiles and controlling VPN connections."
category: "Privacy & security"
tags: ["vpn", "openvpn", "native", "vpn-client"]
repository: "https://github.com/Tunnelblick/Tunnelblick"
website: "https://tunnelblick.net"
license: "GPL-2.0"
licenseUrl: "https://github.com/Tunnelblick/Tunnelblick/blob/main/COPYING"
download: "https://tunnelblick.net/downloads.html"
freeDownload: true
homebrew: "tunnelblick"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Tunnelblick/Tunnelblick", "https://github.com/Tunnelblick/Tunnelblick/blob/main/COPYING", "https://tunnelblick.net/downloads.html", "https://tunnelblick.net/", "https://raw.githubusercontent.com/Tunnelblick/Tunnelblick/main/README.md"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Tunnelblick/Tunnelblick/blob/main/tunnelblick/tunnelblick.icns", "credit": "Tunnelblick contributors", "license": "GPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Tunnelblick connects your Mac to OpenVPN servers. You add the configuration and keys that a VPN provider or network administrator gave you, and Tunnelblick starts and stops the tunnel.

The app bundles what OpenVPN needs on a Mac, including OpenVPN itself, easy-rsa and the tun/tap drivers, so nothing else has to be installed first. It does not come with a VPN service. Your Mac is one end of the tunnel, and you still need access to a server at the other end. The project says it shows no ads, does no tracking and keeps no logs of users' IP addresses.

Stable and beta builds are offered side by side. The download page lists both as notarized Universal builds for Apple silicon and Intel that need macOS 13 or later. It also gives SHA1, MD5 and SHA256 hashes and a GnuPG signature for each disk image, and the app has a built-in updater.

The same page carries user-contributed scripts that hook into a connection. They can mount or unmount a volume, launch or quit a program, or keep track of uptime and bandwidth. The project neither checks nor endorses them, and they run as root, so read one before you install it.
