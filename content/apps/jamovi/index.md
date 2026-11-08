---
name: "jamovi"
summary: "Analyzes data in a statistical spreadsheet with an approachable graphical interface."
category: "Education"
tags: ["statistics", "research", "data-analysis"]
repository: "https://github.com/jamovi/jamovi"
website: "https://www.jamovi.org/"
license: "AGPL-3.0"
licenseUrl: "https://github.com/jamovi/jamovi/blob/main/LICENSE.md"
download: "https://www.jamovi.org/download.html"
freeDownload: true
homebrew: "jamovi"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/jamovi/jamovi", "https://github.com/jamovi/jamovi/blob/main/LICENSE.md", "https://github.com/jamovi/jamovi/blob/main/README.md", "https://www.jamovi.org/", "https://www.jamovi.org/features.html", "https://www.jamovi.org/releases.html"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/jamovi/jamovi/blob/main/platform/app-icon.svg", "credit": "jamovi contributors", "license": "AGPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

jamovi runs statistical analyses on data held in a spreadsheet. You enter or paste data into the grid, or open an SPSS, SAS, Stata, Excel, CSV or R file directly, then pick an analysis and set its options by pointing and clicking. Results and plots sit in a panel beside the data and recompute when a value or option changes.

- Built-in analyses cover descriptives, t-tests, ANOVA and ANCOVA, correlation and linear and logistic regression, contingency tables, reliability and factor analysis.
- Further modules, such as mixed models, meta-analysis and Bayesian methods, install from a community library, and you can write your own in R.
- Syntax mode shows the R code behind each analysis, and the Rj editor runs R inside jamovi with your data already loaded.
- In edit mode you can add headings, notes and formatting to the results.

Plots are drawn with R's ggplot2. The data, the analyses with their options and the results are saved together in one .omv file, so whoever opens it sees the same output. The same analyses ship separately on CRAN as jmv, an R package you can call from your own scripts.

The README says it is designed to feel familiar to people who use SPSS. Besides the desktop app there is jamovi Cloud, which runs in a browser and needs you to sign in. The project says the desktop version works offline and keeps your data on your own computer. The desktop app is AGPL-3.0, and the jmv analyses are GPL-2.0-or-later.
