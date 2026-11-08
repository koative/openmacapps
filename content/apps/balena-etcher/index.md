---
name: "balenaEtcher"
summary: "Writes operating system images to SD cards and USB drives, with drive selection safeguards and post-write checks."
category: "Utilities"
tags: ["disk-images", "usb", "cross-platform"]
alternativeTo: ["rufus", "ventoy"]
repository: "https://github.com/balena-io/etcher"
website: "https://etcher.balena.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/balena-io/etcher/blob/master/LICENSE"
download: "https://github.com/balena-io/etcher/releases"
freeDownload: true
homebrew: "balenaetcher"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/balena-io/etcher", "https://github.com/balena-io/etcher/blob/master/LICENSE", "https://github.com/balena-io/etcher/blob/master/README.md", "https://github.com/balena-io/etcher/blob/master/docs/USER-DOCUMENTATION.md", "https://github.com/balena-io/etcher/releases", "https://github.com/balena-io/etcher/releases/tag/v2.1.9", "https://etcher.balena.io", "https://rufus.ie/en/", "https://www.ventoy.net/en/index.html", "https://www.ventoy.net/en/doc_start.html"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/balena-io/etcher/master/assets/icon.png", "credit": "Balena Ltd.", "license": "Apache-2.0 repository asset; balenaEtcher name and logo are trademarks of Balena"}]
---

balenaEtcher writes an operating system image, such as a Raspberry Pi or Linux installer, onto an SD card or USB drive. When the write finishes, Etcher validates the drive to confirm that every byte was written correctly.

Your Mac's system drives are hidden from the target list by default, and Etcher shows warnings to keep you from wiping the wrong disk. Flashing still erases whatever was on the card or stick. Etcher can also flash an image straight from a URL, and it can write directly to Raspberry Pi devices that boot in USB device mode.

The copy is byte for byte, with no changes to the image. Images that need extra preparation to boot, such as Windows installers, do not work this way, and Etcher has no persistent storage for live Linux drives.

The app is built with Electron and maintained by Balena. Each release ships separate DMG and ZIP builds for Apple silicon and Intel Macs. Etcher is free under the Apache 2.0 license.

Rufus also makes bootable USB drives and is one of the tools Etcher's documentation suggests for Windows installers, but it runs only on Windows. Ventoy takes a different approach: you prepare a stick once and copy several ISO files onto it, then pick one from a boot menu. Its installer has no macOS version, while Etcher writes one image per drive.
