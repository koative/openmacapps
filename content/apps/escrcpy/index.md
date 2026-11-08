---
name: "Escrcpy"
summary: "A graphical front end for scrcpy that mirrors and controls Android devices from the Mac."
category: "Utilities"
tags:
  - android
  - screen-mirroring
  - cross-platform
repository: https://github.com/viarotel-org/escrcpy
website: https://viarotel.eu.org/
license: "Apache-2.0"
licenseUrl: https://github.com/viarotel-org/escrcpy/blob/main/LICENSE
download: https://github.com/viarotel-org/escrcpy/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/viarotel-org/escrcpy
  - https://github.com/viarotel-org/escrcpy/blob/main/LICENSE
  - https://github.com/viarotel-org/escrcpy/releases
  - https://raw.githubusercontent.com/viarotel-org/escrcpy/main/README.md
  - https://github.com/viarotel-org/escrcpy/releases/tag/v3.3.1
  - https://viarotel.eu.org/reference/gnirehtet/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/viarotel-org/escrcpy/main/desktop/electron/resources/build/logo.png
    credit: "viarotel-org and Escrcpy contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Escrcpy puts scrcpy behind a desktop window, so you can watch and drive an Android phone or tablet from the Mac. The device's screen sits in an embedded mirror that follows its resolution and rotation, with a sidebar of controls beside it.

- Several devices can share one window, with input broadcast to all of them and screenshots or APK installs run as a batch.
- The sidebar holds rotation, screenshots, an app list, a file browser, a terminal and automation; it can be dragged and its controls reordered.
- Keyboard mappings turn keys into touches, joystick moves, swipes and scrolls on the mirror.
- Automation scripts are built step by step, can recognise images on screen and run across several devices.
- Wireless ADB finds devices on the local network, and Gnirehtet reverse tethering shares the Mac's connection with the phone.

A Copilot panel adds an AI assistant that controls the device through the MCP protocol and can talk to more than one model. Since version 3.3.1 it needs your own AI provider, with its API key, endpoint and model settings. Global hotkeys can be set for common device actions.

Escrcpy is an Electron app. Releases include DMG and ZIP builds for Apple silicon and Intel, and the project keeps its own Homebrew tap. The Apple silicon build of version 3.3.1 lists macOS 12 as its minimum.

The README says some advanced features come from EscrcpyX, a private extension offered on a paid basis, while the open-source app sticks to the core integration. Version 3.3.1 unlocks every existing feature at no charge, and a new paid licensing system is planned for 4.0 and later. The developer also says support is limited and updates come irregularly.
