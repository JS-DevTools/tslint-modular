"use strict";

const TSLint = require("../fixtures/tslint");
const chai = require("chai");
chai.should();

describe("tslint-modular/best-practices", function () {
  it("should not be enforced if module is not used", function () {
    let results = TSLint.run(
      "tslint-modular/browser",
      "Date.now() == Date.now();"
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/best-practices/bugs", function () {
    let results = TSLint.run(
      "tslint-modular/best-practices",
      `
      Date.now() == Date.now();
      interface Foo {}
      var x = [,];
      var x = true & false;
      `
    );

    results.errors.should.deep.equal([
      "triple-equals",
      "no-empty-interface",
      "no-sparse-arrays",
      "no-duplicate-variable",
      "no-bitwise",
    ]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/best-practices/maintainability", function () {
    let results = TSLint.run(
      "tslint-modular/best-practices",
      `
      import { readFile } from "fs";
      import { writeFile } from "fs";

      export default class Class1 {
        method1(x: string): string;
        method1<T>(x: T): T {
          return x;
        }

        method2(): void {
          return;
        }
        method1(x: boolean): boolean;
      }

      export class Class2 {}
      `
    );

    results.errors.should.deep.equal([
      "no-duplicate-imports",
      "no-default-export",
      "adjacent-overload-signatures",
      "max-classes-per-file",
    ]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/best-practices/security", function () {
    let results = TSLint.run(
      "tslint-modular/best-practices",
      `
      eval("x = 5");
      let x = Function("x = 5");
      `
    );

    results.errors.should.deep.equal([
      "no-eval",
      "function-constructor",
    ]);
    results.warnings.should.deep.equal([]);
  });
});
