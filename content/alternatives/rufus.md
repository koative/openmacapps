---
name: Rufus
vendor: Pete Batard
website: https://rufus.ie/
category: Utilities
summary: A small utility that formats USB flash drives and turns ISO images into bootable installation or rescue media.
sources:
  - https://rufus.ie/en/
verified: '2026-10-29'
onMac: false
---

Rufus formats USB flash drives and writes bootable ISO images to them, so a stick can install Windows or Linux, start a rescue system, or boot DOS to flash firmware. It is open source and needs no installation, but its downloads are Windows executables only.

There is no Rufus for Mac, but balenaEtcher and macUSB do the same job. balenaEtcher writes an operating system image to a USB drive or SD card, makes the target drive obvious to avoid overwriting the wrong disk, and checks the result afterwards. macUSB is a guided assistant for making installer drives for macOS, Linux and Windows, with a built-in macOS installer downloader. Windows installers are a special case: macUSB writes them to FAT32 and may need wimlib to split large image files, while Rufus offers extra options for Windows media that neither Mac app copies.
