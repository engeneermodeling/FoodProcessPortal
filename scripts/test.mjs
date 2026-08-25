import { spawnSync } from "node:child_process";
import { join } from "node:path";

const nodeCommand = process.execPath;

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(nodeCommand, [join("node_modules", "astro", "bin", "astro.mjs"), "build"]);
run(nodeCommand, [join("scripts", "smoke-check.mjs")]);
run(nodeCommand, [join("scripts", "route-audit.mjs")]);
