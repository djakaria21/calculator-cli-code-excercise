const divide = require("../../src/operations/divide.js");

//divide test
//used to test if divide works
test("divide 1 / 2 to equal .5", () => {
	expect(divide(1, 2)).toBe(0.5);
});
