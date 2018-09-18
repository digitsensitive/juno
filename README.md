<p align="center">
  <img width=100% src="https://github.com/digitsensitive/juno/blob/master/assets/github/juno.png">
</p>

[![dependencies status badge](https://david-dm.org/digitsensitive/juno/status.svg)](https://david-dm.org/digitsensitive/juno)
[![GitHub issues](https://img.shields.io/github/issues/digitsensitive/juno.svg)](https://github.com/digitsensitive/juno/issues)
[![GitHub stars](https://img.shields.io/github/stars/digitsensitive/juno.svg)](https://github.com/digitsensitive/juno/stargazers)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![GitHub license](https://img.shields.io/github/license/digitsensitive/juno.svg)](https://github.com/digitsensitive/juno)

Juno is a simple and lightweight 2D game framework written in TypeScript for
making tiny pixel style HTML5 Games. The structure of Juno is similar to that of
[fantasy consoles](https://github.com/paladin-t/fantasy) with a simple API.
Creating prototypes has never been easier.

The framework is still in an early stage of development.

What are you waiting for? Start with Juno and create games in a nutshell!

<div align="center">
  <sub>Created with ❤︎ by <a href="https://github.com/digitsensitive">digitsensitive</a></sub>
</div>

## Getting started

### Installation

```sh
npm install juno-console --save
yarn add juno-console
bower install juno-console --save
```

## Usage

For a boilerplate and examples have a look at the
[Juno examples](https://github.com/digitsensitive/juno-examples).

## API

For more details see comments in the code.

`ipal`

Init your own color palette.

`cls`

Clear the screen.

`pix`

Draw a pixel.

`pget`

Get pixel color index from 2D position.

`load`

Load your spritesheet.

`spr`

Add a sprite.

`map`

Load a Tilemap.

`mget`

Get map tile index.

`mset`

Set map tile index.

`circ`

Draw a filled circle.

`circb`

Draw a circle outline.

`line`

Draw a line.

`rect`

Draw a filled rect.

`rectb`

Draw a rectangle outline.

`print`

Draw some text.

`trace`

Trace a variable for it's value.

`key`

Check if a key is currently pressed.

`keyp`

Check if a key was pressed in the frame before (only once).

`mouse`

Get the mouse coordinates.

`ggw`

Get the game width.

`ggh`

Get the game height.

`ticks`

Get the ticks since start of the game.

`rnd`

Get a random number between min and max value.

`crc`

Simple circle-rectangle-collision.

`rrc`

Simple rectangle-rectangle collision.

`anim`

Animate your sprite.


## FAQ

**How is the basic setup?**

Have a look at the [Juno examples](https://github.com/digitsensitive/juno-examples).
You will find a boilerplate.

Basically, only three functions are required. The `init()` function can be used
to initiate the color palette, load the sprites or the json map file and define variables.
With the `update()` function parameters are adjusted and the `render()`
function draws your masterpieces.

**How do I load my sprites?**

Make a call of the `load()` function in your `init()`. The path is relative
to your root folder. You can then draw your sprites in the `render()` function.

```
init(): void {
  this.api.load("sprites", "./src/assets/sprites.png", 8);
}

render(): void {
  this.api.spr(0, 10, 10);
}
```

> Be aware: Currently you can only load one spritesheet.

**How do I load my JSON map?**

Similar as loading your sprites. Be sure to load your tiles before.

```
init(): void {
  this.api.load("tiles", "./assets/tiles.png", 8);
  this.api.load("map", "./assets/map.json", 8);
}

render(): void {
  this.api.spr(0, 10, 10);
}
```

> Be aware: Currently you can only load one Tileset.

**How do I load my own color palette?**

One palette comprises a total of 16 colours. By default, a predefined palette
is loaded. Your own palette can be loaded using a chain of hex strings (6 x 16 = 96 characters).

```
init(): void {
  this.api.ipal(1a1c2c572956b14156ee7b58ffd079a0f07238b86e276e7b29366f405bd04fa4f786ecf8f4f4f493b6c1557185324056);
}
```

**OK, so I have chosen a color palette, but how do I get the colors into my graphics editor?**

The easiest way is to load the already defined
[.css swatch](https://github.com/digitsensitive/juno-examples/tree/master/assets/swatches)
directly into your graphics editor. Et voilà!

## Changelog

[Learn about the latest improvements](https://github.com/digitsensitive/juno/blob/master/CHANGELOG.md)

## Contributing

Want to correct a bug, contribute some code, or improve the codes? Excellent! Let me know!

## License

This project is licensed under the MIT License - see the
[LICENSE.md](https://github.com/digitsensitive/juno/blob/master/LICENSE.md) file for details.
