/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: Input Class
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
import { ICanvasRenderer } from "../interfaces/canvas-renderer.interface";
import { IMouseCoordinates } from "../interfaces/mouse-coordinates.interface";
import { IMouse } from "../interfaces/mouse.interface";
export declare class Input {
    private cr;
    private mouse;
    private currentMouseKey;
    private keys;
    private lastKeyPressed;
    constructor(cr: ICanvasRenderer);
    private registerEvents;
    private registerKeyboardKeys;
    getMouse(): IMouse;
    getMousePosition(): IMouseCoordinates;
    getMouseButton(): string;
    isDown(code: number): boolean;
    justDown(code: number): boolean;
}
