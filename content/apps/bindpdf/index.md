---
name: "bindPDF"
summary: "Combines several PDF files into one document, with a reorderable file list and a live preview of the result."
category: "Productivity"
tags:
  - pdf
  - pdf-tools
  - documents
repository: "https://github.com/vishaltelangre/bindPDF"
website: "https://github.com/vishaltelangre/bindPDF"
license: "MIT"
licenseUrl: "https://github.com/vishaltelangre/bindPDF/blob/master/LICENSE"
download: "https://github.com/vishaltelangre/bindPDF/releases/download/v1.0.0/bindPDF-1.0.0.dmg"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No commit since October 2019 (checked 2026-11-06)."
featured: false
added: "2026-11-06"
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/vishaltelangre/bindPDF"
  - "https://github.com/vishaltelangre/bindPDF/blob/master/LICENSE"
  - "https://github.com/vishaltelangre/bindPDF/releases/download/v1.0.0/bindPDF-1.0.0.dmg"
  - "https://raw.githubusercontent.com/vishaltelangre/bindPDF/master/README.md"
  - "https://raw.githubusercontent.com/vishaltelangre/bindPDF/master/bindPDF/ViewController.swift"
  - "https://github.com/vishaltelangre/bindPDF/releases/tag/v1.0.0"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/vishaltelangre/bindPDF/master/bindPDF/Assets.xcassets/AppIcon.appiconset/1024x1024.png"
    credit: "Vishal Telangre"
    license: "MIT; app icon, trademarks retained"
---

bindPDF joins PDF files into one document. Click the add button and pick several PDFs at once, and each appears in a list with a thumbnail of its first page and its file name.

Drag files up or down the list to change their order, or swipe a row to delete it. A preview pane shows every page of the combined document and updates with each change. When the order is right, export saves the result as a new PDF, offering your Documents folder first. The merging is done with Apple's PDFKit.

There is one release, 1.0.0 from October 2019, and the code has not changed since. Its DMG holds an Intel app that needs macOS 10.14 or later, so Apple silicon Macs run it through Rosetta 2. The app has only an ad hoc signature. Gatekeeper rejects it, so you have to allow the first launch under Privacy & Security in System Settings.
