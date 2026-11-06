---
name: "DeciBar"
summary: "Menu bar noise meter that estimates ambient sound from the microphone, with daily averages, peaks and alerts."
category: "Utilities"
tags:
  - menu-bar
  - audio
  - microphone
  - monitoring
repository: "https://github.com/gostonx/DeciBar"
website: "https://github.com/gostonx/DeciBar"
license: "MIT"
licenseUrl: "https://github.com/gostonx/DeciBar/blob/main/LICENSE"
download: "https://github.com/gostonx/DeciBar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/gostonx/DeciBar"
  - "https://github.com/gostonx/DeciBar/blob/main/LICENSE"
  - "https://github.com/gostonx/DeciBar/releases"
---

DeciBar lives in the menu bar and shows an estimate of the ambient sound level from the Mac's microphone. It keeps daily averages and peaks, stores readings in the background, and has a dashboard for weekly trends. You can set warning thresholds at 75, 80, 85 or 90 decibels; it sends a notification when the level stays above the threshold, with a cooldown between alerts. It suits people who want to track noise exposure at a desk. The README says the figures are estimates, not calibrated sound pressure measurements.

Requires macOS 15 or later. The release app is not signed with a Developer ID and is not notarized: a Gatekeeper check of it is rejected, so the first launch has to be allowed in System Settings. The README says all processing is local, with no analytics, cloud storage or audio recording, and that microphone access is requested only when needed.
