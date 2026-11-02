---
name: "pluginval"
summary: "Tracktion’s tester that loads VST, VST3 and Audio Unit plugins and runs stability and compatibility checks on them."
category: "Developer tools"
tags:
  - audio
  - plugins
  - testing
  - cross-platform
repository: https://github.com/Tracktion/pluginval
website: https://www.tracktion.com/develop/pluginval
license: "GPL-3.0"
licenseUrl: https://github.com/Tracktion/pluginval/blob/develop/LICENSE
download: https://github.com/Tracktion/pluginval/releases
homebrew: "pluginval"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/Tracktion/pluginval
  - https://github.com/Tracktion/pluginval/blob/develop/LICENSE
  - https://github.com/Tracktion/pluginval/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/Tracktion/pluginval/blob/develop/source/binarydata/icon.png
    credit: "Tracktion Corporation"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

pluginval checks audio plugins for crashes and host-compatibility problems. You scan your plugin folders or drop a plugin onto the list, choose a strictness level, and it loads the plugin in a separate process and runs a series of tests: opening and closing editors, processing audio, changing parameters, and saving and restoring state. Results appear in a console log.

It is aimed at plugin and host developers, but users can also run it to produce a detailed log when reporting a bug to a plugin maker. The same binary works headless from the command line and returns an exit code, which makes it easy to add to continuous integration.

The pre-built releases for macOS, Windows and Linux include VST2 testing. The current stable version is 1.0.4 from December 2024; 2.0 betas are published as pre-releases.
