---
name: "Unshaky"
summary: "Menu bar utility that ignores repeated key presses from worn MacBook butterfly keyboards."
category: "Utilities"
tags:
  - keyboard
  - customization
  - native
repository: "https://github.com/aahung/Unshaky"
website: "https://unshaky.nestederror.com"
license: "MIT"
licenseUrl: "https://github.com/aahung/Unshaky/blob/master/LICENSE"
maintenance: "unmaintained"
maintenanceNote: "No release since December 2020 and no push since November 2023 (checked November 2026)."
download: "https://github.com/aahung/Unshaky/releases"
homebrew: "unshaky"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/aahung/Unshaky"
  - "https://github.com/aahung/Unshaky/blob/master/LICENSE"
  - "https://github.com/aahung/Unshaky/releases"
  - "https://unshaky.nestederror.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/aahung/Unshaky/releases/download/v0.7.0/Unshaky_v0.7.0.zip"
    credit: "Unshaky contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Unshaky runs from the menu bar and drops key presses that arrive too soon after the previous accepted press. That addresses the double-typed letters some MacBook butterfly keyboards produce. You set a delay for each problem key from the Configure item, and the README suggests starting around 40 ms and raising it if characters go missing. It is for owners of affected MacBooks who would rather not replace the keyboard.

The app's minimum system version is macOS 10.12, and the build is universal for Apple silicon and Intel. The build is notarized. Grant Accessibility permission; on macOS 10.15.6 and later the README also asks for Input Monitoring. The README reports a problem on macOS 10.15.6 and links a workaround. The project is in maintenance mode, and only bug fixes are planned.
