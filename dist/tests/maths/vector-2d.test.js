"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maths = require("../../maths/index");
test("2D Vector Creation", () => {
    // create an empty 2D Vector
    let emptyVector = new Maths.Vector();
    expect(emptyVector.getX()).toBe(0);
    expect(emptyVector.getY()).toBe(0);
    // create a 2D Vector with only the x dimenstion
    let xVector = new Maths.Vector(1);
    expect(xVector.getX()).toBe(1);
    expect(xVector.getY()).toBe(0);
    // create a 2D Vector with only the y dimenstion
    let yVector = new Maths.Vector(null, 1);
    expect(yVector.getX()).toBe(0);
    expect(yVector.getY()).toBe(1);
});
test("2D Vector: Magnitude", () => {
    let vector = new Maths.Vector(0, 0);
    expect(vector.getMagnitude()).toBe(0);
});
test("2D Vector: Multiply by scalar", () => {
    let vector = new Maths.Vector(1, 1);
    let magnitudeBeforeMulitplicationByScalar = vector.getMagnitude();
    vector.multiplyByScalar(2);
    let magnitudeAfterMulitplicationByScalar = vector.getMagnitude();
    expect(magnitudeAfterMulitplicationByScalar).toBe(magnitudeBeforeMulitplicationByScalar * 2);
});
