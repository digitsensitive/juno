"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Game Class
 * @license      Digitsensitive
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = require("../node_modules/eventemitter3");
var now = require("../node_modules/performance-now");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(config) {
        var _this = _super.call(this) || this;
        _this.last = 0;
        _this.time = 0;
        _this.accumulator = 0;
        _this.canvas = document.getElementById(config.name);
        _this.renderer = _this.canvas.getContext("2d");
        _this.renderer.imageSmoothingEnabled = false;
        _this.scaleFactor = config.scale || 1;
        _this.renderer.scale(_this.scaleFactor, _this.scaleFactor);
        _this.canvas.width =
            config.width * _this.scaleFactor || 64 * _this.scaleFactor;
        _this.canvas.height =
            config.height * _this.scaleFactor || 64 * _this.scaleFactor;
        _this.paused = true;
        _this.fps = 60;
        _this.step = 1 / _this.fps;
        return _this;
    }
    Game.prototype.start = function (state) {
        this.paused = false;
        this.last = now();
        this.time = 0;
        this.accumulator = 0;
        this.emit("start", state);
        //raf(this.frame.bind(this));
    };
    Game.prototype.frame = function (time) {
        if (!this.paused) {
            var newTime = now();
            var dt = (newTime - this.last) / 1000;
            if (dt > 0.2)
                dt = this.step;
            this.accumulator += dt;
            this.last = newTime;
            while (this.accumulator >= this.step) {
                this.time += this.step;
                this.accumulator -= this.step;
                this.update(this.step, this.time);
            }
            this.draw(this.renderer, this.accumulator / this.step);
            //  raf(this.frame.bind(this));
        }
    };
    Game.prototype.update = function (interval, time) {
        this.emit("update", interval, time);
    };
    Game.prototype.draw = function (renderer, frameState) {
        this.emit("draw", renderer, frameState);
    };
    Game.prototype.pix = function (x, y) {
        var rc = Math.floor(Math.random() * 255);
        var xPos = x * this.scaleFactor;
        var yPos = y * this.scaleFactor;
        this.renderer.fillStyle = "rgba(" + rc + ",0,0,1)";
        this.renderer.fillRect(xPos, yPos, this.scaleFactor, this.scaleFactor);
    };
    return Game;
}(eventemitter3_1.EventEmitter));
exports.Game = Game;
