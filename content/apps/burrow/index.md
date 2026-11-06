---
name: "Burrow"
summary: "Native SwiftUI front end for the Mole cleaner: clears caches, uninstalls apps with leftovers, maps disk usage and shows health."
category: "Utilities"
tags:
  - disk-cleaner
  - uninstaller
  - disk-usage
  - system-monitor
alternativeTo:
  - cleanmymac
repository: "https://github.com/khan-umirzakoff/Mole-GUI"
website: "https://github.com/khan-umirzakoff/Mole-GUI"
license: "GPL-3.0"
licenseUrl: "https://github.com/khan-umirzakoff/Mole-GUI/blob/main/LICENSE"
download: "https://github.com/khan-umirzakoff/Mole-GUI/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/khan-umirzakoff/Mole-GUI"
  - "https://github.com/khan-umirzakoff/Mole-GUI/blob/main/LICENSE"
  - "https://github.com/khan-umirzakoff/Mole-GUI/releases"
  - "https://github.com/tw93/Mole"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/khan-umirzakoff/Mole-GUI/releases/latest/download/Burrow.dmg"
    credit: "Burrow contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Burrow is a native SwiftUI window over Mole, a command-line Mac cleaner. It cleans caches, uninstalls apps together with their leftover files, maps disk usage as a treemap, lists old installers and build folders, and shows live CPU, memory and disk health. Clean shows a dry-run preview by category before anything is removed, and removals go through Mole's safety checks or to the Trash. It is for people who want Mole's engine without using the terminal, or who want a free alternative to a paid cleaner.

The app requires macOS 26 or later on Apple silicon; the bundle is arm64 only. It is not notarized: it is ad-hoc signed, so macOS blocks it when you open the DMG and again on first launch, and you allow it in System Settings under Privacy & Security. The Mole engine is bundled inside the app and nothing is installed system-wide. The README says there is no account, no ads and no telemetry. Burrow is a community project and is not affiliated with Mole or its author.
