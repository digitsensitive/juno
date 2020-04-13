/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Vector2D class
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
/**
 * A basic euclidean vector (also called geometric or spatial vector) class.
 * A vector is a geometric object that has magnitude (or length) and direction.
 *
 * This class holds a 2D vector.
 * ```typescript
 * let v = new Maths.Vector2D(2, 3);
 * ```
 */
export declare class Vector2D {
    private x;
    private y;
    constructor(x?: number, y?: number);
    /**
     * Init 2D vector with number array.
     * ```typescript
     * let v = new Maths.Vector2D();
     * v.initWithArray([2, 3]);
     * ```
     * @param dimensions
     */
    initWithArray(dimensions: number[]): void;
    /**
     * Get the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getX();
     * // => 2
     * ```
     */
    getX(): number;
    /**
     * Get the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getY();
     * // => 3
     * ```
     */
    getY(): number;
    /**
     * Get this 2D vector as a number array.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getAsArray();
     * // => [2, 3]
     * ```
     */
    getAsArray(): number[];
    /**
     * Set the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getX();
     * // => 2
     * v.setX(4);
     * v.getX();
     * // => 4
     * ```
     * @param newX
     */
    setX(newX: number): void;
    /**
     * Set the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getY();
     * // => 3
     * v.setY(4);
     * v.getY();
     * // => 4
     * ```
     * @param newY
     */
    setY(newY: number): void;
    /**
     * Set both dimensions of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.set(8, 5);
     * v.toString();
     * // => x: 8, y: 5
     * ```
     * @param newX
     * @param newY
     */
    set(newX: number, newY: number): void;
    /**
     * Add the x dimension of an external vector to this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(2, 2);
     * let v2 = new Maths.Vector2D(3, 1);
     * v1.addX(v2);
     * v1.toString();
     * // => x: 5, y: 2
     * ```
     * @param vector
     */
    addX(vector: Vector2D): void;
    /**
     * Add the y dimension of an external vector to this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(1, 5);
     * let v2 = new Maths.Vector2D(2, 1);
     * v1.addY(v2);
     * v1.toString();
     * // => x: 1, y: 6
     * ```
     * @param vector
     */
    addY(vector: Vector2D): void;
    /**
     * Add an external 2D vector to this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(5, 4);
     * let v2 = new Maths.Vector2D(2, 5);
     * v1.add(v2);
     * v1.toString();
     * // => x: 7, y: 9
     * ```
     * @param vector
     */
    add(vector: Vector2D): void;
    /**
     * Subtract the x dimension of an external 2D vector from this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(2, 2);
     * let v2 = new Maths.Vector2D(3, 1);
     * v1.subtractX(v2);
     * v1.toString();
     * // => x: -1, y: 2
     * ```
     * @param vector
     */
    subtractX(vector: Vector2D): void;
    /**
     * Subtract the y dimension of an external 2D vector from this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(2, 2);
     * let v2 = new Maths.Vector2D(3, 1);
     * v1.subtractY(v2);
     * v1.toString();
     * // => x: 2, y: 1
     * ```
     * @param vector
     */
    subtractY(vector: Vector2D): void;
    /**
     * Subtract an external 2D vector from this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector(2, 2);
     * let v2 = new Maths.Vector(3, 1);
     * v1.subtract(v2);
     * v1.toString();
     * // => x: -1, y: 1
     * ```
     * @param vector
     */
    subtract(vector: Vector2D): void;
    /**
     * Add a scalar value to the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(3, 2);
     * v.addScalar(2);
     * v.toString();
     * // => x: 5, y: 2
     * ```
     * @param scalar
     */
    addScalarX(scalar: number): void;
    /**
     * Add a scalar value to the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(1, 6);
     * v.addScalar(4);
     * v.toString();
     * // => x: 1, y: 10
     * ```
     * @param scalar
     */
    addScalarY(scalar: number): void;
    /**
     * Add a scalar value to both dimensions of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(5, 4);
     * v.addScalar(4);
     * v.toString();
     * // => x: 9, y: 8
     * ```
     * @param scalar
     */
    addScalar(scalar: number): void;
    /**
     * Subtract a scalar value from the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 6);
     * v.subtractScalarX(4);
     * v.toString();
     * // => x: -2, y: 6
     * ```
     * @param scalar
     */
    subtractScalarX(scalar: number): void;
    /**
     * Subtract a scalar value from the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(6, 4);
     * v.subtractScalarY(2);
     * v.toString();
     * // => x: 6, y: 2
     * ```
     * @param scalar
     */
    subtractScalarY(scalar: number): void;
    /**
     * Subtract a scalar value from both dimensions of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(6, 4);
     * v.subtractScalar(3);
     * v.toString();
     * // => x: 3, y: 1
     * ```
     * @param scalar
     */
    subtractScalar(scalar: number): void;
    /**
     * Divide the x dimension of an external 2D vector from this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(6, 4);
     * let v2 = new Maths.Vector2D(2, 5);
     * v1.divideX(v2);
     * v1.toString();
     * // => x: 3, y: 4
     * ```
     * @param vector
     */
    divideX(vector: Vector2D): void;
    /**
     * Divide the y dimension of an external 2D vector from this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(6, 4);
     * let v2 = new Maths.Vector2D(2, 2);
     * v1.divideY(v2);
     * v1.toString();
     * // => x: 6, y: 2
     * ```
     * @param vector
     */
    divideY(vector: Vector2D): void;
    /**
     * Divide an external 2D vector from this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(6, 4);
     * let v2 = new Maths.Vector2D(2, 2);
     * v1.divide(v2);
     * v1.toString();
     * // => x: 3, y: 2
     * ```
     * @param vector
     */
    divide(vector: Vector2D): void;
    /**
     * Divide the x dimension of this 2D vector by a scalar value.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.divideScalarX(2);
     * v.toString();
     * // => x: 2, y: 2
     * ```
     * @param scalar
     */
    divideScalarX(scalar: number): void;
    /**
     * Divide the y dimension of this 2D vector by a scalar value.
     * ```typescript
     * let v = new Maths.Vector2D(1, 8);
     * v.divideScalarY(4);
     * v.toString();
     * // => x: 1, y: 2
     * ```
     * @param scalar
     */
    divideScalarY(scalar: number): void;
    /**
     * Divide both dimensions of this 2D vector by a scalar value.
     * ```typescript
     * let v = new Maths.Vector2D(6, 4);
     * v.divideScalar(2);
     * v.toString();
     * // => x: 3, y: 2
     * ```
     * @param scalar
     */
    divideScalar(scalar: number): void;
    /**
     * Invert the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.invertX();
     * v.toString();
     * // => x: -4, y: 2
     * ```
     */
    invertX(): void;
    /**
     * Invert the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.invertY();
     * v.toString();
     * // => x: 4, y: -2
     * ```
     */
    invertY(): void;
    /**
     * Invert both dimensions of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.invert();
     * v.toString();
     * // => x: -4, y: -2
     * ```
     */
    invert(): void;
    /**
     * Multiply the x dimension of an external 2D vector with this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(2, 2);
     * let v2 = new Maths.Vector2D(3, 1);
     * v1.multiplyX(v2);
     * v1.toString();
     * // => x: 6, y: 2
     * ```
     * @param vector
     */
    multiplyX(vector: Vector2D): void;
    /**
     * Multiply the y dimension of an external 2D vector with this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(2, 2);
     * let v2 = new Maths.Vector2D(3, 2);
     * v1.multiplyY(v2);
     * v1.toString();
     * // => x: 2, y: 4
     * ```
     * @param vector
     */
    multiplyY(vector: Vector2D): void;
    /**
     * Multiply both dimensions of an external 2D vector with this 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(2, 2);
     * let v2 = new Maths.Vector2D(3, 2);
     * v1.multiply(v2);
     * v1.toString();
     * // => x: 6, y: 4
     * ```
     * @param vector
     */
    multiply(vector: Vector2D): void;
    /**
     * Multiply both dimensions of this 2D vector by a scalar value.
     * ```typescript
     * let v = new Maths.Vector2D(2, 1);
     * v.multiplyByScalar(3);
     * v.toString();
     * // => x: 6, y: 3
     * ```
     * @param scalar
     */
    multiplyByScalar(scalar: number): void;
    /**
     * Multiply the x dimension of this 2D vector by a scalar value.
     * ```typescript
     * let v = new Maths.Vector2D(2, 1);
     * v.multiplyXByScalar(3);
     * v.toString();
     * // => x: 6, y: 1
     * ```
     * @param scalar
     */
    multiplyXByScalar(scalar: number): void;
    /**
     * Multiply the y dimension of this 2D vector by a scalar value.
     * ```typescript
     * let v = new Maths.Vector2D(2, 1);
     * v.multiplyYByScalar(3);
     * v.toString();
     * // => x: 2, y: 3
     * ```
     * @param scalar
     */
    multiplyYByScalar(scalar: number): void;
    /**
     * Calculate the magnitude (= length) of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 1);
     * v.getMagnitude();
     * // => 2.23606797749979
     * ```
     */
    getMagnitude(): number;
    /**
     * Make the 2D vector a unit vector (e.g. a normalized vector).
     * Applied only if the magnitude of the 2D vector is greater than zero.
     * ```typescript
     * let v = new Maths.Vector2D(20, 4);
     * v.normalize();
     * v.toString();
     * // => x: 0.9805806756909202, y: 0.19611613513818404
     * ```
     */
    normalize(): void;
    /**
     * Multiply dimensions of this 2D vector with the factor if greater than max.
     * ```typescript
     * let v = new Maths.Vector2D(4, 3);
     * v.limit(2, 0.9);
     * v.toString();
     * // => x: 3.6, y: 2.7
     * ```
     * @param max
     * @param factor
     */
    limit(max: number, factor: number): void;
    /**
     * Randomize both dimensions of this 2D vector
     * with a value between two 2D vectors.
     * ```typescript
     * let v = new Maths.Vector2D();
     * v.randomize(new Maths.Vector2D(8, 4), new Maths.Vector2D(5, 2));
     * ```
     * @param topVector
     * @param bottomVector
     */
    randomize(topVector: Vector2D, bottomVector: Vector2D): void;
    /**
     * Randomize the x dimension of this 2D vector
     * with a value between two 2D vectors.
     * ```typescript
     * let v = new Maths.Vector2D();
     * v.randomizeX(new Maths.Vector2D(8, 4), new Maths.Vector2D(5, 2));
     * ```
     * @param topVector
     * @param bottomVector
     */
    randomizeX(topVector: Vector2D, bottomVector: Vector2D): void;
    /**
     * Randomize the y dimension of this 2D vector
     * with a value between two 2D vectors.
     * ```typescript
     * let v = new Maths.Vector2D();
     * v.randomizeY(new Maths.Vector2D(8, 4), new Maths.Vector2D(7, 2));
     * ```
     * @param topVector
     * @param bottomVector
     */
    randomizeY(topVector: Vector2D, bottomVector: Vector2D): void;
    /**
     * Round both dimensions of this 2D vector to an integer value.
     * ```typescript
     * let v = new Maths.Vector2D(4.2, 2.9);
     * v.unfloat();
     * // => x: 4, y: 3
     * ```
     */
    unfloat(): void;
    /**
     * Get the two dimensions of this 2D vector as a string.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.toString();
     * // => x: 4, y: 2
     * ```
     */
    toString(): string;
    /**
     * Evaluate if this 2D vector is zero.
     * ```typescript
     * let v = new Maths.Vector2D(0, 0);
     * v.isZero();
     * // => true
     * ```
     */
    isZero(): boolean;
    /**
     * Evaluate if this 2D vector is equal to an external 2D vector.
     * ```typescript
     * let v1 = new Maths.Vector2D(4, 2);
     * let v2 = new Maths.Vector2D(4, 2);
     * v1.isEqualTo(v2);
     * // => true
     * ```
     * @param vector
     */
    isEqualTo(vector: Vector2D): boolean;
    /**
     * Clone this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * let cloneVector = v.clone();
     * cloneVector.toString()
     * // => x: 4, y: 2
     * ```
     */
    clone(): Vector2D;
    /**
     * Rotate this 2D vector by a given angle in radians.
     * @param angle
     */
    rotate(angle: number): void;
    /**
     * Rotate this 2D vector by a given angle in radians around a point.
     * @param angle
     */
    rotateAroundPoint(angle: number, pointX: number, pointY: number): void;
}
