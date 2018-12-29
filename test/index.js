"use strict";

/**
 * Rules for tests
 */
module.exports = {
  rules: {
    /**
     * Bans the use of specific functions or global methods.
     *
     * @see https://palantir.github.io/tslint/rules/ban/
     */
    ban: {
      severity: "warning",
      options: [
        { name: ["describe", "only"], message: "Don't forget to remove this .only" },
        { name: ["it", "only"], message: "Don't forget to remove this .only" },
      ],
    },
  }
};
