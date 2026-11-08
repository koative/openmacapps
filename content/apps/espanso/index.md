---
name: "espanso"
summary: "A cross-platform text expander that turns typed triggers into snippets, dates, forms or script output."
category: "Productivity"
tags:
  - snippets
  - keyboard
  - automation
  - cross-platform
alternativeTo:
  - textexpander
repository: https://github.com/espanso/espanso
website: https://espanso.org
license: "GPL-3.0"
licenseUrl: https://github.com/espanso/espanso/blob/dev/LICENSE
download: https://espanso.org/install/
freeDownload: true
homebrew: "espanso"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/espanso/espanso
  - https://github.com/espanso/espanso/blob/dev/LICENSE
  - https://espanso.org/install/
  - https://github.com/espanso/espanso/releases
  - https://formulae.brew.sh/cask/espanso
  - https://raw.githubusercontent.com/espanso/espanso/dev/README.md
  - https://espanso.org/docs/install/mac/
  - https://github.com/espanso/espanso/releases/tag/v2.4.1
  - https://textexpander.com/
  - https://espanso.org/
  - https://espanso.org/docs/configuration/app-specific-configurations/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/espanso/espanso/dev/espanso/src/res/macos/icon.icns
    credit: "espanso contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

espanso replaces short keywords with longer text while you type. You define a trigger such as `:addr` in a YAML file, and typing it in almost any app swaps in the full address, a code snippet or an emoji.

- Date variables insert today's date or one in the past or future.
- Shell commands and scripts can run when a trigger fires, and their output is typed in.
- Forms ask for values before expanding and can hand them to a script.
- Regex triggers match patterns, and app-specific configurations can switch matches on only in certain apps.

A search bar, opened with a shortcut, finds a match when you forget its trigger. Packages from the espanso hub add ready-made sets, for example maths notation or accented letters, and the built-in package manager installs them. Images can be expanded as well as text.

On the Mac, espanso supports macOS 10.13 or later. The DMG holds a Universal app for Apple silicon and Intel, notarized, and Homebrew can install it too. It is free under the GPL 3.0 and also runs on Windows and Linux. The project describes it as fully local with no tracking.

TextExpander adds Chrome, iPhone and iPad versions and is marketed to businesses as well as individuals. espanso has no settings window for matches yet, and the project says a GUI is planned. You keep every snippet in plain files and edit them yourself.
