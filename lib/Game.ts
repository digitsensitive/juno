/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Game Class
 * @license      Digitsensitive
 */

import { EventEmitter } from "../node_modules/eventemitter3";
import now = require("../node_modules/performance-now");

export class Game extends EventEmitter {
  private canvas: HTMLCanvasElement;
  private renderer: any;
  private scaleFactor: number;

  private paused: boolean;
  private fps: number;
  private step: number;

  private last: number = 0;
  private time: number = 0;
  private accumulator: number = 0;

  constructor(config: any) {
    super();

    this.canvas = <HTMLCanvasElement>document.getElementById(config.name);
    this.renderer = this.canvas.getContext("2d");

    this.renderer.imageSmoothingEnabled = false;
    this.scaleFactor = config.scale || 1;
    this.renderer.scale(this.scaleFactor, this.scaleFactor);
    this.canvas.width =
      config.width * this.scaleFactor || 64 * this.scaleFactor;
    this.canvas.height =
      config.height * this.scaleFactor || 64 * this.scaleFactor;
    this.paused = true;
    this.fps = 60;
    this.step = 1 / this.fps;
  }

  public start(state: any): void {
    this.paused = false;
    this.last = now();
    this.time = 0;
    this.accumulator = 0;
    this.emit("start", state);
    //raf(this.frame.bind(this));
  }

  private frame(time: number): void {
    if (!this.paused) {
      var newTime = now();
      var dt = (newTime - this.last) / 1000;
      if (dt > 0.2) dt = this.step;
      this.accumulator += dt;
      this.last = newTime;

      while (this.accumulator >= this.step) {
        this.time += this.step;
        this.accumulator -= this.step;
        this.update(this.step, this.time);
      }

      this.draw(this.renderer, this.accumulator / this.step);
      //  raf(this.frame.bind(this));
    }
  }

  public update(interval: number, time: number): void {
    this.emit("update", interval, time);
  }

  public draw(renderer: number, frameState: number): void {
    this.emit("draw", renderer, frameState);
  }

  public pix(x: number, y: number): void {
    let rc = Math.floor(Math.random() * 255);
    let xPos = x * this.scaleFactor;
    let yPos = y * this.scaleFactor;
    this.renderer.fillStyle = "rgba(" + rc + ",0,0,1)";
    this.renderer.fillRect(xPos, yPos, this.scaleFactor, this.scaleFactor);
  }
}
