/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Game Class
 * @license      Digitsensitive
 */
export declare class Game {
    private canvas;
    private context;
    private scaleFactor;
    constructor(config: any);
    pix(x: number, y: number): void;
    spr(nr: number, x: number, y: number): void;
    draw(): void;
}
