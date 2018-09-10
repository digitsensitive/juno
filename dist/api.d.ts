/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: API functions
 *
 * Here you will find the core functions of Juno.
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
export declare class API {
    private canvas;
    private renderer;
    private scaleFactor;
    private palette;
    constructor(canvas: HTMLCanvasElement, renderer: any, scaleFactor: number);
    /**
     * Init color palette with chain hex color string
     * Total 16 colors: 6 * 16 = 96 (string length)
     * Examples:
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
     * @param palette [The color palette]
     */
    initPalette(palette: string): void;
    /********************************************************************
     * Clear the screen with a specified color.
     * @param color [index of the color in the palette]
     /********************************************************************/
    cls(color: number): void;
    /********************************************************************
     * Draw one pixel at a specific 2D location (x and y).
     * @param x0    [x coordinate of the pixel]
     * @param y0    [y coordinate of the pixel]
     * @param color [index of the color in the palette]
     ********************************************************************/
    pix(x0: number, y0: number, color: number): void;
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
     * Create a filled circle with the Bresenham's circle algorithm.
     * @param  x         [x coordinate of the center of the circle]
     * @param  y         [y coordinate of the center of the circle]
     * @param  r         [radius of the circle]
     * @param  c         [index of the color in the palette]
     ********************************************************************/
    circ(x0: number, y0: number, r: number, c: number): void;
    /********************************************************************
     * [pixel description]
     * @param xc [description]
     * @param yc [description]
     * @param x  [description]
     * @param y  [description]
     * @param c  [description]
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
}
