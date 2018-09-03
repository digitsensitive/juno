/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Game Class
 * @license      Digitsensitive
 */
import { EventEmitter } from "../node_modules/eventemitter3";
export declare class Game extends EventEmitter {
    private canvas;
    private renderer;
    private scaleFactor;
    private paused;
    private fps;
    private step;
    private last;
    private time;
    private accumulator;
    constructor(config: any);
    start(state: any): void;
    private frame;
    update(interval: number, time: number): void;
    draw(renderer: number, frameState: number): void;
    pix(x: number, y: number): void;
}
