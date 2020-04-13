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
export declare class Matrix3D {
    private entries;
    constructor();
    /**
     * Init Matrix3D with three Vectors.
     * ```typescript
     * let m = new Maths.Matrix3D();
     * m.initWith3dVectors([
     * new Maths.Vector(0, 1, 2),
     * new Maths.Vector(3, 4, 5),
     * new Maths.Vector(6, 7, 8)]);
     * // => [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
     * ```
     * @param vectors
     */
    initWith3dVectors(vectors: [Vector, Vector, Vector]): void;
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
    initWithNumbers(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number, n20: number, n21: number, n22: number): void;
    /**
     * Get all the Matrix3D entries.
     * ```typescript
     * let m = new Maths.Matrix3D();
     * m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
     * m.getEntries();
     * // => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
     * ```
     */
    getEntries(): [[number, number, number], [number, number, number], [number, number, number]];
    /**
     * Get specific entry in the Matrix3D at the given position.
     * ```typescript
     * let m = new Maths.Matrix3D();
     * m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
     * m.getEntryAt(0, 2);
     * // => 3
     * ```
     * @param n
     * @param m
     */
    getEntryAt(n: number, m: number): number;
    /**
     * Get row in the Matrix3D at the given position.
     * ```typescript
     * let m = new Maths.Matrix3D();
     * m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
     * m.getRowAt(1);
     * // => [4, 5, 6]
     * ```
     * @param row
     */
    getRowAt(row: number): number[];
    /**
     * Returns true if entry in the Matrix3D exist at the given position.
     * @param n
     * @param m
     */
    private isValidPosition;
    /**
     * Add another Matrix3D to this Matrix3D.
     * ```typescript
     * let m1 = new Maths.Matrix3D();
     * m1.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
     * let m2 = new Maths.Matrix3D();
     * m2.initWithNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1);
     * m1.add(m2);
     * m1.getEntries();
     * // => [ [ 2, 3, 4 ], [ 5, 6, 7 ], [ 8, 9, 10 ] ]
     * ```
     * @param matrix
     */
    add(matrix: Matrix3D): void;
    /**
     * Subtract another Matrix3D from this Matrix3D.
     * ```typescript
     * let m1 = new Maths.Matrix3D();
     * m1.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
     * let m2 = new Maths.Matrix3D();
     * m2.initWithNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1);
     * m1.subtract(m2);
     * m1.getEntries();
     * // => [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
     * ```
     * @param matrix
     */
    subtract(matrix: Matrix3D): void;
    /**
     * Multiply this Matrix3D with another Matrix3D.
     * ```typescript
     * let m1 = new Maths.Matrix3D();
     * m1.initWithNumbers(6, 2, 4, 2, 4, 3, 1, 6, 7);
     * m1.getEntries();
     * // => [ [ 6, 2, 4 ], [ 2, 4, 3 ], [ 1, 6, 7 ] ]
     * let m2 = new Maths.Matrix3D();
     * m2.initWithNumbers(2, 2, 2, 2, 2, 2, 2, 2, 2);
     * m2.getEntries();
     * // => [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ]
     * m1.multiplyMatrix(m2);
     * m1.getEntries();
     * // => [ [ 24, 24, 24 ], [ 18, 18, 18 ], [ 28, 28, 28 ] ]
     * ```
     * @param matrix
     */
    multiplyMatrix(matrix: Matrix3D): Matrix3D;
    /**
     * Multiply this Matrix3D with a Vector.
     * ```typescript
     * let m = new Maths.Matrix3D();
     * m.initWithNumbers(6, 2, 4, 2, 4, 3, 1, 6, 7);
     * let v = m.multiplyVector(new Maths.Vector(1, 0, 0));
     * v.toString();
     * // => x: 6, y: 2, z: 1
     * ```
     * @param matrix
     */
    multiplyVector(vector: Vector): Vector;
    /**
     * Multiply this Matrix3D by a scalar.
     * ```typescript
     * let m = new Maths.Matrix3D();
     * m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
     * m.multiplyByScalar(2);
     * m.getEntries();
     * // => [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]
     * ```
     * @param scalar
     */
    multiplyByScalar(scalar: number): void;
}
