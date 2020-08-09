"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Random
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = require("./random");
Object.defineProperty(exports, "getRandomNumber", { enumerable: true, get: function () { return random_1.getRandomNumber; } });
Object.defineProperty(exports, "getRandomFloat", { enumerable: true, get: function () { return random_1.getRandomFloat; } });
Object.defineProperty(exports, "getRandomInt", { enumerable: true, get: function () { return random_1.getRandomInt; } });
var pseudorandom_number_generator_1 = require("./pseudorandom-number-generator");
Object.defineProperty(exports, "Random", { enumerable: true, get: function () { return pseudorandom_number_generator_1.Random; } });
