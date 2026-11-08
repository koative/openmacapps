---
name: "DNS Easy Switcher"
summary: "Switches between DNS providers or your own servers from the menu bar, and tests which one responds fastest."
category: "Utilities"
tags: ["menu-bar", "network", "dns"]
repository: "https://github.com/glinford/dns-easy-switcher"
website: "https://github.com/glinford/dns-easy-switcher"
license: "MIT"
licenseUrl: "https://github.com/glinford/dns-easy-switcher/blob/main/LICENSE"
download: "https://github.com/glinford/dns-easy-switcher/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/glinford/dns-easy-switcher", "https://github.com/glinford/dns-easy-switcher/blob/main/LICENSE", "https://github.com/glinford/dns-easy-switcher/releases", "https://raw.githubusercontent.com/glinford/dns-easy-switcher/main/README.md", "https://github.com/glinford/dns-easy-switcher/releases/tag/v1.0.7"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/glinford/dns-easy-switcher/main/Releases/DNS%20Easy%20Switcher%20v1.0.7/DNS%20Easy%20Switcher.app/Contents/Resources/AppIcon.icns", "credit": "glinford", "license": "MIT; icon from the upstream release app bundle, trademarks retained"}]
---

DNS Easy Switcher changes which DNS servers your Mac uses from a list in the menu bar. Pick a preset, one of your own servers, or hand control back to the DNS that your network supplies over DHCP.

- Presets cover Cloudflare (1.1.1.1), Quad9 (9.9.9.9), AdGuard DNS and GetFlix, the last with its full list of locations.
- You can add, edit and remove custom servers, with IPv4 and IPv6 addresses.
- A speed test measures the providers so you can see which one answers fastest.
- A separate command flushes the DNS cache.

Changing DNS settings on macOS needs administrator rights, so the app asks for authentication on every switch. On a Mac with Touch ID you can confirm with a fingerprint instead of typing the password. Your choices are kept between launches, and the developer says the app collects no data and stores its settings on the Mac.

The app requires macOS 14 or later. The v1.0.7 release is a DMG holding a Universal app for Apple silicon and Intel; the app inside is Developer ID-signed and notarized, while the disk image itself is not signed. The README recommends installing through the developer's Homebrew tap, which also handles updates.
