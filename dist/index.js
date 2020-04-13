"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// juno core
__export(require("./core/game"));
// juno polyfills
__export(require("./core/polyfills/performance.now"));
