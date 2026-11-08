---
name: "Gephi"
summary: "Lets you explore and visualize networks with interactive layouts, statistics and graph styling."
category: "Education"
tags: ["networks", "graphs", "data-visualization"]
repository: "https://github.com/gephi/gephi"
website: "https://gephi.org/"
license: "GPL-3.0"
licenseUrl: "https://github.com/gephi/gephi/blob/master/LICENSE.md"
download: "https://github.com/gephi/gephi/releases"
freeDownload: true
homebrew: "gephi"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/gephi/gephi", "https://github.com/gephi/gephi/blob/master/LICENSE.md", "https://github.com/gephi/gephi/blob/master/README.md", "https://github.com/gephi/gephi/releases", "https://gephi.org/desktop/", "https://github.com/gephi/gephi/releases/tag/v0.11.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/gephi/gephi/master/modules/application/src/main/app-resources/gephi.icns", "credit": "Gephi Consortium and contributors; 256px PNG extracted from the upstream icns", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

Gephi is for looking at a network rather than a table of it: people and who they know, papers and what they cite, any set of things joined by links. You load the graph, run a layout, and then drag nodes, highlight neighbours and filter the view while it redraws in real time. Its own OpenGL engine handles networks of up to a million nodes and five million edges, according to the project.

The work happens in a few areas:

- Layout: force-directed algorithms place nodes, with settings for spreading clusters apart or keeping the network compact, adjustable while the layout runs.
- Statistics: betweenness and closeness centrality, diameter, clustering coefficient, PageRank, modularity-based community detection and shortest paths.
- Data Laboratory: a table of nodes and edges where you search and replace, batch-edit values and merge columns.
- Preview: colours, sizes and labels driven by ranking or partition data, rendered as vectors and exported to SVG, PNG or PDF with saved presets.

Gephi reads most graph file formats and can also import spreadsheets through a CSV wizard or pull data from a database. A built-in Plugins Center lists community plugins and keeps them updated.

The version number still starts with 0. The team says Gephi has been in beta for over a decade and lists features it wants before 1.0, among them undo and redo with an activity log and visible parallel edges. Version 0.11.4 came out in November 2026, with separate downloads for Apple silicon and Intel Macs. The desktop app is written in Java on the Apache NetBeans Platform. Its main source code is dual-licensed under CDDL 1.0 and the GNU General Public License v3.
