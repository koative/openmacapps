---
name: "Apache NetBeans"
summary: "A long-running open-source IDE for Java and other languages, developed at the Apache Software Foundation."
category: "Developer tools"
tags:
  - ide
  - code-editor
  - cross-platform
alternativeTo:
  - phpstorm
repository: "https://github.com/apache/netbeans"
website: "https://netbeans.apache.org"
license: "Apache-2.0"
licenseUrl: "https://github.com/apache/netbeans/blob/master/LICENSE"
download: "https://netbeans.apache.org/front/main/download/"
freeDownload: true
homebrew: "netbeans"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/apache/netbeans", "https://github.com/apache/netbeans/blob/master/LICENSE", "https://raw.githubusercontent.com/apache/netbeans/master/README.md", "https://netbeans.apache.org/front/main/index.html", "https://netbeans.apache.org/front/main/download/", "https://netbeans.apache.org/front/main/download/nb31/"]
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/apache/netbeans/master/nb/ide.branding/release/netbeans.icns"
    credit: "The Apache Software Foundation"
    license: "Apache NetBeans logo is a trademark of The Apache Software Foundation; not covered by the Apache-2.0 code license"
---

NetBeans is an IDE for Java, PHP, JavaScript, HTML5 and CSS, and it can refactor code as well as edit it. The editor highlights code both by syntax and by meaning, and wizards and templates set up new Java and PHP applications. For PHP work it covers ground similar to JetBrains' PhpStorm, but under the Apache license.

The IDE itself runs on Java. NetBeans 31 runs on JDK 21, 25 or 26, with early support for JDK 27. The JDK that runs the IDE does not limit which Java version your projects use.

The download page offers several options for a Mac:

- The Apache release is a platform-independent ZIP, which you start with a JDK you have installed.
- Codelerity builds a macOS package with a Temurin JDK inside.
- The Friends of Apache NetBeans build another one, also with a JDK.
- A source ZIP is there if you would rather build it yourself.

The two packages are made by NetBeans committers as a convenience. The Apache Software Foundation does not count them as its own releases, and the bundled JDK comes under its own license terms.

Apache NetBeans ships four releases a year. Version 31 came out on 10 August 2026, and older versions remain downloadable without support. Beyond the IDE, the project offers NetBeans as a tooling platform and an application framework for building other desktop software. Every release passes a vote of the project's management committee on its mailing lists.
