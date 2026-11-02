---
name: "Passepartout"
summary: "An OpenVPN and WireGuard client for Apple platforms, with OpenVPN obfuscation, provider presets and Shortcuts actions."
category: "Privacy & security"
tags:
  - vpn
  - vpn-client
  - openvpn
  - wireguard
  - network
  - native
repository: https://github.com/partout-io/passepartout
website: https://partout.io/passepartout/
license: "GPL-3.0"
licenseUrl: https://github.com/partout-io/passepartout/blob/master/LICENSE
download: https://partout.io/passepartout/
homebrew: "passepartout"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/partout-io/passepartout
  - https://github.com/partout-io/passepartout/blob/master/LICENSE
  - https://github.com/partout-io/passepartout/releases
  - https://partout.io/passepartout/
assets:
  - path: ./assets/icon.png
    source: https://github.com/partout-io/passepartout/releases/download/v3.12.3/Passepartout.arm64.dmg
    credit: "Davide De Rosa"
    license: "GPL-3.0; app icon from the official release bundle, trademarks retained"
---

Passepartout connects to OpenVPN and WireGuard servers from your own configuration files or from presets for many VPN providers. Its OpenVPN implementation includes the Tunnelblick XOR patch, which scrambles OpenVPN traffic, and the app offers Shortcuts actions for automation.

The Mac App Store version is a free download. On-demand rules, iCloud sync, encrypted DNS (DoH and DoT), custom routing, profile export, one-time-password logins and DNS- or proxy-only profiles are unlocked by in-app purchases. The developer also publishes notarized Apple silicon and Intel disk images on GitHub, which are currently limited to the free features.

The app installs a network system extension and must be run from the Applications folder. It needs macOS 14 or later.
