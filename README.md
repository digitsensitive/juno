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

The framework is still in a very early stage of development.

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

Init your own color palatte.

`cls`

Clear the screen.

`pix`

Draw a pixel.

`circb`

Draw a circle outline.

`circ`

Draw a filled circle.

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

`load`

Load your spritesheet.

`spr`

Add a sprite.

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

`pget`

Get pixel color index from 2D position.

## FAQ

1. How is the basic setup?
Have a look at the [Juno examples](https://github.com/digitsensitive/juno-examples).
You will find a boilerplate.

Basically, only three functions are required. The `init()` function can be used
to initiate the color palette, load the sprites and define variables.
With the `update()` function parameters are adjusted and the `render()`
function draws your masterpieces.

1. How do I load my sprites?
