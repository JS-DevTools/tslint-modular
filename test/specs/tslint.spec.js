"use strict";

const TSLint = require("../utils/tslint");
const chai = require("chai");
chai.should();

describe("tslint-modular", () => {
  /**
   * This test just verifies that TSLint runs without errors,
   * which means that all of our modules are syntactically valid
   */
  it("should run without errors", () => {
    let results = TSLint.run(
      "tslint-modular",
      `
      /**
       * My Class
       */
      export class MyClass {
        /**
         * My Method
         *
         * @param x - my parameter
         * @returns - my return value
         */
        public method(x: string): string {
          return "Hello, " + x;
        }
      }
      `
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  /**
   * This test verifies that TSLint correctly loaded our modules
   */
  it("should report errors for rule violations", () => {
    let results = TSLint.run(
      "tslint-modular",
      `
      export default class my_class {
        method1 (x) {}

        method2 () :Number {
            return 5;
        }
      }
      `
    );

    results.errors.should.have.same.members([
      "completed-docs",
      "no-default-export",
      "class-name",
      "completed-docs",
      "member-access",
      "space-before-function-paren",
      "completed-docs",
      "member-access",
      "space-before-function-paren",
      "typedef-whitespace",
      "ban-types",
      "typedef-whitespace",
      "whitespace",
    ]);

    results.warnings.should.deep.equal([
      "no-empty",
    ]);
  });

  /**
   * This test will fail any time a new rule is added to TSLint.
   * It forces us to include all new rules in tslint-modular (even if they're disabled).
   *
   * @see https://github.com/palantir/tslint/blob/master/src/configs/all.ts
   * @see https://github.com/palantir/tslint/blob/master/CHANGELOG.md
   * @see https://palantir.github.io/tslint/rules/
   */
  it("should include all TSLint rules", () => {
    let allRules = Object.keys(require("tslint/lib/configs/all").rules);
    let ourRules = getRulesRecursive("tslint-modular");

    for (let rule of allRules) {
      ourRules.should.contain(rule);
    }
  });
});

function getRulesRecursive (moduleName) {
  let module = require(moduleName);
  let rules = [];

  if (module.rules) {
    rules = rules.concat(Object.keys(module.rules));
  }

  if (module.extends) {
    for (let subModule of module.extends) {
      let subModuleRules = getRulesRecursive(subModule);
      rules = rules.concat(subModuleRules);
    }
  }

  return rules;
}
