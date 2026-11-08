---
name: TetherShot
summary: Captures the screen of a connected iPhone or Android phone over USB or Wi-Fi, saving it to a folder and the clipboard.
category: Utilities
tags:
- screenshots
- menu-bar
- android
repository: https://github.com/apoorvdarshan/TetherShot
website: https://tethershot.apoorvdarshan.com
license: MIT
licenseUrl: https://github.com/apoorvdarshan/TetherShot/blob/main/LICENSE
download: https://github.com/apoorvdarshan/TetherShot/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/apoorvdarshan/TetherShot
- https://github.com/apoorvdarshan/TetherShot/blob/main/LICENSE
- https://github.com/apoorvdarshan/TetherShot/releases
- https://tethershot.apoorvdarshan.com
- https://raw.githubusercontent.com/apoorvdarshan/TetherShot/main/README.md
- https://github.com/apoorvdarshan/TetherShot/releases/tag/v1.0.22
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/apoorvdarshan/TetherShot/main/Resources/AppIcon.png
  credit: Apoorv Darshan
  license: MIT; upstream project asset, trademarks retained
---

TetherShot captures the screen of a phone connected to your Mac and saves it as a PNG. You pick the phone in its window or menu bar menu, or press Shift-Command-7 anywhere, which by default captures every connected device at once. Each image lands in `~/Pictures/TetherShot` or a folder you choose, optionally in a subfolder per device, and is also copied to the clipboard unless you turn that off.

How a phone is reached depends on the platform:

- A trusted iPhone on a cable is captured at full resolution through AVFoundation, with no setup.
- Wi-Fi capture of an iPhone runs through a RemoteXPC tunnel from pymobiledevice3, which a one-time `tethershot setup-wifi` command installs as a root daemon with admin approval. The iPhone also needs Developer Mode and one USB connection during setup.
- Android phones are found through ADB and captured over USB or wireless debugging, which needs Android Platform Tools and debugging turned on.
- The same phone seen over USB and Wi-Fi is merged into one device, and phones you hide stay hidden.

The first capture over a cable triggers a Camera permission request, because the iPhone's screen arrives as a camera-class source; the Mac's own camera is not used. An opt-in setting pastes a hotkey capture into the field you were typing in, which needs Accessibility access.

TetherShot needs macOS 14 or later. The 1.0.22 disk image and its Universal app are notarized, and the app can update itself in place. The developer says there is no account, no analytics and no server, and captures stay on the Mac.
