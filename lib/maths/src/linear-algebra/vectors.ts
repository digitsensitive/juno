/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Vectors
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */

import { Vector2D } from "./vector2d";

/**
 * Addition of two 2D Vectors.
 * @param a
 * @param b
 */
export function vector2DAddition(a: Vector2D, b: Vector2D): Vector2D {
  return new Vector2D(a.getX() + b.getX(), a.getY() + b.getY());
}

/**
 * Subtraction of two 2D Vectors.
 * @param a
 * @param b
 */
export function vector2DSubtraction(a: Vector2D, b: Vector2D): Vector2D {
  return new Vector2D(a.getX() - b.getX(), a.getY() - b.getY());
}
