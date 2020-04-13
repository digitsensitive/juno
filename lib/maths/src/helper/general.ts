/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Helper - General
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */

/**
 * Convert a given degree value to the corresponding radian value.
 * @param degree
 */
export function degreeToRadians(degree: number): number {
  return degree * (Math.PI / 180);
}
