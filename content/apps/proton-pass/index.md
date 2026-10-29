---
name: "Proton Pass"
summary: "Proton's end-to-end encrypted password manager for logins, passkeys, notes and cards, with email aliases and sync."
category: "Privacy & security"
tags:
  - password-manager
  - passwords
  - passkeys
  - encryption
  - cross-platform
alternativeTo:
  - 1password
  - lastpass
repository: https://github.com/ProtonMail/WebClients
website: https://proton.me/pass
license: "GPL-3.0"
licenseUrl: https://github.com/ProtonMail/WebClients/blob/main/LICENSE
download: https://proton.me/pass/download/macos
homebrew: "proton-pass"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/ProtonMail/WebClients/tree/main/applications/pass-desktop
  - https://github.com/ProtonMail/WebClients/blob/main/LICENSE
  - https://github.com/ProtonMail/WebClients/blob/main/applications/pass-desktop/package.json
  - https://proton.me/pass/download/macos
assets:
  - path: ./assets/icon.png
    source: https://github.com/ProtonMail/WebClients/blob/main/applications/pass-desktop/assets/logo.icns
    credit: "Proton AG"
    license: "GPL-3.0; upstream project asset, Proton AG trademarks retained"
---

Proton Pass stores logins, passkeys, secure notes, cards and identity details in end-to-end encrypted vaults and generates strong passwords. It also creates hide-my-email aliases so sites never see your real address, and flags weak or reused passwords. The Mac app keeps the vault available offline, unlocks with biometrics, and syncs with Proton Pass on other devices and browsers.

It needs a Proton account, and the vault is stored on Proton's servers rather than on a server you run. The free plan includes unlimited logins and devices; features such as more aliases and the built-in authenticator belong to paid plans. The desktop app's source lives in Proton's WebClients monorepo under applications/pass-desktop.
