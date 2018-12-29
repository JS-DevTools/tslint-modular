"use strict";

/**
 * Rules that are specific to Node.js apps and libraries.
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
        // { name: "Buffer", message: "Use TypedArrays instead of Buffer." },
        { name: ["fs", "access"], message: "Use fs.promises.access() insead." },
        { name: ["fs", "appendFile"], message: "Use fs.promises.appendFile() insead." },
        { name: ["fs", "chmod"], message: "Use fs.promises.chmod() insead." },
        { name: ["fs", "chown"], message: "Use fs.promises.chown() insead." },
        { name: ["fs", "copyFile"], message: "Use fs.promises.copyFile() insead." },
        { name: ["fs", "lchmod"], message: "Use fs.promises.lchmod() insead." },
        { name: ["fs", "lchown"], message: "Use fs.promises.lchown() insead." },
        { name: ["fs", "link"], message: "Use fs.promises.link() insead." },
        { name: ["fs", "lstat"], message: "Use fs.promises.lstat() insead." },
        { name: ["fs", "mkdir"], message: "Use fs.promises.mkdir() insead." },
        { name: ["fs", "mkdtemp"], message: "Use fs.promises.mkdtemp() insead." },
        { name: ["fs", "open"], message: "Use fs.promises.open() insead." },
        { name: ["fs", "readdir"], message: "Use fs.promises.readdir() insead." },
        { name: ["fs", "readFile"], message: "Use fs.promises.readFile() insead." },
        { name: ["fs", "readlink"], message: "Use fs.promises.readlink() insead." },
        { name: ["fs", "realpath"], message: "Use fs.promises.realpath() insead." },
        { name: ["fs", "rename"], message: "Use fs.promises.rename() insead." },
        { name: ["fs", "rmdir"], message: "Use fs.promises.rmdir() insead." },
        { name: ["fs", "stat"], message: "Use fs.promises.stat() insead." },
        { name: ["fs", "symlink"], message: "Use fs.promises.symlink() insead." },
        { name: ["fs", "truncate"], message: "Use fs.promises.truncate() insead." },
        { name: ["fs", "unlink"], message: "Use fs.promises.unlink() insead." },
        { name: ["fs", "utimes"], message: "Use fs.promises.utimes() insead." },
        { name: ["fs", "writeFile"], message: "Use fs.promises.writeFile() insead." },
      ],
    },
  }
};
