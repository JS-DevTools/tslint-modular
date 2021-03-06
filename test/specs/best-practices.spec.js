"use strict";

const TSLint = require("../utils/tslint");
const chai = require("chai");
chai.should();

describe("@jsdevtools/tslint-modular/best-practices", () => {
  it("should not be enforced if module is not used", () => {
    let results = TSLint.run(
      "@jsdevtools/tslint-modular/browser",
      "Date.now() == Date.now();"
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  it("should include @jsdevtools/tslint-modular/best-practices/bugs", () => {
    let results = TSLint.run(
      "@jsdevtools/tslint-modular/best-practices",
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

  it("should include best-practices/maintainability", () => {
    let results = TSLint.run(
      "@jsdevtools/tslint-modular/best-practices",
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

  it("should include best-practices/security", () => {
    let results = TSLint.run(
      "@jsdevtools/tslint-modular/best-practices",
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
