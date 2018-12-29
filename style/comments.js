"use strict";

/**
 * Rules that enforce conventions for comments and documentation
 */
module.exports = {
  rules: {
    /**
     * Enforces formatting rules for single-line comments.
     *
     * @see https://palantir.github.io/tslint/rules/comment-format/
     */
    "comment-format": {
      severity: "default",
      options: [
        "check-space",
        "check-uppercase"
      ]
    },

    /**
     * Allows a limited set of comment types
     *
     * @see https://palantir.github.io/tslint/rules/comment-type/
     */
    "comment-type": {
      severity: "default",
      options: [
        "singleline",
        "multiline",
        "doc",
        "directive"
      ]
    },

    /**
     * Enforces JSDoc comments for important items be filled out.
     *
     * @see https://palantir.github.io/tslint/rules/completed-docs/
     */
    "completed-docs": {
      severity: "default",
      options: [{
        // Require docs for all exports
        classes: { visibilities: "exported" },
        enums: { visibilities: "exported" },
        enummembers: { visibilities: "exported" },
        functions: { visibilities: "exported" },
        interfaces: { visibilities: "exported" },
        namespaces: { visibilities: "exported" },
        types: { visibilities: "exported" },
        variables: { visibilities: "exported" },

        // Require docs for all public methods of classes
        methods: { privacies: "public", locations: "all" },
        properties: false,
      }],
    },

    /**
     * Enforces a certain header comment for all files, matched by a regular expression.
     *
     * @see https://palantir.github.io/tslint/rules/file-header/
     */
    "file-header": false,

    /**
     * Enforces basic format rules for JSDoc comments.
     *
     * @see https://palantir.github.io/tslint/rules/jsdoc-format/
     */
    "jsdoc-format": {
      severity: "default",
      options: [
        "check-multiline-start"
      ]
    },

    /**
     * Forbids JSDoc which duplicates TypeScript functionality.
     *
     * @see https://palantir.github.io/tslint/rules/no-redundant-jsdoc/
     */
    "no-redundant-jsdoc": true,

  }
};
