---
name: "Marker Data"
summary: "Exports Final Cut Pro markers with stills, GIFs and metadata to CSV, spreadsheets, Notion or Airtable."
category: "Media"
tags: ["video-editing", "metadata", "spreadsheets", "batch-processing"]
repository: "https://github.com/TheAcharya/MarkerData"
website: "https://markerdata.theacharya.co"
license: "MIT"
licenseUrl: "https://github.com/TheAcharya/MarkerData/blob/main/LICENSE"
download: "https://github.com/TheAcharya/MarkerData/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/TheAcharya/MarkerData", "https://github.com/TheAcharya/MarkerData/blob/main/LICENSE", "https://github.com/TheAcharya/MarkerData/releases", "https://raw.githubusercontent.com/TheAcharya/MarkerData/main/README.md", "https://markerdata.theacharya.co", "https://github.com/TheAcharya/MarkerData/releases/tag/v2.1.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/TheAcharya/MarkerData/main/assets/marker_data_app_icon.png", "credit": "The Acharya and Marker Data contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Marker Data takes the markers you set on a Final Cut Pro timeline and writes their metadata out as a spreadsheet, a chapter list or a database entry. You send a project or compound clip to it through its share destination or workflow extension and pick a saved configuration for the export. Captions can stand in for markers when you prefer to log notes that way.

Each export profile targets a different destination:

- CSV, TSV and Excel files for spreadsheets
- JSON for Notion and Airtable, which it can also upload to directly
- YouTube or Compressor chapter text, a Markdown list or SubRip subtitles
- A Standard MIDI file for Logic Pro and most other audio DAWs

At every marker the app can render a still or an animated GIF, burn a label onto it with that marker's metadata, and embed colour swatches analysed from the image. Through Pagemaker, markers can also become a PDF to share. Several configurations can be kept side by side for different projects, and exports can be queued.

The current release needs macOS Sequoia 15.7 or later, an Apple silicon Mac and Final Cut Pro 12.0, either the perpetual version or the Creator Studio subscription. Some modules need an internet connection, and the app has to sit in the Applications folder to run correctly. The 2.1.4 DMG is notarized by Apple.

Marker Data is built on MarkersExtractor, which the same team also publishes as a command-line tool. The project lists shot libraries, VFX and ADR databases and music cue sheets among its uses.
