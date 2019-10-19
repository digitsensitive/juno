import * as Maths from "../../maths/index";

test("initWithArray", () => {
  // init vector
  let v = new Maths.Vector2D();
  v.initWithArray([2, 3]);

  // evaluate the result
  expect(v.getX()).toBe(2);
  expect(v.getY()).toBe(3);
});

test("getX", () => {
  // init vector
  let v = new Maths.Vector2D(2, 1);

  // evaluate the result
  expect(v.getX()).toBe(2);
});

test("getY", () => {
  // init vector
  let v = new Maths.Vector2D(2, 1);

  // evaluate the result
  expect(v.getY()).toBe(1);
});

test("getAsArray", () => {
  // init vector
  let v = new Maths.Vector2D(2, 3);

  // evaluate the result
  expect(v.getAsArray()).toMatchObject([2, 3]);
});

test("setX", () => {
  // init vector
  let v = new Maths.Vector2D(2, 3);

  // reset x dimension
  v.setX(4);

  // evaluate the result
  expect(v.getX()).toBe(4);
});

test("setY", () => {
  // init vector
  let v = new Maths.Vector2D(2, 3);

  // reset y dimension
  v.setY(4);

  // evaluate the result
  expect(v.getY()).toBe(4);
});

test("set", () => {
  // init vector
  let v = new Maths.Vector2D(2, 3);

  // reset both dimensions
  v.set(8, 5);

  // evaluate the result
  expect(v.toString()).toBe("x: 8, y: 5");
});

test("addX", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 1);

  // to the addition
  v1.addX(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 5, y: 2");
});

test("addY", () => {
  // init vector
  let v1 = new Maths.Vector2D(1, 5);
  let v2 = new Maths.Vector2D(2, 1);

  // do the addition
  v1.addY(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 1, y: 6");
});

test("add", () => {
  // init vector
  let v1 = new Maths.Vector2D(5, 4);
  let v2 = new Maths.Vector2D(2, 5);

  // to the addition
  v1.add(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 7, y: 9");
});

test("subtractX", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 1);

  // do the subtraction
  v1.subtractX(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: -1, y: 2");
});

test("subtractY", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 1);

  // do the subtraction
  v1.subtractY(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 2, y: 1");
});

test("subtract", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 1);

  // do the subtraction
  v1.subtract(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: -1, y: 1");
});

test("addScalarX", () => {
  // init vector
  let v = new Maths.Vector2D(3, 2);

  // do the addition
  v.addScalarX(2);

  // evaluate the result
  expect(v.toString()).toBe("x: 5, y: 2");
});

test("addScalarY", () => {
  // init vector
  let v = new Maths.Vector2D(1, 6);

  // do the addition
  v.addScalarY(4);

  // evaluate the result
  expect(v.toString()).toBe("x: 1, y: 10");
});

test("addScalar", () => {
  // init vector
  let v = new Maths.Vector2D(5, 4);

  // do the addition
  v.addScalar(4);

  // evaluate the result
  expect(v.toString()).toBe("x: 9, y: 8");
});

test("subtractScalarX", () => {
  // init vector
  let v = new Maths.Vector2D(2, 6);

  // do the subtraction
  v.subtractScalarX(4);

  // evaluate the result
  expect(v.toString()).toBe("x: -2, y: 6");
});

test("subtractScalarY", () => {
  // init vector
  let v = new Maths.Vector2D(6, 4);

  // do the subtraction
  v.subtractScalarY(2);

  // evaluate the result
  expect(v.toString()).toBe("x: 6, y: 2");
});

test("subtractScalar", () => {
  // init vector
  let v = new Maths.Vector2D(6, 4);

  // do the subtraction
  v.subtractScalar(3);

  // evaluate the result
  expect(v.toString()).toBe("x: 3, y: 1");
});

