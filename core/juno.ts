/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  NEWGAME
 * @license      Digitsensitive
 */

export class Juno {
  private canvas: HTMLCanvasElement;

  constructor(config) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = config.width || 64;
    canvas.height = config.height || 64;
    this.canvas = canvas;
    document.body.appendChild(canvas);
  }
}