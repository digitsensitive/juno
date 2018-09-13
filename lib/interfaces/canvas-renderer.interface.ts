/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Canvas Renderer Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */

export interface ICanvasRenderer {
  canvas: HTMLCanvasElement;
  renderer: any;
  options?: {
    scaleFactor?: number;
    inputs?: { keyboard?: boolean; mouse?: boolean };
  };
}
