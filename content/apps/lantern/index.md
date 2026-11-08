---
name: "Lantern"
summary: "A censorship-circumvention VPN and proxy for reaching blocked sites and services."
category: "Privacy & security"
tags: ["vpn", "censorship", "network", "cross-platform", "vpn-client"]
repository: "https://github.com/getlantern/lantern"
website: "https://lantern.io"
license: "GPL-3.0"
licenseUrl: "https://github.com/getlantern/lantern/blob/main/LICENSE"
download: "https://github.com/getlantern/lantern/releases"
freeDownload: true
homebrew: "lantern"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/getlantern/lantern", "https://github.com/getlantern/lantern/blob/main/LICENSE", "https://github.com/getlantern/lantern/releases", "https://raw.githubusercontent.com/getlantern/lantern/main/README.md", "https://lantern.io", "https://lantern.io/faq", "https://lantern.io/download", "https://github.com/getlantern/lantern/releases/tag/v10.0.5"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/getlantern/lantern/main/assets/images/lantern-app-icon.icns", "credit": "Lantern contributors (getlantern)", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Lantern gets you to websites and apps that your network or country blocks, by sending that traffic through its own servers over protocols built to resist censorship. When one method is blocked, the app switches to another on its own.

By default Lantern uses Smart Routing: region-specific rules send blocked and unencrypted sites through the Lantern network, and everything else connects directly. Full Tunnel sends all traffic through Lantern instead, which is slower but hides from your ISP anything except the connection to Lantern. Split Tunneling, a separate setting, lets you pick apps or sites that skip the VPN, and the routing lists for regions such as Iran, China and Russia are public on GitHub.

Private Server mode connects the app to a server you run on your own hardware or cloud account, and you can share its key with people you trust. The free version needs no account, but in most countries it has a daily data limit; the site says the cap is lifted entirely in places where people cannot pay for Pro, or cannot do so safely. Lantern Pro removes the limit and adds server selection, DNS-based ad blocking and use on up to five devices.

On a Mac, Lantern installs a network system extension, which you approve once in System Settings the first time you connect. The download page lists macOS 10.15 or later, but the 10.0.5 app itself declares macOS 12 as its minimum. That DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. Stable and beta builds are offered, alongside versions for Windows, Linux, Android and iOS. The developer, the nonprofit Brave New Software Project, says it keeps no logs of browsing or connection history.
