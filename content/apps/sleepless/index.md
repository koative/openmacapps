---
name: "Sleepless"
summary: "A menu-bar switch that keeps a closed-lid MacBook awake, with a timer and battery cutoff."
category: "Utilities"
tags: ["menu-bar", "power", "sleep"]
alternativeTo: ["amphetamine"]
repository: "https://github.com/Aboudjem/Sleepless"
website: "https://aboudjem.github.io/Sleepless/"
license: "MIT"
licenseUrl: "https://github.com/Aboudjem/Sleepless/blob/main/LICENSE"
download: "https://github.com/Aboudjem/Sleepless/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Aboudjem/Sleepless", "https://github.com/Aboudjem/Sleepless/blob/main/LICENSE", "https://github.com/Aboudjem/Sleepless/releases", "https://raw.githubusercontent.com/Aboudjem/Sleepless/main/README.md", "https://aboudjem.github.io/Sleepless/", "https://github.com/Aboudjem/Sleepless/releases/tag/v1.2.7", "https://apps.apple.com/us/app/amphetamine/id937984704"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Aboudjem/Sleepless/main/docs/icon.png", "credit": "Adam Boudjemaa", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Sleepless keeps a MacBook running with the lid closed, on battery and with no external display attached. Turn it on from the cup icon in the menu bar, shut the lid, and a download, build or hotspot keeps going.

It works by turning on `pmset disablesleep`, the system flag that stops sleep, then reading the flag back so the menu bar icon shows the real state. Several safety nets turn it off again:

- an auto-off timer of one or two hours, with a live countdown;
- a battery floor between 5 and 50 percent, 15 by default, while on battery;
- Low Power Mode, when the Mac is on battery;
- a restart, which clears the flag.

A menu bar app cannot type an administrator password, so setup adds a sudoers rule that allows exactly two commands: `pmset` with `disablesleep` set to 0 or 1. There is no daemon, helper script or kernel extension, and the uninstall script removes the app, the login item and the rule. The developer calls it safe for light unattended work and warns that a shut lid reduces airflow under heavy sustained load.

Amphetamine also keeps a MacBook awake with its lid closed. The difference is its Triggers, which start a session automatically, for example while an external display is connected or the Mac is on a given Wi-Fi network. Sleepless has no triggers; it runs only after you flip its switch.

Sleepless needs macOS 26 and an Apple silicon Mac. The release ZIP is ad-hoc signed and not notarized, so the first launch needs Open Anyway in Privacy & Security. The developer's Homebrew tap and a source build are the other routes. Since version 1.1.0, each release ships a SHA-256 checksum file, and the README shows how to verify the build attestation.
