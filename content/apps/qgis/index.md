---
name: "QGIS"
summary: "Views, edits and analyzes geographic data and lays it out as printable maps."
category: "Education"
tags: ["maps", "gis", "data-visualization"]
repository: "https://github.com/qgis/QGIS"
website: "https://qgis.org/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/qgis/QGIS/blob/master/COPYING"
download: "https://www.qgis.org/download/"
freeDownload: true
homebrew: "qgis"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/qgis/QGIS", "https://github.com/qgis/QGIS/blob/master/COPYING", "https://github.com/qgis/QGIS/blob/master/README.md", "https://qgis.org/download/", "https://qgis.org/resources/installation-guide/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/qgis/QGIS/master/images/icons/qgis-icon-macos.png", "credit": "QGIS contributors", "license": "GPL-2.0; upstream project asset, trademarks retained"}]
---

QGIS opens geographic data as layers on a map. You add a shapefile, a GeoPackage or a PostGIS table, style it, analyze it and lay out the result for printing or PDF.

- Raster, vector, mesh and point-cloud data load through GDAL, OGR and MDAL, including GeoTIFF, NetCDF and LAS/LAZ files.
- Layers in different coordinate reference systems are reprojected on the fly.
- The Processing toolbox has more than 200 built-in algorithms and reaches over 1,000 more through GDAL, SAGA, GRASS and Orfeo Toolbox, with a model designer to chain them.
- Print layouts fix scale, extent and decorations, and Atlas turns one layout into a whole series of maps.
- PyQGIS scripting and a public plugin repository extend the app.

Web services such as WMS, WFS and ArcGIS REST sit in the same browser panel as local files. You can also digitize new features and georeference scanned maps.

Two Mac versions are offered. The long-term release, currently 3.44, is meant for people who value stability, while the regular release, 4.2, gets new features first. Both are all-in-one installers for Intel and Apple silicon Macs, and QGIS says its macOS installers are signed and notarized. They are large: the 4.2 DMG is about 1.6 GB.

QGIS is free from qgis.org under the GPL, version 2 or any later version. Its source and installers for Windows and Linux come from the same page.
