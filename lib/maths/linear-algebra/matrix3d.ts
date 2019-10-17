/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Matrix3D class
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */

import { Vector } from "./vector";

/**
 * A matrix is a mathematical object composed of a set of numerical quantities
 * ar­ranged in a two-dimensional array of rows and columns.
 *
 * This class holds a 3 x 3 matrix in a two-dimensional array ( n x m ).
 * ```typescript
 * [[M00,M01,M0(m-1)]
 *  [M10,M11,M1(m-1)]
 *  [M(n-1)0,M(n-1)1,M(n-1)(m-1)]]
 * ```
 * The arrangement of the entries is in a row-major order
 * (https://en.wikipedia.org/wiki/Row-_and_column-major_order).
 */
export class Matrix3D {
  private entries: [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ];

  constructor() {}

  /**
   * Init Matrix3D with three Vectors.
   * ```typescript
   * let m = new Maths.Matrix3D();
   * m.initWith3dVectors([
   * new Vector(0, 1, 2),
   * new Vector(3, 4, 5),
   * new Vector(6, 7, 8)]);
   * // => [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
   * ```
   * @param vectors
   */
  public initWith3dVectors(vectors: [Vector, Vector, Vector]): void {
    this.entries = [
      [vectors[0].getX(), vectors[0].getY(), vectors[0].getZ()],
      [vectors[1].getX(), vectors[1].getY(), vectors[1].getZ()],
      [vectors[2].getX(), vectors[2].getY(), vectors[2].getZ()]
    ];
  }

  /**
   * Init Matrix3D with nine numbers.
   * ```typescript
   * let m = new Maths.Matrix3D();
   * m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
   * // => [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
   * ```
   * @param n00
   * @param n01
   * @param n02
   * @param n10
   * @param n11
   * @param n12
   * @param n20
   * @param n21
   * @param n22
   */
  public initWithNumbers(
    n00: number,
    n01: number,
    n02: number,
    n10: number,
    n11: number,
    n12: number,
    n20: number,
    n21: number,
    n22: number
  ): void {
    this.entries = [[n00, n01, n02], [n10, n11, n12], [n20, n21, n22]];
  }

  /**
   * Get all the Matrix3D entries.
   */
  public getEntities(): [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ] {
    return this.entries;
  }

  /**
   * Get specific entry in the Matrix3D at the given position.
   * @param n
   * @param m
   */
  public getEntryAt(n: number, m: number): number {
    if (this.isValidPosition(n, m)) {
      return this.entries[n][m];
    }
  }

  /**
   * Get row in the Matrix3D at the given position.
   * @param row
   */
  public getRowAt(row: number): number[] {
    if (row >= 0 && row < 3) {
      return this.entries[row];
    }
    throw new RangeError(
      "The selected row " + row + " is out of range (must be between 0 and 2). "
    );
  }

  /**
   * Returns true if entry in the Matrix3D exist at the given position.
   * @param m
   * @param n
   */
  private isValidPosition(m: number, n: number): boolean {
    if (m >= 0 && m < 3 && n >= 0 && n < 3) {
      return true;
    }
  }

  /**
   * Add another Matrix3D to this Matrix3D.
   * ```typescript
   * let m1 = new Maths.Matrix3D();
   * m1.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
   * let m2 = new Maths.Matrix3D();
   * m2.initWithNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1);
   * m1.add(m2);
   * m1.getEntities()
   * // => [ [ 2, 3, 4 ], [ 5, 6, 7 ], [ 8, 9, 10 ] ]
   * ```
   * @param matrix
   */
  public add(matrix: Matrix3D): void {
    for (let n = 0; n < 3; n++) {
      for (let m = 0; m < 3; m++) {
        this.entries[n][m] += matrix.getEntryAt(n, m);
      }
    }
  }

  /**
   * Subtract another Matrix3D from this Matrix3D.
   * ```typescript
   * let m1 = new Maths.Matrix3D();
   * m1.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
   * let m2 = new Maths.Matrix3D();
   * m2.initWithNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1);
   * m1.subtract(m2);
   * m1.getEntities()
   * // => [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
   * ```
   * @param matrix
   */
  public subtract(matrix: Matrix3D): void {
    for (let n = 0; n < 3; n++) {
      for (let m = 0; m < 3; m++) {
        this.entries[n][m] -= matrix.getEntryAt(n, m);
      }
    }
  }

  /**
   * Multiply this Matrix3D by a scalar.
   * ```typescript
   * let m = new Maths.Matrix3D();
   * m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
   * m.multiplyByScalar(2);
   * m.getEntities()
   * // => [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]
   * ```
   * @param scalar
   */
  public multiplyByScalar(scalar: number): void {
    for (let n = 0; n < 3; n++) {
      for (let m = 0; m < 3; m++) {
        this.entries[n][m] *= scalar;
      }
    }
  }
}
