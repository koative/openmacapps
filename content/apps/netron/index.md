---
name: "Netron"
summary: "A viewer that draws neural network and machine learning model files as graphs you can inspect node by node."
category: "Developer tools"
tags:
  - machine-learning
  - models
  - visualization
  - inspection
  - cross-platform
repository: https://github.com/lutzroeder/netron
website: https://netron.app
license: "MIT"
licenseUrl: https://github.com/lutzroeder/netron/blob/main/LICENSE
download: https://github.com/lutzroeder/netron/releases/latest
homebrew: "netron"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/lutzroeder/netron
  - https://github.com/lutzroeder/netron/blob/main/LICENSE
  - https://github.com/lutzroeder/netron/releases
  - https://github.com/lutzroeder/netron/blob/main/source/desktop.mjs
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lutzroeder/netron/main/publish/icon.icns
    credit: "Lutz Roeder"
    license: "MIT; upstream project asset, trademarks retained"
---

Netron opens a trained model file and lays out its architecture as a graph of layers and operations. Selecting a node shows its attributes, inputs, outputs and tensor shapes, and weights can be inspected or exported. It reads ONNX, TensorFlow Lite, PyTorch and TorchScript, Core ML, Keras, OpenVINO, Safetensors and other formats, with experimental support for GGUF, MLIR and several more.

The Mac app is an Electron build of the same viewer that also runs in the browser at netron.app and from a Python package. Packaged desktop builds send anonymous usage and error reports to Google Analytics and have no setting to turn this off; users in the EU and UK see a notice first. A build more than 180 days old stops and asks you to download a newer version.
