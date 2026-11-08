---
name: "macSVG"
summary: "Edits and animates SVG graphics with an editable element tree, plug-in attribute editors and live WebKit preview."
category: "Design"
tags:
  - svg
  - vector
  - animation
  - drawing
repository: "https://github.com/dsward2/macSVG"
website: "https://macsvg.org"
license: "MIT"
licenseUrl: "https://github.com/dsward2/macSVG/blob/master/LICENSE"
download: "https://github.com/dsward2/macSVG/releases"
freeDownload: true
homebrew: "macsvg"
featured: false
maintenance: "unmaintained"
maintenanceNote: "No release or commit since July 2022."
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://raw.githubusercontent.com/dsward2/macSVG/master/README.md"
  - "https://macsvg.org/"
  - "https://macsvg.org/user-guide/overview/"
  - "https://macsvg.org/download/"
  - "https://github.com/dsward2/macSVG/releases/tag/v1.2.0"
  - "https://github.com/dsward2/macSVG"
  - "https://github.com/dsward2/macSVG/blob/master/LICENSE"
  - "https://github.com/dsward2/macSVG/releases"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/dsward2/macSVG/master/macSVG/en.lproj/AppIcons.iconset/icon_512x512.png"
    credit: "ArkPhone LLC (Doug Ward)"
    license: "MIT; upstream project asset, trademarks retained"
---

macSVG edits SVG documents through their structure. The document appears as an outline of its XML elements, which you reorder or import by drag and drop, while a WebKit view renders the result and the Web Inspector is at hand.

- Paths with several segments can be edited, including text on a path and path shape animation.
- Plug-in editors help set colours, gradients, patterns, transforms and animation attributes.
- A timeline graph plays SMIL animation, and you can scrub its time marker to any moment.
- JPEG and PNG images can be embedded or linked by URL, and SVG documents can be nested.
- Google Web Fonts and TrueType fonts are supported.

Attribute menus come from the SVG DTD, so predefined values are offered as choices. A built-in HTTP server sends live previews to browsers, phones or the iOS Simulator on the local network. Finished work can be exported as MPEG-4 video, converted to Core Graphics code for iOS and macOS, or uploaded over SFTP.

The output targets SVG 1.1 for HTML5 pages, which display on iOS, Android, macOS, Windows and Linux. The developer has noted that macSVG relies heavily on WebKit's legacy WebView framework, which WebKit may remove.

Version 1.2 from July 2022 is the latest release. It is a ZIP with a Universal app for Apple silicon and Intel, signed with a Developer ID, and it requires macOS 10.14 or later.
