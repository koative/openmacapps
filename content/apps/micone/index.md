---
name: MiCONE
summary: "Turns any image into a macOS app or folder icon (.icns) on the dark plate used by recent macOS icons."
category: Design
tags:
  - icons
  - icns
  - image-converter
  - command-line
repository: https://github.com/starbudweiser/MiCONE
website: https://github.com/starbudweiser/MiCONE
license: MIT
licenseUrl: https://github.com/starbudweiser/MiCONE/blob/main/LICENSE
download: https://github.com/starbudweiser/MiCONE/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/MiCONE
  - https://github.com/starbudweiser/MiCONE/blob/main/LICENSE
  - https://github.com/starbudweiser/MiCONE/releases
  - https://raw.githubusercontent.com/starbudweiser/MiCONE/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/MiCONE/releases/download/v2.0.0/MiCONE-2.0.0.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

MiCONE converts an image into a macOS icon set. You drop a PNG or another image, choose between an app icon in the rounded square shape or a Finder-style folder icon with an engraved motif, and export an `.icns` file.

Recent versions of macOS draw a white plate behind transparent or non-square icons. MiCONE places the artwork on the dark background those icons use, so the system adds nothing. Sliders set the background, size, offset, glass and shadow.

Background removal is automatic. It uses a flood fill for images that already sit on a plate and Apple's Vision framework for the rest, all on your Mac. Apply to a folder sets the result straight on a folder in the Finder.

Generating an icon from a text prompt is optional. It goes through Pollinations, Hugging Face, Gemini or OpenAI, and API keys stay in the Keychain. There is also a command line, for example `MiCONE --cli image.png --png`, for batches.

The app checks GitHub once a day and verifies the SHA-256, bundle identifier and Developer ID signature before replacing itself, never while an image is loaded. Releases are arm64 builds for macOS 14 or later, notarized, in four languages.
