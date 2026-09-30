import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, isAbsolute, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { expect, it } from "vitest";

const sharedRoot = fileURLToPath(new URL("../../../spikes/shared/", import.meta.url));
/** Inspect syntax, including type-only imports and nonliteral dynamic imports. */
function invalidImports(source: string, filename: string): string[] {
  const invalid: string[] = [];
  const tree = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true);
  function check(expression: ts.Node): void {
    if (!ts.isStringLiteralLike(expression)) { invalid.push("nonliteral import"); return; }
    const specifier = expression.text;
    const target = resolve(dirname(filename), specifier);
    const withinShared = relative(sharedRoot, target);
    if (!specifier.startsWith("./") || isAbsolute(withinShared) || withinShared.startsWith("..") ||
        !target.endsWith(".ts") || !existsSync(target)) invalid.push(specifier);
  }
  function visit(node: ts.Node): void {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) check(node.moduleSpecifier);
    if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference) && node.moduleReference.expression) check(node.moduleReference.expression);
    if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)) check(node.argument.literal);
    if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) && node.expression.text === "require"))) {
      if (node.arguments[0]) check(node.arguments[0]); else invalid.push("missing import argument");
    }
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return invalid;
}
function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : path.endsWith(".ts") ? [path] : [];
  });
}
it("every shared source import resolves to another shared TypeScript file", () => {
  const files = sourceFiles(sharedRoot);
  expect(files.length).toBeGreaterThanOrEqual(5);
  for (const filename of files) expect(invalidImports(readFileSync(filename, "utf8"), filename), filename).toEqual([]);
});
it.each([
  'import { Engine } from "@babylonjs/core";',
  'export * from "three";',
  'import type { World } from "@iwsdk/core";',
  'type World = import("@iwsdk/core").World;',
  'import("../iwsdk/runtime.ts");',
  'require("cannon-es");',
  'import("./../../outside.ts");',
  'import(candidatePackage);',
  'import runtime = require("@react-three/fiber");',
  'import { Scene } from "./missing.ts";',
])("rejects forbidden/nonliteral imports: %s", source => {
  expect(invalidImports(source, resolve(sharedRoot, "test.ts"))).not.toEqual([]);
});
it("allows a local shared import", () => {
  expect(invalidImports('import { PLAYER_BENCHMARK_CONFIG } from "./spikeConfig.ts";', resolve(sharedRoot, "test.ts"))).toEqual([]);
});
it("compiles shared code without DOM, Node, or XR ambient types", () => {
  const config = JSON.parse(readFileSync(new URL("../../../tsconfig.shared.json", import.meta.url), "utf8")) as { compilerOptions: { lib: string[]; types: string[] } };
  expect(config.compilerOptions.lib).toEqual(["ES2022"]);
  expect(config.compilerOptions.types).toEqual([]);
});
