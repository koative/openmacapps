---
name: "MeshLab"
summary: "Cleans, inspects, renders and converts large triangle meshes from 3D scans."
category: "Design"
tags: ["3d-modeling", "meshes", "scanning"]
repository: "https://github.com/cnr-isti-vclab/meshlab"
website: "https://www.meshlab.net/"
license: "GPL-3.0"
licenseUrl: "https://github.com/cnr-isti-vclab/meshlab/blob/main/LICENSE.txt"
download: "https://github.com/cnr-isti-vclab/meshlab/releases"
freeDownload: true
homebrew: "meshlab"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/cnr-isti-vclab/meshlab", "https://github.com/cnr-isti-vclab/meshlab/blob/main/LICENSE.txt", "https://github.com/cnr-isti-vclab/meshlab/blob/main/README.md", "https://github.com/cnr-isti-vclab/meshlab/releases", "https://www.meshlab.net/", "https://raw.githubusercontent.com/cnr-isti-vclab/meshlab/main/README.md", "https://github.com/cnr-isti-vclab/meshlab/releases/tag/MeshLab-2025.07"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/cnr-isti-vclab/meshlab/blob/main/src/meshlab/images/meshlabLogo_256x256.png", "credit": "MeshLab contributors", "license": "GPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

MeshLab cleans up and converts 3D triangle meshes, the kind of large, messy models that come out of 3D scanners. You load a scan, run filters to repair or reconstruct it, inspect the result in the viewer and export it in a format the next tool can read.

- Cleaning and healing tools fix broken geometry in raw scan output.
- Screened Poisson surface reconstruction builds a surface from point data.
- A Global Registration plugin aligns scans of one object.
- Exact mesh booleans combine or subtract shapes.
- Texturing, rendering and measuring tools let you check a model before passing it on.

Most of the processing comes from VCGlib, a C++ mesh library from the Visual Computing Lab at ISTI-CNR in Italy. MeshLab is the interactive front end for trying its algorithms. To script the same work, the lab publishes PyMeshLab, a Python library that took over from the old meshlabserver command-line tool.

Version 2025.07 added 3MF files and native builds for Apple silicon. Earlier releases brought glTF, GLB and E57 support. MeshLab also has features for preparing models for 3D printing.

Each release has two Mac downloads, one for Apple silicon and one for Intel. A second set, marked with a "d" in the file name, stores data in double precision. The Apple silicon app is signed with a Developer ID and notarized. MeshLab is free under the GPL and also runs on Windows and Linux.
