/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Random - Pseudorandom Number Generator (PRNG)
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
/**
 * Pseudorandom Number Generator (PRNG) class (Xorshift128+).
 * A shift/rotate-based linear transformation designed by Sebastiano Vigna
 * in collaboration with David Blackman.
 *
 * PRNG references:
 * https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131
 * https://v8.dev/blog/math-random
 * https://blog.abelotech.com/posts/generate-random-values-nodejs-javascript
 * https://en.wikipedia.org/wiki/List_of_random_number_generators
 *
 * Bitwise operations references:
 * https://github.com/FlorianWendelborn/bitwise
 */
export declare class Random {
    private state0;
    private state1;
    private n;
    constructor();
    xorshift128plus(): number;
    private sow;
    private hash;
    leftShift(value: number[], shift: number): number[];
    rightShift(value: number[], shift: number): number[];
    xor(value1: number[], value2: number[]): number[];
}
