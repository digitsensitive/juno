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

export class Vector2D {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
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
  public initWithArray(dimensions: number[]): void {
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
  public getX(): number {
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
  public getY(): number {
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
  public getAsArray(): number[] {
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
  public setX(newX: number): void {
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
  public setY(newY: number): void {
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
  public set(newX: number, newY: number): void {
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
  public addX(vector: Vector2D): void {
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
  public addY(vector: Vector2D): void {
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
  public add(vector: Vector2D) {
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
  public subtractX(vector: Vector2D): void {
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
  public subtractY(vector: Vector2D): void {
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
  public subtract(vector: Vector2D): void {
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
  public addScalarX(scalar: number): void {
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
  public addScalarY(scalar: number): void {
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
  public addScalar(scalar: number): void {
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
  public subtractScalarX(scalar: number): void {
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
  public subtractScalarY(scalar: number): void {
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
  public subtractScalar(scalar: number): void {
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
  public divideX(vector: Vector2D): void {
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
  public divideY(vector: Vector2D): void {
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
  public divide(vector: Vector2D): void {
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
  public divideScalarX(scalar: number): void {
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
  public divideScalarY(scalar: number): void {
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
  public divideScalar(scalar: number): void {
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
  public invertX(): void {
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
  public invertY(): void {
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
  public invert(): void {
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
  public multiplyX(vector: Vector2D): void {
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
  public multiplyY(vector: Vector2D): void {
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
  public multiply(vector: Vector2D): void {
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
  public multiplyByScalar(scalar: number): void {
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
  public multiplyXByScalar(scalar: number): void {
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
  public multiplyYByScalar(scalar: number): void {
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
  public getMagnitude(): number {
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
  public normalize(): void {
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
   * Get the two dimensions of this 2D vector as a string.
   * ```typescript
   * let v = new Maths.Vector2D(4, 2);
   * v.toString();
   * // => x: 4, y: 2
   * ```
   */
  public toString(): string {
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
  public isZero(): boolean {
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
  public isEqualTo(vector: Vector2D): boolean {
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
  public clone(): Vector2D {
    return new Vector2D(this.x, this.y);
  }
}
