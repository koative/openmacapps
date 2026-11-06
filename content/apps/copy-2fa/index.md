---
name: "Copy 2FA"
summary: "Copies the newest 2FA code from Apple Mail or Messages with one shortcut, and includes a TOTP and HOTP authenticator."
category: "Productivity"
tags:
  - two-factor
  - passwords
  - clipboard
  - menu-bar
repository: "https://github.com/stanczykwyatt/copy-2fa"
website: "https://stanczykwyatt.github.io/copy-2fa/"
license: "MIT"
licenseUrl: "https://github.com/stanczykwyatt/copy-2fa/blob/main/LICENSE"
download: "https://github.com/stanczykwyatt/copy-2fa/releases/download/v0.4.0/Copy-2FA.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/stanczykwyatt/copy-2fa"
  - "https://github.com/stanczykwyatt/copy-2fa/blob/main/LICENSE"
  - "https://github.com/stanczykwyatt/copy-2fa/releases"
  - "https://stanczykwyatt.github.io/copy-2fa/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/stanczykwyatt/copy-2fa/main/Resources/AppIcon.icns"
    credit: "stanczykwyatt"
    license: "MIT; upstream app icon, trademarks retained"
---

Copy 2FA puts a verification code on your clipboard with one keyboard shortcut. It finds the most recent code in Apple Mail or Messages, and its Recent Codes menu lists the last five when a newer one arrives first. It also has a built-in authenticator for time-based and counter-based codes, protected by Touch ID, and it can import accounts exported from several other authenticator and password apps. It suits people who receive codes by email or text and want to stop searching for them.

It needs macOS 14 or later. The app has no network access, enforced by the macOS sandbox. Reading Messages needs Full Disk Access, which is off by default and which you turn on yourself. The app is not notarized, and the README says that is because the developer has not paid for Apple's notarization fee. The first launch is therefore blocked: open System Settings, go to Privacy & Security and choose Open Anyway.
