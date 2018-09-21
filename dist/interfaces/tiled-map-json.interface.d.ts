/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Tiled Map Json Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
export interface ITileset {
    name: string;
    tileCount: number;
    tileProperties: any;
}
export interface IObject {
    name: string;
    x: number;
    y: number;
    height: number;
    width: number;
}
export interface ILayer {
    name: string;
    type: string;
    data: number[][];
    objects: IObject[];
    height: number;
    width: number;
    visible: boolean;
    opacity: number;
    x: number;
    y: number;
}
export interface ITiledMapJson {
    mapHeight: number;
    mapWidth: number;
    tileWidth: number;
    tileHeight: number;
    layers: ILayer[];
    tilesets: ITileset[];
}
