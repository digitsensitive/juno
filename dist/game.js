"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Game Class
 * @license      Digitsensitive
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(config) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = config.width || 64;
        canvas.height = config.height || 64;
        this.canvas = canvas;
        document.body.appendChild(canvas);
    }
    return Game;
}());
exports.Game = Game;
