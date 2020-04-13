/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Random - Pseudorandom Number Generator (PRNG)
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */

/**
 * Pseudorandom Number Generator (PRNG) class (Xorshift128+).
 * A shift/rotate-based linear transformation designed by Sebastiano Vigna
 * in collaboration with David Blackman.
 *
 * PRNG references:
 * https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131
 * https://v8.dev/blog/math-random
 * https://blog.abelotech.com/posts/generate-random-values-nodejs-javascript
 * https://en.wikipedia.org/wiki/List_of_random_number_generators
 *
 * Bitwise operations references:
 * https://github.com/FlorianWendelborn/bitwise
 */

export class Random {
  private state0: number;
  private state1: number;
  private n: number;

  constructor() {
    // Different initial seed values will dramatically affect the outcome. The default values, 1 & 2
    // for state0 and state1 respectively, will produce a pattern in the visualizer.
    // A pattern becomes visible when the algorithm starts to repeat itself. If you use 12 & 23,
    // in contrast, there is no perceptible pattern.
    this.state0 = 1;
    this.state1 = 2;
    this.n = 0;
    this.sow();
  }

  public xorshift128plus(): number {
    let s1 = this.state0;
    let s0 = this.state1;
    this.state0 = s0;

    s1 ^= s1 << 23;
    s1 ^= s1 >> 17;
    s1 ^= s0;
    s1 ^= s0 >> 26;
    this.state1 = s1;

    return this.state0 + this.state1;
  }

  private sow(): void {
    // Always reset to default seed
    this.n = 0xefc8249d;
    this.state0 = this.hash(" ");
    this.state1 = this.hash(" ");
  }

  private hash(data): number {
    var h;
    var n = this.n;

    data = data.toString();

    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }

    this.n = n;

    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  }

  public leftShift(value: number[], shift: number): number[] {
    const result: number[] = [];

    // through a error if the shift is greater than the array length
    if (value.length < shift) {
      throw new RangeError(
        "The shift cannot be greater than the array length! "
      );
    }

    // shift to the left by the corresponding shift value
    for (let i = shift; i < value.length; i++) {
      result.push(value[i]);
    }

    // fill empty space in array with 0's
    for (let i = 0; i < shift; i++) {
      result.push(0);
    }

    return result;
  }

  public rightShift(value: number[], shift: number): number[] {
    const result: number[] = [];

    // through a error if the shift is greater than the array length
    if (value.length < shift) {
      throw new RangeError(
        "The shift cannot be greater than the array length! "
      );
    }

    // fill starting space in array with 0's
    for (let i = 0; i < shift; i++) {
      result.push(0);
    }

    // shift to the left by the corresponding shift value
    for (let i = 0; i < shift; i++) {
      result.push(value[i]);
    }

    return result;
  }

  public xor(value1: number[], value2: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < value1.length; i++) {
      if (value1[i] === value2[i]) {
        result.push(0);
      } else {
        result.push(1);
      }
    }
    return result;
  }
}

/*
if (seeds === undefined) { seeds = [ (Date.now() * Math.random()).toString() ]; }
     
      this.c = 1;
      this.s0 = 0;
      this.s1 = 0;
      this.s2 = 0;
      this.n = 0;
      this.signs = [ -1, 1 ];

      if (seeds)
      {
          this.init(seeds);
      }
  }

  */
