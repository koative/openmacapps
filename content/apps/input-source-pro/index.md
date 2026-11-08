---
name: Input Source Pro
summary: Switches keyboard input sources automatically for different apps and websites.
category: Utilities
tags:
  - keyboard
  - languages
  - input
  - keyboard-customization
repository: https://github.com/runjuu/InputSourcePro
website: https://inputsource.pro
license: GPL-3.0
licenseUrl: https://github.com/runjuu/InputSourcePro/blob/main/LICENSE
download: https://github.com/runjuu/InputSourcePro/releases
freeDownload: true
homebrew: "input-source-pro"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/runjuu/InputSourcePro
  - https://github.com/runjuu/InputSourcePro/blob/main/LICENSE
  - https://github.com/runjuu/InputSourcePro/blob/main/README.md
  - https://github.com/runjuu/InputSourcePro/releases
  - https://raw.githubusercontent.com/runjuu/InputSourcePro/main/README.md
  - https://inputsource.pro
assets:
  - path: ./assets/icon.png
    source: https://github.com/runjuu/InputSourcePro/blob/11e86641146b557c9725c88812fe6aa8bea2bb31/Input%20Source%20Pro/Resources/Assets.xcassets/AppIcon.appiconset/256.png
    credit: Input Source Pro contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Input Source Pro changes your keyboard input source for you as you move between apps. Give each app a default, say a Japanese input method for a chat app and an English layout for your code editor, and the switch happens when that app comes to the front, including Spotlight-style launchers.

Browsers can go further and switch by website. Safari, Chrome, Arc, Edge, Firefox, Brave, Vivaldi, Opera, Zen and Dia are among those supported, so a site you write in another language gets its own input source.

- An on-screen indicator shows the current input source. You choose when it appears: when you switch sources, when you switch apps, or when you hold down the mouse button.
- Force English Punctuation, set per app, types plain ASCII symbols such as brackets, quotes and semicolons where an input method would insert full-width ones.
- The function keys can act as F1 to F12 in some apps and as media keys in others, with apps you leave alone following the system setting.
- Shortcuts switch sources with a key combination, or with a single or double tap on modifiers such as Shift or Command.

Input Source Pro is free and needs macOS 12 or later. Homebrew installs it with `brew install --cask input-source-pro`, and the DMG on GitHub holds a notarized Universal app.
