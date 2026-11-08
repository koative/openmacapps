---
name: "Bitcoin Core"
summary: "A Bitcoin node and wallet application with a graphical desktop interface."
category: "Utilities"
tags: ["bitcoin", "wallet", "network"]
repository: "https://github.com/bitcoin/bitcoin"
website: "https://bitcoincore.org"
license: "MIT"
licenseUrl: "https://github.com/bitcoin/bitcoin/blob/master/COPYING"
download: "https://bitcoincore.org/en/download"
freeDownload: true
homebrew: "bitcoin-core"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/bitcoin/bitcoin", "https://github.com/bitcoin/bitcoin/blob/master/COPYING", "https://bitcoincore.org/en/download", "https://github.com/bitcoin/bitcoin/blob/master/README.md", "https://bitcoincore.org/en/releases/32.1/", "https://bitcoincore.org/bin/bitcoin-core-32.1/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/bitcoin/bitcoin/blob/master/src/qt/res/icons/bitcoin.png", "credit": "Bitcoin Core contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Bitcoin Core downloads every block and transaction from the Bitcoin peer-to-peer network and checks each one itself, so your wallet relies on rules enforced on your own Mac. The macOS app, Bitcoin-Qt, puts that node behind a window with a built-in wallet.

Storage is the first thing to plan for. The download page puts the first sync at about 600 GB, followed by 5 to 10 GB a month. With pruning turned on, old block data is discarded and the node can fit in around 10 GB, which the project says costs no security.

The release notes for version 32.1 list macOS 14 as the oldest supported system. Separate downloads exist for Apple silicon (arm64) and Intel (x86_64), each as a ZIP or tar.gz. The Apple silicon ZIP holds Bitcoin-Qt.app, signed by the Bitcoin Core Code Signing Association and notarized by Apple. Upgrading means quitting the app and replacing the copy in Applications.

The download page also publishes a SHA256SUMS checksum list and GPG verification steps for each platform. Checking a download against it is optional, but the project recommends it, since a tampered copy could lose you funds.

The code is under the MIT license, and the project is developed in the open on GitHub.
