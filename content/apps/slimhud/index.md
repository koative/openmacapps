---
name: SlimHUD
summary: Swaps the macOS volume, brightness and keyboard backlight overlays for a slim, configurable bar.
category: Utilities
tags:
  - display
  - volume
  - customization
repository: https://github.com/AlexPerathoner/SlimHUD
website: https://alexperathoner.github.io/SlimHUD
license: GPL-3.0
licenseUrl: https://github.com/AlexPerathoner/SlimHUD/blob/develop/LICENSE.md
download: https://github.com/AlexPerathoner/SlimHUD/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/AlexPerathoner/SlimHUD
  - https://github.com/AlexPerathoner/SlimHUD/blob/develop/LICENSE.md
  - https://github.com/AlexPerathoner/SlimHUD/blob/develop/README.md
  - https://github.com/AlexPerathoner/SlimHUD/releases
  - https://raw.githubusercontent.com/AlexPerathoner/SlimHUD/develop/README.md
  - https://alexperathoner.github.io/SlimHUD
  - https://github.com/AlexPerathoner/SlimHUD/releases/tag/v1.5.3
assets:
  - path: ./assets/icon.png
    source: https://github.com/AlexPerathoner/SlimHUD/blob/48a5ae387497c40722b997b994d7aec55b7832c5/SlimHUD/Assets.xcassets/AppIcon.appiconset/Group%202a-256.png
    credit: SlimHUD contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/AlexPerathoner/SlimHUD/blob/48a5ae387497c40722b997b994d7aec55b7832c5/Screens/settings/settings-style.png
    credit: SlimHUD contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: SlimHUD settings showing options for the appearance of system indicators.
    source: https://github.com/AlexPerathoner/SlimHUD/blob/48a5ae387497c40722b997b994d7aec55b7832c5/Screens/settings/settings-style.png
    credit: SlimHUD contributors
icon: ./assets/icon.png
---

SlimHUD replaces the overlay macOS shows when you change the volume, display brightness or keyboard backlight with a thin bar and a small icon beneath it. Every option sits in a settings window, which you open by launching SlimHUD a second time while it is already running.

- Each bar has its own colour, with a separate colour for muted volume, and on macOS 10.14 and later the icons can be coloured too.
- The bar can sit on the left, right, top or bottom edge of the screen, at a size you set.
- Several animation styles control how it appears and disappears, among them fade, grow, shrink and side variants, and an optional shadow takes away the flat look.
- A continuous-check option shows the bar when you drag a volume or brightness slider, which the developer recommends on Macs with a Touch Bar.

You can install it with `brew install slimhud` or from GitHub, where version 1.5.3 is a ZIP holding a Universal app for Apple silicon and Intel that declares macOS 10.13 as its minimum. Updates arrive through Sparkle, with the binaries hosted on GitHub.

There is a launch-at-login switch in settings. To get the standard system overlays back, turn it off or remove SlimHUD from the Applications folder. The developer credits cleanHUD and ProgressHUD-Mac with inspiring the project.
