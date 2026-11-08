---
name: WhatsYourSign
summary: "Adds a Finder menu item that shows a file's code signature, hashes and entitlements."
category: Privacy & security
tags:
  - security
  - finder
  - code-signing
repository: https://github.com/objective-see/WhatsYourSign
website: https://github.com/objective-see/WhatsYourSign
license: GPL-3.0
licenseUrl: https://github.com/objective-see/WhatsYourSign/blob/master/License.md
download: https://github.com/objective-see/WhatsYourSign/releases
freeDownload: true
homebrew: "whatsyoursign"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/objective-see/WhatsYourSign", "https://github.com/objective-see/WhatsYourSign/blob/master/License.md", "https://github.com/objective-see/WhatsYourSign/blob/master/README.md", "https://github.com/objective-see/WhatsYourSign/releases", "https://github.com/objective-see/WhatsYourSign/releases/tag/v3.2.2", "https://objective-see.org/products/whatsyoursign.html"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/WhatsYourSign/blob/f355e7cc9e021d8a51f9e6d25d0c9aa8b3422f85/Shared/icon.png
    credit: WhatsYourSign contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

WhatsYourSign adds a Code Signing Info item to the menu you get when you right-click or Control-click a file in Finder. Choose it and a window shows who signed the file, or that nobody did.

A lock icon sums up the result. Green means Apple signed the item, black means it carries another valid signature such as a Developer ID or Mac App Store one, and red means it is unsigned or its certificate has been revoked. Revoked certificates almost always point to malware, and ad-hoc signed or unsigned items deserve caution.

- View Hashes shows the MD5, SHA-1 and SHA-256 hashes, plus the CDHash where there is one. For an app bundle they cover the main executable.
- View Entitlements lists the entitlements an item declares.
- The window also reports whether an item is notarized.
- An option set during installation extends the menu item to external drives and mounted disk images. It is off by default because Finder can then show the WhatsYourSign icon on those volumes.

A signature identifies who made a file and helps you judge whether to trust it. While checking, macOS may contact Apple's servers to see whether a certificate or notarization ticket was revoked. If the menu item goes missing, turn the WhatsYourSign extension off and on again under Login Items & Extensions in System Settings.

WhatsYourSign needs macOS 10.15 or later. The 3.2.2 ZIP holds a Universal installer for Apple silicon and Intel, Developer ID-signed and notarized. Run the installer again to uninstall.
