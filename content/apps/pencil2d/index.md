---
name: "Pencil2D"
summary: "Hand-drawn animation with bitmap and vector layers on a straightforward timeline."
category: "Design"
tags: ["animation", "drawing", "2d"]
alternativeTo: ["adobe-animate"]
repository: "https://github.com/pencil2d/pencil"
website: "https://www.pencil2d.org/"
license: "GPL-2.0"
licenseUrl: "https://github.com/pencil2d/pencil/blob/master/LICENSE.TXT"
download: "https://github.com/pencil2d/pencil/releases"
freeDownload: true
homebrew: "pencil2d"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/pencil2d/pencil", "https://github.com/pencil2d/pencil/blob/master/LICENSE.TXT", "https://github.com/pencil2d/pencil/blob/master/README.md", "https://github.com/pencil2d/pencil/releases", "https://www.pencil2d.org/", "https://www.pencil2d.org/download/", "https://www.pencil2d.org/doc/user-manual.html", "https://www.pencil2d.org/doc/faq.html", "https://www.pencil2d.org/2024/10/pencil2d-0.7.0-release.html", "https://www.pencil2d.org/2026/03/pencil2d-0.7.2-release.html", "https://helpx.adobe.com/animate/desktop/kb/maintenance-mode.html"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/pencil2d/pencil/blob/master/app/data/icons/icon.png", "credit": "Pencil2D contributors", "license": "GPL-2.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Pencil2D is for traditional frame-by-frame animation: you draw a pose on one keyframe, move to the next frame, draw again and press Play to watch the sequence. Each layer is either bitmap or vector, so you can sketch rough motion on one layer and ink cleaner lines on another.

- Onion skinning shows the previous and next drawings faintly behind the current one, and you can tint earlier frames red and later ones blue.
- The canvas has no edges. A camera layer sets the frame that gets exported, and since version 0.7.0 you can keyframe its position and rotation, pick an easing curve and see the camera path drawn on the canvas.
- Opacity can be set per keyframe or per layer, and a Fade In or Fade Out command ramps it across three or more selected keyframes.
- Sound layers take WAV and MP3 files for timing dialogue or music against the drawings.

The FAQ lists a few gaps: there is no text tool, no shape tool and no video import. It also recommends turning on autosave in Preferences and saving a new file once early, because unsaved drawings stay in memory.

The download page lists macOS 10.14 or later for the Mac build. The v0.7.2 DMG contains an Intel-only app, and Apple's Gatekeeper reports it as notarized. Pencil2D is released under the GPL-2.0.

Adobe Animate covers the same drawing and timeline work and adds motion and shape tweens, bone rigging and HTML5 Canvas publishing. Adobe has put it in maintenance mode, with bug fixes but no new features. Pencil2D keeps a smaller toolset aimed at hand-drawn frames.
