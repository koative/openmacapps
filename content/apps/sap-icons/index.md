---
name: "Icons"
summary: "Makes install, uninstall and animated uninstall icons in PNG format from one image, with optional banners for Mac admins."
category: "Design"
tags:
  - images
  - packaging
  - batch-processing
repository: https://github.com/SAP/macOS-icon-generator
website: https://github.com/SAP/macOS-icon-generator
license: "Apache-2.0"
licenseUrl: https://github.com/SAP/macOS-icon-generator/blob/main/LICENSE
download: https://github.com/SAP/macOS-icon-generator/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/SAP/macOS-icon-generator
  - https://github.com/SAP/macOS-icon-generator/blob/main/LICENSE
  - https://github.com/SAP/macOS-icon-generator/releases
  - https://raw.githubusercontent.com/SAP/macOS-icon-generator/main/README.md
  - https://github.com/SAP/macOS-icon-generator/releases/tag/2.3.1
  - https://github.com/SAP/macOS-icon-generator/releases/tag/2.3.0
  - https://github.com/SAP/macOS-icon-generator/wiki/Using-Icons
  - https://github.com/SAP/macOS-icon-generator/wiki/Frequently-Asked-Questions
  - https://github.com/SAP/macOS-icon-generator/wiki/Icons-command-line-tool
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/SAP/macOS-icon-generator/main/source/Icons/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png
    credit: "SAP SE and Icons contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Icons turns one image into the icon set Mac admins use for apps in management tools such as Jamf Pro or Munki. You drag an image or an application onto its window, adjust the result, and save an install icon, an uninstall icon with a delete badge, and an animated version of that uninstall icon.

Banners are the main customization. You type a label such as Test or Production, choose the banner and text colours and the side it sits on, and save it for reuse. Versions of an app for development, test and production environments are then easy to tell apart.

- An overlay image can be placed and resized on top of the icon.
- The uninstall animation's duration and image size are adjustable, and the delete badge can be any image or an SF Symbol pasted as SVG.
- Output sizes run from 64 by 64 to 1024 by 1024 pixels, and an icon can go to the clipboard without being saved.
- On macOS 15.1 or later, Image Playground can generate a starting image from scratch.

Without opening the app, a Finder Quick Action called Make Icon Set builds the three default files from the selected item. It needs write access to the folder that item is in. The icons_cli command-line tool produces the same files in scripts, given an input and an output path.

Icons requires macOS 13 or later. The 2.3.1 release is a notarized installer package signed by SAP, holding a Universal app for Apple silicon and Intel. SAP publishes it under the Apache 2.0 license as is, with no support.
