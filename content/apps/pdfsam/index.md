---
name: "PDFsam Basic"
summary: "Merges, splits, mixes, rotates and extracts PDF pages on your Mac, without uploading the files anywhere."
category: "Utilities"
tags: ["pdf", "documents", "organization", "pdf-tools"]
alternativeTo: ["adobe-acrobat"]
repository: "https://github.com/torakiki/pdfsam"
website: "https://pdfsam.org/"
license: "AGPL-3.0-or-later"
licenseUrl: "https://github.com/torakiki/pdfsam/blob/master/LICENSE"
download: "https://github.com/torakiki/pdfsam/releases"
freeDownload: true
homebrew: "pdfsam-basic"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/torakiki/pdfsam", "https://github.com/torakiki/pdfsam/blob/master/LICENSE", "https://github.com/torakiki/pdfsam/blob/master/README.md", "https://github.com/torakiki/pdfsam/releases", "https://pdfsam.org/", "https://pdfsam.org/pdfsam-basic/", "https://pdfsam.org/download-pdfsam-basic/", "https://github.com/torakiki/pdfsam/releases/tag/v6.0.10", "https://github.com/torakiki/pdfsam/blob/master/pdfsam-basic/src/main/java/org/pdfsam/basic/App.java", "https://helpx.adobe.com/acrobat/desktop/edit-documents/edit-text-in-pdfs/modify-text.html"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/torakiki/pdfsam/blob/master/pdfsam-basic/src/deb/icon.svg", "credit": "PDFsam Basic contributors", "license": "AGPL-3.0-or-later; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

PDFsam Basic builds new PDF files out of the pages of ones you already have. You add files to one of its six tools, set the options and run it, and the result is written as a new document.

- Merge joins whole files or page ranges such as 1-10, 14, 25-. It can combine, drop or rebuild bookmarks, keep form fields and add a clickable table of contents.
- Split cuts after every page, after odd or even pages, every n pages, at given page numbers, at a rough file size or at a bookmark level.
- Mix interleaves two or more files, which puts the odd and even pages of a single-sided scan back in order.
- Rotate turns all or chosen pages by 90, 180 or 270 degrees.
- Extract copies selected pages into a new file.
- Insert drops one PDF, or part of it, into another at a fixed page interval.

The developer says files are processed on your computer and never uploaded, and the tools need no internet connection. Output carries no watermark, and there is no file size limit.

Adobe Acrobat can also change, replace or delete the text on a page. The six tools in PDFsam Basic move, copy and turn whole pages instead. The same company sells PDFsam Visual and PDFsam Enhanced under their own end-user licenses, so make sure the download you pick is Basic.

PDFsam Basic needs macOS 11 or later and comes in separate builds for Apple silicon and Intel. It is a JavaFX program that bundles its own Java runtime, and the app inside the DMG is notarized.
