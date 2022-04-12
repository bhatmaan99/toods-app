// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum,div } = require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })
    it("Should return 0 if no 1 is 0", () => {
        const result = div(0,4);
        assert.equal(result, 0, "Result should be 0")
    })
})