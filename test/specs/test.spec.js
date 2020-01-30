"use strict";

const TSLint = require("../utils/tslint");
const chai = require("chai");
chai.should();

describe("tslint-modular/test", () => {
  it("should not be enforced if module is not used", () => {
    let results = TSLint.run(
      "tslint-modular",
      `
      describe.only("My test suite", () => {
        it.only("My test", () => {
          return;
        });
      });
      `
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  it("should warn about describe.only() and it.only()", () => {
    let results = TSLint.run(
      "tslint-modular/test",
      `
      describe.only("My test suite", () => {
        it.only("My test", () => {
          return;
        });
      });
      `
    );

    results.errors.should.deep.equal([]);

    results.warnings.should.deep.equal([
      "ban",
      "ban",
    ]);

    results.warningMessages.should.deep.equal([
      "Calls to 'describe.only' are not allowed. Don't forget to remove this .only",
      "Calls to 'it.only' are not allowed. Don't forget to remove this .only",
    ]);
  });
});
