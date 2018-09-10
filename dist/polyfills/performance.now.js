"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Performance Now
 *
 * The most basic implementation of getting the elapsed time in milliseconds
 * since time origin (time user has opened the browser window).
 *
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/API/Performance/now (Date: 2018-09-09)
 * https://www.w3schools.com/jsref/jsref_gettime.asp (Date: 2018-09-09)
 * https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now (Date: 2018-09-09)
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
function ElapsedTime() {
    if (window.performance && window.performance.now) {
        return window.performance.now();
    }
    else {
        return new Date().getTime();
    }
}
exports.ElapsedTime = ElapsedTime;
