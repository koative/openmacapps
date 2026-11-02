---
name: "KeyStore Explorer"
summary: "A graphical tool for Java keystores, keys, certificates and CSRs that replaces the keytool and jarsigner command lines."
category: "Developer tools"
tags: ["certificates", "java", "encryption", "cross-platform"]
repository: "https://github.com/kaikramer/keystore-explorer"
website: "https://keystore-explorer.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/kaikramer/keystore-explorer/blob/main/LICENSE"
download: "https://keystore-explorer.org/downloads.html"
homebrew: "keystore-explorer"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/kaikramer/keystore-explorer", "https://github.com/kaikramer/keystore-explorer/blob/main/LICENSE", "https://keystore-explorer.org/downloads.html", "https://github.com/kaikramer/keystore-explorer/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/kaikramer/keystore-explorer/blob/main/kse/icons/kse.icns", "credit": "KeyStore Explorer contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

KeyStore Explorer gives the Java key and certificate tools a window. It opens, creates and converts keystores in PKCS#12, JKS, JCEKS, BKS, BCFKS and UBER formats, and lets you rename, copy, delete and re-password their entries without memorising keytool flags.

It generates key pairs, including RSA, elliptic-curve and post-quantum ML-DSA keys, with self-signed certificates and extensions, creates and signs certificate signing requests, builds CRLs, and imports or exports keys and certificates in PEM, DER, PKCS#8 and other formats. It can also sign and verify JAR files and CMS signatures.

The Mac downloads are separate disk images for Apple silicon and Intel, and each app bundle includes its own Java runtime, so no separate Java install is needed.
