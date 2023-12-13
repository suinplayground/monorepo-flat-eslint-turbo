export function unignore<const T extends Array<string>>(files: T) {
  return files.map(<T extends string>(file: T): `!${T}` => `!${file}`);
}
