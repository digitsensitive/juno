/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Game Class
 *
 * This is the core game class of Juno.
 * It initialize the canvas, the renderer and the game loop.
 *
 * For the canvas we create the canvas element in this class and append it
 * with appendChild on the div element of the index.html.
 * An alternative would be to use
 * <HTMLCanvasElement>document.getElementById(config.name) and in the index.html
 * put <canvas>. The problem with that approach is, that I could not append
 * other canvas to the main canvas.
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
import { API } from "./api";
export interface IGameConfig {
    name: string;
    scale: number;
    width?: number;
    height?: number;
}
export declare class Game {
    isJunoRunning(): void;
    private canvas;
    private renderer;
    private scaleFactor;
    api: API;
    private gameLoop;
    private gameStates;
    constructor(config: IGameConfig);
    /**
     * This function starts the game.
     * You have to define a name for the state and
     * send the reference to the current game state.
     * @param name      [the name of the game state]
     * @param state     [the reference to the game state]
     */
    startGame(name: string, state: any): void;
}
