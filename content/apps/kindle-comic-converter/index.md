---
name: "Kindle Comic Converter"
summary: "Converts comics and manga into e-reader files sized for Kindle, Kobo, reMarkable and other e-ink devices."
category: "Utilities"
tags:
  - comics
  - ebooks
  - conversion
  - cross-platform
repository: https://github.com/ciromattia/kcc
website: https://github.com/ciromattia/kcc
license: "ISC"
licenseUrl: https://github.com/ciromattia/kcc/blob/master/LICENSE.txt
download: https://github.com/ciromattia/kcc/releases/latest
homebrew: "kindle-comic-converter"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/ciromattia/kcc
  - https://github.com/ciromattia/kcc/blob/master/LICENSE.txt
  - https://github.com/ciromattia/kcc/releases
  - https://github.com/ciromattia/kcc/wiki/Installation
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ciromattia/kcc/master/icons/comic2ebook.icns
    credit: "KCC contributors"
    license: "ISC; upstream project asset, trademarks retained"
---

KCC (Kindle Comic Converter) turns folders of images, CBZ and CBR archives, EPUBs and PDFs into files that display well on e-ink readers. You choose your device, and it crops margins, resizes pages to the screen's native resolution, adjusts contrast and splits or rotates double-page spreads, which also makes files much smaller. Output can be MOBI/AZW3, EPUB, Kobo KEPUB, CBZ, PDF or plain image folders.

Making MOBI or AZW3 files for Kindle needs Amazon's free Kindle Previewer installed, and some archive formats need 7-Zip. Separate Apple silicon and Intel disk images are provided. Recent Kindle models do not mount on macOS as a normal drive, so copying files to them needs Amazon's USB File Manager or a tool such as OpenMTP.
