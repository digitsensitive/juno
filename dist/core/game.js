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
exports.Game = void 0;
const api_1 = require("./api/api");
const loop_1 = require("./loop");
const input_1 = require("./input/input");
const canvas_renderer_1 = require("./renderer/canvas-renderer");
class Game {
    constructor(config) {
        // init renderer
        this.renderer = new canvas_renderer_1.CanvasRenderer({
            canvas: {
                name: config.name,
                width: config.width,
                height: config.height,
                scale: config.scale || 1,
                fullscreen: config.fullscreen,
            },
        });
        // init css properties
        if (config.css === undefined) {
            config.css = {};
        }
        if (config.css.borderWidth === undefined) {
            config.css.borderWidth = "2rem";
        }
        if (config.css.borderStyle === undefined) {
            config.css.borderStyle = "solid";
        }
        if (config.css.borderColor === undefined) {
            config.css.borderColor = "#1a1c2c";
        }
        if (config.css.borderRadius === undefined) {
            config.css.borderRadius = "20px";
        }
        document
            .getElementById(config.name)
            .style.setProperty("--border-width", config.css.borderWidth);
        document
            .getElementById(config.name)
            .style.setProperty("--border-style", config.css.borderStyle);
        document
            .getElementById(config.name)
            .style.setProperty("--border-color", config.css.borderColor);
        document
            .getElementById(config.name)
            .style.setProperty("--border-radius", config.css.borderRadius);
        // set input
        this.inputs = new input_1.Input({
            renderer: this.renderer,
            options: {
                inputs: {
                    keyboard: config.input.keyboard !== undefined ? config.input.keyboard : true,
                    mouse: config.input.mouse !== undefined ? config.input.mouse : false,
                },
            },
        });
        // init API instance
        this.api = new api_1.API(this.renderer, this.inputs);
        this.api.ipal("1a1c2c572956b14156ee7b58ffd079a0f07238b86e276e7b29366f405bd04fa4f786ecf8f4f4f493b6c1557185324056");
    }
    startLoop() {
        // init instance of game loop
        this.gameLoop = new loop_1.GameLoop();
        this.gameLoop.on("init", function () {
            this.init();
        }, this);
        this.gameLoop.on("update", function (dt) {
            this.update(dt);
        }, this);
        this.gameLoop.on("render", function (dt) {
            this.render(dt);
        }, this);
        this.gameLoop.start();
    }
}
exports.Game = Game;
