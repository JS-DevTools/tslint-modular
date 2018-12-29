"use strict";

const fs = require("fs");
const path = require("path");
const { Linter, Configuration } = require("tslint");

const mockProjectDir = ".tmp";

/**
 * Runs TSLint on the specified code, using the specified modules.
 */
exports.run = function (modules, code) {
  code = stripIndentation(code);

  createMockProject({
    "index.ts": code,

    "tsconfig.json": {
      compilerOptions: {
        strictNullChecks: true,
      },
      include: ["**/*.ts"]
    },

    "tslint.json": {
      extends: modules,
    },
  });

  // see https://palantir.github.io/tslint/usage/type-checking/
  let program = Linter.createProgram(path.join(mockProjectDir, "tsconfig.json"));

  // see https://palantir.github.io/tslint/usage/library/
  let linter = new Linter({}, program);

  // Configure TSLint to use the modules
  let config = Configuration.findConfiguration(
    path.join(mockProjectDir, "tslint.json"),
    path.join(mockProjectDir, "index.ts")
  ).results;

  // Run TSLint on the code
  linter.lint(path.join(mockProjectDir, "index.ts"), code, config);

  return normalizeResults(linter.getResult());
};

function normalizeResults (results) {
  // Simplify the results for easier testing
  results.errors = [];
  results.warnings = [];

  results.failures.sort((a, b) => a.startPosition.position - b.startPosition.position);

  for (let failure of results.failures) {
    if (failure.ruleSeverity === "warning") {
      results.warnings.push(failure.ruleName);
    }
    else {
      results.errors.push(failure.ruleName);
    }
  }



  return results;
}

/**
 * Creates a mock TypeScript project to run TSLint against.
 */
function createMockProject (files) {
  if (!fs.existsSync(mockProjectDir)) {
    fs.mkdirSync(mockProjectDir);
  }

  for (let fileName of Object.keys(files)) {
    let filePath = path.join(mockProjectDir, fileName);
    let fileContents = files[fileName];

    if (typeof fileContents === "object") {
      fileContents = JSON.stringify(fileContents, null, 2);
    }

    fs.writeFileSync(filePath, fileContents);
  }
}

/**
 * Removes indentation from each line of code, caused by multi-line template strings.
 */
function stripIndentation (code) {
  if (/^\n\s+\S/.test(code)) {
    let lines = code.split("\n");
    let indent = lines[1].length - lines[1].trimLeft().length;
    code = "";

    for (let line of lines.slice(1)) {
      code += line.substr(indent) + "\n";
    }
  }

  return code;
}
