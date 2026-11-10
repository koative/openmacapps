---
name: kEYKODES
summary: "Shows the DirectInput and ImGui codes of any key you press, for Skyrim .ini files and mod menus."
category: Games
tags:
  - skyrim
  - modding
  - keyboard
  - key-codes
repository: https://github.com/starbudweiser/kEYKODES
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/kEYKODES/blob/main/LICENSE
download: https://github.com/starbudweiser/kEYKODES/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "The space bar pressed, showing 0x39, decimal 57 and ImGuiKey 524."
    source: https://github.com/starbudweiser/kEYKODES/blob/main/docs/screenshots/02_key.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/kEYKODES
  - https://github.com/starbudweiser/kEYKODES/blob/main/LICENSE
  - https://github.com/starbudweiser/kEYKODES/releases
  - https://raw.githubusercontent.com/starbudweiser/kEYKODES/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/kEYKODES/blob/main/docs/screenshots/02_key.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/kEYKODES/releases/download/v2.0.0/kEYKODES_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

kEYKODES shows the code Skyrim expects for a key as soon as you press it. Many mods ask for DirectInput scancodes in their .ini files, or ImGui key values in their menus, and finding them on a Mac keyboard is guesswork.

Press a key and the window displays:

- the short .ini form, such as `0x39`, and the decimal code, such as `57`;
- the ImGuiKey value;
- modifier chords with Control, Shift, Alt and the rest;
- mouse buttons and the wheel, which some mods bind too.

The code follows the key's physical position, as on Windows, so AZERTY, QWERTZ, ISO and ANSI keyboards all give the right value. Pressing the key labeled A on a French keyboard gives the code of the Q position, which is what the game reads.

The app was rewritten in Swift, replacing an earlier Python build. It ships as an arm64 build for macOS 15 or later, notarized. A daily check offers new releases and opens the Nexus page, without downloading anything itself. The interface is in English, French, Spanish and Italian.
