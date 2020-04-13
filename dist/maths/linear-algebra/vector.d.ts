/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Vector class
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
/**
 * UNFINISHED
 * https://github.com/maxkueng/victor/blob/master/build/victor.js
 * TODO: Finish functions
 * TODO: Rename functions
 * TODO: Make tests
 */
/**
 * A basic euclidean vector (also called geometric or spatial vector) class.
 * You might use it for two or three dimensional vectors.
 * A vector is a geometric object that has magnitude (or length) and direction.
 */
export declare class Vector {
    private x;
    private y;
    private z;
    constructor(x?: number, y?: number, z?: number);
    /**
     * Get the x dimension of this vector.
     */
    getX(): number;
    /**
     * Get the y dimension of this vector.
     */
    getY(): number;
    /**
     * Get the z dimension of this vector.
     */
    getZ(): number;
    /**
     * Set the x dimension of this vector.
     */
    setX(newX: number): void;
    /**
     * Set the y dimension of this vector.
     */
    setY(newY: number): void;
    /**
     * Set the z dimension of this vector.
     */
    setZ(newZ: number): void;
    /**
     * Add the x dimension of an external vector to this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 1);
     * v1.addX(v2);
     * v1.toString();
     * // => x: 5, y: 2
     * ```
     * @param vector
     */
    addX(vector: Vector): void;
    /**
     * Add the y dimension of an external vector to this vector.
     * ```typescript
     * let v1 = new Maths.Vector(1, 5);
     * let v2 = new Maths.Vector(2, 1);
     * v1.addY(v2);
     * v1.toString();
     * // => x: 1, y: 6
     * ```
     * @param vector
     */
    addY(vector: Vector): void;
    /**
     * Add the z dimension of an external vector to this vector.
     * ```typescript
     * let v1 = new Maths.Vector(1, 5, 3);
     * let v2 = new Maths.Vector(2, 1, 2);
     * v1.addZ(v2);
     * v1.toString();
     * // => x: 1, y: 5, z: 5
     * ```
     * @param vector
     */
    addZ(vector: Vector): void;
    /**
     * Add an external vector to this vector.
     * ```typescript
     * let v1 = new Maths.Vector(5, 4);
     * let v2 = new Maths.Vector(2, 5);
     * v1.add(v2)
     * v1.toString();
     * // => x: 7, y: 9
     * ```
     * @param vector
     */
    add(vector: Vector): void;
    /**
     * Subtract the x dimension of an external vector from this vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 1);
     * v1.subtractX(v2);
     * v1.toString();
     * // => x: -1, y: 2
     * ```
     * @param vector
     */
    subtractX(vector: Vector): void;
    /**
     * Subtract the y dimension of an external vector from this vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 1);
     * v1.subtractY(v2);
     * v1.toString();
     * // => x: 2, y: 1
     * ```
     * @param vector
     */
    subtractY(vector: Vector): void;
    /**
     * Subtract an external vector from this vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 1);
     * v1.subtract(v2);
     * v1.toString();
     * // => x: -1, y: 1
     * ```
     * @param vector
     */
    subtract(vector: Vector): void;
    /**
     * Add a scalar value to the x dimension of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(3, 2);
     * v1.addScalar(2)
     * v1.toString();
     * // => x: 5, y: 2
     * ```
     * @param scalar
     */
    addScalarX(scalar: number): void;
    /**
     * Add a scalar value to the y dimension of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(1, 6);
     * v1.addScalar(4)
     * v1.toString();
     * // => x: 1, y: 10
     * ```
     * @param scalar
     */
    addScalarY(scalar: number): void;
    /**
     * Add a scalar value to both dimensions of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(5, 4);
     * v1.addScalar(4)
     * v1.toString();
     * // => x: 9, y: 8
     * ```
     * @param scalar
     */
    addScalar(scalar: number): void;
    /**
     * Subtract a scalar value from the x dimension of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 6);
     * v1.subtractScalarX(4)
     * v1.toString();
     * // => x: -2, y: 6
     * ```
     * @param scalar
     */
    subtractScalarX(scalar: number): void;
    /**
     * Subtract a scalar value from the y dimension of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(6, 4);
     * v1.subtractScalarY(2)
     * v1.toString();
     * // => x: 6, y: 2
     * ```
     * @param scalar
     */
    subtractScalarY(scalar: number): void;
    /**
     * Subtract a scalar value from both dimensions of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(6, 4);
     * v1.subtractScalar(3)
     * v1.toString();
     * // => x: 3, y: 1
     * ```
     * @param scalar
     */
    subtractScalar(scalar: number): void;
    /**
     * Divide the x dimension of an external vector to this vector.
     * ```typescript
     * let v1 = new Maths.Vector(6, 4);
     * let v2 = new Maths.Vector(2, 5);
     * v1.divideX(v2)
     * v1.toString();
     * // => x: 3, y: 4
     * ```
     * @param vector
     */
    divideX(vector: Vector): void;
    /**
     * Divide the y dimension of an external vector to this vector.
     * ```typescript
     * let v1 = new Maths.Vector(6, 4);
     * let v2 = new Maths.Vector(2, 2);
     * v1.divideY(v2)
     * v1.toString();
     * // => x: 6, y: 2
     * ```
     * @param vector
     */
    divideY(vector: Vector): void;
    /**
     * Divide an external vector to this vector.
     * ```typescript
     * let v1 = new Maths.Vector(6, 4);
     * let v2 = new Maths.Vector(2, 2);
     * v1.divide(v2)
     * v1.toString();
     * // => x: 3, y: 2
     * ```
     * @param vector
     */
    divide(vector: Vector): void;
    /**
     * Divide the x dimension of this vector by a scalar value.
     * ```typescript
     * let v1 = new Maths.Vector(4, 2);
     * v1.divideScalarX(2)
     * v1.toString();
     * // => x: 2, y: 2
     * ```
     * @param scalar
     */
    divideScalarX(scalar: number): void;
    /**
     * Divide the y dimension of this vector by a scalar value.
     * ```typescript
     * let v1 = new Maths.Vector(1, 8);
     * v1.divideScalarY(4)
     * v1.toString();
     * // => x: 1, y: 2
     * ```
     * @param scalar
     */
    divideScalarY(scalar: number): void;
    /**
     * Divide both dimensions of this vector by a scalar value.
     * ```typescript
     * let v1 = new Maths.Vector(6, 4);
     * v1.divideScalar(2);
     * v1.toString();
     * // => x: 3, y: 2
     * ```
     * @param scalar
     */
    divideScalar(scalar: number): void;
    /**
     * Invert the x dimension of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(4, 2);
     * v1.invertX()
     * v1.toString();
     * // => x: -4, y: 2
     * ```
     * @param scalar
     */
    invertX(): void;
    /**
     * Invert the y dimension of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(4, 2);
     * v1.invertY()
     * v1.toString();
     * // => x: 4, y: -2
     * ```
     * @param scalar
     */
    invertY(): void;
    /**
     * Invert both dimensions of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(4, 2);
     * v1.invert()
     * v1.toString();
     * // => x: -4, y: -2
     * ```
     * @param scalar
     */
    invert(): void;
    /**
     * Multipy the x dimension of this vector
     * with the external vector's x dimension.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 1);
     * v1.multiplyX(v2);
     * v1.toString();
     * // => x: 6, y: 2
     * ```
     * @param scalar
     */
    multiplyX(vector: Vector): void;
    /**
     * Multipy the y dimension of this vector
     * with the external vector's y dimension.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 2);
     * v1.multiplyY(v2);
     * v1.toString();
     * // => x: 2, y: 4
     * ```
     * @param scalar
     */
    multiplyY(vector: Vector): void;
    /**
     * Multipy both dimensions of this vector
     * with the corresponding dimensions of the external vector
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 2);
     * v1.multiply(v2);
     * v1.toString();
     * // => x: 6, y: 4
     * ```
     * @param scalar
     */
    multiply(vector: Vector): void;
    /**
     * Multiplies both dimensions of this vector by a scalar value.
     * ```typescript
     * let v1 = new Maths.Vector(2, 1, 4);
     * v1.multiplyByScalar(3);
     * v1.toString();
     * // => x: 6, y: 3, z: 12
     * ```
     * @param scalar
     */
    multiplyByScalar(scalar: number): void;
    /**
     * Multiplies the x dimension of this vector by a scalar value.
     * ```typescript
     * let v1 = new Maths.Vector(2, 1);
     * v1.multiplyXByScalar(3);
     * v1.toString();
     * // => x: 6, y: 1
     * ```
     * @param scalar
     */
    multiplyXByScalar(scalar: number): void;
    /**
     * Multiplies the y dimension of this vector by a scalar value.
     * ```typescript
     * let v1 = new Maths.Vector(2, 1);
     * v1.multiplyYByScalar(3);
     * v1.toString();
     * // => x: 2, y: 3
     * ```
     * @param scalar
     */
    multiplyYByScalar(scalar: number): void;
    /**
     * Calculate the magnitude (= length) of this vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 1);
     * v1.getMagnitude();
     * // => 2.23606797749979
     * ```
     */
    getMagnitude(): number;
    /**
     * Make the vector a unit vector (e.g. a normalized vector).
     * Applied only if the magnitude of the vector is greater than zero
     * ```typescript
     * let v1 = new Maths.Vector(20, 4);
     * v1.normalize();
     * v1.toString();
     * // => x: 0.9805806756909202, y: 0.19611613513818404
     * ```
     */
    normalize(): void;
    /**
     * Get the three dimensions of this vector as a string.
     */
    toString(): string;
}
