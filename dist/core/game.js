"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const loop_1 = require("./loop");
const input_1 = require("./input");
class Game {
    constructor(config) {
        /**
         * Init canvas
         */
        this.canvas = document.createElement("canvas");
        document.getElementById(config.name).appendChild(this.canvas);
        this.canvas.style.cursor = "none";
        /**
         * Init renderer
         */
        this.renderer = this.canvas.getContext("2d");
        this.renderer.imageSmoothingEnabled = false;
        this.scaleFactor = config.scale || 1;
        this.renderer.scale(this.scaleFactor, this.scaleFactor);
        /**
         * Setup canvas
         */
        this.canvas.width =
            config.width * this.scaleFactor || 64 * this.scaleFactor;
        this.canvas.height =
            config.height * this.scaleFactor || 64 * this.scaleFactor;
        if (config.fullscreen) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        /**
         * Init instance of game loop
         */
        this.gameLoop = new loop_1.GameLoop();
        /**
         * Set Input
         */
        this.inputs = new input_1.Input({
            canvas: this.canvas,
            renderer: this.renderer,
            options: {
                scaleFactor: this.scaleFactor,
                inputs: {
                    keyboard: config.allowedInputs.keyboard !== undefined
                        ? config.allowedInputs.keyboard
                        : true,
                    mouse: config.allowedInputs.mouse !== undefined
                        ? config.allowedInputs.mouse
                        : false
                }
            }
        });
        /**
         * Init an API instance
         */
        this.api = new api_1.API({
            canvas: this.canvas,
            renderer: this.renderer,
            options: { scaleFactor: this.scaleFactor }
        }, this.inputs);
        this.api.ipal("140C1C44243430346D4E4A4F854C30346524D04648757161597DCED27D2C8595A16DAA2CD2AA996DC2CADAD45EDEEED6");
        /**
         * Array with the game states
         */
        this.states = [];
    }
    /********************************************************************
     * This function adds a game state.
     * You have to define a name for the state and
     * send the reference to the current state.
     * @param name      [the name of the state]
     * @param state     [the reference to the state]
     ********************************************************************/
    addState(state) {
        // add state to states array
        this.states.push(state);
        // register events for the state
        this.gameLoop.on("init", function () {
            state.instance.init();
        }, state.instance);
        this.gameLoop.on("update", function (dt) {
            state.instance.update(dt);
        }, state.instance);
        this.gameLoop.on("render", function (dt) {
            state.instance.render(dt);
        }, state.instance);
        // start the game loop with this state
        this.gameLoop.start(state.name);
    }
}
exports.Game = Game;
