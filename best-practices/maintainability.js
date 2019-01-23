"use strict";

/**
 * Rules that make code more maintainable over time and by multiple people.
 */
module.exports = {
  rules: {
    /**
     * Enforces function overloads to be consecutive.
     *
     * @see https://palantir.github.io/tslint/rules/adjacent-overload-signatures/
     */
    "adjacent-overload-signatures": true,

    /**
     * Enforces a threshold of cyclomatic complexity.
     *
     * @see https://palantir.github.io/tslint/rules/cyclomatic-complexity/
     */
    "cyclomatic-complexity": {
      severity: "default",
      options: [30],
    },

    /**
     * Warns when deprecated APIs are used.
     *
     * @see https://palantir.github.io/tslint/rules/deprecation/
     */
    deprecation: {
      severity: "warning",
    },

    /**
     * A file may not contain more than the specified number of classes
     *
     * @see https://palantir.github.io/tslint/rules/max-classes-per-file/
     */
    "max-classes-per-file": {
      severity: "default",
      options: [1, "exclude-class-expressions"],
    },

    /**
     * Requires files to remain under a certain number of lines
     *
     * @see https://palantir.github.io/tslint/rules/max-file-line-count/
     */
    "max-file-line-count": {
      severity: "default",
      options: [1000],
    },

    /**
     * Disallows default exports in ES6-style modules.
     *
     * @see https://palantir.github.io/tslint/rules/no-default-export/
     */
    "no-default-export": true,

    /**
     * Don't allow default imports from local modules (e.g. "./foo", "../foo").
     * DO allow default imports from node_modules (e.g. "foo", "@scope/foo").
     * DO allow default imports from specific files (e.g. "./data.json", "../styles.css")
     *
     * @see https://palantir.github.io/tslint/rules/no-default-import/
     */
    "no-default-import": {
      severity: "default",
      options: [{
        fromModules: "^\\..*\\/[^.]+$"
      }]
    },

    /**
     * Disallows multiple import statements from the same module.
     *
     * @see https://palantir.github.io/tslint/rules/no-duplicate-imports/
     */
    "no-duplicate-imports": true,

    /**
     * Disallows the use constant number values outside of variable assignments.
     * When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
     *
     * @see https://palantir.github.io/tslint/rules/no-magic-numbers/
     *
     * This rule is disabled because there are too many exception cases where it's clearer
     * to use constant number values rather than creating variables.
     */
    "no-magic-numbers": false,

    /**
     * Disallows mergeable namespaces in the same file.
     *
     * @see https://palantir.github.io/tslint/rules/no-mergeable-namespace/
     */
    "no-mergeable-namespace": true,

    /**
     * Disallows reassigning parameters.
     *
     * @see https://palantir.github.io/tslint/rules/no-parameter-reassignment/
     *
     * This rule is disabled because it's often necessary to normalize multi-type parameters.
     */
    "no-parameter-reassignment": false,

    /**
     * Disallows importing any submodule.
     *
     * @see https://palantir.github.io/tslint/rules/no-submodule-imports/
     */
    "no-submodule-imports": {
      severity: "default",
      options: [
        "source-map-support/register"
      ]
    },

    /**
     * Requires that private variables are marked as `readonly` if they`re never modified outside of the constructor.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-readonly/
     */
    "prefer-readonly": true,

  }
};
