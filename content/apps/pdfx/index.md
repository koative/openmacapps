---
name: "PDFx"
summary: "Combines several PDFs into one file that opens as an ordinary PDF anywhere and splits back into its parts in PDFx."
category: "Productivity"
tags:
  - pdf
  - drag-and-drop
  - cross-platform
  - pdf-tools
repository: https://github.com/AlexandrosGounis/pdfx
website: https://pdfx.zip
license: "MIT"
licenseUrl: https://github.com/AlexandrosGounis/pdfx/blob/main/LICENSE
download: https://github.com/AlexandrosGounis/pdfx/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/AlexandrosGounis/pdfx"
  - "https://github.com/AlexandrosGounis/pdfx/blob/main/LICENSE"
  - "https://github.com/AlexandrosGounis/pdfx/releases"
  - "https://pdfx.zip"
  - "https://raw.githubusercontent.com/AlexandrosGounis/pdfx/main/README.md"
  - "https://raw.githubusercontent.com/AlexandrosGounis/pdfx/main/SPEC.md"
  - "https://github.com/AlexandrosGounis/pdfx/releases/tag/v0.2.0"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/AlexandrosGounis/pdfx/main/build/icon.png
    credit: "Alex Gounis"
    license: "MIT; upstream project asset, trademarks retained"
---

PDFx turns a pile of PDFs into a single file. Drag PDFs, images or whole folders into its window, and each document appears as a horizontal strip of pages, with the documents stacked one under another. Reorder or remove them, then choose Export PDF.

The result is a valid PDF. Any reader shows every page in order, start to finish. Open it in PDFx instead and the bundle splits back into the documents you started with, so an invoice and a contract can travel as one file. Ordinary single PDFs open as they are.

Version 0.2.0, from August 2026, added forms, signing, text highlights, text elements and AI translation tools. The app is built with Electron, renders through pdf.js and assembles files with pdf-lib. A Windows installer ships next to the Mac download, the README covers building for Linux, and pdfx.zip runs a web demo.

On the GitHub release, the Mac build is a DMG for Apple silicon only. macOS blocks the app on first launch, and the release notes say to allow it under Privacy & Security with Open Anyway.

The format is small and documented in the repository's spec. PDFx attaches a JSON file named `pdfx-manifest.json` to the PDF, listing each document's name and page count, so another program can recover the boundaries.
