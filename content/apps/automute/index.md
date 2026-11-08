---
name: "AutoMute"
summary: "Mutes your Mac when headphones disconnect, the Mac sleeps, or the screen locks."
category: "Utilities"
tags:
  - audio
  - volume
  - menu-bar
repository: https://github.com/yonilevy/automute
website: https://github.com/yonilevy/automute
license: "MIT"
licenseUrl: https://github.com/yonilevy/automute/blob/master/LICENSE
download: https://apps.apple.com/app/id1118136179
freeDownload: false
maintenance: "unmaintained"
maintenanceNote: "No release or code change since March 2024."
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/yonilevy/automute
  - https://github.com/yonilevy/automute/blob/master/LICENSE
  - https://apps.apple.com/app/id1118136179
  - https://raw.githubusercontent.com/yonilevy/automute/master/README.md
  - https://apps.apple.com/us/app/automute/id1118136179
  - https://github.com/yonilevy/automute/releases
assets:
  - path: ./assets/icon.png
    source: https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/20/f9/05/20f905a5-65b4-b8ab-504c-292a937accaa/AppIcon-0-0-85-220-0-0-4-0-2x.png/512x512bb.png
    credit: "Yoni Levy"
    license: "Official AutoMute App Store icon; MIT code license, trademarks retained"
---

AutoMute turns the Mac's sound off at the moments when audio could suddenly come out of the speakers. You start it once and leave it in the menu bar. From then on it mutes the Mac when:

- headphones are unplugged,
- Bluetooth headphones disconnect,
- the Mac goes to sleep or powers off,
- the Mac locks or starts the screen saver.

AutoMute is sold on the Mac App Store and needs macOS 10.13 or later. The GitHub repository holds its Xcode workspace under the MIT license; the README says it can be opened in Xcode to build the app. No ready-made build is posted on GitHub. Version 1.10, from March 2024, is the latest. It fixed muting with some speakers and headphones and made the menu bar icon, which shows whether the current output is headphones, follow the default output device. The app can also be hidden from the menu bar.

The README describes the case it was written for. Music is still playing when a laptop is closed late at night, and the next morning the laptop is opened in a silent office or classroom. Because AutoMute muted the Mac when it went to sleep, nothing plays. It also covers walking too far from the Mac with a Bluetooth headset, when the sound would otherwise move to the speakers.
