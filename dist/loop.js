"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Game Loop
 *
 * This is the core game loop of the juno html5 game framework.
 * Juno uses a fixed update time step with a variable rendering. This
 * means, that it updates with a fixed time step, but can drop rendering
 * frames to catch up.
 *
 * The Game Loop makes use of EventEmitter to communicate.
 *
 * Regarding Request Animation Frame Juno uses the most basic implementation.
 *
 * Regarding Time Juno uses the most basic implementation of performane.now
 * (see polyfills/performance.now.ts).
 *
 * References:
 * http://gameprogrammingpatterns.com/game-loop.html (Date: 2018-09-09)
 * https://gafferongames.com/post/fix_your_timestep (Date: 2018-09-09)
 * http://www.koonsolo.com/news/dewitters-gameloop (Date: 2018-09-09)
 * https://github.com/sethvincent/gameloop (Date: 2018-09-09)
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
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
var performance_now_1 = require("./polyfills/performance.now");
var GameLoop = /** @class */ (function (_super) {
    __extends(GameLoop, _super);
    function GameLoop() {
        var _this = _super.call(this) || this;
        _this.fps = 60;
        _this.paused = false;
        _this.step = 1 / _this.fps;
        return _this;
    }
    /**
     * Start the game loop
     * @param state [name of the state to start]
     */
    GameLoop.prototype.start = function (state) {
        this.paused = false;
        this.currentTime = performance_now_1.ElapsedTime();
        this.accumulator = 0;
        requestAnimationFrame(this.frame.bind(this));
    };
    /**
     * Execution of one frame (= tick).
     */
    GameLoop.prototype.frame = function () {
        if (!this.paused) {
            var newTime = performance_now_1.ElapsedTime();
            // it is important that frameTime is in seconds
            // because this.step is also in seconds
            var frameTime = (newTime - this.currentTime) / 1000;
            this.currentTime = newTime;
            this.accumulator += frameTime;
            while (this.accumulator >= this.step) {
                this.update(this.step);
                this.accumulator -= this.step;
            }
            this.render(this.accumulator / this.step);
            requestAnimationFrame(this.frame.bind(this));
        }
    };
    /**
     * Update the game
     * @param interval [interval in seconds]
     */
    GameLoop.prototype.update = function (interval) {
        this.emit("update", interval);
    };
    /**
     * Render the game
     * @param delta [delta in seconds]
     */
    GameLoop.prototype.render = function (delta) {
        this.emit("render", delta);
    };
    return GameLoop;
}(eventemitter3_1.EventEmitter));
exports.GameLoop = GameLoop;
