---
name: "Mactokio"
summary: "Native two-factor authenticator; secrets are AES-256 encrypted on the device, with no sync or account."
category: "Privacy & security"
tags:
  - two-factor
  - encryption
  - security
repository: "https://github.com/dalirnet/mactokio"
website: "https://github.com/dalirnet/mactokio"
license: "MIT"
licenseUrl: "https://github.com/dalirnet/mactokio/blob/main/LICENSE"
download: "https://github.com/dalirnet/mactokio/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/dalirnet/mactokio"
  - "https://github.com/dalirnet/mactokio/blob/main/LICENSE"
  - "https://github.com/dalirnet/mactokio/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/dalirnet/mactokio/main/Resources/AppIcon.icns"
    credit: "dalirnet"
    license: "MIT; upstream app icon (converted from .icns to PNG), trademarks retained"
---

Mactokio generates TOTP and HOTP one-time codes for two-factor sign-in, the same kind of codes a phone authenticator app shows. You add accounts by scanning a QR code with the Mac's camera or by scanning a Google Authenticator bulk export in one go. Secrets are AES-256 encrypted and bound to the device, and Touch ID or your device password is asked for on every launch. It suits people who want their codes on the Mac without a cloud account or sync.

It requires macOS 13.0 or later. The release is a universal binary for Apple silicon and Intel, shipped as a zip. The build is ad-hoc signed and not notarized, so the first launch needs a right-click and then Open. The README says the app has no network access and no telemetry.