test("divideX", () => {
  // init vector
  let v1 = new Maths.Vector2D(6, 4);
  let v2 = new Maths.Vector2D(2, 5);

  // do the division
  v1.divideX(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 3, y: 4");
});

test("divideY", () => {
  // init vector
  let v1 = new Maths.Vector2D(6, 4);
  let v2 = new Maths.Vector2D(2, 2);

  // do the division
  v1.divideY(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 6, y: 2");
});

test("divide", () => {
  // init vector
  let v1 = new Maths.Vector2D(6, 4);
  let v2 = new Maths.Vector2D(2, 2);

  // do the division
  v1.divide(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 3, y: 2");
});

test("divideScalarX", () => {
  // init vector
  let v = new Maths.Vector2D(4, 2);

  // do the division
  v.divideScalarX(2);

  // evaluate the result
  expect(v.toString()).toBe("x: 2, y: 2");
});

test("divideScalarY", () => {
  // init vector
  let v = new Maths.Vector2D(1, 8);

  // do the division
  v.divideScalarY(4);

  // evaluate the result
  expect(v.toString()).toBe("x: 1, y: 2");
});

test("divideScalar", () => {
  // init vector
  let v = new Maths.Vector2D(6, 4);

  // do the division
  v.divideScalar(2);

  // evaluate the result
  expect(v.toString()).toBe("x: 3, y: 2");
});

test("invertX", () => {
  // init vector
  let v = new Maths.Vector2D(4, 2);

  // do the invertion
  v.invertX();

  // evaluate the result
  expect(v.toString()).toBe("x: -4, y: 2");
});

test("invertY", () => {
  // init vector
  let v = new Maths.Vector2D(4, 2);

  // do the invertion
  v.invertY();

  // evaluate the result
  expect(v.toString()).toBe("x: 4, y: -2");
});

test("invert", () => {
  // init vector
  let v = new Maths.Vector2D(4, 2);

  // do the invertion
  v.invert();

  // evaluate the result
  expect(v.toString()).toBe("x: -4, y: -2");
});

test("multiplyX", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 1);

  // do the multiplication
  v1.multiplyX(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 6, y: 2");
});

test("multiplyY", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 2);

  // do the multiplication
  v1.multiplyY(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 2, y: 4");
});

test("multiply", () => {
  // init vector
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(3, 2);

  // do the multiplication
  v1.multiply(v2);

  // evaluate the result
  expect(v1.toString()).toBe("x: 6, y: 4");
});

test("multiplyByScalar", () => {
  // init vector
  let v = new Maths.Vector2D(2, 1);

  // do the multiplication
  v.multiplyByScalar(3);

  // evaluate the result
  expect(v.toString()).toBe("x: 6, y: 3");
});

test("multiplyXByScalar", () => {
  // init vector
  let v = new Maths.Vector2D(2, 1);

  // do the multiplication
  v.multiplyXByScalar(3);

  // evaluate the result
  expect(v.toString()).toBe("x: 6, y: 1");
});

test("multiplyYByScalar", () => {
  // init vector
  let v = new Maths.Vector2D(2, 1);

  // do the multiplication
  v.multiplyYByScalar(3);

  // evaluate the result
  expect(v.toString()).toBe("x: 2, y: 3");
});

test("getMagnitude", () => {
  // init vector
  let v = new Maths.Vector2D(2, 1);

  // evaluate the result
  expect(v.getMagnitude()).toBe(2.23606797749979);
});

test("normalize", () => {
  // init vector
  let v = new Maths.Vector2D(20, 4);

  // normalize 2D vector
  v.normalize();

  // evaluate the result
  expect(v.toString()).toBe("x: 0.9805806756909202, y: 0.19611613513818404");
});

test("toString", () => {
  // init vector
  let v = new Maths.Vector2D(4, 2);

  // evaluate the result
  expect(v.toString()).toBe("x: 4, y: 2");
});

test("isZero", () => {
  // init vector
  let v = new Maths.Vector2D(0, 0);

  // evaluate the result
  expect(v.isZero()).toBe(true);
});

test("isEqualTo", () => {
  // init vector
  let v1 = new Maths.Vector2D(4, 2);
  let v2 = new Maths.Vector2D(4, 2);

  // do the check
  let result = v1.isEqualTo(v2);

  // evaluate the result
  expect(result).toBe(true);
});

test("clone", () => {
  // init vector
  let v = new Maths.Vector2D(4, 2);

  // create clone vector
  let cloneVector = v.clone();

  // evaluate the result
  expect(cloneVector.toString()).toBe("x: 4, y: 2");
});
