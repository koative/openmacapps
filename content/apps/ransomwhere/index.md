---
name: RansomWhere?
summary: Watches for suspicious file encryption activity on your Mac.
category: Privacy & security
tags:
  - security
  - ransomware
  - monitoring
repository: https://github.com/objective-see/RansomWhere
website: https://github.com/objective-see/RansomWhere
license: GPL-3.0
licenseUrl: https://github.com/objective-see/RansomWhere/blob/main/LICENSE.md
download: https://github.com/objective-see/RansomWhere/releases
freeDownload: true
homebrew: "ransomwhere"
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/objective-see/RansomWhere
  - https://github.com/objective-see/RansomWhere/blob/main/LICENSE.md
  - https://github.com/objective-see/RansomWhere/blob/main/README.md
  - https://github.com/objective-see/RansomWhere/releases
  - https://objective-see.org/products/ransomwhere.html
  - https://raw.githubusercontent.com/objective-see/RansomWhere/main/README.md
  - https://github.com/objective-see/RansomWhere/releases/tag/v2.2.0
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/RansomWhere/blob/50773230392ee762b218beca68584e40ff125c3a/Daemon/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: RansomWhere? contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

RansomWhere? watches for one thing ransomware has to do: write encrypted files. When a third-party process starts creating encrypted files quickly, RansomWhere? suspends it and shows an alert, and you decide whether it may continue. It judges encryption by measuring file entropy.

The alert lists the process name, PID, path and arguments, plus the files it was seen encrypting. From there you can open its code signing details, VirusTotal results and process ancestry. Allow lets the process carry on; Block terminates the suspended instance, and later launches of that program fail. With "Remember my decision" ticked, either choice becomes a rule, which you can review, delete or add by hand in the Rules window.

Legitimate software trips it too. Signal, Chrome updating its Safe Browsing data and antivirus tools installing signature files all write encrypted data. A Notarization Mode in the preferences trusts notarized and Mac App Store apps, which cuts down those prompts. Detection also has gaps: ransomware that sits dormant, encrypts slowly, or writes files that do not look encrypted enough can go unnoticed.

The tool is built on Apple's Endpoint Security framework, so macOS shows an authorization prompt during installation and you must grant RansomWhere? Full Disk Access in System Settings. Version 2.2.0 needs macOS 10.15 or later. Its ZIP holds an installer app that is a Universal build for Apple silicon and Intel, signed by Objective-See and notarized. Uninstalling runs from the status bar menu, and the GitHub repository includes test scripts that trigger an alert safely.
