"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Helper - General
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.degreeToRadians = void 0;
/**
 * Convert a given degree value to the corresponding radian value.
 * @param degree
 */
function degreeToRadians(degree) {
    return degree * (Math.PI / 180);
}
exports.degreeToRadians = degreeToRadians;
