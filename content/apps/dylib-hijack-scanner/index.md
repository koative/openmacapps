---
name: Dylib Hijack Scanner
summary: Scans for applications susceptible to dynamic-library hijacking.
category: Privacy & security
tags:
  - security
  - libraries
  - inspection
repository: https://github.com/objective-see/DylibHijackScanner
website: https://objective-see.org/products/dhs.html
license: GPL-3.0
licenseUrl: https://github.com/objective-see/DylibHijackScanner/blob/main/LICENSE
download: https://github.com/objective-see/DylibHijackScanner/releases
freeDownload: true
homebrew: "dhs"
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/objective-see/DylibHijackScanner
  - https://github.com/objective-see/DylibHijackScanner/blob/main/LICENSE
  - https://github.com/objective-see/DylibHijackScanner/releases
  - https://objective-see.org/products/dhs.html
  - "https://github.com/objective-see/DylibHijackScanner/releases/tag/v1.6.0"
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/DylibHijackScanner/blob/1fd9df048284320e7bcd6fae1657d4e7da446ba6/DHS/images/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Dylib Hijack Scanner contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Dylib Hijack Scanner, or DHS, looks through the applications on your Mac for two things: programs that load dynamic libraries in a way an attacker could abuse, and programs where that abuse may already have happened. The attack it looks for was presented in a conference talk that the product page links to.

You open DHS.app and press Start Scan. Results come back in two groups. Vulnerable applications are common and do not mean the Mac is compromised. The product page explains that exploiting one requires an attacker who already has access to the machine, and that no per-app patches exist because the hijack abuses ordinary loader behavior. Entries under Hijacked Applications deserve a closer look, with the path of the flagged library shown beneath each row.

The gear icon opens three options. Full scan covers the entire file system, weak hijacker detection also looks for libraries planted through weak imports, and save results writes the findings as JSON to a file named dhsFindings.txt next to the app.

Version 1.6.0 added parsing of arm64 binaries and better detection of directories protected by System Integrity Protection. It requires macOS 11 or later. The release ZIP holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.

DHS is deliberately tuned to report false positives rather than miss real hijacks, so a legitimate library can be flagged. The product page links a list of known false positives to check first, and suggests submitting an unexplained library to VirusTotal.
