---
name: "Yowl"
summary: "Theft alarm that sounds a siren, locks the screen and takes photos when the charger is pulled or the laptop moves."
category: "Privacy & security"
tags:
  - security
  - privacy
  - menu-bar
  - camera
repository: "https://github.com/nejcar20/yowl"
website: "https://dontstealmylaptop.com"
license: "MIT"
licenseUrl: "https://github.com/nejcar20/yowl/blob/main/LICENSE"
download: "https://github.com/nejcar20/yowl/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/nejcar20/yowl"
  - "https://github.com/nejcar20/yowl/blob/main/LICENSE"
  - "https://github.com/nejcar20/yowl/releases"
  - "https://dontstealmylaptop.com"
assets:
  - path: ./assets/icon.png
    source: https://github.com/nejcar20/yowl/releases/download/v1.3.2/Yowl-1.3.2.dmg
    credit: Yowl contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Yowl is a deterrent for leaving a laptop on a café table or in a library. Once armed from the menu bar, it reacts to an unplugged charger, to movement seen by the camera, or to the lid closing part-way. It then sounds a siren at full volume through the built-in speakers, locks the screen and photographs whoever is in front of the laptop, including the ten seconds before the alarm. Phone alerts are optional and send the alarm and photos to a private ntfy.sh link. The project says it is not a recovery tool and recommends Find My and FileVault for that.

Requires macOS 14 or later, as a universal build for Apple silicon and Intel. The lid trigger needs the hinge sensor, which Intel Macs lack. Release builds are signed and notarized. Keeping the siren going with the lid closed is off by default; turning it on asks for an administrator password once to install a sudoers rule that allows only two `pmset` commands. Repetitive backgrounds such as blinds or brick can confuse motion detection, and quitting the app stops the alarm.
