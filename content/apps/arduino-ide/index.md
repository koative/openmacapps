---
name: "Arduino IDE"
summary: "The official editor for writing Arduino sketches, compiling them and uploading them to boards, with a serial monitor and debugger."
category: "Developer tools"
tags:
  - ide
  - electronics
  - embedded
  - microcontrollers
  - cross-platform
repository: https://github.com/arduino/arduino-ide
website: https://www.arduino.cc/en/software
license: "AGPL-3.0"
licenseUrl: https://github.com/arduino/arduino-ide/blob/main/LICENSE.txt
download: https://www.arduino.cc/en/software
homebrew: "arduino-ide"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/arduino/arduino-ide
  - https://github.com/arduino/arduino-ide/blob/main/LICENSE.txt
  - https://github.com/arduino/arduino-ide/releases
  - https://www.arduino.cc/en/software
assets:
  - path: ./assets/icon.png
    source: https://github.com/arduino/arduino-ide/blob/main/electron-app/resources/icon.icns
    credit: "Arduino"
    license: "Arduino name and logo are trademarks of Arduino; not covered by the AGPL-3.0 code license"
---

Arduino IDE 2 is the desktop editor the Arduino team publishes for programming Arduino and compatible microcontroller boards. You write a sketch, pick the board and port, and the IDE compiles and uploads it; a board manager and library manager install support for additional hardware and code libraries.

The 2.x series is a rewrite of the classic Java IDE on top of the Theia framework and Electron, and it hands compiling and uploading to arduino-cli running in the background. It adds autocompletion, code navigation, a serial monitor and plotter, and a debugger for boards that support one. Signing in to sync sketches with Arduino Cloud is optional.

Separate macOS downloads are offered for Apple silicon and Intel Macs, as a disk image or a zip.
