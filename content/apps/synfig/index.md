---
name: "Synfig Studio"
summary: "Animates vector and bitmap artwork in 2D, calculating the frames between the key poses you set."
category: "Design"
tags: ["animation", "vector", "2d"]
alternativeTo: ["adobe-animate", "moho"]
repository: "https://github.com/synfig/synfig"
website: "https://www.synfig.org/"
license: "GPL-3.0"
licenseUrl: "https://github.com/synfig/synfig/blob/master/LICENSE"
download: "https://github.com/synfig/synfig/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/synfig/synfig", "https://github.com/synfig/synfig/blob/master/LICENSE", "https://github.com/synfig/synfig/blob/master/README.md", "https://github.com/synfig/synfig/releases", "https://www.synfig.org/", "https://synfig.readthedocs.io/en/latest/installation.html", "https://github.com/synfig/synfig/releases/tag/v1.5.5", "https://moho.lostmarble.com/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/synfig/synfig/master/autobuild/osx/app-template/Contents/Resources/SynfigStudio.icns", "credit": "Synfig Studio contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

Synfig Studio animates 2D artwork without frame-by-frame drawing. You set a shape or layer at key positions, and Synfig calculates the frames in between, including tweening one vector shape into a different one.

- More than 50 layer types cover geometry, gradients, filters, distortions, transformations and fractals.
- A bone system rigs bitmap images for cut-out animation or drives vector artwork, and a Skeleton Distortion layer applies complex deformations to bitmaps.
- Parameters of different layers can be linked directly or through math expressions, so you can build character puppets from them.
- Artwork can be vector, bitmap or a mix of both.

Version 1.5.5 was released in March 2026. Its Mac disk image contains an Intel-only app without a developer signature. If macOS refuses to open it as coming from an unidentified developer, the install guide explains how to open it anyway.

Moho, which Lost Marble sells for macOS and Windows, is also built around rigging, with inverse kinematics, physics and brushes that imitate natural painting. Synfig is free under the GPL and also has Linux builds, and the project offers a development build next to the stable one for trying new features.
