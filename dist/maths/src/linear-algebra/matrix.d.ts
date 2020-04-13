/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Matrix class
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
import { IMatrixConstructor } from "./interfaces/matrix.interface";
/**
 * A matrix is a mathematical object composed of a set of numerical quantities
 * ar­ranged in a two-dimensional array of rows and columns.
 *
 * A matrix has n rows and m columns, we say that its size is n x m.
 *
 * Example of a 2 x 3 matrix:
 *
 * *M* =  [1 2 3]
 *        [4 5 6]
 */
export declare class Matrix {
    private entries;
    private rows;
    private columns;
    constructor(params: IMatrixConstructor);
    /**
     * Get number of rows in this matrix.
     */
    getNumberOfRows(): number;
    /**
     * Get number of columns in this matrix.
     */
    getNumberOfColumns(): number;
    /**
     * Set number of rows in this matrix.
     */
    setNumberOfRows(r: number): void;
    /**
     * Set number of columns in this matrix.
     */
    setNumberOfColumns(c: number): void;
    /**
     * Get all the matrix entries.
     */
    getEntries(): number[][];
    /**
     * Get a entry in matrix at the given position.
     * @param x
     * @param y
     */
    getEntryAt(m: number, n: number): number;
    /**
     * Set a entry in matrix at the given position.
     * @param x
     * @param y
     */
    setEntryAt(value: number, m: number, n: number): void;
    /**
     * Get the diagonal entries of the matrix.
     * Diagonal entries share the equal row and column index.
     */
    getDiagnonalEntries(): number[];
    /**
     * Get the off-diagonal entries of the matrix.
     * Off-diagonal entries share a different row and column index.
     */
    getOffDiagonalEntries(): number[];
    /**
     * Transpose (flip matrix over its diagonal) the matrix and return a copy.
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 3, 5], [2, 4, 6]] });
     * m.getTransposedMatrix();
     * // => [1, 2]
     * // => [3, 4]
     * // => [5, 6]
     * ```
     */
    getTransposedMatrix(): Matrix;
    /**
     * Returns true if entry in matrix exist at the given position.
     * @param x
     * @param y
     */
    private isValidPosition;
    /**
     * Evaluate if the matrix is diagonal.
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] });
     * m.isDiagonalMatrix();
     * // => true
     * ```
     */
    isDiagonalMatrix(): boolean;
    /**
     * Evaluate if the matrix is squared (n = m).
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] });
     * m.isSquareMatrix();
     * // => true
     * ```
     */
    isSquareMatrix(): boolean;
    /**
     * Evaluate if the matrix is symmetric (n = m).
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 5, -3], [5, 4, 2], [-3, 2, 0]] });
     * m.isSymmetricMatrix();
     * // => true
     * ```
     */
    isSymmetricMatrix(): boolean;
    /**
     * Evaluate if the matrix is antisymmetric.
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[0, 1, -4], [-1, 0, 7], [4, -7, 0]] });
     * m.isAntisymmetricMatrix();
     * // => true
     * ```
     */
    isAntisymmetricMatrix(): boolean;
    /**
     * Get a copy of the matrix.
     */
    getCopy(): Matrix;
}
