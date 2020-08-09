"use strict";
/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2019 Digitsensitive
 * @description  Juno Maths: Linear Algebra - Vector2D class
 * @license      {@link https://github.com/digitsensitive/juno/blob/master/LICENSE.md | MIT License}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2D = void 0;
const random_1 = require("../random/random");
/**
 * A basic euclidean vector (also called geometric or spatial vector) class.
 * A vector is a geometric object that has magnitude (or length) and direction.
 *
 * This class holds a 2D vector.
 * ```typescript
 * let v = new Maths.Vector2D(2, 3);
 * ```
 */
class Vector2D {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    /**
     * Init 2D vector with number array.
     * ```typescript
     * let v = new Maths.Vector2D();
     * v.initWithArray([2, 3]);
     * ```
     * @param dimensions
     */
    initWithArray(dimensions) {
        this.x = dimensions[0];
        this.y = dimensions[1];
    }
    /**
     * Get the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getX();
     * // => 2
     * ```
     */
    getX() {
        return this.x;
    }
    /**
     * Get the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getY();
     * // => 3
     * ```
     */
    getY() {
        return this.y;
    }
    /**
     * Get this 2D vector as a number array.
     * ```typescript
     * let v = new Maths.Vector2D(2, 3);
     * v.getAsArray();
     * // => [2, 3]
     * ```
     */
    getAsArray() {
        return [this.x, this.y];
    }
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
    setX(newX) {
        this.x = newX;
    }
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
    setY(newY) {
        this.y = newY;
    }
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
    set(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
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
    addX(vector) {
        this.x += vector.x;
    }
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
    addY(vector) {
        this.y += vector.y;
    }
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
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
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
    subtractX(vector) {
        this.x -= vector.x;
    }
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
    subtractY(vector) {
        this.y -= vector.y;
    }
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
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
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
    addScalarX(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x += scalar;
        }
    }
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
    addScalarY(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.y += scalar;
        }
    }
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
    addScalar(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x += scalar;
            this.y += scalar;
        }
    }
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
    subtractScalarX(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x -= scalar;
        }
    }
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
    subtractScalarY(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.y -= scalar;
        }
    }
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
    subtractScalar(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x -= scalar;
            this.y -= scalar;
        }
    }
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
    divideX(vector) {
        this.x /= vector.x;
    }
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
    divideY(vector) {
        this.y /= vector.y;
    }
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
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
    }
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
    divideScalarX(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x /= scalar;
        }
    }
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
    divideScalarY(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.y /= scalar;
        }
    }
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
    divideScalar(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x /= scalar;
            this.y /= scalar;
        }
    }
    /**
     * Invert the x dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.invertX();
     * v.toString();
     * // => x: -4, y: 2
     * ```
     */
    invertX() {
        this.x *= -1;
    }
    /**
     * Invert the y dimension of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.invertY();
     * v.toString();
     * // => x: 4, y: -2
     * ```
     */
    invertY() {
        this.y *= -1;
    }
    /**
     * Invert both dimensions of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.invert();
     * v.toString();
     * // => x: -4, y: -2
     * ```
     */
    invert() {
        this.invertX();
        this.invertY();
    }
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
    multiplyX(vector) {
        this.x *= vector.x;
    }
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
    multiplyY(vector) {
        this.y *= vector.y;
    }
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
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    }
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
    multiplyByScalar(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x *= scalar;
            this.y *= scalar;
        }
    }
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
    multiplyXByScalar(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.x *= scalar;
        }
    }
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
    multiplyYByScalar(scalar) {
        if (isFinite(scalar)) {
            // applied only if scalar is finite
            this.y *= scalar;
        }
    }
    /**
     * Calculate the magnitude (= length) of this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(2, 1);
     * v.getMagnitude();
     * // => 2.23606797749979
     * ```
     */
    getMagnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
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
    normalize() {
        let magnitude = this.getMagnitude();
        if (magnitude !== 0) {
            /**
             * Since getMagnitude never returns a negative value, we only have
             * to check if the magnitude is 0 (the case if x = y = 0).
             */
            this.divideScalar(magnitude);
        }
    }
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
    limit(max, factor) {
        if (Math.abs(this.x) > max) {
            this.x *= factor;
        }
        if (Math.abs(this.y) > max) {
            this.y *= factor;
        }
    }
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
    randomize(topVector, bottomVector) {
        this.randomizeX(topVector, bottomVector);
        this.randomizeY(topVector, bottomVector);
    }
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
    randomizeX(topVector, bottomVector) {
        var min = Math.min(topVector.x, bottomVector.x);
        var max = Math.max(topVector.x, bottomVector.x);
        this.x = random_1.getRandomFloat(min, max);
    }
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
    randomizeY(topVector, bottomVector) {
        var min = Math.min(topVector.y, bottomVector.y);
        var max = Math.max(topVector.y, bottomVector.y);
        this.y = random_1.getRandomFloat(min, max);
    }
    /**
     * Round both dimensions of this 2D vector to an integer value.
     * ```typescript
     * let v = new Maths.Vector2D(4.2, 2.9);
     * v.unfloat();
     * // => x: 4, y: 3
     * ```
     */
    unfloat() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }
    /**
     * Get the two dimensions of this 2D vector as a string.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * v.toString();
     * // => x: 4, y: 2
     * ```
     */
    toString() {
        return "x: " + this.x + ", " + "y: " + this.y;
    }
    /**
     * Evaluate if this 2D vector is zero.
     * ```typescript
     * let v = new Maths.Vector2D(0, 0);
     * v.isZero();
     * // => true
     * ```
     */
    isZero() {
        return this.x === 0 && this.y === 0;
    }
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
    isEqualTo(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    /**
     * Clone this 2D vector.
     * ```typescript
     * let v = new Maths.Vector2D(4, 2);
     * let cloneVector = v.clone();
     * cloneVector.toString()
     * // => x: 4, y: 2
     * ```
     */
    clone() {
        return new Vector2D(this.x, this.y);
    }
    /**
     * Rotate this 2D vector by a given angle in radians.
     * @param angle
     */
    rotate(angle) {
        let nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        let ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);
        this.x = nx;
        this.y = ny;
    }
    /**
     * Rotate this 2D vector by a given angle in radians around a point.
     * @param angle
     */
    rotateAroundPoint(angle, pointX, pointY) {
        let nx = (this.x - pointX) * Math.cos(angle) -
            (pointY - this.y) * Math.sin(angle) +
            pointX;
        let ny = (pointY - this.y) * Math.cos(angle) -
            (this.x - pointX) * Math.sin(angle) +
            pointY;
        this.x = nx;
        this.y = ny;
    }
}
exports.Vector2D = Vector2D;
