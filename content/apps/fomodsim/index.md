---
name: fOMODSIM
summary: "Runs a mod's FOMOD installer on a Mac and copies the files your choices select, without a mod manager."
category: Games
tags:
  - modding
  - fomod
  - skyrim
  - installers
repository: https://github.com/starbudweiser/fOMOD_SIM
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/fOMOD_SIM/blob/main/LICENSE
download: https://github.com/starbudweiser/fOMOD_SIM/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "An installer step with an option and its image preview."
    source: https://github.com/starbudweiser/fOMOD_SIM/blob/main/docs/screenshots/02_steps.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/fOMOD_SIM
  - https://github.com/starbudweiser/fOMOD_SIM/blob/main/LICENSE
  - https://github.com/starbudweiser/fOMOD_SIM/releases
  - https://raw.githubusercontent.com/starbudweiser/fOMOD_SIM/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/fOMOD_SIM/blob/main/docs/screenshots/02_steps.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/fOMOD_SIM/releases/download/v2.0.0/fOMODSIM_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

fOMODSIM opens a mod archive, walks you through its FOMOD installer and copies the resulting files to a staging folder. FOMOD installers normally run only inside Mod Organizer 2 or Vortex, which are awkward to use on a Mac.

Drop a .zip, .7z or .rar archive, or an unpacked folder, on the window. Each step shows its options with their descriptions and images, single and multiple choices, and the recommended options already selected. The app evaluates the installer's conditions and flags, required files and conditional installs the way MO2 does.

At the end, the files your choices select are copied to a staging folder you pick, ready to move into a game or a mod manager. You can also give it a simulated Skyrim Data folder to test conditions that depend on files being present. A built-in demo based on a CBBE installer lets you try it without any archive.

Mod authors can test their own installers before uploading. Nothing is installed into the game. The behavior is modeled on Mod Organizer 2, and the app is not affiliated with its authors. It is written in Swift, ships as an arm64 build for macOS 15 or later, is notarized, and has an interface in English, French, Spanish and Italian.
