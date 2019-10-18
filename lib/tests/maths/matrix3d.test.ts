import * as Maths from "../../maths/index";

test("initWith3dVectors", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWith3dVectors([
    new Maths.Vector(0, 1, 2),
    new Maths.Vector(3, 4, 5),
    new Maths.Vector(6, 7, 8)
  ]);

  // evaluate the result
  expect(m.getEntryAt(0, 0)).toBe(0);
  expect(m.getEntryAt(0, 1)).toBe(1);
  expect(m.getEntryAt(0, 2)).toBe(2);

  expect(m.getEntryAt(1, 0)).toBe(3);
  expect(m.getEntryAt(1, 1)).toBe(4);
  expect(m.getEntryAt(1, 2)).toBe(5);

  expect(m.getEntryAt(2, 0)).toBe(6);
  expect(m.getEntryAt(2, 1)).toBe(7);
  expect(m.getEntryAt(2, 2)).toBe(8);
});

test("initWithNumbers", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

  // evaluate the result
  expect(m.getEntryAt(0, 0)).toBe(1);
  expect(m.getEntryAt(0, 1)).toBe(2);
  expect(m.getEntryAt(0, 2)).toBe(3);

  expect(m.getEntryAt(1, 0)).toBe(4);
  expect(m.getEntryAt(1, 1)).toBe(5);
  expect(m.getEntryAt(1, 2)).toBe(6);

  expect(m.getEntryAt(2, 0)).toBe(7);
  expect(m.getEntryAt(2, 1)).toBe(8);
  expect(m.getEntryAt(2, 2)).toBe(9);
});

test("getEntries", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(0, 0, 0, 1, 1, 1, 2, 2, 2);

  // evaluate the result
  expect(m.getEntries()).toMatchObject([[0, 0, 0], [1, 1, 1], [2, 2, 2]]);
});

test("getEntryAt", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(0, 0, 0, 1, 1, 1, 2, 2, 2);

  // evaluate the result
  expect(m.getEntryAt(1, 0)).toBe(1);
});

test("getRowAt", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

  // evaluate the result
  expect(m.getRowAt(1)).toMatchObject([4, 5, 6]);
});

test("add", () => {
  // init matrix
  let m1 = new Maths.Matrix3D();
  m1.initWithNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
  let m2 = new Maths.Matrix3D();
  m2.initWithNumbers(1, 1, 1, 1, 1, 1, 1, 1, 1);

  // do the addition
  m1.add(m2);

  // evaluate the result
  expect(m1.getEntryAt(0, 0)).toBe(2);
  expect(m1.getEntryAt(0, 1)).toBe(3);
  expect(m1.getEntryAt(0, 2)).toBe(4);

  expect(m1.getEntryAt(1, 0)).toBe(5);
  expect(m1.getEntryAt(1, 1)).toBe(6);
  expect(m1.getEntryAt(1, 2)).toBe(7);

  expect(m1.getEntryAt(2, 0)).toBe(8);
  expect(m1.getEntryAt(2, 1)).toBe(9);
  expect(m1.getEntryAt(2, 2)).toBe(10);
});

test("subtract", () => {
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

test("multiplyMatrix", () => {
  // init matrix
  let m1 = new Maths.Matrix3D();
  m1.initWithNumbers(6, 2, 4, 2, 4, 3, 1, 6, 7);

  let m2 = new Maths.Matrix3D();
  m2.initWithNumbers(2, 2, 2, 2, 2, 2, 2, 2, 2);

  // do the multiplication
  let m3 = m1.multiplyMatrix(m2);

  // evaluate the result
  expect(m3.getEntryAt(0, 0)).toBe(24);
  expect(m3.getEntryAt(0, 1)).toBe(24);
  expect(m3.getEntryAt(0, 2)).toBe(24);

  expect(m3.getEntryAt(1, 0)).toBe(18);
  expect(m3.getEntryAt(1, 1)).toBe(18);
  expect(m3.getEntryAt(1, 2)).toBe(18);

  expect(m3.getEntryAt(2, 0)).toBe(28);
  expect(m3.getEntryAt(2, 1)).toBe(28);
  expect(m3.getEntryAt(2, 2)).toBe(28);
});

test("multiplyVector", () => {
  // init matrix
  let m = new Maths.Matrix3D();
  m.initWithNumbers(6, 2, 4, 2, 4, 3, 1, 6, 7);

  // do the multiplication
  let v = m.multiplyVector(new Maths.Vector(1, 0, 0));

  // evaluate the result
  expect(v.getX()).toBe(6);
  expect(v.getY()).toBe(2);
  expect(v.getZ()).toBe(1);
});

test("multiplyByScalar", () => {
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
