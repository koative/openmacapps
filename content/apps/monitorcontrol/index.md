---
name: "MonitorControl"
summary: "Changes the brightness, contrast and volume of external displays from the keyboard or a menu bar slider."
category: "Utilities"
tags: ["displays", "brightness", "native"]
repository: "https://github.com/MonitorControl/MonitorControl"
website: "https://monitorcontrol.app"
license: "MIT"
licenseUrl: "https://github.com/MonitorControl/MonitorControl/blob/main/License.txt"
download: "https://github.com/MonitorControl/MonitorControl/releases"
freeDownload: true
homebrew: "monitorcontrol"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/MonitorControl/MonitorControl", "https://github.com/MonitorControl/MonitorControl/blob/main/License.txt", "https://monitorcontrol.app", "https://raw.githubusercontent.com/MonitorControl/MonitorControl/main/README.md", "https://github.com/MonitorControl/MonitorControl/releases/tag/v4.4.0"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot.png", "alt": "MonitorControl menu showing controls for connected displays.", "source": "https://raw.githubusercontent.com/MonitorControl/MonitorControl/main/.github/screenshot.png", "credit": "MonitorControl contributors"}]
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/MonitorControl/MonitorControl/main/.github/Icon-cropped.png", "credit": "MonitorControl contributors", "license": "MIT; upstream project asset, trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://raw.githubusercontent.com/MonitorControl/MonitorControl/main/.github/screenshot.png", "credit": "MonitorControl contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

MonitorControl lets the brightness and volume keys on a Mac keyboard work on an external monitor. Press them and the display changes, with the same on-screen indicator macOS shows for a built-in screen. A brightness icon in the menu bar opens sliders for each connected display.

How it changes the picture depends on the screen:

- Most current LCD monitors take DDC/CI commands over USB-C, DisplayPort, HDMI, DVI or VGA, which set the real backlight, contrast and speaker volume.
- Apple displays and built-in screens use Apple's own protocol.
- Televisions, which rarely support DDC, get dimmed in software through the gamma table.
- AirPlay, Sidecar and DisplayLink screens are dimmed with an overlay shade.

Software dimming can carry on below a monitor's lowest backlight setting, down to full black. One slider or shortcut can move every display together. The app can also copy changes on a built-in or Apple screen, such as those from the ambient light sensor, to a non-Apple monitor.

Some connections only get software dimming. Over HDMI, DDC fails on the 2018 Intel Mac mini, on M1 Macs and on the entry-level M2 Mac mini, so those Macs need a USB-C connection for hardware control. DisplayLink docks and EIZO monitors that use their own protocol are limited the same way.

Version 4.4.0 or newer is required on macOS 27. The 4.4.0 app sets macOS 10.14 Mojave as its minimum, but full functionality needs macOS 11 Big Sur or later. The DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. The media keys need the Accessibility permission, and custom shortcuts can replace them in Settings.
