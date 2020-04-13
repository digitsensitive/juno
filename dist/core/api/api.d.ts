/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: API functions
 *
 * Here you will find the core functions of Juno.
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
import { CanvasRenderer } from "../renderer/canvas-renderer";
import { Input } from "../input/input";
import { IMouse } from "../input/interfaces/mouse.interface";
export declare class API {
    private cr;
    private inputs;
    private palette;
    private images;
    private mapData;
    private mapAdjustments;
    private spriteSize;
    private tileSize;
    private passedTicks;
    constructor(cr: CanvasRenderer, inputs: Input);
    translate(x: number, y: number): void;
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
    /**
     * Draw a circle outline, using the Bresenham's circle algorithm.
     * @param xc
     * @param yc
     * @param r
     * @param c
     */
    circb(xc: number, yc: number, r: number, c: number): void;
    /**
     * Plot eight pixels by using concepts of eight-way symmetry.
     * @param xc [x coordinate of the center of the circle]
     * @param yc [y coordinate of the center of the circle]
     * @param x  [x coordinate of pixel]
     * @param y  [y coordinate of pixel]
     * @param c  [pixel color]
     */
    private circbPixGroup;
    /**
     * Draw a filled circle, using the Bresenham's circle algorithm.
     * @param xc [x coordinate of the center of the circle]
     * @param yc [y coordinate of the center of the circle]
     * @param r  [radius of the circle]
     * @param c  [index of the color in the palette]
     */
    circ(xc: number, yc: number, r: number, c: number): void;
    /**
     * Group of pixel lines (100%)
     * Draws a group of lines, used for drawing a filled circle.
     * @param xc [first x coordinate]
     * @param yc [first y coordinate]
     * @param x  [second x coordinate]
     * @param y  [second y coordinate]
     * @param c  [index of the color in the palette]
     */
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
     * Load your game files (f.e. spritesheet, tiles, json map).
     * Currently supported file formats: jpg, jpeg, png and json.
     * @param name    [name of the file]
     * @param path    [path of the file]
     * @param size    [size of the sprites/tiles]
     ********************************************************************/
    load(name: string, path: string, size: number): void;
    /********************************************************************
     * Parse JSON data into JSON object.
     * Currently the following data is parsed:
     * Map width, Map height, Tile width, Tile height, Layers and Tilesets.
     * Only CSV as Tile level format is currently supported.
     * @param data [the data to parse]
     ********************************************************************/
    private parseJSONDataIntoObject;
    /********************************************************************
     * Draw map on the screen.
     * @param x  [starting tile on x coordinate]
     * @param y  [starting tile on y coordinate]
     * @param w  [number of tiles to draw to the width]
     * @param h  [number of tiles to draw to the height]
     * @param sx [the x coordinate to draw the map to]
     * @param sy [the y coordinate to draw the map to]
     ********************************************************************/
    map(x?: number, y?: number, w?: number, h?: number, sx?: number, sy?: number): void;
    /********************************************************************
     * Get the map tile index at a specific 2D coordinate.
     * @param  x [the x coordinate of the tile]
     * @param  y [the y coordinate of the tile]
     * @return   [the map tile index]
     ********************************************************************/
    mget(x: number, y: number): number;
    /********************************************************************
     * Set the map tile index at a specific 2D coordinate.
     * @param id [the map tile index to set]
     * @param x [the x position of the tile to set]
     * @param y [the y position of the tile to set]
     ********************************************************************/
    mset(id: number, x: number, y: number): void;
    mobj(): void;
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
     * Return mouse informations.
     * @return [IMouse Interface: Coordinates and Button pressed]
     ********************************************************************/
    mouse(): IMouse;
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
    private isColorInRange;
    /********************************************************************
     * SPECIAL API FUNCTIONS
     ********************************************************************/
    crc(c: any, r: any): boolean;
    rrc(r1: any, r2: any): boolean;
    anim(object: any, startFrame: number, numberOfFrames: number, speed: number): void;
    private calculateAlphaHexCode;
}
