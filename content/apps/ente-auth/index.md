---
name: "Ente Auth"
summary: "A two-factor authenticator for TOTP codes with optional end-to-end encrypted backup and sync across devices."
category: "Privacy & security"
tags:
  - two-factor
  - encryption
  - sync
  - offline
  - cross-platform
repository: https://github.com/ente/ente/tree/main/mobile/apps/auth
website: https://ente.com/auth/
license: "AGPL-3.0"
licenseUrl: https://github.com/ente/ente/blob/main/LICENSE
download: https://github.com/ente/ente/releases?q=tag%3Aauth-v4
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/ente/ente/tree/main/mobile/apps/auth
  - https://github.com/ente/ente/blob/main/LICENSE
  - https://github.com/ente/ente/releases?q=tag%3Aauth-v4
  - https://apps.apple.com/us/app/ente-authenticator/id6444121398
  - https://ente.com/auth/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ente/ente/main/mobile/apps/auth/assets/generation-icons/icon-macos.png
    credit: "Ente"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Ente Auth stores the six-digit codes that websites use for two-factor sign-in. You add each account's setup key and the app shows its current code, with icons for many common services. The same app runs on Mac, Windows, Linux, iPhone and Android.

It works offline and can be used without an account. Signing up for a free Ente account adds backups and sync between devices, and the secrets are end-to-end encrypted before they leave the device; codes can also be viewed, but not edited, at auth.ente.com. Ente Auth lives in the same repository as Ente's photo storage service.

On the Mac, a native desktop build is published on GitHub Releases, and Apple silicon Macs can also install the iPhone and iPad version from the App Store.
