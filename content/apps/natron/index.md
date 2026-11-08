---
name: "Natron"
summary: "A node-based compositor for visual effects work, from keying and tracking to multi-layer EXR composites."
category: "Media"
tags: ["video", "compositing", "visual-effects"]
alternativeTo: ["adobe-after-effects"]
repository: "https://github.com/NatronGitHub/Natron"
website: "https://natrongithub.github.io/"
license: "GPL-2.0"
licenseUrl: "https://github.com/NatronGitHub/Natron/blob/RB-2.6/LICENSE.txt"
download: "https://github.com/NatronGitHub/Natron/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/NatronGitHub/Natron", "https://github.com/NatronGitHub/Natron/blob/RB-2.6/LICENSE.txt", "https://github.com/NatronGitHub/Natron/blob/RB-2.6/README.md", "https://github.com/NatronGitHub/Natron/releases", "https://natrongithub.github.io/", "https://github.com/NatronGitHub/Natron/releases/tag/v2.5.0", "https://www.adobe.com/products/aftereffects.html"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/NatronGitHub/Natron/RB-2.6/Gui/Resources/Images/natronIcon256_linux.png", "credit": "Natron contributors", "license": "GPL-2.0; upstream project asset, trademarks retained"}]
---

Natron is a compositor for visual effects work. You load footage and images, then wire nodes together in a graph that keys, tracks, rotoscopes and merges them. Groups of nodes can be saved as reusable tools, and community-made PyPlugs install by drag and drop.

- Processing runs in 32-bit floating-point linear color, with color management through OpenColorIO.
- Reading and writing go through OpenImageIO and FFmpeg, covering EXR (including multi-layer files), DPX, TIFF, PNG, H.264 and DNxHR among others.
- Roto, rotopaint, 2D tracking and chroma keying tools are included, along with a curve editor and dope sheet for keyframes.
- OpenFX plugins work, and the binaries bundle the project's own IO, Misc, G'MIC and Arena plugin sets.
- Python handles parameter expressions, callbacks and extra menus and windows in the interface, and Natron can render without its interface for batch jobs or a render farm.

Adobe presents After Effects as motion graphics software for film, TV, video and web design. Natron's own site pitches its node workflow at people coming from Nuke or Fusion, and project files are XML that you can edit by hand.

The current stable release, 2.5.0 from November 2022, ships Intel-only Mac builds for several macOS generations back to OS X 10.6. The site says it runs on Apple silicon through Rosetta 2 and offers an alpha build with native Apple silicon support. Development continues on the 2.6 branch, and the README asks for new developers and maintainers.
