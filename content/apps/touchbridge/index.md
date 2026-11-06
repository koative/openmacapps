---
name: "TouchBridge"
summary: "Approve sudo prompts on your Mac with your iPhone; a PAM module checks the phone's signature before allowing it."
category: "Privacy & security"
tags:
  - security
  - privacy
  - authentication
repository: "https://github.com/HMAKT99/UnTouchID"
website: "https://hmakt99.github.io/UnTouchID/"
license: "MIT"
licenseUrl: "https://github.com/HMAKT99/UnTouchID/blob/main/LICENSE"
download: "https://github.com/HMAKT99/UnTouchID/releases/download/v2.0.1/TouchBridge-2.0.1.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/HMAKT99/UnTouchID"
  - "https://github.com/HMAKT99/UnTouchID/blob/main/LICENSE"
  - "https://github.com/HMAKT99/UnTouchID/releases"
  - "https://hmakt99.github.io/UnTouchID/"
---

TouchBridge lets an iPhone approve authentication for sudo on your Mac. A menu bar app and a background daemon handle pairing and transport, while a PAM module on the Mac checks the phone's signature over each request. You pair by scanning a QR code with the iPhone app. Version 2 is a breaking security release: upgrading from 1.x means rebuilding the iPhone app, re-pairing and enrolling again.

The release has a DMG and a PKG installer. The menu bar app is an arm64-only binary and requires macOS 13 or later. It is not notarized and Gatekeeper rejects it, so the first launch must be allowed in System Settings. Setup needs administrator rights, and the iPhone companion has to be built from source in Xcode with your own signing team. The release notes say unlock at the lock screen is not supported on macOS 27.
