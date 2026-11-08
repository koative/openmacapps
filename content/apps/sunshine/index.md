---
name: "Sunshine"
summary: "A self-hosted game streaming host that sends your desktop and games to Moonlight clients."
category: "Games"
tags: ["streaming", "gaming", "self-hosted", "remote-desktop", "cross-platform"]
repository: "https://github.com/LizardByte/Sunshine"
website: "https://app.lizardbyte.dev/Sunshine/"
license: "GPL-3.0"
licenseUrl: "https://github.com/LizardByte/Sunshine/blob/master/LICENSE"
download: "https://github.com/LizardByte/Sunshine/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources:
  - "https://github.com/LizardByte/Sunshine"
  - "https://github.com/LizardByte/Sunshine/blob/master/LICENSE"
  - "https://github.com/LizardByte/Sunshine/releases"
  - "https://raw.githubusercontent.com/LizardByte/Sunshine/master/README.md"
  - "https://docs.lizardbyte.dev/projects/sunshine/latest/md_docs_2getting__started.html"
  - "https://github.com/LizardByte/Sunshine/releases/tag/v2026.914.233613"
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/LizardByte/Sunshine/master/sunshine.png", "credit": "LizardByte and Sunshine contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Sunshine turns a computer into a game streaming host for Moonlight, and any Moonlight client on another device can connect to it. You configure Sunshine and pair clients in a web interface, opened in a browser on the host or from a mobile device.

Most of the project's hardware tables are about AMD, Intel and Nvidia graphics on Windows and Linux, and its install guide calls the macOS version experimental. On a Mac, Sunshine captures the screen with ScreenCaptureKit and encodes video through Apple's Video Toolbox, on Apple silicon or Intel graphics. Software encoding is available on every platform.

The README lists macOS 15 or later, though the Apple silicon app in the latest stable release, 2026.914.233613, is built for macOS 14.2 and later. Separate disk images exist for Apple silicon and Intel, and a LizardByte Homebrew tap installs it too. That Apple silicon app is signed with a Developer ID and notarized, though the disk image around it is not signed. The same release carries builds for Windows, Linux and FreeBSD.

For the network, the README lists 5 GHz 802.11ac Wi-Fi at both ends as the minimum, and suggests wired Cat5e or better for 4K and HDR streams.
