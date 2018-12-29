"use strict";

const TSLint = require("../fixtures/tslint");
const chai = require("chai");
chai.should();

describe.only("tslint-modular/browser", function () {
  it("should not be enforced if module is not used", function () {
    let results = TSLint.run(
      "tslint-modular/node",
      `
      var name = window.prompt("What's your name?");
      alert("hello, " + name);
      `
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  it("should warn about alert(), confirm(), and prompt()", function () {
    let results = TSLint.run(
      "tslint-modular/browser",
      `
      var name = window.prompt("What's your name?");
      if (confirm("Are you sure it's " + name)) {
        alert("hello, " + name);
      }
      `
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([
      "ban",
      "ban",
      "ban",
    ]);
  });
});
