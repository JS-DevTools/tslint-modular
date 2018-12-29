"use strict";

/**
 * Rules that disallow outdated or confusing syntax
 */
module.exports = {
  rules: {
    /**
     * Disallows the comma operator to be used.
     *
     * @see https://palantir.github.io/tslint/rules/ban-comma-operator/
     */
    "ban-comma-operator": true,

    /**
     * Prefer an interface declaration over a type literal (`type T = { ... }`)
     *
     * @see https://palantir.github.io/tslint/rules/interface-over-type-literal/
     */
    "interface-over-type-literal": true,

    /**
     * Only allows labels in sensible locations.
     *
     * @see https://palantir.github.io/tslint/rules/label-position/
     */
    "label-position": true,

    /**
     * Requires parentheses when invoking a constructor via the `new` keyword.
     *
     * @see https://palantir.github.io/tslint/rules/new-parens/
     */
    "new-parens": true,

    /**
     * Requires the use of `as Type` for type assertions instead of `<Type>`.
     *
     * @see https://palantir.github.io/tslint/rules/no-angle-bracket-type-assertion/
     */
    "no-angle-bracket-type-assertion": true,

    /**
     * Disallows usages of `any` as a type declaration.
     *
     * @see https://palantir.github.io/tslint/rules/no-any/
     */
    "no-any": {
      severity: "warning"
    },

    /**
     * Disallows use of `arguments.callee`.
     *
     * @see https://palantir.github.io/tslint/rules/no-arg/
     */
    "no-arg": true,

    /**
     * Warns on comparison to a boolean literal, as in `x === true`.
     *
     * @see https://palantir.github.io/tslint/rules/no-boolean-literal-compare/
     */
    "no-boolean-literal-compare": true,

    /**
     * Bans the use of specified `console` methods.
     *
     * @see https://palantir.github.io/tslint/rules/no-console/
     */
    "no-console": {
      // Console methods should only be used for CLIs,
      // and ONLY in the actual CLI code, NOT the accompanying library
      severity: "default",
    },

    /**
     * Disallows internal `module`
     *
     * @see https://palantir.github.io/tslint/rules/no-internal-module/
     */
    "no-internal-module": true,

    /**
     * Disallows use of internal `module`s and `namespace`s.
     *
     * @see https://palantir.github.io/tslint/rules/no-namespace/
     */
    "no-namespace": {
      severity: "default",
      options: ["allow-declarations"],
    },

    /**
     * Disallows parameter properties in class constructors.
     *
     * @see https://palantir.github.io/tslint/rules/no-parameter-properties/
     */
    "no-parameter-properties": true,

    /**
     * Disallows `/// <reference path=>` imports (use ES6-style imports instead).
     *
     * @see https://palantir.github.io/tslint/rules/no-reference/
     */
    "no-reference": true,

    /**
     * Don't `<reference types="foo" />` if you import `foo` anyway.
     *
     * @see https://palantir.github.io/tslint/rules/no-reference-import/
     */
    "no-reference-import": true,

    /**
     * Disallows invocation of `require()`.
     *
     * @see https://palantir.github.io/tslint/rules/no-require-imports/
     */
    "no-require-imports": true,

    /**
     * Disallows unnecessary `return await`.
     *
     * @see https://palantir.github.io/tslint/rules/no-return-await/
     */
    "no-return-await": true,

    /**
     * Forbids unnecessary string literal property access.
     * Allows `obj["prop-erty"]` (can`t be a regular property access).
     * Disallows `obj["property"]` (should be `obj.property`).
     *
     * @see https://palantir.github.io/tslint/rules/no-string-literal/
     */
    "no-string-literal": true,

    /**
     * Disallows unnecessary references to `this`.
     *
     * @see https://palantir.github.io/tslint/rules/no-this-assignment/
     */
    "no-this-assignment": {
      severity: "default",
      options: [{
        "allow-destructuring": true,
      }]
    },

    /**
     * Replaces `x => f(x)` with just `f`.
     * To catch more cases, enable `only-arrow-functions` and `arrow-return-shorthand` too.
     *
     * @see https://palantir.github.io/tslint/rules/no-unnecessary-callback-wrapper/
     */
    "no-unnecessary-callback-wrapper": true,

    /**
     * Disallows classes that are not strictly necessary.
     *
     * @see https://palantir.github.io/tslint/rules/no-unnecessary-class/
     */
    "no-unnecessary-class": {
      severity: "default",
      options: [
        "allow-empty-class"
      ]
    },

    /**
     * Forbids a `var`/`let` statement or destructuring initializer to be initialized to `undefined`.
     *
     * @see https://palantir.github.io/tslint/rules/no-unnecessary-initializer/
     */
    "no-unnecessary-initializer": {
      severity: "warning"
    },

    /**
     * Warns when a namespace qualifier (`A.x`) is unnecessary.
     *
     * @see https://palantir.github.io/tslint/rules/no-unnecessary-qualifier/
     */
    "no-unnecessary-qualifier": {
      severity: "warning"
    },

    /**
     * Warns if a type assertion does not change the type of an expression.
     *
     * @see https://palantir.github.io/tslint/rules/no-unnecessary-type-assertion/
     */
    "no-unnecessary-type-assertion": {
      severity: "warning"
    },

    /**
     * Disallows unused expression statements.
     *
     * @see https://palantir.github.io/tslint/rules/no-unused-expression/
     */
    "no-unused-expression": {
      severity: "default",
      options: [
        "allow-fast-null-checks"
      ]
    },

    /**
     * Disallows usage of the `var` keyword.
     *
     * @see https://palantir.github.io/tslint/rules/no-var-keyword/
     */
    "no-var-keyword": true,

    /**
     * Disallows the use of require statements except in import statements.
     *
     * @see https://palantir.github.io/tslint/rules/no-var-requires/
     */
    "no-var-requires": true,

    /**
     * Disallows traditional (non-arrow) function expressions.
     *
     * @see https://palantir.github.io/tslint/rules/only-arrow-functions/
     */
    "only-arrow-functions": {
      severity: "default",
      options: [
        "allow-declarations",
        "allow-named-functions"
      ]
    },

    /**
     * Recommends a `for-of` loop over a standard `for` loop if the index is only used to access the array being iterated.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-for-of/
     */
    "prefer-for-of": true,

    /**
     * Prefer `foo(): void` over `foo: () => void` in interfaces and types.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-method-signature/
     */
    "prefer-method-signature": true,

    /**
     * Enforces the use of the ES2018 object spread operator over `Object.assign()` where appropriate.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-object-spread/
     */
    "prefer-object-spread": true,

    /**
     * Prefer a `switch` statement to an `if` statement with simple `===` comparisons.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-switch/
     */
    "prefer-switch": true,

    /**
     * Prefer a template expression over string literal concatenation.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-template/
     */
    "prefer-template": false,

    /**
     * Prefer `while` loops instead of `for` loops without an initializer and incrementor.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-while/
     */
    "prefer-while": true,

    /**
     * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
     *
     * @see https://palantir.github.io/tslint/rules/unified-signatures/
     */
    "unified-signatures": {
      severity: "warning"
    },

    /**
     * Prevents unnecessary and/or misleading scope bindings on functions.
     *
     * @see https://palantir.github.io/tslint/rules/unnecessary-bind/
     */
    "unnecessary-bind": true,

  }
};
