"use strict";

/**
 * Rules that prevent security vulnerabilities.
 */
module.exports = {
  rules: {
    /**
     * Prevents using the built-in Function constructor.
     *
     * @see https://palantir.github.io/tslint/rules/function-constructor/
     */
    "function-constructor": true,

    /**
     * Disallows importing the specified modules via `import` and `require`,
     * or importing specific named exports of the specified modules.
     *
     * @see https://palantir.github.io/tslint/rules/import-blacklist/
     */
    "import-blacklist": false,

    /**
     * Disallows `eval` function invocations.
     *
     * @see https://palantir.github.io/tslint/rules/no-eval/
     */
    "no-eval": true,

  }
};
