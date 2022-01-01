import type { Options } from "tsup";

export const tsup: Options = {
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
  bundle: true,
  watch: false,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  target: ["node14"],
};
