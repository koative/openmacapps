---
name: "VeraCrypt"
summary: "Free disk encryption for encrypted volumes and container files, based on TrueCrypt."
category: "Privacy & security"
tags:
  - encryption
  - privacy
  - security
repository: "https://github.com/veracrypt/VeraCrypt"
website: "https://veracrypt.jp"
license: "Apache-2.0 AND LicenseRef-TrueCrypt-3.0"
sourceAvailability: "source-available"
licenseNotes: "License.txt says VeraCrypt is multi-licensed under the Apache License 2.0 and the TrueCrypt License version 3.0, with both texts included. The TrueCrypt License allows use and redistribution, but a modified version may not use the TrueCrypt name or confusingly similar names. A modified version must also remove TrueCrypt names, logos and graphics, carry the TrueCrypt attribution notice, and keep its complete source publicly available. The VeraCrypt name, logo and trademarks are not licensed. The combined terms are not an OSI open-source licence."
licenseUrl: "https://github.com/veracrypt/VeraCrypt/blob/master/License.txt"
download: "https://github.com/veracrypt/VeraCrypt/releases/latest"
homebrew: "veracrypt"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/veracrypt/VeraCrypt"
  - "https://github.com/veracrypt/VeraCrypt/blob/master/License.txt"
  - "https://github.com/veracrypt/VeraCrypt/releases"
  - "https://veracrypt.jp"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/veracrypt/VeraCrypt/master/src/Resources/Icons/VeraCrypt.icns"
    credit: "VeraCrypt contributors (IDRIX)"
    license: "Apache-2.0 AND LicenseRef-TrueCrypt-3.0; upstream app icon, trademarks retained"
---

VeraCrypt creates and opens encrypted volumes and container files, which keep their contents encrypted on disk until they are mounted with a password or key file. It is based on TrueCrypt and presents itself as a more secure successor. It suits people who want local disk encryption without a cloud service, for example for a portable drive or a folder of sensitive files.

The macOS build needs macFUSE or FUSE-T installed first; a separate FUSE-T image is published, and the installer package is notarized. The licence combines Apache 2.0 and TrueCrypt 3.0 terms, so read the notes before redistributing a modified build.
