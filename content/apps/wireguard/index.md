---
name: "WireGuard"
summary: "The official WireGuard VPN client for macOS, managing tunnels from the menu bar with on-demand activation rules."
category: "Privacy & security"
tags:
  - vpn
  - network
  - menu-bar
  - tunneling
  - vpn-client
repository: https://git.zx2c4.com/wireguard-apple
website: https://www.wireguard.com
license: "MIT"
licenseUrl: https://git.zx2c4.com/wireguard-apple/tree/COPYING
download: https://apps.apple.com/us/app/wireguard/id1451685025
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since February 2023."
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://git.zx2c4.com/wireguard-apple
  - https://git.zx2c4.com/wireguard-apple/tree/COPYING
  - https://www.wireguard.com/install/
  - https://apps.apple.com/us/app/wireguard/id1451685025
  - https://git.zx2c4.com/wireguard-apple/plain/README.md
  - https://git.zx2c4.com/wireguard-apple/log/
  - https://git.zx2c4.com/wireguard-apple/refs/
  - https://git.zx2c4.com/wireguard-apple/plain/Sources/WireGuardApp/Base.lproj/Localizable.strings
  - https://git.zx2c4.com/wireguard-apple/plain/Sources/WireGuardApp/UI/macOS/StatusMenu.swift
  - https://git.zx2c4.com/wireguard-apple/plain/Sources/WireGuardApp/UI/macOS/View/ConfTextColorTheme.swift
  - https://git.zx2c4.com/wireguard-apple/plain/Sources/WireGuardApp/UI/PrivateDataConfirmation.swift
  - https://git.zx2c4.com/wireguard-apple/plain/WireGuard.xcodeproj/project.pbxproj
assets:
  - path: ./assets/icon.png
    source: https://git.zx2c4.com/wireguard-apple/plain/Sources/WireGuardApp/UI/macOS/Assets.xcassets/AppIcon.appiconset/WireGuardMacAppIcon256.png
    credit: "WireGuard LLC / Jason A. Donenfeld"
    license: "WireGuard name and logo are registered trademarks of Jason A. Donenfeld; not covered by the MIT code license"
---

WireGuard for macOS connects your Mac to WireGuard peers through tunnels you define. You import a tunnel from a .conf file or a zip archive of several, or add an empty tunnel and type the configuration yourself. The editor colours sections, keys and addresses, and it names any invalid line when you try to save.

The menu bar icon shows the active tunnel's status and the networks it routes. Clicking a tunnel in that menu turns it on or off, or toggles its on-demand rules if it has any. The icon stays after you close the tunnel manager window. A tunnel also stays up after you quit the app, until you turn it off in WireGuard or in the Network settings.

On-demand rules bring a tunnel up by themselves on Wi-Fi, on Ethernet or on both. A Wi-Fi rule can apply to any network, only to the SSIDs you list, or to every network except them.

- You can export all tunnels to a zip archive, and view the log or save it to a file.
- Viewing or exporting private keys asks you to authenticate first, unless the Mac has no password set.
- Each tunnel's configuration lives in the keychain, and a tunnel created by another user on the Mac can be viewed, edited or turned on only by that user.
- When the App Store wants to update the app, WireGuard asks you to turn off on-demand for the active tunnel and deactivate it first.

The app comes only from the Mac App Store and needs macOS 12 or later. Its source sits on the project's own Git server, shared with the iOS app and the WireGuardKit package for developers. Version 1.0.16 from February 2023 is the latest release.
