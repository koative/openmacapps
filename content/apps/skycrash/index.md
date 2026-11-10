---
name: sKYCRASH
summary: "Reads Skyrim crash logs on a Mac and ranks the DLLs, plugins and scripts most likely to have caused the crash."
category: Games
tags:
  - skyrim
  - modding
  - crash-logs
  - troubleshooting
  - crossover
repository: https://github.com/starbudweiser/sKYCRASH
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/sKYCRASH/blob/main/LICENSE
download: https://github.com/starbudweiser/sKYCRASH/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "Analyzed crash logs with the log list and ranked suspects."
    source: https://github.com/starbudweiser/sKYCRASH/blob/main/docs/screenshots/01_home.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/sKYCRASH
  - https://github.com/starbudweiser/sKYCRASH/blob/main/LICENSE
  - https://github.com/starbudweiser/sKYCRASH/releases
  - https://raw.githubusercontent.com/starbudweiser/sKYCRASH/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/sKYCRASH/blob/main/docs/screenshots/01_home.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/sKYCRASH/releases/download/v2.0.0/sKYCRASH_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

sKYCRASH reads the crash reports Skyrim Special Edition leaves behind and points to the files most likely to blame. It parses Crash Logger SSE and .NET Script Framework reports, plus SKSE and Papyrus logs, and compares them with the installation in your CrossOver bottle.

What it checks:

- a quick scan of every configured log folder, the SKSE folder included;
- a rule-based audit that ranks suspect DLLs, plugins and scripts by category, such as memory, meshes or animations;
- an installation sheet with the SkyrimSE.exe version, the matching Address Library, SKSE DLLs, plugins.txt and the 254 full-plugin limit;
- your last `.ess` save, to list plugins added or removed since, a common cause of crashes on load.

A crash timeline flags DLLs that appeared just before a new kind of crash. Press Command-E to export one diagnostic file you can share on a forum or Discord, and purge old reports so the next crash is easy to find.

An AI assistant is optional and off unless you set it up. It runs locally through Ollama or uses Google Gemini with your own key, and its tips are checked against your real installation. Releases are arm64 builds for macOS 15 or later, notarized, in four languages.
