import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["iife"],
  splitting: false,
  clean: true,
  platform: "node",
  target: "node20",
});
