/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2020 Digitsensitive
 * @description  Juno Core: Canvas Renderer
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
import { ICanvasRenderer } from "./interfaces/canvas-renderer.interface";
export declare class CanvasRenderer {
    private width;
    private height;
    private renderer;
    private scaleFactor;
    private canvas;
    constructor(config: ICanvasRenderer);
    getCanvas(): HTMLCanvasElement;
    getRenderer(): CanvasRenderingContext2D;
    getScaleFactor(): number;
    render(container: any): void;
}
