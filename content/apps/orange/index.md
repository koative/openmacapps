---
name: "Orange Data Mining"
summary: "Lets you explore datasets by connecting visual widgets for data preparation, analysis and visualization."
category: "Education"
tags: ["data-analysis", "visualization", "workflows"]
repository: "https://github.com/biolab/orange3"
website: "https://orangedatamining.com/"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/biolab/orange3/blob/master/LICENSE"
download: "https://orangedatamining.com/download/"
freeDownload: true
homebrew: "orange"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/biolab/orange3", "https://github.com/biolab/orange3/blob/master/LICENSE", "https://github.com/biolab/orange3/blob/master/README.md", "https://orangedatamining.com/download/", "https://orangedatamining.com/", "https://orangedatamining.com/widget-catalog/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/biolab/orange3/master/distribute/icon-256.png", "credit": "Orange Data Mining contributors", "license": "GPL-3.0-or-later; upstream project asset, trademarks retained"}]
---

Orange turns a data analysis into a diagram. You drop widgets onto a canvas, wire the output of one into the input of the next, and load a dataset at the start of the chain. Each widget does one step, such as reading a file, filtering rows, training a model or drawing a chart.

The visualization widgets cover the usual statistical views:

- distributions, box plots and scatter plots
- decision trees
- heatmaps and hierarchical clustering
- linear projections, MDS and t-SNE

On a Mac, the download page has two disk images, one for Apple silicon and one for Intel. The file names show that each is built with Python 3.12.10. If you already work in Python, the README also covers installing Orange with conda, pip or uv and starting the canvas with `python -m Orange.canvas`. A pip install can need a C or C++ compiler, and the first launch can take a while.

Add-ons bring extra widgets for text mining, network analysis, machine learning fairness, time series, spectra and gene expression data. You install them from Options > Add-ons in the menu bar. Some widgets were designed especially for teaching, to illustrate data science concepts in a classroom. Orange comes from the Bioinformatics Laboratory at the University of Ljubljana.
