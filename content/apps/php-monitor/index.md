---
name: 'PHP Monitor'
summary: 'Shows the active PHP version in the menu bar and switches it, with Homebrew and Laravel Valet management alongside.'
category: 'Developer tools'
tags:
  - menu-bar
  - homebrew
  - development
repository: https://github.com/nicoverbruggen/phpmon
website: https://phpmon.app/
license: MIT
licenseUrl: https://github.com/nicoverbruggen/phpmon/blob/main/LICENSE
download: https://github.com/nicoverbruggen/phpmon/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/nicoverbruggen/phpmon
  - https://github.com/nicoverbruggen/phpmon/blob/main/LICENSE
  - https://github.com/nicoverbruggen/phpmon/releases
  - https://phpmon.app/
  - https://raw.githubusercontent.com/nicoverbruggen/phpmon/main/README.md
  - https://github.com/nicoverbruggen/phpmon/releases/tag/v26.09
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nicoverbruggen/phpmon/main/assets/icon-2025.svg
    credit: 'Nico Verbruggen (PHP Monitor)'
    license: 'MIT repository asset; PHP Monitor name and icon retained by the project'
---

PHP Monitor puts the linked PHP version in your menu bar and lets you switch to another installed version from the same menu. That switch is global, so the chosen PHP becomes the default for the whole system. With Laravel Valet you can also pin a version to a single site through Valet's site isolation.

The menu also reaches the other routine work around a local PHP setup:

- A PHP Version Manager installs and upgrades PHP versions, including older ones from Shivam Mathur's Homebrew tap.
- A PHP Extension Manager installs extensions from the matching tap.
- Configuration files open from the menu, and services restart from it.
- You can add domains as links, isolate sites and manage Valet's services.
- First Aid repairs common PHP and Homebrew problems.

On a fresh Mac, the first launch can guide you through Apple's Command Line Tools, Homebrew, your PATH, PHP, Composer and, if you want it, Valet. Along the way, macOS may still put up an installer or ask for administrator approval. PHP Monitor works with Valet 2 through 4, though older Valet versions lack features such as site isolation. Non-standard Homebrew and Valet setups are not supported.

An Alfred workflow and a Raycast extension can talk to the app once you allow third-party integrations, which are off by default. PHP Monitor needs macOS 13.5 or later and an administrator account for setup and some tasks, such as generating certificates. The GitHub download is a ZIP holding a Universal app, signed with a Developer ID and notarized, and a Homebrew cask is available from the developer's own tap.
