"use strict";

/**
 * Rules that enforce whitespace conventions
 */
module.exports = {
  rules: {
    /**
     * Enforces vertical alignment.
     *
     * @see https://palantir.github.io/tslint/rules/align/
     */
    align: {
      severity: "default",
      options: [
        "parameters",
        "arguments",
        "statements",
        "elements",
        "members"
      ]
    },

    /**
     * Enforces UTF-8 file encoding.
     *
     * @see https://palantir.github.io/tslint/rules/encoding/
     */
    encoding: true,

    /**
     * Ensures the file ends with a newline.
     *
     * @see https://palantir.github.io/tslint/rules/eofline/
     */
    eofline: true,

    /**
     * Ensures proper spacing between import statement keywords
     *
     * @see https://palantir.github.io/tslint/rules/import-spacing/
     */
    "import-spacing": true,

    /**
     * Enforces indentation with tabs or spaces.
     *
     * @see https://palantir.github.io/tslint/rules/indent/
     */
    indent: {
      severity: "default",
      options: ["spaces", 2]
    },

    /**
     * Enforces a consistent linebreak style.
     *
     * @see https://palantir.github.io/tslint/rules/linebreak-style/
     */
    "linebreak-style": {
      severity: "default",
      options: ["LF"],
    },

    /**
     * Enforces blank line before return when not the only line in the block.
     *
     * @see https://palantir.github.io/tslint/rules/newline-before-return/
     */
    "newline-before-return": true,

    /**
     * Requires that chained method calls be broken apart onto separate lines.
     *
     * @see https://palantir.github.io/tslint/rules/newline-per-chained-call/
     */
    "newline-per-chained-call": true,

    /**
     * Disallows one or more blank lines in a row.
     *
     * @see https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/
     */
    "no-consecutive-blank-lines": {
      severity: "default",
      options: [2]
    },

    /**
     * Disallow irregular whitespace within a file, including strings and comments.
     *
     * @see https://palantir.github.io/tslint/rules/no-irregular-whitespace/
     */
    "no-irregular-whitespace": true,

    /**
     * Disallows trailing whitespace at the end of a line.
     *
     * @see https://palantir.github.io/tslint/rules/no-trailing-whitespace/
     */
    "no-trailing-whitespace": {
      severity: "default",
      options: [
        "ignore-template-strings",
      ],
    },

    /**
     * Requires the specified tokens to be on the same line as the expression preceding them.
     *
     * @see https://palantir.github.io/tslint/rules/one-line/
     */
    "one-line": {
      severity: "default",
      options: [
        "check-open-brace",
        "check-whitespace"
      ]
    },

    /**
     * Require or disallow a space before function parenthesis
     *
     * @see https://palantir.github.io/tslint/rules/space-before-function-paren/
     */
    "space-before-function-paren": {
      severity: "default",
      options: [
        {
          anonymous: "never",
          asyncArrow: "always",
          method: "never",
          named: "never",
          constructor: "never",
        }
      ]
    },

    /**
     * Enforces spaces within parentheses or disallow them.  Empty parentheses () are always allowed.
     *
     * @see https://palantir.github.io/tslint/rules/space-within-parens/
     */
    "space-within-parens": {
      severity: "default",
      options: [0]
    },

    /**
     * Requires or disallows whitespace for type definitions.
     *
     * @see https://palantir.github.io/tslint/rules/typedef-whitespace/
     */
    "typedef-whitespace": {
      severity: "default",
      options: [
        {
          "call-signature": "nospace",
          "index-signature": "nospace",
          parameter: "nospace",
          "property-declaration": "nospace",
          "variable-declaration": "nospace"
        },
        {
          "call-signature": "onespace",
          "index-signature": "onespace",
          parameter: "onespace",
          "property-declaration": "onespace",
          "variable-declaration": "onespace"
        }
      ]
    },

    /**
     * Enforces whitespace style conventions.
     *
     * @see https://palantir.github.io/tslint/rules/whitespace/
     */
    whitespace: {
      severity: "default",
      options: [
        "check-branch",
        "check-decl",
        "check-operator",
        "check-module",
        "check-separator",
        "check-type",
        "check-typecast",
        "check-preblock",
        "check-type-operator",
        "check-rest-spread"
      ]
    },
  }
};
