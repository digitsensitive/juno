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
import { EventEmitter } from "../../node_modules/eventemitter3";
export declare class GameLoop extends EventEmitter {
    private accumulator;
    private currentTime;
    private fps;
    private paused;
    private step;
    constructor();
    /**
     * Start the game loop
     * @param state [name of the state to start]
     */
    start(state: string): void;
    /**
     * Execution of one frame (= tick).
     */
    private frame;
    /**
     * Init the game
     */
    private init;
    /**
     * Update the game
     * @param interval [interval in seconds]
     */
    private update;
    /**
     * Render the game
     * @param delta [delta in seconds]
     */
    private render;
}
