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
import { GameLoop } from "./loop";

interface IState {
  stateName: string;
  stateInstance: any;
}

export interface IGameConfig {
  name: string;
  scale: number;
  width?: number;
  height?: number;
}

export class Game {
  public isJunoRunning(): void {
    console.log("Juno's running smoothly!");
  }

  // canvas and renderer and scaling
  private canvas: HTMLCanvasElement;
  private renderer: any;
  private scaleFactor: number;

  // core juno game classes
  public api: API;
  private gameLoop: GameLoop;
  private gameStates: IState[];

  constructor(config: IGameConfig) {
    /**
     * Init canvas
     */
    this.canvas = document.createElement("canvas");
    document.getElementById(config.name).appendChild(this.canvas);

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

    /**
     * Init instance of game loop
     */
    this.gameLoop = new GameLoop();

    /**
     * Init an API instance
     */
    this.api = new API(this.canvas, this.renderer, this.scaleFactor);
    this.api.initPalette(
      "140C1C44243430346D4E4A4F854C30346524D04648757161597DCED27D2C8595A16DAA2CD2AA996DC2CADAD45EDEEED6"
    );

    /**
     * Array with the game states
     */
    this.gameStates = [];
  }

  /**
   * This function starts the game.
   * You have to define a name for the state and
   * send the reference to the current game state.
   * @param name      [the name of the game state]
   * @param state     [the reference to the game state]
   */
  public startGame(name: string, state: any): void {
    // add the game state to the array
    this.gameStates.push({ stateName: name, stateInstance: state });

    // register events for the game state
    this.gameLoop.on(
      "update",
      function(dt) {
        state.update(dt);
      },
      state
    );
    this.gameLoop.on(
      "render",
      function(dt) {
        state.render(dt);
      },
      state
    );

    // start the game loop with this state
    this.gameLoop.start(name);
  }
}
