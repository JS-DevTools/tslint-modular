"use strict";

/**
 * Rules that prevent accidental bugs and runtime errors
 */
module.exports = {
  rules: {
    /**
     * Warns for an awaited value that is not a Promise.
     *
     * @see https://palantir.github.io/tslint/rules/await-promise/
     */
    "await-promise": true,

    /**
     * Bans “// @ts-ignore” comments from being used.
     *
     * @see https://palantir.github.io/tslint/rules/ban-ts-ignore/
     *
     * This rule is disabled because whenever a @ts-ignore comment is needed, it should include
     * an explanation of why.  I wish there was a TSLint rule to enforce that.
     */
    "ban-ts-ignore": false,

    /**
     * Requires a `for ... in` statement to be filtered with an `if` statement.
     *
     * @see https://palantir.github.io/tslint/rules/forin/
     */
    forin: true,

    /**
     * Disallows bitwise operators.
     *
     * @see https://palantir.github.io/tslint/rules/no-bitwise/
     */
    "no-bitwise": true,

    /**
     * Disallows any type of assignment in conditionals.
     *
     * @see https://palantir.github.io/tslint/rules/no-conditional-assignment/
     */
    "no-conditional-assignment": true,

    /**
     * Disallows access to the constructors of `String`, `Number`, and `Boolean`.
     *
     * @see https://palantir.github.io/tslint/rules/no-construct/
     */
    "no-construct": true,

    /**
     * Disallows `debugger` statements.
     *
     * @see https://palantir.github.io/tslint/rules/no-debugger/
     */
    "no-debugger": true,

    /**
     * Warns if `super()` appears twice in a constructor.
     *
     * @see https://palantir.github.io/tslint/rules/no-duplicate-super/
     */
    "no-duplicate-super": true,

    /**
     * Prevents duplicate cases in switch statements.
     *
     * @see https://palantir.github.io/tslint/rules/no-duplicate-switch-case/
     */
    "no-duplicate-switch-case": true,

    /**
     * Disallows duplicate variable declarations in the same block scope.
     *
     * @see https://palantir.github.io/tslint/rules/no-duplicate-variable/
     */
    "no-duplicate-variable": {
      severity: "default",
      options: [
        "check-parameters"
      ]
    },

    /**
     * Bans usage of the delete operator with computed key expressions.
     *
     * @see https://palantir.github.io/tslint/rules/no-dynamic-delete/
     */
    "no-dynamic-delete": true,

    /**
     * Disallows empty blocks.
     *
     * @see https://palantir.github.io/tslint/rules/no-empty/
     */
    "no-empty": {
      severity: "warning"
    },

    /**
     * Forbids empty interfaces.
     *
     * @see https://palantir.github.io/tslint/rules/no-empty-interface/
     */
    "no-empty-interface": true,

    /**
     * Promises returned by functions must be handled appropriately.
     *
     * @see https://palantir.github.io/tslint/rules/no-floating-promises/
     */
    "no-floating-promises": true,

    /**
     * Disallows iterating over an array with a for-in loop.
     *
     * @see https://palantir.github.io/tslint/rules/no-for-in-array/
     */
    "no-for-in-array": true,

    /**
     * Disallows importing modules that are not listed as dependency in the project`s package.json
     *
     * @see https://palantir.github.io/tslint/rules/no-implicit-dependencies/
     */
    "no-implicit-dependencies": {
      severity: "default",
      options: [
        "dev"   // Allow importing type definitions from devDependencies
      ]
    },

    /**
     * Avoid import statements with side-effect.
     *
     * @see https://palantir.github.io/tslint/rules/no-import-side-effect/
     */
    "no-import-side-effect": {
      severity: "default",
      options: [{
        "ignore-module": "source-map-support/register"
      }]
    },

    /**
     * Disallow type inference of {} (empty object type) at function and constructor call sites
     *
     * @see https://palantir.github.io/tslint/rules/no-inferred-empty-object-type/
     */
    "no-inferred-empty-object-type": true,

    /**
     * Warns on use of `${` in non-template strings.
     *
     * @see https://palantir.github.io/tslint/rules/no-invalid-template-strings/
     */
    "no-invalid-template-strings": true,

    /**
     * Warns on apparent attempts to define constructors for interfaces or `new` for classes.
     *
     * @see https://palantir.github.io/tslint/rules/no-misused-new/
     */
    "no-misused-new": true,

    /**
     * Disallows non-null assertions using the `!` postfix operator.
     *
     * @see https://palantir.github.io/tslint/rules/no-non-null-assertion/
     *
     * This rule is disabled because there are many cases where TypeScript is unable to
     * determine that a value is non-null.
     */
    "no-non-null-assertion": false,

    /**
     * Forbids an object literal to appear in a type assertion expression.
     * Casting to `any` or to `unknown` is still allowed.
     *
     * @see https://palantir.github.io/tslint/rules/no-object-literal-type-assertion/
     */
    "no-object-literal-type-assertion": true,

    /**
     * Disallows shadowing variable declarations.
     *
     * @see https://palantir.github.io/tslint/rules/no-shadowed-variable/
     */
    "no-shadowed-variable": {
      severity: "warning"
    },

    /**
     * Forbids array literals to contain missing elements.
     *
     * @see https://palantir.github.io/tslint/rules/no-sparse-arrays/
     */
    "no-sparse-arrays": true,

    /**
     * Warns when a method is used outside of a method call.
     *
     * @see https://palantir.github.io/tslint/rules/no-unbound-method/
     */
    "no-unbound-method": {
      severity: "default",
      options: [
        "ignore-static"
      ]
    },

    /**
     * Warns when using an expression of type `any` in a dynamic way.
     * Uses are only allowed if they would work for `{} | null | undefined`.
     * Type casts and tests are allowed.
     * Expressions that work on all values (such as `"" + x`) are allowed.
     *
     * @see https://palantir.github.io/tslint/rules/no-unsafe-any/
     */
    "no-unsafe-any": true,

    /**
     * Disallows control flow statements, such as `return`, `continue`,
     * `break` and `throws` in finally blocks.
     *
     * @see https://palantir.github.io/tslint/rules/no-unsafe-finally/
     */
    "no-unsafe-finally": true,

    /**
     * Disallows usage of variables before their declaration.
     *
     * @see https://palantir.github.io/tslint/rules/no-use-before-declare/
     *
     * This rule is disabled because it voilates the Clean Code "newspaper order" principle.
     */
    "no-use-before-declare": false,

    /**
     * Requires expressions of type `void` to appear in statement position.
     *
     * @see https://palantir.github.io/tslint/rules/no-void-expression/
     */
    "no-void-expression": {
      severity: "default",
      options: [
        "ignore-arrow-function-shorthand"
      ]
    },

    /**
     * Requires any function or method that returns a promise to be marked async.
     *
     * @see https://palantir.github.io/tslint/rules/promise-function-async/
     */
    "promise-function-async": {
      severity: "default",
      options: [
        "check-function-declaration",
        "check-method-declaration"
      ]
    },

    /**
     * Requires the radix parameter to be specified when calling `parseInt`.
     *
     * @see https://palantir.github.io/tslint/rules/radix/
     */
    radix: true,

    /**
     * When adding two variables, operands must both be of type number or of type string.
     *
     * @see https://palantir.github.io/tslint/rules/restrict-plus-operands/
     */
    "restrict-plus-operands": true,

    /**
     * Restricts the types allowed in boolean expressions. By default only booleans are allowed.
     *
     * The following nodes are checked:
     *
     *   - Arguments to the `!`, `&&`, and `||` operators
     *   - The condition in a conditional expression (`cond ? x : y`)
     *   - Conditions for `if`, `for`, `while`, and `do-while` statements.
     *
     * @see https://palantir.github.io/tslint/rules/strict-boolean-expressions/
     *
     * This rule is disabled because truthy and falsy assertions are a common and well-accepted
     * practice in JavaScript.
     */
    "strict-boolean-expressions": false,

    /**
     * Warns for type predicates that are always true or always false.
     * Works for `typeof` comparisons to constants (e.g. `typeof foo === "string"`), and equality comparison to `null`/`undefined`.
     * (TypeScript won't let you compare `1 === 2`, but it has an exception for `1 === undefined`.)
     * Does not yet work for `instanceof`.
     * Does not warn for `if (x.y)` where `x.y` is always truthy. For that, see strict-boolean-expressions.
     *
     * This rule requires `strictNullChecks` to work properly.
     *
     * @see https://palantir.github.io/tslint/rules/strict-type-predicates/
     *
     * This rule is disabled because it's often necessary to add `typeof` checks that the TypeScript
     * compiler thinks are unnecessary.
     */
    "strict-type-predicates": false,

    /**
     * Require a `default` case in all `switch` statements.
     *
     * @see https://palantir.github.io/tslint/rules/switch-default/
     */
    "switch-default": true,

    /**
     * Checks whether the final clause of a switch statement ends in `break;`.
     *
     * @see https://palantir.github.io/tslint/rules/switch-final-break/
     */
    "switch-final-break": {
      severity: "default",
      options: ["always"]
    },

    /**
     * Requires `===` and `!==` in place of `==` and `!=`.
     *
     * @see https://palantir.github.io/tslint/rules/triple-equals/
     */
    "triple-equals": true,

    /**
     * Requires type definitions to exist.
     *
     * @see https://palantir.github.io/tslint/rules/typedef/
     *
     * This rule is disabled because it conflicts with "no-inferable-types".
     * See https://github.com/palantir/tslint/issues/711
     */
    typedef: false,

    /**
     * Prevents blank constructors, as they are redundant.
     *
     * @see https://palantir.github.io/tslint/rules/unnecessary-constructor/
     */
    "unnecessary-constructor": true,

    /**
     * Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
     *
     * @see https://palantir.github.io/tslint/rules/use-isnan/
     */
    "use-isnan": true,
  }
};
