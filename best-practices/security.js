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
     *
     * This rule is currently disabled because there are no modules to blacklist yet.
     * But there may be some that are blacklisted for security reasons at some point.
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
