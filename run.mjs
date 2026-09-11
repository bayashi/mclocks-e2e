#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const e2eRoot = dirname(fileURLToPath(import.meta.url));
const mclocksRoot = resolve(process.env.MCLOCKS_ROOT || resolve(e2eRoot, "../mclocks"));
const conf = resolve(mclocksRoot, "wdio.conf.js");
const wdioJs = resolve(e2eRoot, "node_modules/@wdio/cli/bin/wdio.js");

if (!existsSync(conf)) {
  console.error(`mclocks wdio.conf.js not found: ${conf}`);
  console.error("Set MCLOCKS_ROOT to the mclocks repository root.");
  process.exit(1);
}
if (!existsSync(wdioJs)) {
  console.error(`@wdio/cli not found in ${e2eRoot}. Run pnpm install in mclocks-e2e.`);
  process.exit(1);
}

const extra = process.argv.slice(2);
const result = spawnSync(process.execPath, [wdioJs, "run", conf, ...extra], {
  cwd: mclocksRoot,
  stdio: "inherit",
  env: process.env,
});

process.exit(result.status ?? 1);
