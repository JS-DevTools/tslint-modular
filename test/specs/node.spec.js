"use strict";

const TSLint = require("../fixtures/tslint");
const chai = require("chai");
chai.should();

describe("tslint-modular/node", function () {
  it("should not be enforced if module is not used", function () {
    let results = TSLint.run(
      "tslint-modular/browser",
      `
      const fs = require("fs");
      const file = "some-file.txt";

      fs.exists(file, (err, exists) => {
        if (exists) {
          fs.unlink(file, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      });
      `
    );

    results.errors.should.deep.equal([]);
    results.warnings.should.deep.equal([]);
  });

  it("should warn about fs.exists() and callback versions of fs functions", function () {
    let results = TSLint.run(
      "tslint-modular/node",
      `
      const fs = require("fs");
      const file = "some-file.txt";

      fs.exists(file, (err, exists) => {
        if (exists) {
          fs.unlink(file, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      });
      `
    );

    results.errors.should.deep.equal([]);

    results.warnings.should.deep.equal([
      "ban",
      "ban",
    ]);

    results.warningMessages.should.deep.equal([
      "Calls to 'fs.exists' are not allowed. fs.exists() is deprecated. Use fs.stat() or fs.access() instead",
      "Calls to 'fs.unlink' are not allowed. Use fs.promises.unlink() insead.",
    ]);
  });
});
