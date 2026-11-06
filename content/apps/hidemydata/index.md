---
name: "HideMyData"
summary: "Removes personal data from PDFs and images on the Mac, using on-device OCR and a local privacy-filter model."
category: "Privacy & security"
tags:
  - privacy
  - ocr
  - security
  - local-ai
repository: "https://github.com/mkbula/HideMyData"
website: "https://github.com/mkbula/HideMyData"
license: "GPL-3.0"
licenseUrl: "https://github.com/mkbula/HideMyData/blob/master/LICENSE"
download: "https://github.com/mkbula/HideMyData/releases/download/v0.2.0/HideMyData-0.2.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/mkbula/HideMyData"
  - "https://github.com/mkbula/HideMyData/blob/master/LICENSE"
  - "https://github.com/mkbula/HideMyData/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/mkbula/HideMyData/master/HideMyData/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Maciej Bula"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

HideMyData finds personal data in PDFs and images and covers it with a solid box or a blurred patch. Scanned pages and images go through Apple Vision OCR. An on-device OpenAI privacy-filter model looks for names, emails, phone numbers, addresses, dates and IDs in context, and hand-written patterns catch items such as IBANs, SSNs, IP addresses, JWTs and API keys. You can add or remove boxes by hand before saving. Redaction is permanent on save, because the pages are rasterised and the original text is gone. It suits people who need to share scanned or exported documents without leaking identifiers.

It requires macOS 26 or later on Apple silicon; the README says the MLX backend does not run on Intel. The first launch downloads a model of about 1.5 GB from Hugging Face, after which the README says nothing leaves the machine. The DMG is Developer ID signed and notarized. Caveats: this is version 0.2.0, and the regex list is maintained by hand, so coverage is partial.
