/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: Game Class
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
import { IGameConfig } from "../interfaces/game-config.interface";
import { IState } from "../interfaces/state.interface";
export declare class Game {
    private canvas;
    private renderer;
    private scaleFactor;
    api: API;
    private gameLoop;
    private states;
    private inputs;
    constructor(config: IGameConfig);
    /********************************************************************
     * This function adds a game state.
     * You have to define a name for the state and
     * send the reference to the current state.
     * @param name      [the name of the state]
     * @param state     [the reference to the state]
     ********************************************************************/
    addState(state: IState): void;
}
