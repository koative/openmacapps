---
name: "hostflip"
summary: "Menu bar switcher for /etc/hosts profiles that writes only its own block and shows a diff when the file changed elsewhere."
category: "Developer tools"
tags:
  - network
  - dns
  - menu-bar
repository: "https://github.com/heronapp/hostflip"
website: "https://github.com/heronapp/hostflip"
license: "MIT"
licenseUrl: "https://github.com/heronapp/hostflip/blob/main/LICENSE"
download: "https://github.com/heronapp/hostflip/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/heronapp/hostflip"
  - "https://github.com/heronapp/hostflip/blob/main/LICENSE"
  - "https://github.com/heronapp/hostflip/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/heronapp/hostflip/releases/download/v0.5.2/Hostflip-0.5.2.dmg"
    credit: "heronapp"
    license: "MIT; upstream app icon, trademarks retained"
---

hostflip switches between profiles of `/etc/hosts` entries from the menu bar. It keeps your base entries as they are and writes each active profile inside a fenced block, so the rest of the file stays yours. If something else has edited the file, it shows the drift as a diff and asks you to reconcile it before writing again. It suits developers who test against different host mappings and do not want to edit the system file by hand each time.

The app needs macOS 14 or later on Apple silicon; the README says Intel builds are not planned. The DMG is notarized. The first profile switch asks you to approve a helper in System Settings, which is the only prompt the README describes. Removing the helper leaves a row under App Background Activity that macOS owns and only a system-wide reset can clear. Uninstalling does not rewrite `/etc/hosts`, so the last written block stays in the file until you remove it.
