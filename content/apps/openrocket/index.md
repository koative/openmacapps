---
name: "OpenRocket"
summary: "Designs model rockets from components and motors and simulates their flight before you build and launch them."
category: "Education"
tags: ["simulation", "engineering", "rocketry"]
repository: "https://github.com/openrocket/openrocket"
website: "https://openrocket.info/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/openrocket/openrocket/blob/unstable/LICENSE.TXT"
download: "https://github.com/openrocket/openrocket/releases"
freeDownload: true
homebrew: "openrocket"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/openrocket/openrocket", "https://github.com/openrocket/openrocket/blob/unstable/LICENSE.TXT", "https://github.com/openrocket/openrocket/blob/unstable/README.md", "https://github.com/openrocket/openrocket/releases", "https://openrocket.info/", "https://openrocket.info/downloads.html", "https://raw.githubusercontent.com/openrocket/openrocket/unstable/README.md", "https://raw.githubusercontent.com/openrocket/openrocket/unstable/LICENSE.TXT", "https://github.com/openrocket/openrocket/releases/tag/release-24.12"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/openrocket/openrocket/blob/unstable/docs/source/img/openrocket_logo_256.png", "credit": "OpenRocket contributors", "license": "GPL-3.0-or-later; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

OpenRocket lets you put a model rocket together on screen, from nose cone to fins, choose a motor and fly it in simulation before you cut a single part. Stability, center of pressure, center of gravity and predicted peak altitude update while you edit, so each change shows its effect at once.

- Flights are simulated with six degrees of freedom, and wind can be set separately for different altitudes.
- Motors come from a ThrustCurve database that you can search and filter for ones that fit the design.
- Rockets can have several stages, clustered motors and dual deployment events.
- An optimizer adjusts chosen parameters toward a goal you set.
- Designs export to RockSim and RASAero II. Single parts export as OBJ files for a 3D printer or SVG files for a laser cutter, and drawings as PDF.

Parts come from a large catalog of components and materials, or you define your own and save them for later. Surface finish and material density both feed the model. Simulation results can be plotted and exported.

The project says OpenRocket sends no telemetry and never uploads designs. It goes online for things you ask for, such as update checks, motor database updates and bug reports, and internet access can be switched off in preferences.

The app is written in Java, and the macOS installers bundle the Java runtime it needs. Apple silicon and Intel Macs get separate DMGs. The Apple silicon build of 24.12 requires macOS 10.15 or later and is notarized.
