/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: Input Class
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */

import { IInput } from "./interfaces/input.interface";
import { IMouseCoordinates } from "./interfaces/mouse-coordinates.interface";
import { IMouse } from "./interfaces/mouse.interface";

export class Input {
  private mouse: IMouseCoordinates = {} as IMouseCoordinates;
  private currentMouseKey: string;
  private keys: Map<number, boolean>;
  private lastKeyPressed: number;

  constructor(private cr: IInput) {
    this.registerEvents();

    if (this.cr.options.inputs.keyboard) {
      this.lastKeyPressed = -1;
      this.registerKeyboardKeys();
    }
  }

  private registerEvents(): void {
    if (this.cr.options.inputs.mouse) {
      this.cr.renderer.getCanvas().addEventListener("mousemove", (e) => {
        var rect = this.cr.renderer.getCanvas().getBoundingClientRect();
        this.mouse.x = (e.x - rect.left) / this.cr.renderer.getScaleFactor();
        this.mouse.y = (e.y - rect.top) / this.cr.renderer.getScaleFactor();
      });

      this.cr.renderer.getCanvas().addEventListener("mousedown", (e) => {
        if (e.button === 0) {
          this.currentMouseKey = "L";
        } else if (e.button === 1) {
          this.currentMouseKey = "M";
        } else if (e.button === 2) {
          this.currentMouseKey = "R";
        }
      });

      this.cr.renderer.getCanvas().addEventListener("mouseup", (e) => {
        this.currentMouseKey = "";
      });
    }

    if (this.cr.options.inputs.keyboard) {
      window.addEventListener("keydown", (e) => {
        this.keys.set(e.keyCode, true);
      });
      window.addEventListener("keyup", (e) => {
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
      [89, false],
    ]);
  }

  public getMouse(): IMouse {
    return {
      x: Math.round(this.mouse.x),
      y: Math.round(this.mouse.y),
      button: this.currentMouseKey,
    };
  }

  public getMousePosition(): IMouseCoordinates {
    return this.mouse;
  }

  public getMouseButton(): string {
    return this.currentMouseKey;
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
