"use strict";

/**
 * Rules that are specific to browser-based apps and isomorphic libraries.
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
        { name: "alert", message: "Don't use `alert`.  It blocks the execution thread." },
        { name: ["window", "alert"], message: "Don't use `alert`.  It blocks the execution thread." },

        { name: "confirm", message: "Don't use `confirm`.  It blocks the execution thread." },
        { name: ["window", "confirm"], message: "Don't use `confirm`.  It blocks the execution thread." },

        { name: "prompt", message: "Don't use `prompt`.  It blocks the execution thread." },
        { name: ["window", "prompt"], message: "Don't use `prompt`.  It blocks the execution thread." },

        { name: "$", message: "You probably don't need jQuery. See http://youmightnotneedjquery.com" },
      ],
    },
  }
};
