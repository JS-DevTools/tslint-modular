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
        { name: "alert", message: "Don't use `alert`. It blocks the execution thread." },
        { name: ["window", "alert"], message: "Don't use `alert`. It blocks the execution thread." },

        { name: "confirm", message: "Don't use `confirm`. It blocks the execution thread." },
        { name: ["window", "confirm"], message: "Don't use `confirm`. It blocks the execution thread." },

        { name: "prompt", message: "Don't use `prompt`. It blocks the execution thread." },
        { name: ["window", "prompt"], message: "Don't use `prompt`. It blocks the execution thread." },

        { name: "$", message: "You probably don't need jQuery. See http://youmightnotneedjquery.com" },
      ],
    },

    /**
     * Bans `window` properties from being used as global variables.  This prevents you from
     * accidentally using a variable named something like `name` without defining it.  TypeScript
     * won't warn you about the undefined variable, because it'll assume you're using the
     * `window.name` property.
     *
     * @see https://palantir.github.io/tslint/rules/no-restricted-globals/
     */
    "no-restricted-globals": {
      severity: "default",
      options: [
        "name",     // https://developer.mozilla.org/en-US/docs/Web/API/Window/name
        "event",    // https://developer.mozilla.org/en-US/docs/Web/API/Window/event
        "length",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/length
        "self",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/self
        "parent",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/parent
        "origin",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/origin
        "top",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/top
        "status",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/status
        "performance",   // https://developer.mozilla.org/en-US/docs/Web/API/Window/performance
      ]
    }
  }
};
