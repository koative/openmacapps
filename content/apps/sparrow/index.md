---
name: "Sparrow Wallet"
summary: "Manages Bitcoin wallets on the desktop, with hardware wallet support and a detailed view of every transaction."
category: "Utilities"
tags: ["bitcoin", "wallet", "finance"]
repository: "https://github.com/sparrowwallet/sparrow"
website: "https://sparrowwallet.com"
license: "Apache-2.0"
licenseUrl: "https://github.com/sparrowwallet/sparrow/blob/master/LICENSE"
download: "https://sparrowwallet.com/download"
freeDownload: true
homebrew: "sparrow"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sparrowwallet/sparrow", "https://github.com/sparrowwallet/sparrow/blob/master/LICENSE", "https://github.com/sparrowwallet/sparrow/blob/master/README.md", "https://sparrowwallet.com", "https://sparrowwallet.com/download", "https://github.com/sparrowwallet/sparrow/releases/tag/2.5.6"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/sparrowwallet/sparrow/blob/master/src/main/resources/image/sparrow-icon%402x.png", "credit": "Sparrow Wallet contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Sparrow manages Bitcoin wallets on the desktop and shows every detail of what you send and receive. You create or import a wallet, connect it to a server, and see each transaction and unspent output with its inputs, outputs and fees.

- Single-signature and multisig wallets work with common script types.
- Common hardware wallets connect over USB or in air-gapped mode, and partially signed transactions use the PSBT standard throughout.
- Coin control lets you choose which outputs a payment spends and set the fee, and you can label every transaction, input and output.
- Testnet, regtest and signet are built in alongside the main Bitcoin network.

Sparrow can connect through public servers, your own Bitcoin Core node or a private Electrum server, and Tor is built in. A transaction editor doubles as a blockchain explorer: you can change any field of a transaction and inspect its raw bytes before you broadcast it.

Each release comes with a signed manifest. Drop the manifest, its signature and the installer onto an installed copy of Sparrow and it checks the download for you; the same dialog can verify other files, such as hardware wallet firmware. From version 1.5.0 onwards the release binaries can be reproduced from source, up to the point of code signing and packaging.

Separate DMGs are offered for Apple silicon and Intel Macs, and the Intel build needs macOS 11 or later. The 2.5.6 Apple silicon DMG is Developer ID-signed and notarized. By default Sparrow keeps its wallets, settings and log in ~/.sparrow.
