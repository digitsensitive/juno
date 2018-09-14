# Juno
Juno is a simple and lightweight 2D game framework written in TypeScript for
making tiny HTML5 Games. The structure of Juno is similar to that of
[fantasy consoles](https://github.com/paladin-t/fantasy) with simple and
limited number of functions. Thanks to this, prototypes can be created quickly.

With Juno you can create wonderful pixel-art games in a nutshell.

The framework is still in a very early stage of development. We do not support
any editors, but you can easily load your spritesheets.

## Getting started

### Installation

```sh
npm install juno-console --save
yarn add juno-console
bower install juno-console --save
```

## Usage

For a boilerplate and examples have a look at the
[official Juno examples](https://github.com/digitsensitive/juno-examples).

## API

`ipal`(palette: string): void;

`cls`(c?: number): void;

`pix`(x0: number, y0: number, c: number): void;

`circb`(x0: number, y0: number, r: number, c: number): void;

`circ`(x0: number, y0: number, r: number, c: number): void;

`line`(x0: number, y0: number, x1: number, y1: number, c: number): void;

`rect`(x0: number, y0: number, w: number, h: number, c: number): void;

`rectb`(x0: number, y0: number, w: number, h: number, c: number): void;

`print`(s: string, x0: number, y0: number, c: number, a?: number, sc?: number): void;

`trace`(s: string | number): void;

`load`(n: string, p: string, size: number): void;

`spr`(s: number, x0: number, y0: number): void;

`key`(code: number): boolean;

`keyp`(code: number): boolean;

`mouse`(): IMouseCoordinates;

`ggw`(): number;

`ggh`(): number;

`ticks`(): number;

`rnd`(min: number, max: number): number;

`crc`(c: any, r: any): boolean;

`rrc`(r1: any, r2: any): boolean;

`anim`(object: any, startFrame: number, numberOfFrames: number, speed: number): void;
