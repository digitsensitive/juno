/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Game Class
 * @license      Digitsensitive
 */

export class Game {
  private canvas: HTMLCanvasElement;
  private context: any;
  private scaleFactor: number;

  constructor(config: any) {
    this.canvas = <HTMLCanvasElement>document.getElementById(config.name);
    this.context = this.canvas.getContext("2d");
    this.context.imageSmoothingEnabled = false;
    this.scaleFactor = config.scale || 1;
    this.context.scale(this.scaleFactor, this.scaleFactor);
    this.canvas.width =
      config.width * this.scaleFactor || 64 * this.scaleFactor;
    this.canvas.height =
      config.height * this.scaleFactor || 64 * this.scaleFactor;
  }

  public pix(x: number, y: number): void {
    let rc = Math.floor(Math.random() * 255);
    let xPos = x * this.scaleFactor;
    let yPos = y * this.scaleFactor;
    this.context.fillStyle = "rgba(" + rc + ",0,0,1)";
    this.context.fillRect(xPos, yPos, this.scaleFactor, this.scaleFactor);
  }

  public spr(nr: number, x: number, y: number): void {
    var sprLoaded = false;
    var sprImage = new Image();
    sprImage.onload = function() {
      sprLoaded = true;
    };
    sprImage.src = "images/background.png";
  }

  public draw(): void {
    //if (bgReady) {
    //ctx.drawImage(bgImage, 0, 0);
    //}
  }
}
