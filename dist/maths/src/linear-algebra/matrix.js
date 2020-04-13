"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Matrix class
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
class Matrix {
    constructor(params) {
        this.entries = [];
        // matrix predefined
        if (params.matrix) {
            this.entries = params.matrix;
            this.rows = params.matrix.length;
            this.columns = params.matrix[0].length;
        }
        else {
            this.rows = params.numberOfRows || 0;
            this.columns = params.numberOfColumns || 0;
            if (this.rows > 0 || this.columns > 0) {
                for (let n = 0; n < this.rows; n++) {
                    this.entries[n] = [];
                    for (let m = 0; m < this.columns; m++) {
                        this.entries[n][m] = 0;
                    }
                }
            }
        }
    }
    /**
     * Get number of rows in this matrix.
     */
    getNumberOfRows() {
        return this.rows;
    }
    /**
     * Get number of columns in this matrix.
     */
    getNumberOfColumns() {
        return this.columns;
    }
    /**
     * Set number of rows in this matrix.
     */
    setNumberOfRows(r) {
        this.rows = r;
    }
    /**
     * Set number of columns in this matrix.
     */
    setNumberOfColumns(c) {
        this.columns = c;
    }
    /**
     * Get all the matrix entries.
     */
    getEntries() {
        return this.entries;
    }
    /**
     * Get a entry in matrix at the given position.
     * @param x
     * @param y
     */
    getEntryAt(m, n) {
        if (this.isValidPosition(m, n)) {
            return this.entries[n][m];
        }
    }
    /**
     * Set a entry in matrix at the given position.
     * @param x
     * @param y
     */
    setEntryAt(value, m, n) {
        if (this.isValidPosition(m, n)) {
            this.entries[n][m] = value;
        }
    }
    /**
     * Get the diagonal entries of the matrix.
     * Diagonal entries share the equal row and column index.
     */
    getDiagnonalEntries() {
        let counter = 0;
        let diagonalEntries = [];
        while (this.isValidPosition(counter, counter)) {
            diagonalEntries.push(this.entries[counter][counter]);
            counter++;
        }
        return diagonalEntries;
    }
    /**
     * Get the off-diagonal entries of the matrix.
     * Off-diagonal entries share a different row and column index.
     */
    getOffDiagonalEntries() {
        let offDiagonalEntries = [];
        for (let n = 0; n < this.rows; n++) {
            for (let m = 0; m < this.columns; m++) {
                if (n !== m) {
                    offDiagonalEntries.push(this.entries[n][m]);
                }
            }
        }
        return offDiagonalEntries;
    }
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
    getTransposedMatrix() {
        let transposedMatrix = new Matrix({
            numberOfColumns: this.rows,
            numberOfRows: this.columns
        });
        for (let n = 0; n < this.rows; n++) {
            for (let m = 0; m < this.columns; m++) {
                transposedMatrix.setEntryAt(this.entries[n][m], n, m);
            }
        }
        return transposedMatrix;
    }
    /**
     * Returns true if entry in matrix exist at the given position.
     * @param x
     * @param y
     */
    isValidPosition(m, n) {
        if (m >= 0 && m < this.columns && n >= 0 && n < this.rows) {
            return true;
        }
    }
    /**
     * Evaluate if the matrix is diagonal.
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] });
     * m.isDiagonalMatrix();
     * // => true
     * ```
     */
    isDiagonalMatrix() {
        let getOffDiagonalEntries = this.getOffDiagonalEntries();
        for (let e of getOffDiagonalEntries) {
            if (getOffDiagonalEntries[e] !== 0) {
                return false;
            }
        }
        return true;
    }
    /**
     * Evaluate if the matrix is squared (n = m).
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] });
     * m.isSquareMatrix();
     * // => true
     * ```
     */
    isSquareMatrix() {
        if (this.rows === this.columns) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Evaluate if the matrix is symmetric (n = m).
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[1, 5, -3], [5, 4, 2], [-3, 2, 0]] });
     * m.isSymmetricMatrix();
     * // => true
     * ```
     */
    isSymmetricMatrix() {
        if (JSON.stringify(this.entries) ===
            JSON.stringify(this.getTransposedMatrix().entries) ||
            this.isDiagonalMatrix()) {
            return true;
        }
        return false;
    }
    /**
     * Evaluate if the matrix is antisymmetric.
     * ```typescript
     * let m = new Maths.Matrix({ matrix: [[0, 1, -4], [-1, 0, 7], [4, -7, 0]] });
     * m.isAntisymmetricMatrix();
     * // => true
     * ```
     */
    isAntisymmetricMatrix() {
        let transposedMatrix = this.getTransposedMatrix().getEntries();
        for (let n = 0; n < this.rows; n++) {
            for (let m = 0; m < this.columns; m++) {
                if (transposedMatrix[n][m] !== this.entries[n][m] * -1) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Get a copy of the matrix.
     */
    getCopy() {
        let copiedEntries = [];
        for (let n = 0; n < this.rows; n++) {
            copiedEntries[n] = [];
            for (let m = 0; m < this.columns; m++) {
                copiedEntries[n][m] = this.entries[n][m];
            }
        }
        return new Matrix({ matrix: copiedEntries });
    }
}
exports.Matrix = Matrix;
