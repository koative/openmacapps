# Third-party software

FinderSearch's filename search is powered by **fsearch**, created by **Noah Dunnagan**.

- Upstream: https://github.com/noahdunnagan/fsearch
- Version: 0.2.0
- Vendored revision: `e96ebeb52545ea4facd4a4b3af393c42c980fb5d`
- License: [MIT](vendor/fsearch/LICENSE)

The upstream source is retained in `vendor/fsearch` without modifications. Its
copyright and license notice are included in every built app at
`Contents/Resources/fsearch-LICENSE`. `vendor/fsearch/Cargo.lock` records its Rust
dependencies; the build uses locked dependency resolution.

FinderSearch's native interface, browsing workflows, caching, and app integration
are separate from the upstream search engine. Engine benchmarks published by
fsearch do not measure FinderSearch's complete UI response time.
