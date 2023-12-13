import type { Linter } from "eslint";

type FlatConfig = Linter.FlatConfig;
type Files = FlatConfig["files"];

export const defineConfig =
  <T extends FlatConfig>(
    config: T[] | ((params: { files: NonNullable<Files> }) => T[]),
  ) =>
  ({ files }: { files?: Files } = {}): T[] => {
    if (typeof config === "function") {
      return config({ files: files ?? [] });
    }
    if (files === undefined || files.length === 0) {
      return config;
    }
    return config.map((config) => ({ ...config, files }));
  };
