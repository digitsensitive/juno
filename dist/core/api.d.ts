/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: API functions
 *
 * Here you will find the core functions of Juno.
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
import { ICanvasRenderer } from "../interfaces/canvas-renderer.interface";
import { Input } from "./input";
import { IMouseCoordinates } from "../interfaces/mouse-coordinates.interface";
export declare class API {
    private cr;
    private inputs;
    private palette;
    private spritesheets;
    private spriteSize;
    private passedTicks;
    constructor(cr: ICanvasRenderer, inputs: Input);
    /********************************************************************
     * Init color palette with chain hex color string
     * Total 16 colors: 6 * 16 = 96 (string length)
     * Examples:
     * Juno:
     * 1a1c2c572956b14156ee7b58ffd079a0f07238b86e276e7b29366f405bd04fa4f786ecf8f4f4f493b6c1557185324056
     * TIC-80 (DB16):
     * 140C1C44243430346D4E4A4F854C30346524D04648757161597DCED27D2C8595A16DAA2CD2AA996DC2CADAD45EDEEED6
     * COMMODORE VIC-20 PALETTE
     * 000000ffffffa8734ae9b287772d26b6686285d4dcc5ffffa85fb4e99df5559e4a92df8742348b7e70cabdcc71ffffb0
     * STILL LIFE PALETTE
     * 3f28117a2222d13b27e07f8a5d853a68c127b3e868122615513155286fb89b8bffa8e4d4cc8218c7b581000000ffffff
     * JAPANESE MACHINE PALETTE
     * 00000019102846af45a1d685453e787664fe8331299ec2e8dc534be18d79d6b97be9d8a1216c4bd365c8afaab9f5f4eb
     * CGARNE PALETTE
     * 0000005e606e2234d10c7e455c2e78b5b5b5FFFFFFffd93f7be2f98a36224c81fb44aacceb8a60aa5c3d6cd947e23d69
     * PSYGNOSIA PALETTE
     * 0000001b1e29362747443f4152524c64647c73615077785b9ea4a7cbe8f7e08b79a2324e003308084a3c546a00516cbf
     * COLOR GRAPHICS ADAPTER PALETTE
     * 000000555555AAAAAAFFFFFF0000AA5555FF00AA0055FF5500AAAA55FFFFAA0000FF5555AA00AAFF55FFAA5500FFFF55
     * EROGE COPPER PALETTE
     * 0d080d4f2b24825b31c59154f0bd77fbdf9bfff9e4bebbb27bb24e74adbb4180a032535f2a23497d3840c16c5be89973
     * EASTER ISLAND PALETTE
     * f6f6bfe6d1d1868691794765f5e17aedc38dcc8d86ca657e39d4b98dbcd28184ab6860869dc0857ea788567864051625
     * PICO-8 PALETTE
     * 0000001D2B537E255383769CAB5236008751FF004D5F574FFF77A8FFA300C2C3C700E436FFCCAA29ADFFFFEC27FFF1E8
     * GRAYSCALE
     * 000000111111222222333333444444555555666666777777888888999999aaaaaabbbbbbccccccddddddeeeeeeffffff
     *
     * @param palette [index of the color in the palette]
     ********************************************************************/
    ipal(palette: string): void;
    /********************************************************************
     * Clear the screen with a specified color.
     * @param color [index of the color in the palette]
     /********************************************************************/
    cls(c?: number): void;
    /********************************************************************
     * Draw one pixel at a specific 2D location (x and y).
     * @param x0    [x coordinate of the pixel]
     * @param y0    [y coordinate of the pixel]
     * @param color [index of the color in the palette]
     ********************************************************************/
    pix(x0: number, y0: number, c: number): void;
    /********************************************************************
     * Create a circle outline with the Bresenham's circle algorithm.
     * @param  x        [x coordinate of the center of the circle]
     * @param  y        [y coordinate of the center of the circle]
     * @param  r        [radius of the circle]
     * @param  c        [index of the color in the palette]
     ********************************************************************/
    circb(x0: number, y0: number, r: number, c: number): void;
    /********************************************************************
     * [pixel description]
     * @param xc [description]
     * @param yc [description]
     * @param x  [description]
     * @param y  [description]
     * @param c  [description]
     ********************************************************************/
    private circbPixGroup;
    /********************************************************************
     * Filled Circle (100%)
     * Create a filled circle with the Bresenham's circle algorithm.
     * @param x0 [x coordinate of the center of the circle]
     * @param y0 [y coordinate of the center of the circle]
     * @param r  [radius of the circle]
     * @param c  [index of the color in the palette]
     ********************************************************************/
    circ(x0: number, y0: number, r: number, c: number): void;
    /********************************************************************
     * Group of pixel lines (100%)
     * Draws a group of lines, used for drawing a filled circle.
     * @param x0 [first x coordinate]
     * @param y0 [first y coordinate]
     * @param x  [second x coordinate]
     * @param y  [second y coordinate]
     * @param c  [index of the color in the palette]
     ********************************************************************/
    private circPixGroup;
    /********************************************************************
     * Create a line with the Bresenham's line algorithm.
     * @param x0 [the starting x position]
     * @param y0 [the starting y position]
     * @param x1 [the ending x position]
     * @param y1 [the ending y position]
     * @param c  [index of the color in the palette]
     ********************************************************************/
    line(x0: number, y0: number, x1: number, y1: number, c: number): void;
    /********************************************************************
     * Draw a filled rectangle.
     * @param x0    [the x position of the rectangle]
     * @param y0    [the y position of the rectangle]
     * @param w     [the width of the rectangle]
     * @param h     [the height of the rectangle]
     * @param c [index of the color in the palette]
     ********************************************************************/
    rect(x0: number, y0: number, w: number, h: number, c: number): void;
    /********************************************************************
     * Draw a rectangle outline.
     * @param x0    [the x position of the rectangle]
     * @param y0    [the y position of the rectangle]
     * @param w     [the width of the rectangle]
     * @param h     [the height of the rectangle]
     * @param c     [index of the color in the palette]
     ********************************************************************/
    rectb(x0: number, y0: number, w: number, h: number, c: number): void;
    /********************************************************************
     * Print text.
     * @param s  [string to print]
     * @param x  [x position of the text]
     * @param y  [y position of the text]
     * @param c  [index of the color in the palette]
     * @param sc [scale factor of the text]
     ********************************************************************/
    print(s: string, x0: number, y0: number, c: number, a?: number, sc?: number): void;
    /********************************************************************
     * Trace a string or a number => Alternative to console.log().
     * @param s [the string or number to trace]
     ********************************************************************/
    trace(s: string | number): void;
    /********************************************************************
     * Load a spritesheet.
     * @param n    [name of the spritesheet]
     * @param p    [path of the spritesheet]
     * @param size [size of the sprites in the spritesheet]
     ********************************************************************/
    load(n: string, p: string, size: number): void;
    /********************************************************************
     * Create a sprite from spritesheet.
     * @param s  [the choosen sprite]
     * @param x0 [x position of the sprite]
     * @param y0 [y position of the sprite]
     ********************************************************************/
    spr(s: number, x0: number, y0: number): void;
    /********************************************************************
     * Get pixel color index from 2D position.
     * @param  x0 [x position of the pixel]
     * @param  y0 [y position of the pixel]
     * @return    [the color index of the pixel]
     ********************************************************************/
    pget(x0: number, y0: number): number;
    /********************************************************************
     * Converts each primary color to corresponding hex value.
     * @param  c [the color to convert]
     * @return   [the hex value as a string]
     ********************************************************************/
    private componentToHex;
    /********************************************************************
     * Converts rgb to hex.
     * @param  r [r value]
     * @param  g [g value]
     * @param  b [b value]
     * @return   [the final hex-string]
     ********************************************************************/
    private rgbToHex;
    /********************************************************************
     * Get status of key code passed
     * Return true if key is pressed
     * @param  code [key code passed]
     * @return      [true or false]
     ********************************************************************/
    key(code: number): boolean;
    /********************************************************************
     * Get status of key code passed
     * Return only true if pressed now and not in previous frame
     * @param  code [Key code passed]
     * @return      [true or false]
     ********************************************************************/
    keyp(code: number): boolean;
    sfx(): void;
    /********************************************************************
     * Return the mouse coordinates.
     * @param  e [description]
     * @return   [The mouse coordinates]
     ********************************************************************/
    mouse(): IMouseCoordinates;
    /********************************************************************
     * Get the game width in pixels
     * @return [game width]
     ********************************************************************/
    ggw(): number;
    /********************************************************************
     * Get the game height in pixels
     * @return [game height]
     ********************************************************************/
    ggh(): number;
    ticks(): number;
    rnd(min: number, max: number): number;
    /********************************************************************
     * Color Range Error (100%)
     * Check if the selected color is between 0 and 15.
     * @param c [the color to check]
     ********************************************************************/
    private colorRangeError;
    /********************************************************************
     * SPECIAL API FUNCTIONS
     ********************************************************************/
    crc(c: any, r: any): boolean;
    rrc(r1: any, r2: any): boolean;
    anim(object: any, startFrame: number, numberOfFrames: number, speed: number): void;
    private calculateAlphaHexCode;
}
