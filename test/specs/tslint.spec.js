"use strict";

const TSLint = require("../fixtures/tslint");
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
      export class MyClass {
        public method (x: string): string {
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
        method1(x) {}

        method2() {
          return 5;
        }
      }
      `
    );

    results.errors.should.deep.equal([
      "no-default-export",
      "class-name",
      "typedef",
      "member-access",
      "space-before-function-paren",
      "typedef",
      "typedef",
      "member-access",
      "space-before-function-paren",
    ]);

    results.warnings.should.deep.equal([
      "no-empty",
      "no-magic-numbers",
    ]);
  });
});
