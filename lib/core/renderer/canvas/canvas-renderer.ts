/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2020 Digitsensitive
 * @description  Juno Core: Canvas Renderer
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */

import { ICanvasRenderer } from "./interfaces/canvas-renderer.interface";

/**
 * The Canvas Renderer is responsible for drawing everything on the canvas
 * and with that on the screen.
 */
export class CanvasRenderer {
  private width: number;
  private height: number;
  private renderer: CanvasRenderingContext2D;
  private scaleFactor: number;
  private canvas: HTMLCanvasElement;

  constructor(config: ICanvasRenderer) {
    this.canvas = document.createElement("canvas");

    document.getElementById(config.name).appendChild(this.canvas);

    // Canvas settings
    this.canvas.style.cursor = "none";

    this.width = this.canvas.width = config.width;
    this.height = this.canvas.height = config.height;

    this.renderer = this.canvas.getContext("2d");

    this.renderer.imageSmoothingEnabled = config.antialias;

    console.log(this.renderer.imageSmoothingEnabled);
    this.scaleFactor = config.scale || 1;
    this.renderer.scale(this.scaleFactor, this.scaleFactor);

    this.canvas.width =
      config.width * this.scaleFactor || 64 * this.scaleFactor;
    this.canvas.height =
      config.height * this.scaleFactor || 64 * this.scaleFactor;

    if (config.fullscreen) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  public getRenderer(): CanvasRenderingContext2D {
    return this.renderer;
  }

  public getScaleFactor(): number {
    return this.scaleFactor;
  }

  public render(container) {
    if (!container.isVisible()) {
      return;
    }

    // Render all the children from this container
    container.getChildren().forEach((child) => {
      // save the entire state of the canvas by pushing the current state onto a stack
      this.renderer.save();

      // render child
      child.render(this.renderer, this.width, this.height);

      // restore the most recently saved canvas state by popping the top entry in the drawing state stack
      this.renderer.restore();
    });
  }

  /**
   * Set the title of the canvas
   * @param canvasTitle
   */
  public setCanvasTitle(canvasTitle: string): void {
    this.canvas.title = canvasTitle;
  }
}
