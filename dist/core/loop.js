"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: Game Loop
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLoop = void 0;
const eventemitter3_1 = require("eventemitter3");
const performance_now_1 = require("./polyfills/performance.now");
class GameLoop extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        this.fps = 60;
        this.paused = false;
        this.step = 1 / this.fps;
    }
    /**
     * Start the game loop
     * @param state [name of the state to start]
     */
    start() {
        this.init();
        this.paused = false;
        this.currentTime = performance_now_1.ElapsedTime();
        this.accumulator = 0;
        this.frame();
    }
    /**
     * Execution of one frame (= tick).
     */
    frame() {
        if (!this.paused) {
            let newTime = performance_now_1.ElapsedTime();
            // it is important that frameTime is in seconds
            // because this.step is also in seconds
            let frameTime = (newTime - this.currentTime) / 1000;
            this.currentTime = newTime;
            this.accumulator += frameTime;
            while (this.accumulator >= this.step) {
                this.update(this.step);
                this.accumulator -= this.step;
            }
            this.render(this.accumulator / this.step);
            requestAnimationFrame(this.frame.bind(this));
        }
    }
    /**
     * Init the game
     */
    init() {
        this.emit("init");
    }
    /**
     * Update the game
     * @param interval [interval in seconds]
     */
    update(interval) {
        this.emit("update", interval);
    }
    /**
     * Render the game
     * @param delta [delta in seconds]
     */
    render(delta) {
        this.emit("render", delta);
    }
}
exports.GameLoop = GameLoop;
