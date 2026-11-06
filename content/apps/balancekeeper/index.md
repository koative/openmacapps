---
name: "BalanceKeeper"
summary: "Background agent that restores the left/right audio balance, centered or at a chosen point, when macOS shifts it."
category: "Utilities"
tags:
  - audio
  - headphones
  - system-controls
  - native
repository: "https://github.com/fratayaydn/balancekeeper"
website: "https://fratayaydn.github.io/balancekeeper/"
license: "MIT"
licenseUrl: "https://github.com/fratayaydn/balancekeeper/blob/main/LICENSE"
download: "https://github.com/fratayaydn/balancekeeper/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fratayaydn/balancekeeper"
  - "https://github.com/fratayaydn/balancekeeper/blob/main/LICENSE"
  - "https://github.com/fratayaydn/balancekeeper/releases/latest"
  - "https://fratayaydn.github.io/balancekeeper/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/fratayaydn/balancekeeper/main/Resources/AppIcon.icns"
    credit: "fratayaydn"
    license: "MIT; upstream app icon, trademarks retained"
---

macOS sometimes changes the left/right audio balance on its own, often after the volume keys are pressed while the Mac is busy, and one ear can stay quieter for days without anyone noticing. BalanceKeeper puts the balance back as soon as it changes, centered or at a point you choose, on every output including built-in speakers, headphones, and Bluetooth and USB devices. It is a background agent with a small settings window and no menu bar icon. It suits anyone who has noticed the balance drifting.

Requires an Apple silicon Mac and macOS 13 Ventura or later. The README says the app is signed with a Developer ID and notarized. The agent sleeps until macOS reports a balance or output change, needs no permissions and makes no network connections. Local builds use a self-signed certificate.
