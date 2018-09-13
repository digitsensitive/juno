/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno: Game Config Interface
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
export interface IGameConfig {
    name: string;
    scale: number;
    allowedInputs?: {
        keyboard?: boolean;
        mouse?: boolean;
    };
    width?: number;
    height?: number;
    fullscreen?: boolean;
}
