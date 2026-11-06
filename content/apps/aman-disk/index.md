---
name: "Aman Disk"
summary: "Explains S.M.A.R.T. health, temperature and performance for internal and external Mac drives, all offline."
category: "Utilities"
tags:
  - storage
  - system-monitoring
  - temperature
  - hardware
repository: "https://github.com/MidZai/aman_disk"
website: "https://github.com/MidZai/aman_disk"
license: "MIT"
licenseUrl: "https://github.com/MidZai/aman_disk/blob/main/LICENSE"
download: "https://github.com/MidZai/aman_disk/releases/download/v1.0.1/Aman-Disk-1.0.1.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/MidZai/aman_disk"
  - "https://github.com/MidZai/aman_disk/blob/main/LICENSE"
  - "https://github.com/MidZai/aman_disk/releases"
---

Aman Disk reads S.M.A.R.T. data from internal NVMe and SATA drives and from external Thunderbolt, USB4 and USB enclosures. It shows a plain status (healthy, needs attention, likely failing, or health unknown), the remaining life when the drive reports it, and a temperature history. It also has a sequential and random read and write benchmark, a menu bar readout, and PDF, text or JSON reports. The interface is available in 18 languages. The README says the app makes no network connections, sends no telemetry and never asks for an administrator password.

It requires macOS 14 or later, on Apple silicon or Intel. The app is not signed with a paid Apple Developer ID or notarized, so macOS blocks the first launch: click Done, then Open Anyway under Privacy & Security (on macOS 14, Control-click the app and choose Open). Some USB enclosures show only hardware details, because macOS restricts S.M.A.R.T. access for them. External drives need access to removable volumes, which macOS asks for.
