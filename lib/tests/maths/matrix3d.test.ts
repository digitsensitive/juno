import * as Maths from "../../maths/index";

test("Get entry", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(0, 0, 0, 1, 1, 1, 2, 2, 2);

  // evaluate the result
  expect(m.getEntryAt(1, 0)).toBe(1);
});

test("Subtract Matrix3D", () => {
  // init matrix
  let m1 = new Maths.Matrix3D();
  m1.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
  let m2 = new Maths.Matrix3D();
  m2.initWithNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1);

  // do the subtraction
  m1.subtract(m2);

  // evaluate the result
  expect(m1.getEntryAt(0, 0)).toBe(0);
  expect(m1.getEntryAt(0, 1)).toBe(1);
  expect(m1.getEntryAt(0, 2)).toBe(2);

  expect(m1.getEntryAt(1, 0)).toBe(3);
  expect(m1.getEntryAt(1, 1)).toBe(4);
  expect(m1.getEntryAt(1, 2)).toBe(5);

  expect(m1.getEntryAt(2, 0)).toBe(6);
  expect(m1.getEntryAt(2, 1)).toBe(7);
  expect(m1.getEntryAt(2, 2)).toBe(8);
});

test("Multiply by scalar", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

  // do the multiplication
  m.multiplyByScalar(2);

  // evaluate the result
  expect(m.getEntryAt(0, 0)).toBe(2);
  expect(m.getEntryAt(0, 1)).toBe(4);
  expect(m.getEntryAt(0, 2)).toBe(6);

  expect(m.getEntryAt(1, 0)).toBe(8);
  expect(m.getEntryAt(1, 1)).toBe(10);
  expect(m.getEntryAt(1, 2)).toBe(12);

  expect(m.getEntryAt(2, 0)).toBe(14);
  expect(m.getEntryAt(2, 1)).toBe(16);
  expect(m.getEntryAt(2, 2)).toBe(18);
});
