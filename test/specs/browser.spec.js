"use strict";

const TSLint = require("../fixtures/tslint");
const chai = require("chai");
chai.should();

describe("tslint-modular/browser", () => {
  it("should not be enforced if module is not used", () => {
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

  it("should warn about alert(), confirm(), and prompt()", () => {
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

    results.warningMessages.should.deep.equal([
      "Calls to 'window.prompt' are not allowed. Don't use `prompt`. It blocks the execution thread.",
      "Calls to 'confirm' are not allowed. Don't use `confirm`. It blocks the execution thread.",
      "Calls to 'alert' are not allowed. Don't use `alert`. It blocks the execution thread.",
    ]);
  });
});
