---
name: "Clipp"
summary: "Syncs clipboard text and images directly between your own Mac, iPhone, Windows and Linux devices on your local network."
category: "Utilities"
tags:
  - clipboard
  - sync
  - cross-platform
  - encryption
repository: "https://github.com/martona/clipp"
website: "https://github.com/martona/clipp"
license: "MIT"
licenseUrl: "https://github.com/martona/clipp/blob/master/LICENSE.md"
download: "https://github.com/martona/clipp/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/martona/clipp"
  - "https://github.com/martona/clipp/blob/master/LICENSE.md"
  - "https://github.com/martona/clipp/releases/latest"
  - "https://apps.apple.com/us/app/clipp-net/id6773113533?platform=mac"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/martona/clipp/master/ios/Clipp/Resources/Assets.xcassets/AppIcon.appiconset/ClippAppIcon.png"
    credit: "Clipp contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Clipp shares what you copy between your own devices without a cloud service in between. Devices join a group with a shared name and passphrase, find each other on the local network, and send clipboard text or images directly. The Mac app keeps a short list of recent items you can copy again, and the same binary works as a terminal tool (`clipp copy` and `clipp paste`), including named registers for text you reuse. The project is LAN-only by design; for other networks its README suggests an overlay network such as Tailscale or ZeroTier. Files are not synced.

The Mac build needs macOS 14 or later on Apple silicon; Intel Macs are not supported. The GitHub zip is Developer ID-signed and notarized, and the same app is also free on the Mac App Store. Both sides must use the same group name and passphrase, and a firewall or multicast filtering on the network can stop devices from discovering each other.
