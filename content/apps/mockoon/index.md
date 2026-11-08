---
name: "Mockoon"
summary: "Designs and runs mock REST APIs locally, with templating, proxying and request logs, without an account."
category: "Developer tools"
tags:
  - api
  - http
  - testing
  - cross-platform
repository: https://github.com/mockoon/mockoon
website: https://mockoon.com
license: "MIT"
licenseUrl: https://github.com/mockoon/mockoon/blob/main/LICENSE.md
download: https://mockoon.com/download/
freeDownload: true
homebrew: "mockoon"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/mockoon/mockoon
  - https://github.com/mockoon/mockoon/blob/main/LICENSE.md
  - https://github.com/mockoon/mockoon/releases
  - https://formulae.brew.sh/cask/mockoon
  - https://mockoon.com/download/
  - https://raw.githubusercontent.com/mockoon/mockoon/main/README.md
  - https://mockoon.com/features/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/mockoon/mockoon/main/packages/app/build-res/icon.icns
    credit: "Guillaume Monnet and Mockoon contributors"
    license: "MIT repository asset; Mockoon name and logo retained by the project"
---

Mockoon lets you build a fake version of an API on your own Mac and point your app at it. In the desktop app you create a mock server, add routes, and start it on a local port; requests to that port get the responses you defined.

- Route paths can be regular expressions, and routes return a status, custom headers, a file or a JSON body.
- JSON bodies can be templates that fill in Faker.js data or URL parameters, query strings and request-body values.
- Rules choose between responses for one route, and delays simulate slow services.
- A proxy mode forwards routes you have not mocked to the real backend.
- Every request that arrives or is forwarded is logged, and the app can turn recorded calls into mocks.

You can start from an OpenAPI specification and export a mock back to one. The same mock files run without the desktop app through the Mockoon CLI, which is published on npm and as a Docker image, so a CI job or a shared test server can serve exactly what you designed. HTTPS is supported, and you can run as many local servers and routes as you need.

The desktop app and CLI are free and MIT-licensed, and they need no account. The developer says mock traffic stays on your machine and is not tracked. Mockoon Pro is a separate paid, self-hosted platform for teams. Mac downloads come as Universal, Intel and Apple silicon DMGs.
