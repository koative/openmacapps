---
name: Scroll Reverser
summary: "Sets the scrolling direction separately for each trackpad, mouse and app on your Mac."
category: Utilities
tags:
  - mouse
  - trackpad
  - scrolling
repository: https://github.com/pilotmoon/Scroll-Reverser
website: https://pilotmoon.com/scrollreverser/
license: Apache-2.0
licenseUrl: https://github.com/pilotmoon/Scroll-Reverser/blob/master/LICENSE
download: https://github.com/pilotmoon/Scroll-Reverser/releases
freeDownload: true
homebrew: "scroll-reverser"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/pilotmoon/Scroll-Reverser", "https://github.com/pilotmoon/Scroll-Reverser/blob/master/LICENSE", "https://github.com/pilotmoon/Scroll-Reverser/blob/master/README.md", "https://github.com/pilotmoon/Scroll-Reverser/releases", "https://pilotmoon.com/scrollreverser/", "https://github.com/pilotmoon/Scroll-Reverser/releases/tag/v2.1.1"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/pilotmoon/Scroll-Reverser/blob/e119e3125156fd23286581a2fb393ecd3be89713/Media.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Scroll Reverser contributors
    license: Apache-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Scroll Reverser sets the scrolling direction per source: every trackpad and mouse, devices joined through Universal Control, and apps that send scroll events. Plug in a mouse and it gets its own row in Settings, where you choose Natural, Classic or Unchanged.

New devices start with these defaults: trackpads scroll Natural and wheel mice scroll Classic. Horizontal scrolling follows the vertical choice unless you override it under the gear button. For a wheel mouse, a step size control scrolls a fixed number of lines per click, three by default, in place of macOS scroll acceleration.

Scroll events from other software, such as remote access tools or mouse utilities, cannot reveal their underlying direction. For those, and for an unidentified source like an iPad in Sidecar, the choices are Reversed or Unchanged. iPhone Mirroring and Calendar scroll through gestures rather than scroll events, so Scroll Reverser has no effect there. An AppleScript `enabled` property turns the app on and off.

It works through an event tap, which needs the Accessibility permission. Version 2.1.1 requires macOS 13.5 or later, and the ZIP holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. Older versions, going back to one for Mac OS X 10.7, remain on the website. The app installs nothing deeper in the system, so quitting it and dragging it to the Trash removes it.

Nick Moore maintains it under the Apache License 2.0.
