"use strict";

const TSLint = require("../fixtures/tslint");
const chai = require("chai");
chai.should();

describe("tslint-modular/style", () => {
  it("should not be enforced if module is not used", () => {
    let results = TSLint.run(
      "tslint-modular/best-practices",
      `
      /**Does a thing
       * and returns a value */
      export function FOO(x   :    string)
      : boolean
      {
            //does a thing
                return false;
      }
      `
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/style/comments", () => {
    let results = TSLint.run(
      "tslint-modular/style",
      `
      /**Does a thing
       * and returns a value
       * @param {string} x - A thing */
      export function Foo(x: string): boolean {
        //does a thing
        return false;
      }
      `
    );

    results.errors.should.deep.equal([
      "jsdoc-format",
      "jsdoc-format",
      "jsdoc-format",
      "no-redundant-jsdoc",
      "comment-format",
    ]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/style/conventions", () => {
    let results = TSLint.run(
      "tslint-modular/style",
      `
      function foo(x: string[][], y: number = 5): Array<string> {
        return x[0].sort(a => { return y });
      }

      foo([['hello'], ['world']]);

      interface Obj {
        a: Boolean;
        b: Object;
      }

      let o: Obj = {
        a: true,
        b: { d: "hello", e: "world", },
        c: 5
      }
      `
    );

    results.errors.should.deep.equal([
      "array-type",
      "arrow-parens",
      "arrow-return-shorthand",
      "semicolon",
      "quotemark",
      "quotemark",
      "ban-types",
      "ban-types",
      "trailing-comma",
      "semicolon",
    ]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/style/naming", () => {
    let results = TSLint.run(
      "tslint-modular/style",
      `
      interface IClass {
        name: string;
      }

      class my_class {
        public name: string;

        public constructor(Name: string) {
          let string = Name;
          let x_y_z_ = string;
          this.name = x_y_z_;
        }
      }
      `
    );

    results.errors.should.deep.equal([
      "interface-name",
      "class-name",
      "variable-name",
      "variable-name",
      "variable-name",
    ]);
    results.warnings.should.deep.equal([]);
  });

  it("should include tslint-modular/style/syntax", () => {
    let results = TSLint.run(
      "tslint-modular/style",
      `
      /// <reference path="fs" />
      import fs from "fs";

      namespace MyNamespace {
        async function foo(x: string, y?: string = undefined): Promise<any> {
          console.log(x, y);

          my_label:
          if (arguments.callee === foo) {
            new Date;
          }

          return await fs["readFileSync"](x);
        }
      }
      `
    );

    results.errors.should.deep.equal([
      "no-reference",
      "no-namespace",
      "no-console",
      "label-position",
      "no-arg",
      "new-parens",
      "no-unused-expression",
      "no-return-await",
      "no-string-literal",
    ]);

    results.warnings.should.deep.equal([
      "no-unnecessary-initializer",
      "no-any",
    ]);
  });

  it("should include tslint-modular/style/whitespace", () => {
    let results = TSLint.run(
      "tslint-modular/style",
      `
      import{readFile}from "fs";

         function foo () :string
           {
          const x = true   ;
        return x;
      }`
    );

    results.errors.should.deep.equal([
      "import-spacing",
      "whitespace",
      "whitespace",
      "whitespace",
      "import-spacing",
      "whitespace",
      "align",
      "space-before-function-paren",
      "typedef-whitespace",
      "typedef-whitespace",
      "whitespace",
      "one-line",
      "align",
    ]);
    results.warnings.should.deep.equal([]);
  });
});
