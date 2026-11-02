---
name: "Gqrx"
summary: "A software-defined radio receiver for RTL-SDR, HackRF, Airspy and similar hardware, built on GNU Radio and Qt."
category: "Utilities"
tags: ["sdr", "radio", "cross-platform"]
repository: "https://github.com/gqrx-sdr/gqrx"
website: "https://gqrx.dk"
license: "GPL-3.0"
licenseUrl: "https://github.com/gqrx-sdr/gqrx/blob/master/COPYING"
download: "https://github.com/gqrx-sdr/gqrx/releases/latest"
homebrew: "gqrx"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/gqrx-sdr/gqrx", "https://github.com/gqrx-sdr/gqrx/blob/master/COPYING", "https://github.com/gqrx-sdr/gqrx/releases", "https://gqrx.dk/download"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/gqrx-sdr/gqrx/blob/master/resources/icons/gqrx.icns", "credit": "Gqrx contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

Gqrx turns a USB radio dongle into a scanning receiver on your Mac. It works with hardware supported by gr-osmosdr and SoapySDR, including RTL-SDR sticks, Airspy, HackRF, BladeRF, FunCube Dongle and USRP devices, and shows the band as a live spectrum and waterfall that you click to tune.

It demodulates AM, FM and SSB signals to audio, can record audio or raw I/Q data, and can also run as a plain FFT instrument. A remote-control interface over network sockets lets other programs tune it and read signal levels.

You need a supported SDR receiver to use it. The project publishes separate disk images for Apple silicon and Intel Macs on its GitHub releases page.
