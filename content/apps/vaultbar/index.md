---
name: "VaultBar"
summary: "Menu bar app that locks and unlocks AES-256 encrypted disk-image vaults; passwords are never stored."
category: "Privacy & security"
tags:
  - encryption
  - security
  - menu-bar
  - privacy
repository: "https://github.com/roypadina/VaultBar"
website: "https://apps.roypadina.synology.me/apps/vaultbar/"
license: "MIT"
licenseUrl: "https://github.com/roypadina/VaultBar/blob/main/LICENSE"
download: "https://github.com/roypadina/VaultBar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/roypadina/VaultBar"
  - "https://github.com/roypadina/VaultBar/blob/main/LICENSE"
  - "https://github.com/roypadina/VaultBar/releases"
  - "https://apps.roypadina.synology.me/apps/vaultbar/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/roypadina/VaultBar/main/Assets/icons/AppIcon-1024.png"
    credit: "Roy Padina"
    license: "MIT; upstream app icon, trademarks retained"
---

VaultBar is a small menu bar front end for the encrypted disk images that macOS already provides. You create or add an AES-256 vault, type its password each time you unlock it, and it unmounts when the Mac sleeps, the screen locks or you go idle. The app stores no password, and it can be driven from a command line, `vaultbar://` links or Raycast. It is for Mac users who want a vault one click away without extra drivers.

It requires macOS 14 or later, as a universal build. The README says it is signed with a self-made certificate and is not notarized, so approve the first launch in System Settings > Privacy & Security. A vault is one large image, so keep it out of cloud-synced folders. A lost password cannot be recovered. macOS and other apps can keep traces of what you opened, such as thumbnails and Recent Items.
