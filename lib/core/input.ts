/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: Input Class
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */

import { ICanvasRenderer } from "../interfaces/canvas-renderer.interface";
import { IMouseCoordinates } from "../interfaces/mouse-coordinates.interface";

export class Input {
  private mouse: IMouseCoordinates = {} as IMouseCoordinates;
  private keys: Map<number, boolean>;
  private lastKeyPressed: number;

  constructor(private cr: ICanvasRenderer) {
    this.registerEvents();

    if (this.cr.options.inputs.keyboard) {
      this.lastKeyPressed = -1;
      this.registerKeyboardKeys();
    }
  }

  private registerEvents(): void {
    if (this.cr.options.inputs.mouse) {
      this.cr.canvas.addEventListener("mousemove", e => {
        var rect = this.cr.canvas.getBoundingClientRect();
        this.mouse.x = (e.x - rect.left) / this.cr.options.scaleFactor;
        this.mouse.y = (e.y - rect.top) / this.cr.options.scaleFactor;
      });
      // TODO: Add more event listener f.e. mousedown, mouseup ...
    }

    if (this.cr.options.inputs.keyboard) {
      window.addEventListener("keydown", e => {
        this.keys.set(e.keyCode, true);
      });
      window.addEventListener("keyup", e => {
        this.lastKeyPressed = -1;
        this.keys.set(e.keyCode, false);
      });
    }
  }

  private registerKeyboardKeys(): void {
    this.keys = new Map([
      [38, false],
      [40, false],
      [37, false],
      [39, false],
      [65, false],
      [66, false],
      [88, false],
      [89, false]
    ]);
  }

  public getMousePosition(): IMouseCoordinates {
    return this.mouse;
  }

  public isDown(code: number): boolean {
    if (this.keys.get(code)) {
      return true;
    } else {
      return false;
    }
  }

  public justDown(code: number): boolean {
    if (this.keys.get(code)) {
      if (this.lastKeyPressed === code) {
        this.lastKeyPressed = code;
        return false;
      } else {
        this.lastKeyPressed = code;
        return true;
      }
    }
  }
}
