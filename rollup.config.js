const babel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");
const json = require("@rollup/plugin-json");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");

// Read package.json values directly
const packageJson = require("./package.json");
const mainOutput = packageJson.main;
const esOutput = packageJson.module;
const peerDependencies = Object.keys(packageJson.peerDependencies || {});

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: mainOutput,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: esOutput,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    postcss({
      extensions: [".css"],
      minimize: true,
      modules: false,
      extract: "index.css",
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    terser(),
  ],
  external: peerDependencies,
};
