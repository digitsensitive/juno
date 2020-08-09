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

import { Graphics } from "./graphics/graphics";
import { GameLoop } from "./loop";
import { IGameConfig } from "../interfaces/game-config.interface";
import { Input } from "./input/input";
import { CanvasRenderer } from "./renderer/canvas/canvas-renderer";

export class Game {
  // renderer
  private renderer: CanvasRenderer;

  // core juno game classes
  public graphics: Graphics;
  private gameLoop: GameLoop;
  private inputs: Input;

  constructor(config: IGameConfig) {
    // init renderer
    this.renderer = new CanvasRenderer({
      name: config.name,
      width: config.width,
      height: config.height,
      scale: config.scale || 1,
      antialias: config.antialias || false,
      fullscreen: config.fullscreen,
    });

    /* init css properties
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
      .style.setProperty("--border-radius", config.css.borderRadius);*/

    // set input
    this.inputs = new Input({
      renderer: this.renderer,
      options: {
        inputs: {
          keyboard:
            config.input.keyboard !== undefined ? config.input.keyboard : true,
          mouse: config.input.mouse !== undefined ? config.input.mouse : false,
        },
      },
    });

    // init API instance
    this.graphics = new Graphics(this.renderer, this.inputs);
    this.graphics.ipal(
      "1a1c2c572956b14156ee7b58ffd079a0f07238b86e276e7b29366f405bd04fa4f786ecf8f4f4f493b6c1557185324056"
    );
  }

  public startLoop(): void {
    // init instance of game loop
    this.gameLoop = new GameLoop();

    this.gameLoop.on(
      "init",
      function () {
        this.init();
      },
      this
    );
    this.gameLoop.on(
      "update",
      function (dt) {
        this.update(dt);
      },
      this
    );
    this.gameLoop.on(
      "render",
      function (dt) {
        this.render(dt);
      },
      this
    );

    this.gameLoop.start();
  }
}
