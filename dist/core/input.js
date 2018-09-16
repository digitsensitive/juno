"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Juno Core: Input Class
 * @license      {@link https://github.com/digitsensitive/juno-console/blob/master/license.txt|MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Input {
    constructor(cr) {
        this.cr = cr;
        this.mouse = {};
        this.registerEvents();
        if (this.cr.options.inputs.keyboard) {
            this.lastKeyPressed = -1;
            this.registerKeyboardKeys();
        }
    }
    registerEvents() {
        if (this.cr.options.inputs.mouse) {
            this.cr.canvas.addEventListener("mousemove", e => {
                var rect = this.cr.canvas.getBoundingClientRect();
                this.mouse.x = (e.x - rect.left) / this.cr.options.scaleFactor;
                this.mouse.y = (e.y - rect.top) / this.cr.options.scaleFactor;
            });
            this.cr.canvas.addEventListener("mousedown", e => {
                if (e.button === 0) {
                    this.currentMouseKey = "L";
                }
                else if (e.button === 1) {
                    this.currentMouseKey = "M";
                }
                else if (e.button === 2) {
                    this.currentMouseKey = "R";
                }
            });
            this.cr.canvas.addEventListener("mouseup", e => {
                this.currentMouseKey = "";
            });
        }
        if (this.cr.options.inputs.keyboard) {
            window.addEventListener("keydown", e => {
                this.keys.set(e.keyCode, true);
            });
            window.addEventListener("keyup", e => {
                this.lastKeyPressed = -1;
                this.keys.set(e.keyCode, false);
            });
        }
    }
    registerKeyboardKeys() {
        this.keys = new Map([
            [38, false],
            [40, false],
            [37, false],
            [39, false],
            [65, false],
            [66, false],
            [88, false],
            [89, false]
        ]);
    }
    getMouse() {
        return { x: this.mouse.x, y: this.mouse.y, button: this.currentMouseKey };
    }
    getMousePosition() {
        return this.mouse;
    }
    getMouseButton() {
        return this.currentMouseKey;
    }
    isDown(code) {
        if (this.keys.get(code)) {
            return true;
        }
        else {
            return false;
        }
    }
    justDown(code) {
        if (this.keys.get(code)) {
            if (this.lastKeyPressed === code) {
                this.lastKeyPressed = code;
                return false;
            }
            else {
                this.lastKeyPressed = code;
                return true;
            }
        }
    }
}
exports.Input = Input;
