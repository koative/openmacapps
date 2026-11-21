---
name: mSIZER
summary: "Resizes, retouches, renames and converts photos in batches, and turns RAW files into DNG with a culling viewer."
category: Media
tags:
  - photos
  - batch-processing
  - image-converter
  - watermark
  - raw
  - dng
  - resize
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mSIZER
website: "https://starbudweiser.github.io/wshowcase/#mSIZER"
license: MIT
licenseUrl: https://github.com/starbudweiser/mSIZER/blob/main/LICENSE
download: https://github.com/starbudweiser/mSIZER/releases
macos: "15"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-17'
sources:
  - https://github.com/starbudweiser/mSIZER
  - https://github.com/starbudweiser/mSIZER/blob/main/LICENSE
  - https://github.com/starbudweiser/mSIZER/releases
  - https://raw.githubusercontent.com/starbudweiser/mSIZER/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mSIZER/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mSIZER/releases/download/v1.2.0/mSIZER-1.2.0.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The main window with six sample photos in the list, a live preview and the resize panel."
    source: https://github.com/starbudweiser/mSIZER/blob/main/docs/screenshot.png
    credit: Starbudweiser
---

mSIZER processes a batch of photos in one pass. Drop photos or folders on the window, pick what to change, and the selected photo shows a live before and after preview.

Operations you can combine:

- resizing by long side, width, height or percentage, or to fit or fill a box, never enlarging;
- cropping to a ratio with an anchor, or by hand with handles on the preview;
- rotating, flipping and auto enhance, brightness, contrast, saturation and sharpness;
- text or logo watermarks in nine positions;
- renaming with a pattern such as `{name}`, `{n}` or `{date}`.

Output can be JPEG, PNG, WebP, HEIC, AVIF, TIFF, PSD, PDF and several more, with a quality slider or a maximum file size the app reaches by adjusting quality. Metadata can be kept, stripped of GPS location only, or erased. Presets cover the web, email and social networks such as Instagram, YouTube or Discord.

A separate RAW to DNG mode converts camera RAW files in bulk, including Panasonic RW2, Canon, Nikon, Sony, Fujifilm and Olympus. The conversion is lossless, with the sensor data kept as is, and an option re-reads each DNG and compares every pixel with the RAW. RAW files are decoded with LibRaw under the CDDL-1.0. DNG is the open format that Lightroom and Bridge read, and another option embeds the original RAW. A built-in viewer with a filmstrip, histogram, star ratings and pick or reject flags helps you sort a shoot before converting, and rejected files can go to the Trash.

Results go to a subfolder or another folder. If you choose to replace originals, they go to the Trash, and existing files are never overwritten. Filters run on the GPU through Core Image.

The app is modeled on Photo Bulk Editor and not affiliated with it. It runs on Apple silicon only, needs macOS 15 or later, and is notarized.
