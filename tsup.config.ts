import type { Options } from "tsup";

export const tsup: Options = {
  splitting: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: false,
  bundle: true,
  watch: false,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  target: ["node14"],
};
