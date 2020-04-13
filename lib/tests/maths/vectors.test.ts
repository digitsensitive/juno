import * as Maths from "../../maths/index";

test("Addition of two 2D Vectors", () => {
  // init vectors
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(4, 5);

  // make the addition
  var t0 = performance.now();
  let v3 = Maths.vector2DAddition(v1, v2);
  var t1 = performance.now();

  // evaluate the result
  expect(v3.getX()).toBe(6);
  expect(v3.getY()).toBe(7);
});

test("Subtraction of two 2D Vectors", () => {
  // init vectors
  let v1 = new Maths.Vector2D(2, 2);
  let v2 = new Maths.Vector2D(4, 5);

  // make the subtraction
  var t0 = performance.now();
  let v3 = Maths.vector2DSubtraction(v1, v2);
  var t1 = performance.now();

  // evaluate the result
  expect(v3.getX()).toBe(-2);
  expect(v3.getY()).toBe(-3);
});
