"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: API functions
 *
 * Here you will find the core functions of Juno.
 *
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
const key_enum_1 = require("../enums/key.enum");
class API {
    constructor(cr, inputs) {
        this.cr = cr;
        this.inputs = inputs;
        this.images = new Map();
        this.mapData = [];
        this.mapAdjustments = { x: 0, y: 0 };
        this.passedTicks = 0;
    }
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
    ipal(palette) {
        this.palette = [];
        let fromPositionInString = 0;
        while (fromPositionInString < 96) {
            this.palette.push("#" + palette.substr(fromPositionInString, 6));
            fromPositionInString += 6;
        }
    }
    /********************************************************************
     * Clear the screen with a specified color.
     * @param color [index of the color in the palette]
     /********************************************************************/
    cls(c) {
        const context = this.cr.renderer;
        if (c === undefined) {
            // clear screen
            context.clearRect(0, 0, this.cr.canvas.width, this.cr.canvas.height);
        }
        else {
            // evaluate runtime errors
            this.colorRangeError(c);
            // draw the selected color on screen
            context.fillStyle = this.palette[c];
            context.fillRect(0, 0, this.cr.canvas.width, this.cr.canvas.height);
        }
        // update ticks
        this.passedTicks += 1;
    }
    /********************************************************************
     * Draw one pixel at a specific 2D location (x and y).
     * @param x0    [x coordinate of the pixel]
     * @param y0    [y coordinate of the pixel]
     * @param color [index of the color in the palette]
     ********************************************************************/
    pix(x0, y0, c) {
        // evaluate runtime errors
        this.colorRangeError(c);
        this.cr.renderer.fillStyle = this.palette[c];
        this.cr.renderer.fillRect(x0 * this.cr.options.scaleFactor, y0 * this.cr.options.scaleFactor, this.cr.options.scaleFactor, this.cr.options.scaleFactor);
    }
    /********************************************************************
     * Create a circle outline with the Bresenham's circle algorithm.
     * @param  x        [x coordinate of the center of the circle]
     * @param  y        [y coordinate of the center of the circle]
     * @param  r        [radius of the circle]
     * @param  c        [index of the color in the palette]
     ********************************************************************/
    circb(x0, y0, r, c) {
        // evaluate runtime errors
        this.colorRangeError(c);
        let x = 0;
        let y = r;
        let p = 3 - 2 * r;
        this.circbPixGroup(x0, y0, x, y, c);
        while (x < y) {
            x++;
            if (p < 0) {
                p = p + 4 * x + 6;
            }
            else {
                y--;
                p = p + 4 * (x - y) + 10;
            }
            this.circbPixGroup(x0, y0, x, y, c);
        }
    }
    /********************************************************************
     * [pixel description]
     * @param xc [description]
     * @param yc [description]
     * @param x  [description]
     * @param y  [description]
     * @param c  [description]
     ********************************************************************/
    circbPixGroup(x0, y0, x, y, c) {
        this.pix(x0 + x, y0 + y, c);
        this.pix(x0 + x, y0 - y, c);
        this.pix(x0 - x, y0 + y, c);
        this.pix(x0 - x, y0 - y, c);
        this.pix(x0 + y, y0 + x, c);
        this.pix(x0 + y, y0 - x, c);
        this.pix(x0 - y, y0 + x, c);
        this.pix(x0 - y, y0 - x, c);
    }
    /********************************************************************
     * Filled Circle (100%)
     * Create a filled circle with the Bresenham's circle algorithm.
     * @param x0 [x coordinate of the center of the circle]
     * @param y0 [y coordinate of the center of the circle]
     * @param r  [radius of the circle]
     * @param c  [index of the color in the palette]
     ********************************************************************/
    circ(x0, y0, r, c) {
        // evaluate runtime errors
        this.colorRangeError(c);
        // draw filled circle
        let x = 0;
        let y = r;
        let p = 3 - 2 * r;
        this.circPixGroup(x0, y0, x, y, c);
        while (x < y) {
            x++;
            if (p < 0) {
                p = p + 4 * x + 6;
            }
            else {
                y--;
                p = p + 4 * (x - y) + 10;
            }
            this.circPixGroup(x0, y0, x, y, c);
        }
    }
    /********************************************************************
     * Group of pixel lines (100%)
     * Draws a group of lines, used for drawing a filled circle.
     * @param x0 [first x coordinate]
     * @param y0 [first y coordinate]
     * @param x  [second x coordinate]
     * @param y  [second y coordinate]
     * @param c  [index of the color in the palette]
     ********************************************************************/
    circPixGroup(x0, y0, x, y, c) {
        this.line(x0 + x, y0 + y, x0 - x, y0 + y, c);
        this.line(x0 + x, y0 - y, x0 - x, y0 - y, c);
        this.line(x0 + y, y0 + x, x0 - y, y0 + x, c);
        this.line(x0 + y, y0 - x, x0 - y, y0 - x, c);
    }
    /********************************************************************
     * Create a line with the Bresenham's line algorithm.
     * @param x0 [the starting x position]
     * @param y0 [the starting y position]
     * @param x1 [the ending x position]
     * @param y1 [the ending y position]
     * @param c  [index of the color in the palette]
     ********************************************************************/
    line(x0, y0, x1, y1, c) {
        // evaluate runtime errors
        this.colorRangeError(c);
        x0 = Math.ceil(x0);
        y0 = Math.ceil(y0);
        x1 = Math.ceil(x1);
        y1 = Math.ceil(y1);
        let dx = Math.abs(x1 - x0);
        let dy = Math.abs(y1 - y0);
        let sx = x0 < x1 ? 1 : -1;
        let sy = y0 < y1 ? 1 : -1;
        let err = dx - dy;
        for (let x = 0; x <= dx; x++) {
            for (let y = 0; y <= dy; y++) {
                this.pix(x0, y0, c);
                if (x0 == x1 && y0 == y1) {
                    break;
                }
                let e2 = 2 * err;
                if (e2 >= -dy) {
                    err -= dy;
                    x0 += sx;
                }
                if (e2 < dx) {
                    err += dx;
                    y0 += sy;
                }
            }
        }
    }
    /********************************************************************
     * Draw a filled rectangle.
     * @param x0    [the x position of the rectangle]
     * @param y0    [the y position of the rectangle]
     * @param w     [the width of the rectangle]
     * @param h     [the height of the rectangle]
     * @param c [index of the color in the palette]
     ********************************************************************/
    rect(x0, y0, w, h, c) {
        // evaluate runtime errors
        if (w <= 0) {
            throw new RangeError("The width of a rectangle must be > 0. ");
        }
        else if (h <= 0) {
            throw new RangeError("The height of a rectangle must be > 0. ");
        }
        this.colorRangeError(c);
        this.cr.renderer.fillStyle = this.palette[c];
        this.cr.renderer.fillRect(x0 * this.cr.options.scaleFactor, y0 * this.cr.options.scaleFactor, w * this.cr.options.scaleFactor, h * this.cr.options.scaleFactor);
    }
    /********************************************************************
     * Draw a rectangle outline.
     * @param x0    [the x position of the rectangle]
     * @param y0    [the y position of the rectangle]
     * @param w     [the width of the rectangle]
     * @param h     [the height of the rectangle]
     * @param c     [index of the color in the palette]
     ********************************************************************/
    rectb(x0, y0, w, h, c) {
        // evaluate runtime errors
        if (w <= 0) {
            throw new RangeError("The width of a rectangle must be > 0. ");
        }
        else if (h <= 0) {
            throw new RangeError("The height of a rectangle must be > 0. ");
        }
        this.colorRangeError(c);
        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                if (x === 0 || y === 0 || x === w - 1 || y === h - 1) {
                    this.pix(x0 + x, y0 + y, c);
                }
            }
        }
    }
    /********************************************************************
     * Print text.
     * @param s  [string to print]
     * @param x  [x position of the text]
     * @param y  [y position of the text]
     * @param c  [index of the color in the palette]
     * @param sc [scale factor of the text]
     ********************************************************************/
    print(s, x0, y0, c, a, sc) {
        // evaluate runtime errors
        if (sc !== undefined && sc < 1) {
            throw new RangeError("The font size cannot be smaller than 1. ");
        }
        else if (s.length === 0) {
            throw new RangeError("The font length must be longer than 0. ");
        }
        this.colorRangeError(c);
        let size = sc * 3 * this.cr.options.scaleFactor || 3 * this.cr.options.scaleFactor;
        this.cr.renderer.font = size + "px Juno";
        this.cr.renderer.fillStyle =
            this.palette[c] + this.calculateAlphaHexCode(a || 1);
        this.cr.renderer.fillText(s, x0 * this.cr.options.scaleFactor, y0 * this.cr.options.scaleFactor + size);
    }
    /********************************************************************
     * Trace a string or a number => Alternative to console.log().
     * @param s [the string or number to trace]
     ********************************************************************/
    trace(s) {
        if (typeof s === "number") {
            s = s.toString();
        }
        this.print(s, 0, 0, 12);
    }
    /********************************************************************
     * Load your game files (f.e. spritesheet, tiles, json map).
     * Currently supported file formats: jpg, jpeg, png and json.
     * @param name    [name of the file]
     * @param path    [path of the file]
     * @param size    [size of the sprites/tiles]
     ********************************************************************/
    load(name, path, size) {
        let extension = path.substr(path.lastIndexOf(".") + 1);
        if (extension === "png" ||
            extension === "PNG" ||
            extension === "jpg" ||
            extension === "JPG" ||
            extension === "jpeg" ||
            extension === "JPEG") {
            this.spriteSize = size;
            let image = new Image();
            image.src = path;
            this.images.set(name, image);
        }
        if (extension === "json" || extension === "JSON") {
            this.tileSize = size;
            var request = new XMLHttpRequest();
            request.open("GET", path, false);
            request.send(null);
            this.parseJSONDataIntoObject(JSON.parse(request.responseText));
        }
    }
    /********************************************************************
     * Parse JSON data into JSON object.
     * Currently the following data is parsed:
     * Map width, Map height, Tile width, Tile height, Layers and Tilesets.
     * Only CSV as Tile level format is currently supported.
     * @param data [the data to parse]
     ********************************************************************/
    parseJSONDataIntoObject(data) {
        let tiledMapData = {};
        // get basic map data
        tiledMapData.mapWidth = data.width;
        tiledMapData.mapHeight = data.height;
        tiledMapData.tileWidth = data.tilewidth;
        tiledMapData.tileHeight = data.tileheight;
        // get layer data
        let layers = [];
        let layersLength = data.layers.length;
        for (let i = 0; i < layersLength; i++) {
            let layer = {};
            layer.name = data.layers[i].name;
            layer.type = data.layers[i].type;
            layer.height = data.layers[i].height;
            layer.width = data.layers[i].width;
            let layerData = [];
            let j = 0;
            for (let y = 0; y < layer.height; y++) {
                layerData[y] = [];
                for (let x = 0; x < layer.width; x++) {
                    /* correction with - 1 is needed, because indexation with Tiles
                     starts with 1 and not with 0 */
                    layerData[y][x] = data.layers[i].data[j] - 1;
                    j++;
                }
            }
            layer.data = layerData;
            let obj = [];
            let objLength = data.layers[i].objects.length;
            for (let j = 0; j < objLength; j++) {
                let object = {};
                object.name = data.layers[i].objects[j].name;
                object.x = data.layers[i].objects[j].x;
                object.y = data.layers[i].objects[j].y;
                object.height = data.layers[i].objects[j].height;
                object.width = data.layers[i].objects[j].width;
                obj.push(object);
            }
            layer.objects = obj;
            layer.visible = data.layers[i].visible;
            layer.opacity = data.layers[i].opacity;
            layer.x = data.layers[i].x;
            layer.y = data.layers[i].y;
            layers.push(layer);
        }
        tiledMapData.layers = [];
        tiledMapData.layers = layers;
        // get tilesets
        let tilesets = [];
        let tilesetsLength = data.tilesets.length;
        for (let i = 0; i < tilesetsLength; i++) {
            let tileset = {};
            let tileProp = new Map();
            tileset.name = data.tilesets[i].name;
            tileset.tileCount = data.tilesets[i].tilecount;
            for (let key in data.tilesets[i].tileproperties) {
                if (data.tilesets[i].tileproperties.hasOwnProperty(key)) {
                    tileProp.set(key, data.tilesets[i].tileproperties[key]);
                }
            }
            tileset.tileProperties = tileProp;
            tilesets.push(tileset);
        }
        tiledMapData.tilesets = [];
        tiledMapData.tilesets = tilesets;
        this.mapData.push(tiledMapData);
    }
    /********************************************************************
     * Draw map on the screen.
     * @param x  [starting tile on x coordinate]
     * @param y  [starting tile on y coordinate]
     * @param w  [number of tiles to draw to the width]
     * @param h  [number of tiles to draw to the height]
     * @param sx [the x coordinate to draw the map to]
     * @param sy [the y coordinate to draw the map to]
     ********************************************************************/
    map(x, y, w, h, sx, sy) {
        let mapArray = this.mapData[0].layers[0].data;
        let tileSize = this.mapData[0].tileHeight;
        let numberVerticalTiles = this.mapData[0].layers[0].height;
        let numberHorizontalTiles = this.mapData[0].layers[0].width;
        let width = w || numberHorizontalTiles;
        let height = h || numberVerticalTiles;
        this.mapAdjustments.x = x || 0;
        this.mapAdjustments.y = y || 0;
        let x1 = sx || 0;
        let y1 = sy || 0;
        // evaluate runtime errors
        if (this.mapAdjustments.x < 0 || this.mapAdjustments.y < 0) {
            throw new RangeError("map(): Starting tile cannot be negative!. ");
        }
        for (let y0 = this.mapAdjustments.y; y0 < height; y0++) {
            for (let x0 = this.mapAdjustments.x; x0 < width; x0++) {
                this.spr(mapArray[y0][x0], x1 + (x0 - this.mapAdjustments.x) * tileSize, y1 + (y0 - this.mapAdjustments.y) * tileSize);
            }
        }
    }
    /********************************************************************
     * Get the map tile index at a specific 2D coordinate.
     * @param  x [the x coordinate of the tile]
     * @param  y [the y coordinate of the tile]
     * @return   [the map tile index]
     ********************************************************************/
    mget(x, y) {
        // get the actual coordinates. Depends on the tile size.
        // Use of floor to round downward to its nearest integer
        let x0 = Math.floor(x / this.tileSize) + this.mapAdjustments.x;
        let y0 = Math.floor(y / this.tileSize) + this.mapAdjustments.y;
        // evaluate runtime errors
        // math.floor rounds down f.e. x = 0.99 to 0 -> means < 0 not allowed
        // width & height must than be corrected with (-1) since we start from 0
        if (x0 < 0 ||
            x0 > this.mapData[0].layers[0].width - 1 ||
            y0 < 0 ||
            y0 > this.mapData[0].layers[0].height - 1) {
            throw new RangeError("mget(): Tile coordinate: " + x + " / " + y + " is out of the range. ");
        }
        return this.mapData[0].layers[0].data[y0][x0];
    }
    /********************************************************************
     * Set the map tile index at a specific 2D coordinate.
     * @param id [the map tile index to set]
     * @param x [the x position of the tile to set]
     * @param y [the y position of the tile to set]
     ********************************************************************/
    mset(id, x, y) {
        if (id < 0 || id > this.mapData[0].tilesets[0].tileCount) {
            throw new RangeError("mset(): Tile id: " + id + " is out of the range / does not exist. ");
        }
        else if (x < 0 ||
            x >= this.mapData[0].layers[0].width ||
            y < 0 ||
            y >= this.mapData[0].layers[0].height) {
            throw new RangeError("mset(): Tile coordinate: " + x + " / " + y + " is out of the range. ");
        }
        this.mapData[0].layers[0].data[y][x] = id;
    }
    mobj() {
        let obj = this.mapData[0].layers[0].objects;
        let objLength = this.mapData[0].layers[0].objects.length;
        for (let i = 0; i < objLength; i++) {
            this.spr(26, obj[i].x, obj[i].y);
        }
    }
    /********************************************************************
     * Create a sprite from spritesheet.
     * @param s  [the choosen sprite]
     * @param x0 [x position of the sprite]
     * @param y0 [y position of the sprite]
     ********************************************************************/
    spr(s, x0, y0) {
        this.cr.renderer.mozImageSmoothingEnabled = false;
        this.cr.renderer.webkitImageSmoothingEnabled = false;
        this.cr.renderer.imageSmoothingEnabled = false;
        let amountFieldsHorizontal = this.images.values().next().value.width / this.spriteSize;
        let yPos = Math.floor(s / amountFieldsHorizontal);
        let xPos = s - amountFieldsHorizontal * yPos;
        this.cr.renderer.drawImage(this.images.values().next().value, xPos * this.spriteSize, yPos * this.spriteSize, 8, 8, x0 * this.cr.options.scaleFactor, y0 * this.cr.options.scaleFactor, this.spriteSize * this.cr.options.scaleFactor, this.spriteSize * this.cr.options.scaleFactor);
    }
    /********************************************************************
     * Get pixel color index from 2D position.
     * @param  x0 [x position of the pixel]
     * @param  y0 [y position of the pixel]
     * @return    [the color index of the pixel]
     ********************************************************************/
    pget(x0, y0) {
        let p = this.cr.renderer.getImageData(Math.round(x0) * this.cr.options.scaleFactor, Math.round(y0) * this.cr.options.scaleFactor, this.cr.options.scaleFactor, this.cr.options.scaleFactor).data;
        let hex = this.rgbToHex(p[0], p[1], p[2]);
        let l = this.palette.length;
        for (let p = 0; p < l; p++) {
            if (this.palette[p] === hex) {
                return p;
            }
        }
    }
    /********************************************************************
     * Converts each primary color to corresponding hex value.
     * @param  c [the color to convert]
     * @return   [the hex value as a string]
     ********************************************************************/
    componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    /********************************************************************
     * Converts rgb to hex.
     * @param  r [r value]
     * @param  g [g value]
     * @param  b [b value]
     * @return   [the final hex-string]
     ********************************************************************/
    rgbToHex(r, g, b) {
        return ("#" +
            this.componentToHex(r) +
            this.componentToHex(g) +
            this.componentToHex(b));
    }
    /********************************************************************
     * Get status of key code passed
     * Return true if key is pressed
     * @param  code [key code passed]
     * @return      [true or false]
     ********************************************************************/
    key(code) {
        switch (code) {
            case 0: {
                if (this.inputs.isDown(key_enum_1.KEY.UP)) {
                    return true;
                }
                break;
            }
            case 1: {
                if (this.inputs.isDown(key_enum_1.KEY.DOWN)) {
                    return true;
                }
                break;
            }
            case 2: {
                if (this.inputs.isDown(key_enum_1.KEY.LEFT)) {
                    return true;
                }
                break;
            }
            case 3: {
                if (this.inputs.isDown(key_enum_1.KEY.RIGHT)) {
                    return true;
                }
                break;
            }
            case 4: {
                if (this.inputs.isDown(key_enum_1.KEY.A)) {
                    return true;
                }
                break;
            }
            case 5: {
                if (this.inputs.isDown(key_enum_1.KEY.B)) {
                    return true;
                }
                break;
            }
            case 6: {
                if (this.inputs.isDown(key_enum_1.KEY.X)) {
                    return true;
                }
                break;
            }
            case 7: {
                if (this.inputs.isDown(key_enum_1.KEY.Z)) {
                    return true;
                }
                break;
            }
            default: {
                break;
            }
        }
    }
    /********************************************************************
     * Get status of key code passed
     * Return only true if pressed now and not in previous frame
     * @param  code [Key code passed]
     * @return      [true or false]
     ********************************************************************/
    keyp(code) {
        switch (code) {
            case 0: {
                if (this.inputs.justDown(key_enum_1.KEY.UP)) {
                    return true;
                }
                break;
            }
            case 1: {
                if (this.inputs.justDown(key_enum_1.KEY.DOWN)) {
                    return true;
                }
                break;
            }
            case 2: {
                if (this.inputs.justDown(key_enum_1.KEY.LEFT)) {
                    return true;
                }
                break;
            }
            case 3: {
                if (this.inputs.justDown(key_enum_1.KEY.RIGHT)) {
                    return true;
                }
                break;
            }
            case 4: {
                if (this.inputs.justDown(key_enum_1.KEY.A)) {
                    return true;
                }
                break;
            }
            case 5: {
                if (this.inputs.justDown(key_enum_1.KEY.B)) {
                    return true;
                }
                break;
            }
            case 6: {
                if (this.inputs.justDown(key_enum_1.KEY.X)) {
                    return true;
                }
                break;
            }
            case 7: {
                if (this.inputs.justDown(key_enum_1.KEY.Z)) {
                    return true;
                }
                break;
            }
            default: {
                break;
            }
        }
    }
    sfx() {
        let ctx = new AudioContext();
        let lfo = ctx.createOscillator();
        lfo.frequency.value = 1.0;
        // Create the high frequency oscillator to be modulated
        let hfo = ctx.createOscillator();
        hfo.frequency.value = 440.0;
        // Create a gain node whose gain determines the amplitude of the modulation signal
        let modulationGain = ctx.createGain();
        modulationGain.gain.value = 50;
        // Configure the graph and start the oscillators
        lfo.connect(modulationGain);
        modulationGain.connect(hfo.detune);
        hfo.connect(ctx.destination);
        hfo.start(0);
        lfo.start(0);
    }
    /********************************************************************
     * Return mouse informations.
     * @return [IMouse Interface: Coordinates and Button pressed]
     ********************************************************************/
    mouse() {
        return this.inputs.getMouse();
    }
    /********************************************************************
     * Get the game width in pixels
     * @return [game width]
     ********************************************************************/
    ggw() {
        return this.cr.canvas.width / this.cr.options.scaleFactor;
    }
    /********************************************************************
     * Get the game height in pixels
     * @return [game height]
     ********************************************************************/
    ggh() {
        return this.cr.canvas.height / this.cr.options.scaleFactor;
    }
    ticks() {
        return this.passedTicks;
    }
    rnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /********************************************************************
     * Color Range Error (100%)
     * Check if the selected color is between 0 and 15.
     * @param c [the color to check]
     ********************************************************************/
    colorRangeError(c) {
        if (c < 0 || c > 15) {
            throw new RangeError("You have selected an incorrect color index (" +
                c +
                "). The color must be between 0-15");
        }
    }
    /********************************************************************
     * SPECIAL API FUNCTIONS
     ********************************************************************/
    crc(c, r) {
        let circleDistanceX = Math.abs(c.x - r.x);
        let circleDistanceY = Math.abs(c.y - r.y);
        if (circleDistanceX > r.w / 2 + c.r) {
            return false;
        }
        if (circleDistanceY > r.h / 2 + c.r) {
            return false;
        }
        if (circleDistanceX <= r.w / 2) {
            return true;
        }
        if (circleDistanceY <= r.h / 2) {
            return true;
        }
        let cornerDistance_sq = (circleDistanceX - r.w / 2) * (circleDistanceX - r.w / 2) +
            (circleDistanceY - r.h / 2) * (circleDistanceY - r.h / 2);
        return cornerDistance_sq <= c.r * c.r;
    }
    rrc(r1, r2) {
        if (r1.x < r2.x + r2.w &&
            r1.x + r1.w > r2.x &&
            r1.y < r2.y + r2.h &&
            r1.y + r1.h > r2.y) {
            return true;
        }
        return false;
    }
    anim(object, startFrame, numberOfFrames, speed) {
        if (!object.a_ct) {
            object.a_ct = 0;
        }
        if (!object.a_st) {
            object.a_st = 0;
        }
        object.a_ct += 1;
        if (object.a_ct % (30 / speed) == 0) {
            object.a_st += 1;
            if (object.a_st == numberOfFrames)
                object.a_st = 0;
        }
        object.a_fr = startFrame + object.a_st;
        this.spr(object.a_fr, object.x, object.y);
    }
    calculateAlphaHexCode(a) {
        a = Math.round(a * 100) / 100;
        var alpha = Math.round(a * 255);
        var hex = (alpha + 0x10000)
            .toString(16)
            .substr(-2)
            .toUpperCase();
        return hex;
    }
}
exports.API = API;
