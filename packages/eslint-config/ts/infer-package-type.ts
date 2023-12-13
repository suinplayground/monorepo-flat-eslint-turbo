import { readdir, readFile } from "node:fs/promises";

/**
 * プロジェクト内のパッケージの種類を推論します。
 */
export const inferPackageTypes = async (
  packagesDirs: Array<string>,
): Promise<PackageTypes> => {
  const packageTypes: PackageTypes = {
    browserPackages: [],
    nodePackages: [],
  };
  for (const packagesDir of packagesDirs) {
    for (const packageDir of await listPackages(packagesDir)) {
      const packagePath = `${packagesDir}/${packageDir}`;
      const packageType = await inferPackageType(packagePath);
      packageTypes[packageType].push(packagePath);
    }
  }
  return packageTypes;
};

const listPackages = async (packagesDir: string): Promise<Array<string>> => {
  const packages: Array<string> = [];
  for (const entry of await readdir(packagesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    packages.push(entry.name);
  }
  return packages;
};

const inferPackageType = async (packagePath: string): Promise<PackageType> => {
  const content = await readFile(`${packagePath}/package.json`, "utf8");
  const pkg = JSON.parse(content) as PackageJson;
  return containsDependencies(pkg, "react") ||
    containsDependencies(pkg, "react-dom") ||
    containsDependencies(pkg, "next")
    ? "browserPackages"
    : "nodePackages";
};

const containsDependencies = (pkg: PackageJson, dependency: string): boolean =>
  Boolean(
    pkg.dependencies?.[dependency] ||
      pkg.devDependencies?.[dependency] ||
      pkg.peerDependencies?.[dependency],
  );

export type PackageType = "browserPackages" | "nodePackages";

export type PackageTypes = {
  [K in PackageType]: Array<string>;
};

type PackageJson = {
  exports?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};
