/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Tiled Map Json Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
export interface ITiledMapJson {
    mapHeight: number;
    mapWidth: number;
    tileWidth: number;
    tileHeight: number;
    layers: any[];
    tilesets: any[];
}
