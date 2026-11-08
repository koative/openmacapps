---
name: "ExifCleaner"
summary: "A drag-and-drop tool that strips metadata from images, videos and PDFs in batches."
category: "Privacy & security"
tags: ["privacy", "metadata", "photography", "cross-platform"]
repository: "https://github.com/szTheory/exifcleaner"
website: "https://exifcleaner.com"
license: "MIT"
licenseUrl: "https://github.com/szTheory/exifcleaner/blob/master/LICENSE"
download: "https://github.com/szTheory/exifcleaner/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/szTheory/exifcleaner", "https://github.com/szTheory/exifcleaner/blob/master/LICENSE", "https://github.com/szTheory/exifcleaner/releases", "https://raw.githubusercontent.com/szTheory/exifcleaner/master/README.md", "https://github.com/szTheory/exifcleaner/releases/tag/v4.7.0", "https://exiftool.org/#limitations"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/szTheory/exifcleaner/master/build/icon.png", "credit": "szTheory and ExifCleaner contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

ExifCleaner strips metadata from photos, videos and PDFs that you drag onto its window. Drop a folder and it works through every file inside, in a batch, using ExifTool kept running in the background.

Settings can keep image orientation or file timestamps, save the cleaned file as a copy, and remove macOS extended attributes. Expanding a file in the list shows its metadata before and after cleaning. The interface comes in 25 languages, switches between them without a restart and follows the system's dark mode.

The developer says the app makes no network connections, has no telemetry and never updates itself. ExifCleaner needs macOS 13 or later, with separate DMGs for Apple silicon and Intel. The builds are not code-signed, so on macOS 15 and later the first launch needs Open Anyway in Privacy & Security settings. Each release lists SHA-256 checksums to verify the download against.

Only a fixed list of formats is accepted: common image types such as JPEG, PNG, HEIC and WebP, a range of camera RAW formats, MP4, MOV and a few other video and audio containers, and PDF. Some results are partial. ExifTool leaves the original PDF metadata recoverable, RAF files are refused, and removal from TIFF and AVIF may be incomplete. ExifTool's own documentation advises against stripping everything from RAW files, because some of that data is needed to render the image.
