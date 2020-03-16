Modular TSLint Configuration
===============================

[![Cross-Platform Compatibility](https://jstools.dev/img/badges/os-badges.svg)](https://github.com/JS-DevTools/tslint-modular/blob/master/.github/workflows/CI-CD.yaml)
[![Build Status](https://github.com/JS-DevTools/tslint-modular/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/tslint-modular/blob/master/.github/workflows/CI-CD.yaml)

[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/tslint-modular/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/tslint-modular)
[![Dependencies](https://david-dm.org/JS-DevTools/tslint-modular/dev-status.svg)](https://david-dm.org/JS-DevTools/tslint-modular?type=dev)

[![npm](https://img.shields.io/npm/v/@jsdevtools/tslint-modular.svg)](https://www.npmjs.com/package/@jsdevtools/tslint-modular)
[![License](https://img.shields.io/npm/l/@jsdevtools/tslint-modular.svg)](LICENSE)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/JS-DevTools/tslint-modular)

TSLint Modular is a set of [configuration presets](https://palantir.github.io/tslint/usage/configuration/#configuration-presets) for [TSLint](https://palantir.github.io/tslint/) that's broken-up into different modules that can be mixed-and-matched to match the needs of your project.

Each module defines rules that are meant to be reasonable defaults and best practices, but you can easily extend or override any of the rules to suit your needs.



Related Projects
-----------------------
- [eslint-config-modular](https://www.npmjs.com/package/eslint-config-modular) - Modular ESLint configuration



Installation
-----------------------
Run the following [npm](https://docs.npmjs.com/about-npm/) command to install [TSLint](https://palantir.github.io/tslint/) and `@jsdevtools/tslint-modular` as dev-dependencies of your project:

```bash
npm install tslint @jsdevtools/tslint-modular --save-dev
```



Usage
-----------------------
Configuration presets are designed to work with the `extends` feature of `tslint.yaml` files. You can learn more about
[configuration presets](https://palantir.github.io/tslint/usage/configuration/#configuration-presets) on the official TSLint website.

To use TSLint Modular in your project, create a `tslint.yaml` file with the following contents:

**tslint.yaml**
```yaml
extends:
  # These modules would be good for a library that runs in Node.js and web browsers
  - "@jsdevtools/tslint-modular/best-practices"
  - "@jsdevtools/tslint-modular/style"
  - "@jsdevtools/tslint-modular/node"
  - "@jsdevtools/tslint-modular/browser"

rules:
  # You can override or extend the rules here
```



Modules
-----------------------
TSLint Modular includes the following modules.  Mix-and-match them as applicable to your project.

### `@jsdevtools/tslint-modular/best-practices` <small>[(source)](./best-practices/index.js)</small>
Contains rules that prevent accidental bugs, insecure code, and bad coding practices.  You can use this module directly, or use any/all of its sub-modules.

#### `@jsdevtools/tslint-modular/best-practices/bugs` <small>[(source)](./best-practices/bugs.js)</small>
Prevents syntax that is likely to lead to accidental bugs or runtime errors.  Examples include not [duplicate variables](https://palantir.github.io/tslint/rules/no-duplicate-variable/), and [using `===` instead of `==`](https://palantir.github.io/tslint/rules/triple-equals) for comparisons. Most of the rules in this file will raise an error if violated, but some less-severe ones will only raise warnings.

#### `@jsdevtools/tslint-modular/best-practices/maintainability` <small>[(source)](./best-practices/maintainability.js)</small>
Helps you write code that is more maintainable over time and by multiple people.  For example, [limiting cyclomatic complexity](https://palantir.github.io/tslint/rules/cyclomatic-complexity) and [keeping files short](https://palantir.github.io/tslint/rules/max-file-line-count).

#### `@jsdevtools/tslint-modular/best-practices/security` <small>[(source)](./best-practices/security.js)</small>
Helps enforce security best-practices such as [avoiding the `eval()` statement](https://palantir.github.io/tslint/rules/no-eval) and [not calling the `Function` constructor](https://palantir.github.io/tslint/rules/function-constructor).

### `@jsdevtools/tslint-modular/browser` <small>[(source)](./browser/index.js)</small>
Bans bad practices for web-based code, such as [the `alert()` statement](https://eslint.org/docs/rules/no-alert#disallow-use-of-alert-no-alert) and the jQuery global.

### `@jsdevtools/tslint-modular/node` <small>[(source)](./node/index.js)</small>
Discourages deprecated and outdated Node.js code, such as [`fs.exists()`](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback). It encourages using more modern syntax, such as [the `fs.promises` API](https://nodejs.org/api/fs.html#fs_fs_promises_api).

### `@jsdevtools/tslint-modular/style` <small>[(source)](./style/index.js)</small>
Contains code-styling and consistency rules.    You can use this module directly, or use any/all of its sub-modules.

#### `@jsdevtools/tslint-modular/style/comments` <small>[(source)](./style/comments.js)</small>
Code-commenting rules, such as [documenting all public members](https://palantir.github.io/tslint/rules/completed-docs/), using [JSDoc format](https://palantir.github.io/tslint/rules/jsdoc-format/), and not [duplicating type information](https://palantir.github.io/tslint/rules/no-redundant-jsdoc/) in comments.

#### `@jsdevtools/tslint-modular/style/conventions` <small>[(source)](./style/conventions.js)</small>
Enforces an **opinionated** set of conventions, such as using [double-quotes](https://palantir.github.io/tslint/rules/quotemark/) and [semi-colons](https://palantir.github.io/tslint/rules/semicolon).

#### `@jsdevtools/tslint-modular/style/naming` <small>[(source)](./style/naming.js)</small>
Encourages good JavaScript naming conventions, such as [camel-case variables](https://palantir.github.io/tslint/rules/variable-name) and [capitialized classes](https://palantir.github.io/tslint/rules/class-name).

#### `@jsdevtools/tslint-modular/style/syntax` <small>[(source)](./style/syntax.js)</small>
Disallows outdated, nonstandard, and confusing syntax.  Examples include [labels](https://palantir.github.io/tslint/rules/label-position), [the comma operator](https://palantir.github.io/tslint/rules/ban-comma-operator), and [parameter properties](https://palantir.github.io/tslint/rules/no-parameter-properties).

#### `@jsdevtools/tslint-modular/style/whitespace` <small>[(source)](./style/whitespace.js)</small>
Enforces **opinionated** whitespace rules, such as [two-space indentation](https://palantir.github.io/tslint/rules/indent), [opening braces on the same line](https://palantir.github.io/tslint/rules/one-line), and [type definition spacing](https://palantir.github.io/tslint/rules/typedef-whitespace).

### `@jsdevtools/tslint-modular/test` <small>[(source)](./test/index.js)</small>
Warns about `describe.only()` and `it.only()` calls that may have accidentally been left in your test code.

> **Note:** We recommend that you create a separate `tslint.yaml` file in your test folder. That way, it can use different modules and rules than the rest of your codebase.



License
--------------------------
TSLint Modular is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

This package is [Treeware](http://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/JS-DevTools/tslint-modular) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
