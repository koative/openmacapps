---
name: "Rilmazafone"
summary: "Lays out a Mac app's DMG installer on a Finder-style canvas and runs the signing and release steps from one saved plan."
category: "Developer tools"
tags: ["disk-images", "code-signing", "publishing", "developer-utilities"]
repository: "https://github.com/kageroumado/rilmazafone"
website: "https://github.com/kageroumado/rilmazafone"
license: "MIT"
licenseUrl: "https://github.com/kageroumado/rilmazafone/blob/main/LICENSE"
download: "https://github.com/kageroumado/rilmazafone/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/kageroumado/rilmazafone", "https://github.com/kageroumado/rilmazafone/blob/main/LICENSE", "https://github.com/kageroumado/rilmazafone/releases", "https://apps.apple.com/app/apple-store/id6790960011", "https://github.com/kageroumado/rilmazafone/blob/main/README.md", "https://github.com/kageroumado/rilmazafone/blob/main/REFERENCE.md", "https://kagerou.glass/rilmazafone/", "https://github.com/kageroumado/rilmazafone/releases/tag/v2.11.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/kageroumado/rilmazafone/main/.github/rilmazafone-icon.png", "credit": "kageroumado and Rilmazafone contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Rilmazafone gives Mac developers a canvas shaped like a Finder window, where you place the app icon, extra files and the Applications shortcut for a DMG installer. Guides snap icons to centers, thirds and neighboring items, and the finished image is built and signed with an identity from your keychain.

- A background can be a picture, a gradient or a flat color, adjusted for color and finished with vignette or bloom effects.
- Variable blur uses linear or radial masks and updates live on the canvas.
- Styled text and SF Symbols can be drawn into the background.
- Frosted panels behind each icon, with shadow, bevel and blend modes, keep labels legible.
- Output formats are UDZO, UDBZ, LZFSE or LZMA, on HFS+ or APFS.

Designs save as `.dmgtemplate` files, and release settings as `.releaseplan` files. A release plan takes the app from an Xcode archive through signing, notarization, packaging and verification, then publishes a GitHub release and updates a Homebrew cask. The same plan runs from the app or from the command line.

Rilmazafone needs macOS 26 Tahoe, and Xcode for the release pipeline. The GitHub DMG holds an Apple silicon app, signed with a Developer ID and notarized. Homebrew users can install it from the developer's own tap.

Two editions come from one codebase. The free GitHub build has the CLI, the release pipeline, Finder thumbnails and a live glass preview built on private macOS APIs. The paid Mac App Store build is sandboxed and holds the designer only, because the sandbox cannot run `xcodebuild`, `codesign` or `notarytool`.
