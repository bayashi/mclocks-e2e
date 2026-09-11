# mclocks-e2e

WebdriverIO runner and npm dependencies for [mclocks](https://github.com/bayashi/mclocks) E2E tests.

Test specs and `wdio.conf.js` live in the **mclocks** repository. This package only provides the WDIO toolchain so mclocks can stay free of that dependency tree.

## Layout

| Path | Role |
|------|------|
| `bayashi/mclocks` | App + `test/**` + `wdio.conf.js` |
| `bayashi/mclocks-e2e` | `@wdio/*` / `webdriverio` + `run.mjs` |

Expected local clone layout:

```text
dev/
  mclocks/
  mclocks-e2e/
```

## Setup

```bash
git clone git@github.com:bayashi/mclocks-e2e.git
cd mclocks-e2e
pnpm install
```

## Run tests (local)

Terminal 1 (mclocks):

```bash
cd ../mclocks
pnpm install
pnpm dev:e2e
```

Terminal 2:

```bash
# from mclocks (finds sibling or ./mclocks-e2e)
pnpm test

# or from this repo
pnpm test
# optional: MCLOCKS_ROOT=/path/to/mclocks pnpm test
```

Headless:

```bash
pnpm test:headless
```

## CI

mclocks workflows check out this repository next to the app (or under `mclocks-e2e/`), install both, start `pnpm dev:e2e`, then run `pnpm test` in mclocks.

## License

[The Artistic License 2.0](https://github.com/bayashi/mclocks/blob/main/LICENSE)
