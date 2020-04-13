/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Input Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
import { CanvasRenderer } from "../../renderer/canvas-renderer";
export interface IInput {
    renderer: CanvasRenderer;
    options?: {
        inputs?: {
            keyboard?: boolean;
            mouse?: boolean;
        };
    };
}
