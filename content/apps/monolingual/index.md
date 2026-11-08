---
name: Monolingual
summary: Removes language resources you do not need from installed software.
category: Utilities
tags:
  - storage
  - languages
  - maintenance
  - disk-cleaner
repository: https://github.com/IngmarStein/Monolingual
website: https://ingmarstein.github.io/Monolingual
license: GPL-3.0
licenseUrl: https://github.com/IngmarStein/Monolingual/blob/main/LICENSE.txt
download: https://github.com/IngmarStein/Monolingual/releases
freeDownload: true
homebrew: "monolingual"
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/IngmarStein/Monolingual
  - https://github.com/IngmarStein/Monolingual/blob/main/LICENSE.txt
  - https://github.com/IngmarStein/Monolingual/blob/main/README.markdown
  - https://github.com/IngmarStein/Monolingual/releases
  - https://ingmarstein.github.io/Monolingual/
  - https://ingmarstein.github.io/Monolingual/faq.html
  - https://github.com/IngmarStein/Monolingual/releases/tag/v2.0.4
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://github.com/IngmarStein/Monolingual/tree/1d0e320998215e1ff8bbca5668981a8eb0e9c983/Resources/AppIcon.icon
    credit: fingers-piano and Monolingual contributors
    license: GPL-3.0; upstream project asset, trademarks retained
  - path: ./assets/screenshot.png
    source: https://github.com/IngmarStein/Monolingual/blob/1d0e320998215e1ff8bbca5668981a8eb0e9c983/Resources/README.rtfd/Monolingual-2.0.2-en.png
    credit: Monolingual contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: Monolingual main window listing languages available for removal.
    source: https://github.com/IngmarStein/Monolingual/blob/1d0e320998215e1ff8bbca5668981a8eb0e9c983/Resources/README.rtfd/Monolingual-2.0.2-en.png
    credit: Monolingual contributors
---

Monolingual deletes the localization files for languages you never use, so apps and macOS stop carrying translations you will not read. The project puts the space you get back at several hundred megabytes. By default it marks for removal every language that is not in your list under Language & Region, and you can change that selection.

Deleting files from installed apps has consequences. Some language packs are subsets of others, and the FAQ warns against removing the English files: taking out "English" while keeping "English (United States)" leaves an incomplete system. Newer Adobe apps check for their own files and ask to be reinstalled after a run, so the FAQ suggests excluding them in Monolingual's preferences.

The current release requires macOS 27 on Apple silicon. The 2.0.4 disk image is notarized and holds an Apple silicon app. Older releases remain on the site for systems back to Mac OS X 10.4, including 1.8.2 for macOS 10.13 to 10.15.

The app can also strip unused processor architectures from executables, with an option to remove debug information at the same time. That work is done by a privileged helper, registered as a launch daemon, that talks to the app over XPC. It runs only after an administrator approves it under Login Items & Extensions in System Settings. Version 2.0.4 is a security release that fixed how the helper followed symbolic links.
