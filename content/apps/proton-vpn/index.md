---
name: "Proton VPN"
summary: "The open-source macOS client for connecting to Proton VPN."
category: "Privacy & security"
tags: ["vpn", "network", "privacy", "vpn-client"]
alternativeTo: ["nordvpn", "cyberghost"]
repository: "https://github.com/ProtonVPN/ios-mac-app"
website: "https://protonvpn.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/ProtonVPN/ios-mac-app/blob/develop/LICENSE"
download: "https://protonvpn.com/download-macos"
freeDownload: true
homebrew: "protonvpn"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/ProtonVPN/ios-mac-app", "https://github.com/ProtonVPN/ios-mac-app/blob/develop/LICENSE", "https://protonvpn.com/download-macos", "https://protonvpn.com/download/macos-update4.xml", "https://raw.githubusercontent.com/ProtonVPN/ios-mac-app/develop/README.md", "https://www.cyberghostvpn.com/pricing"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/ProtonVPN/ios-mac-app/blob/develop/apps/macos/ProtonVPN/Assets.xcassets/AppIcon.appiconset/VPN_icon_connected_256x256.png", "credit": "Proton VPN contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Proton VPN encrypts your Mac's internet connection by sending it through Proton's servers. Sign in, then connect to the fastest server for your location or pick any server your plan includes.

You need a Proton account, and a free plan exists. Proton Mail users already have one. A kill switch blocks traffic if the VPN connection drops, and the app protects against DNS and IPv6 leaks. Paid Plus and Unlimited plans add more:

- Secure Core sends traffic through servers in Switzerland, Iceland or Sweden first.
- NetShield filters domains known for malware and can block ads and trackers.
- Plus servers give access to popular streaming services.
- Up to 10 devices connect at the same time.

Proton says it keeps no logs that identify what you do online, and that its apps are audited by outside firms.

Version 6.1.0 requires macOS 14 or later. The DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. One GPL-3.0 repository holds the code for the Mac, iPhone, iPad and Apple TV apps. Building it yourself needs a separate repository of secrets and a paid Apple developer account for the VPN entitlements.

CyberGhost's pricing page lists paid plans from one month to two years, each with a money-back guarantee. Proton VPN lets you connect on the free plan before deciding whether to pay.
