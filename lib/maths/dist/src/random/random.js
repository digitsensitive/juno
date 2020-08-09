"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Random
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.getRandomFloat = exports.getRandomNumber = void 0;
/**
 * Generate a random number between 0 (inclusive) and 1 (exclusive).
 */
function getRandomNumber() {
    return Math.random();
}
exports.getRandomNumber = getRandomNumber;
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
exports.getRandomFloat = getRandomFloat;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
