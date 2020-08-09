"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maths = require("../../lib/maths/index");
test("getRandomNumber", () => {
    // generate random numbers
    for (let i = 0; i < 100; i++) {
        let m = Maths.getRandomFloat(1, 10);
        let n = Maths.getRandomNumber();
        let o = Maths.getRandomInt(1, 10);
    }
});
test("xorshift128plus", () => {
    // create a random value
    let randomValue = new Maths.Random();
    for (let i = 0; i < 10; i++) {
        console.log(randomValue.xorshift128plus() % 2);
    }
});
test("leftShift", () => {
    // create a random value
    let randomValue = new Maths.Random();
    // evaluate the result
    expect(randomValue.leftShift([0, 1, 1, 1], 2)).toMatchObject([1, 1, 0, 0]);
});
test("rightShift", () => {
    // create a random value
    let randomValue = new Maths.Random();
    // evaluate the result
    expect(randomValue.rightShift([0, 1, 1, 1], 2)).toMatchObject([0, 0, 0, 1]);
});
