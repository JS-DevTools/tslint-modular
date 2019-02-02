"use strict";

/**
 * Rules that enforce consistent coding conventions
 */
module.exports = {
  rules: {
    /**
     * Requires using either `T[]` or `Array' for arrays.
     *
     * @see https://palantir.github.io/tslint/rules/array-type/
     */
    "array-type": {
      severity: "default",
      options: [
        "array-simple"
      ]
    },

    /**
     * Requires parentheses around the parameters of arrow function definitions.
     *
     * @see https://palantir.github.io/tslint/rules/arrow-parens/
     */
    "arrow-parens": true,

    /**
     * Suggests to convert `() => { return x; }` to `() => x`.
     *
     * @see https://palantir.github.io/tslint/rules/arrow-return-shorthand/
     */
    "arrow-return-shorthand": true,

    /**
     * Bans specific types from being used. Does not ban the
     * corresponding runtime objects from being used.
     *
     * @see https://palantir.github.io/tslint/rules/ban-types/
     */
    "ban-types": {
      severity: "default",
      options: [
        ["Object", "Use `object` instead."],
        ["Boolean", "Use `boolean` instead."],
        ["Number", "Use `number` instead."],
        ["String", "Use `string` instead."],
        ["Symbol", "Use `symbol` instead."],
        ["Function", "Use a specific function type, like `() => void`."],
      ]
    },

    /**
     * In a binary expression, a literal should always be on the right-hand side if possible.
     * For example, prefer `x + 1` over `1 + x`.
     *
     * @see https://palantir.github.io/tslint/rules/binary-expression-operand-order/
     */
    "binary-expression-operand-order": true,

    /**
     * An interface or literal type with just a call signature can be written as a function type.
     *
     * @see https://palantir.github.io/tslint/rules/callable-types/
     */
    "callable-types": true,

    /**
     * Enforces braces for `if`/`for`/`do`/`while` statements.
     *
     * @see https://palantir.github.io/tslint/rules/curly/
     */
    curly: {
      severity: "default",
      options: ["ignore-same-line"],
    },

    /**
     * Enforces using explicit += 1 or -= 1 operators.
     *
     * @see https://palantir.github.io/tslint/rules/increment-decrement/
     *
     * This rule is disabled because the increment and decrement operators are nice syntax sugar.
     */
    "increment-decrement": false,

    /**
     * Requires lines to be under a certain max length.
     *
     * @see https://palantir.github.io/tslint/rules/max-line-length/
     */
    "max-line-length": {
      severity: "default",
      options: [{
        limit: 120,

        // Don't enforce line limit for import/export statements, class inheritance lines, or inline comments
        "ignore-pattern": "(^import |^export |class \w+ (extends|implements) |// |@see |https?:\/\/)"
      }],
    },

    /**
     * Requires explicit visibility declarations for class members.
     *
     * @see https://palantir.github.io/tslint/rules/member-access/
     */
    "member-access": {
      severity: "default",
      options: [
        "check-accessor",
        "check-constructor",
        "check-parameter-property"
      ]
    },

    /**
     * Enforces member ordering.
     *
     * @see https://palantir.github.io/tslint/rules/member-ordering/
     */
    "member-ordering": {
      severity: "default",
      options: [{
        alphabetize: false,
        order: [
          "static-field",
          "instance-field",
          "constructor",
          "static-method",
          "instance-method",
        ],
      }],
    },

    /**
     * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
     *
     * @see https://palantir.github.io/tslint/rules/no-inferrable-types/
     */
    "no-inferrable-types": {
      severity: "default",
      options: [
        "ignore-params",
        "ignore-properties"
      ],
    },

    /**
     * Disallows use of the `null` keyword literal.
     *
     * @see https://palantir.github.io/tslint/rules/no-null-keyword/
     */
    "no-null-keyword": true,

    /**
     * Flags throwing plain strings or concatenations of strings.
     *
     * @see https://palantir.github.io/tslint/rules/no-string-throw/
     */
    "no-string-throw": true,

    /**
     * Checks that decimal literals should begin with `0.` instead of just `.`, and should not end with a trailing `0`.
     *
     * @see https://palantir.github.io/tslint/rules/number-literal-format/
     */
    "number-literal-format": true,

    /**
     * Enforces consistent object literal property quote style.
     *
     * @see https://palantir.github.io/tslint/rules/object-literal-key-quotes/
     */
    "object-literal-key-quotes": {
      severity: "default",
      options: [
        "as-needed"
      ]
    },

    /**
     * Enforces/disallows use of ES6 object literal shorthand.
     *
     * @see https://palantir.github.io/tslint/rules/object-literal-shorthand/
     */
    "object-literal-shorthand": true,

    /**
     * Checks ordering of keys in object literals.
     *
     * When using the default alphabetical ordering, additional blank lines may be used to group
     * object properties together while keeping the elements within each group in alphabetical order.
     *
     * @see https://palantir.github.io/tslint/rules/object-literal-sort-keys/
     *
     * This rule is disabled because it's often more clear to group related keys rather than
     * sorting them alphabetically or as-defined.
     */
    "object-literal-sort-keys": false,

    /**
     * Disallows multiple variable definitions in the same declaration statement.
     *
     * @see https://palantir.github.io/tslint/rules/one-variable-per-declaration/
     *
     * This rule is disabled because it's often convenient (and more concise) to combine
     * varible declarations.
     */
    "one-variable-per-declaration": false,

    /**
     * Requires that import statements be alphabetized and grouped.
     *
     * @see https://palantir.github.io/tslint/rules/ordered-imports/
     */
    "ordered-imports": {
      severity: "default",
      options: [
        {
          "import-sources-order": "case-insensitive",
          "grouped-imports": false,
          "named-imports-order": "case-insensitive",
          "module-source-path": "full"
        }
      ]
    },

    /**
     * Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-conditional-expression/
     *
     * This rule is disabled because an `if...else` statement is often clearer than a conditional expression.
     */
    "prefer-conditional-expression": false,

    /**
     * Requires that variable declarations use `const` instead of `let` and `var` if possible.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-const/
     *
     * This rule is disabled because `const` should be reserved for things that represent constant
     * values, not just any variable that happens to not be reassigned.
     */
    "prefer-const": false,

    /**
     * Warns for class methods that do not use `this`.
     *
     * @see https://palantir.github.io/tslint/rules/prefer-function-over-method/
     */
    "prefer-function-over-method": {
      severity: "default",
      options: [
        "allow-public",
        "allow-protected"
      ],
    },

    /**
     * Enforces quote character for string literals.
     *
     * @see https://palantir.github.io/tslint/rules/quotemark/
     */
    quotemark: {
      severity: "default",
      options: [
        "double",
        "avoid-escape",
        "jsx-double"
      ]
    },

    /**
     * Prefer `return;` in void functions and `return undefined;` in value-returning functions.
     *
     * @see https://palantir.github.io/tslint/rules/return-undefined/
     */
    "return-undefined": true,

    /**
     * Enforces consistent semicolon usage at the end of every statement.
     *
     * @see https://palantir.github.io/tslint/rules/semicolon/
     */
    semicolon: {
      severity: "default",
      options: ["always"]
    },

    /**
     * Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings,
     * named imports and exports and function parameters.
     *
     * @see https://palantir.github.io/tslint/rules/trailing-comma/
     */
    "trailing-comma": {
      severity: "default",
      options: [{
        esSpecCompliant: true,
        multiline: "ignore",
        singleline: "never"
      }],
    },

    /**
     * Checks that type literal members are separated by semicolons.
     * Enforces a trailing semicolon for multiline type literals.
     *
     * @see https://palantir.github.io/tslint/rules/type-literal-delimiter/
     */
    "type-literal-delimiter": true,

    /**
     * Warns if an explicitly specified type argument is the default for that type parameter.
     *
     * @see https://palantir.github.io/tslint/rules/use-default-type-parameter/
     */
    "use-default-type-parameter": true,

  }
};
