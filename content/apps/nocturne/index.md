---
name: "Nocturne"
summary: "Makes the menu bar clock unreadable on demand or whenever a Focus mode is on."
category: "Utilities"
tags:
  - menu-bar
  - focus
  - distraction-free
repository: https://github.com/dotcomjack/nocturne
website: https://dotcomjack.com/nocturne
license: "MIT"
licenseUrl: https://github.com/dotcomjack/nocturne/blob/main/LICENSE
download: https://github.com/dotcomjack/nocturne/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/dotcomjack/nocturne
  - https://github.com/dotcomjack/nocturne/blob/main/LICENSE
  - https://github.com/dotcomjack/nocturne/releases
  - https://github.com/dotcomjack/nocturne/blob/main/README.md
  - https://dotcomjack.com/nocturne
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/dotcomjack/nocturne/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "DotcomJack"
    license: "MIT; upstream app icon, trademarks retained"
---

Nocturne takes the time out of your view while you work. The menu bar clock has no visibility checkbox in macOS, so Nocturne switches it to the analog dial, which at menu bar size is too small to read at a glance. Clicking its moon icon opens a menu with the modes, and Nocturne puts the digital clock back when you quit it.

It has five modes.

- Clock visible leaves the normal clock alone.
- Blind, the default, turns the clock into the analog dial.
- Gone draws a patch over the clock. It is marked experimental and can leave a faint seam on the translucent menu bar.
- Hide everything blanks the whole menu bar except Nocturne's own icon. Clicks still reach the items underneath.
- Only the clock blanks every icon and leaves the time readable.

An optional hover setting uncovers the bar while the pointer sits on it, in the three covering modes.

Nocturne also works as a Focus filter. In System Settings you add it to a Focus such as Do Not Disturb and pick a mode. When that Focus starts on your Mac, iPhone or Watch, the menu bar follows, and the previous mode returns when it ends. Nocturne's settings also expose the Clock Options switches for the date, the weekday and AM/PM.

The app needs macOS 14 or later and runs natively on Apple silicon and Intel. According to the developer, it asks for no permissions, uses no private APIs and needs no account. The project says the disk image is signed with a Developer ID and notarized. It also installs from the developer's Homebrew tap.
