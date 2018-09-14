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
import { GameLoop } from "./loop";
import { IGameConfig } from "../interfaces/game-config.interface";
import { Input } from "./input";
import { IState } from "../interfaces/state.interface";

export class Game {
  // canvas and renderer and scaling
  private canvas: HTMLCanvasElement;
  private renderer: any;
  private scaleFactor: number;

  // core juno game classes
  public api: API;
  private gameLoop: GameLoop;
  private states: IState[];
  private inputs: Input;

  constructor(config: IGameConfig) {
    /**
     * Init canvas
     */
    this.canvas = document.createElement("canvas");
    document.getElementById(config.name).appendChild(this.canvas);
    this.canvas.style.cursor = "none";

    /**
     * Init CSS properties
     */

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
    this.gameLoop = new GameLoop();

    /**
     * Set Input
     */
    this.inputs = new Input({
      canvas: this.canvas,
      renderer: this.renderer,
      options: {
        scaleFactor: this.scaleFactor,
        inputs: {
          keyboard:
            config.input.keyboard !== undefined ? config.input.keyboard : true,
          mouse: config.input.mouse !== undefined ? config.input.mouse : false
        }
      }
    });

    /**
     * Init an API instance
     */

    this.api = new API(
      {
        canvas: this.canvas,
        renderer: this.renderer,
        options: { scaleFactor: this.scaleFactor }
      },
      this.inputs
    );
    this.api.ipal(
      "1a1c2c572956b14156ee7b58ffd079a0f07238b86e276e7b29366f405bd04fa4f786ecf8f4f4f493b6c1557185324056"
    );

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
  public addState(state: IState): void {
    // add state to states array
    this.states.push(state);

    // register events for the state
    this.gameLoop.on(
      "init",
      function() {
        state.instance.init();
      },
      state.instance
    );
    this.gameLoop.on(
      "update",
      function(dt) {
        state.instance.update(dt);
      },
      state.instance
    );
    this.gameLoop.on(
      "render",
      function(dt) {
        state.instance.render(dt);
      },
      state.instance
    );

    // start the game loop with this state
    this.gameLoop.start(state.name);
  }
}
