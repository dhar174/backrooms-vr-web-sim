import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["node_modules/**", "spikes/babylon/**", "spikes/three/**", "spikes/iwsdk/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["spikes/shared/**/*.ts"],
    rules: {
      "no-restricted-imports": ["error", { patterns: [{ regex: "^(?!\\./)", message: "Shared benchmark imports must stay within spikes/shared." }] }],
      "no-restricted-globals": ["error", "window", "document", "navigator", "Date", "performance"],
      "no-restricted-properties": ["error", { object: "Math", property: "random", message: "The baseline must not use runtime randomness." }],
    },
  },
];
