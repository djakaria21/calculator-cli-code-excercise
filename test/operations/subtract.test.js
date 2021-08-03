const subtract = require("../../src/operations/subtract.js");

//subtract tests
//used to test if subtract works
test("subtract 1 - 2 to equal -1", () => {
	expect(subtract(1, 2)).toBe(-1);
});
