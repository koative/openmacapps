---
name: Finicky
summary: "Sends each link you open to the browser that your JavaScript rules pick."
category: Utilities
tags:
  - browser
  - links
  - automation
repository: https://github.com/johnste/finicky
website: https://github.com/johnste/finicky
license: MIT
licenseUrl: https://github.com/johnste/finicky/blob/main/LICENSE
download: https://github.com/johnste/finicky/releases
freeDownload: true
homebrew: "finicky"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/johnste/finicky", "https://github.com/johnste/finicky/blob/main/LICENSE", "https://github.com/johnste/finicky/blob/main/README.md", "https://github.com/johnste/finicky/releases", "https://github.com/johnste/finicky/releases/tag/v4.2.2"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/johnste/finicky/blob/4a38875ac347a9599665ffd1fb4755765d4539c2/packages/finicky-ui/public/finicky-icon.png
    credit: uetchy and Finicky contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Finicky decides which browser opens each link you click. You set it as the default browser and write rules in `~/.finicky.js`, so Bluesky links can open in Firefox while Google Meet goes to Chrome.

Rules are plain JavaScript or TypeScript. A rule matches URLs by wildcard, regular expression or your own function and names the browser or app that should handle them. A separate list of rewrite rules changes the link before it opens, for example to force HTTPS, strip tracking parameters or send one domain to a different host. Anything that matches no rule goes to the default browser named in the file.

Starting Finicky by hand opens a window for configuration and troubleshooting. The project wiki documents the full set of options and keeps a page of example rules. Configurations written for Finicky 3 need changes, and the wiki has a migration guide.

Extensions for Chrome and Firefox add an "open with Finicky" item to links, and Option-clicking a link sends it to Finicky directly.

Finicky 4 needs macOS 12 or later. The DMG holds a Universal app, signed with a Developer ID and notarized, and Homebrew can install it as a cask. It is free under the MIT license.
