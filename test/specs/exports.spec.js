"use strict";

const path = require("path");
const chai = require("chai");
const glob = require("glob");
const manifest = require("../../package.json");

const expect = chai.expect;
chai.should();

const modules = [].concat(
  glob.sync("*.js"),
  glob.sync("*/*.js")
);

describe("Module exports", () => {
  describe("index", () => {
    const index = require("../../");

    it("should be an object", () => {
      expect(index).to.be.an("object");
    });

    it("should extend other modules", () => {
      index.should.have.keys("extends");
      index.extends.should.be.an("array");
    });

    it("should not contain any rules", () => {
      index.should.not.have.keys("rules");
    });
  });

  for (let moduleName of modules) {
    const module = require("../../" + moduleName);
    const rules = Object.keys(module.rules || {});

    describe(moduleName, () => {
      it("should be included in the package.json file", () => {
        for (let file of manifest.files) {
          if (file === moduleName) {
            // This file is explicitly included in the package.json
            return;
          }
          else if (file === path.dirname(moduleName)) {
            // This file's parent directory is included in the package.json
            return;
          }
        }

        expect(manifest.files).to.include(moduleName);
      });

      it("should export an object", () => {
        expect(module).to.be.an("object");
      });

      it("should only contain valid TSLint settings", () => {
        module.should.contain.any.keys("extends", "env", "rules", "parser", "parserOptions");
      });

      it("should contain rules in alphabetical order", () => {
        let sortedRules = rules.slice().sort();
        rules.should.deep.equal(sortedRules);
      });

      it("should have valid settings for each rule", () => {
        for (let ruleName of rules) {
          let rule = module.rules[ruleName];

          if (typeof rule === "boolean") {
            // The rule is either disabled or enabled without any settings
          }
          else {
            rule.should.be.an("object").and.not.an("array");
            rule.should.include.keys("severity");
            rule.severity.should.be.a("string").and.oneOf(["default", "warning"]);

            if (rule.options) {
              rule.options.should.be.an("array").and.not.empty;
            }
          }
        }
      });
    });
  }
});
