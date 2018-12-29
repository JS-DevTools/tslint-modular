"use strict";

/**
 * Rules that enforce naming conventions
 */
module.exports = {
  rules: {
    /**
     * Enforces PascalCased class and interface names.
     *
     * @see https://palantir.github.io/tslint/rules/class-name/
     */
    "class-name": true,

    /**
     * Enforces a consistent file naming convention
     *
     * @see https://palantir.github.io/tslint/rules/file-name-casing/
     */
    "file-name-casing": {
      severity: "default",
      options: [
        "kebab-case"
      ]
    },

    /**
     * Requires interface names to begin with a capital `I`
     *
     * @see https://palantir.github.io/tslint/rules/interface-name/
     */
    "interface-name": {
      severity: "default",
      options: [
        "never-prefix"
      ]
    },

    /**
     * Requires that a default import have the same name as the declaration it imports.
     * Does nothing for anonymous default exports.
     *
     * @see https://palantir.github.io/tslint/rules/match-default-export-name/
     */
    "match-default-export-name": true,

    /**
     * Checks variable names for various errors.
     *
     * @see https://palantir.github.io/tslint/rules/variable-name/
     */
    "variable-name": {
      severity: "default",
      options: [
        "ban-keywords",
        "check-format",
        "allow-leading-underscore",
      ]
    },

  }
};
