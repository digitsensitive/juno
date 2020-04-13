"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Vectors
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vector2d_1 = require("./vector2d");
/**
 * Addition of two 2D Vectors.
 * @param a
 * @param b
 */
function vector2DAddition(a, b) {
    return new vector2d_1.Vector2D(a.getX() + b.getX(), a.getY() + b.getY());
}
exports.vector2DAddition = vector2DAddition;
/**
 * Subtraction of two 2D Vectors.
 * @param a
 * @param b
 */
function vector2DSubtraction(a, b) {
    return new vector2d_1.Vector2D(a.getX() - b.getX(), a.getY() - b.getY());
}
exports.vector2DSubtraction = vector2DSubtraction;
