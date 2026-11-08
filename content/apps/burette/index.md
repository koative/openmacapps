---
name: "Burette"
summary: "Quick Look previews and a desktop workspace for molecular structure files, built around the Mol* 3D viewer."
category: "Education"
tags:
  - science
  - quick-look
  - previews
  - 3d
repository: https://github.com/SergeiNikolenko/Burette
website: https://burette-landing.vercel.app
license: "MIT"
licenseUrl: https://github.com/SergeiNikolenko/Burette/blob/main/LICENSE
download: https://github.com/SergeiNikolenko/Burette/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/SergeiNikolenko/Burette
  - https://github.com/SergeiNikolenko/Burette/blob/main/LICENSE
  - https://github.com/SergeiNikolenko/Burette/releases
  - https://burette-landing.vercel.app
  - https://raw.githubusercontent.com/SergeiNikolenko/Burette/main/README.md
  - https://raw.githubusercontent.com/SergeiNikolenko/homebrew-burette/main/Casks/burette.rb
  - https://github.com/SergeiNikolenko/Burette/releases/tag/v2026.10.38
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/SergeiNikolenko/Burette/main/apps/desktop/src-tauri/icons/icon.png
    credit: "Burette contributors"
    license: "MIT repository asset"
---

Burette opens molecular structure files in Finder's Quick Look: select a PDB, CIF, SDF, MOL2 or XYZ file, press Space, and rotate and zoom the structure in an interactive 3D view drawn by Mol*. Open the app itself and the same files load into a workspace with tabs, a project sidebar and a command palette on Command-P.

- Compound collections in SDF, SMILES, CSV or TSV open as an RDKit grid you can search, sort and filter with SMARTS patterns.
- The bundled Ketcher editor sketches small molecules and sends them to the 3D viewer or a grid. Macromolecule editing is not enabled.
- Trajectory files such as XTC, DCD and TRR play back against their topology with frame controls.
- Mass spectra in formats like MGF and mzML open in a separate spectrum viewer.
- A Codex plugin lets an agent open structures, focus a ligand or hide waters in the running workspace.

Quantum chemistry outputs such as CUBE, LOG and VASP are converted to PDB and shown in Mol*, with a local `xyzrender` install as an optional second renderer. A VESTA handoff appears only when VESTA is installed. If previews fail to show, the command palette has a Reset Quick Look action.

Current release bundles need an Apple silicon Mac with macOS 12 or later. Public downloads are ad-hoc signed, so you may have to allow Burette in Privacy & Security settings before it opens the first time. Burette installs from a ZIP or DMG on GitHub or through the author's Homebrew tap. The repository also holds an iPhone viewer you build from source yourself.
