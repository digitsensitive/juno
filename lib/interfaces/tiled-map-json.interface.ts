/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Tiled Map Json Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */

interface ILayer {
  name: string;
  type: string;
  data: number[];
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
  tilesets: any[];
}
