---
name: "ParaView"
summary: "Turns simulation results and other scientific datasets into interactive 3D views built from chains of readers and filters."
category: "Education"
tags: ["science", "data-visualization", "3d"]
repository: "https://github.com/Kitware/ParaView"
website: "https://www.paraview.org/"
license: "BSD-3-Clause"
licenseUrl: "https://github.com/Kitware/ParaView/blob/master/Copyright.txt"
download: "https://www.paraview.org/download/"
freeDownload: true
homebrew: "paraview"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Kitware/ParaView", "https://github.com/Kitware/ParaView/blob/master/Copyright.txt", "https://github.com/Kitware/ParaView/blob/master/README.md", "https://www.paraview.org/download/", "https://www.paraview.org/desktop/", "https://raw.githubusercontent.com/Kitware/ParaView/master/README.md", "https://www.paraview.org/features/", "https://www.paraview.org/scripting/", "https://www.paraview.org/license/", "https://www.paraview.org/files/v6.2/"]
screenshots: []
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Kitware/ParaView/blob/master/Clients/ParaView/pvIcon.iconset/icon_256x256.png", "credit": "ParaView contributors", "license": "BSD-3-Clause; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

ParaView loads simulation output and other scientific data, then builds a picture of it from a chain of filters. You open a dataset, add a slice, contour or threshold, and the 3D view updates as each step joins the pipeline.

The desktop app reads the formats that engineering and science codes write, and it scripts what you do:

- Readers cover OpenFOAM, Ansys Fluent, EnSight, Exodus, CGNS, NetCDF, LS-DYNA, Tecplot and XDMF, and reader plugins add more.
- More than 200 filters include clip, glyph, stream tracer, probe, plot over time and volume rendering.
- Python Tracing records your actions in the window as a Python script you can rerun on the next dataset.
- The same window can use remote HPC resources as well as the Mac itself, so a cluster does the heavy work while you steer it.

Those scripts also run with no window at all. Batch jobs use them, and so does in situ analysis through Catalyst while a simulation is still running.

Two Mac disk images are offered. The Apple silicon build requires macOS 11, the Intel build macOS 10.15, and both bundle Python 3.12 and MPI. Each comes in a signed and an unsigned variant, and the Apple silicon image is close to 500 MB. ParaView is under the BSD 3-Clause license, and the third-party licenses shipped with the binaries are permissive too. Kitware, whose staff develop it alongside outside contributors, sells support and training and helps tailor it to a team's tools.
