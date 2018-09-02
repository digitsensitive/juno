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
        this.canvas = document.getElementById(config.name);
        this.context = this.canvas.getContext("2d");
        this.context.imageSmoothingEnabled = false;
        this.scaleFactor = config.scale || 1;
        this.context.scale(this.scaleFactor, this.scaleFactor);
        this.canvas.width =
            config.width * this.scaleFactor || 64 * this.scaleFactor;
        this.canvas.height =
            config.height * this.scaleFactor || 64 * this.scaleFactor;
    }
    Game.prototype.pix = function (x, y) {
        var rc = Math.floor(Math.random() * 255);
        var xPos = x * this.scaleFactor;
        var yPos = y * this.scaleFactor;
        this.context.fillStyle = "rgba(" + rc + ",0,0,1)";
        this.context.fillRect(xPos, yPos, this.scaleFactor, this.scaleFactor);
    };
    Game.prototype.spr = function (nr, x, y) {
        var sprLoaded = false;
        var sprImage = new Image();
        sprImage.onload = function () {
            sprLoaded = true;
        };
        sprImage.src = "images/background.png";
    };
    Game.prototype.draw = function () {
        //if (bgReady) {
        //ctx.drawImage(bgImage, 0, 0);
        //}
    };
    return Game;
}());
exports.Game = Game;
