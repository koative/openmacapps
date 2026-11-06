---
name: "Byakugan Scan"
summary: "Menu bar tool that reads text, QR codes and barcodes from a selected screen area with Apple Vision, without temp files."
category: "Utilities"
tags:
  - ocr
  - screen-capture
  - qr-code
  - barcode
  - menu-bar
repository: "https://github.com/halcyon-past/byakugan-scan"
website: "https://byakugan-scan.aritro.cloud"
license: "MIT"
licenseUrl: "https://github.com/halcyon-past/byakugan-scan/blob/main/LICENSE"
download: "https://github.com/halcyon-past/byakugan-scan/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/halcyon-past/byakugan-scan"
  - "https://github.com/halcyon-past/byakugan-scan/blob/main/LICENSE"
  - "https://github.com/halcyon-past/byakugan-scan/releases"
  - "https://byakugan-scan.aritro.cloud"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/halcyon-past/byakugan-scan/main/ByakuganScan/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png"
    credit: "Aritro Saha"
    license: "MIT; upstream app icon, trademarks retained"
---

Byakugan Scan lives in the menu bar. You select a region of any screen, and it runs Apple's Vision text and barcode recognition on the captured pixels, then copies the result to the clipboard: recognised text, or the payload of a QR code or barcode. The README says the capture stays in memory rather than being written to a temporary file, and that the app makes no network calls. It is for people who need to copy text from a paused video, a protected PDF or an on-screen code without retyping it.

It requires macOS 14.0 or later and Screen Recording permission. The DMG is ad hoc signed and not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. The binary in the 1.0.14 release is Apple silicon only, even though the project website describes a universal build.
