---
name: "Electrum"
summary: "A Bitcoin wallet for the desktop with seed-phrase recovery, multisig, cold storage and hardware wallet plugins."
category: "Utilities"
tags: ["bitcoin", "wallet", "finance"]
repository: "https://github.com/spesmilo/electrum"
website: "https://electrum.org"
license: "MIT"
licenseUrl: "https://github.com/spesmilo/electrum/blob/master/LICENCE"
download: "https://electrum.org/#download"
freeDownload: true
homebrew: "electrum"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/spesmilo/electrum", "https://github.com/spesmilo/electrum/blob/master/LICENCE", "https://electrum.org/#download", "https://electrum.org/", "https://raw.githubusercontent.com/spesmilo/electrum/master/README.md", "https://download.electrum.org/4.8.4/electrum-4.8.4.dmg"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/spesmilo/electrum/blob/master/electrum/gui/icons/Electrum_512.png", "credit": "Electrum contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Electrum keeps a Bitcoin wallet on your Mac. You create a wallet or restore one from its seed phrase, then send and receive payments. The project says private keys are encrypted and never leave the computer. Electrum stays quick by asking Electrum servers, which index the blockchain, for your history. It checks every transaction in that history with SPV.

- A watching-only wallet lets you follow balances online while the private keys stay offline for cold storage.
- Multisig wallets split the right to spend between several wallets.
- Hardware wallets and multisig services connect through plugins.
- You can export private keys and import them into other Bitcoin clients.

The macOS build needs macOS 11 or later. Version 4.8.4 is an Intel (x86_64) app, and the app inside its DMG is Developer ID-signed and notarized by Apple. Electrum also runs on Windows, Linux and Android, and is free under the MIT license. Each release is reproducible and signed by several builders. You can check the GPG signatures against ThomasV's published key, and the project warns against downloading Electrum from anywhere but electrum.org.

If the Mac fails, the seed phrase is what recovers the funds. Electrum Technologies, which publishes the app, holds no account data and cannot freeze funds or undo a fraudulent transaction. The project gives no private support, so someone offering "Electrum support" through a private channel is probably a scammer after your coins. You can run your own Electrum server if you would rather not rely on public ones.
