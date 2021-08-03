const sum = require("../../src/operations/add.js");

// add test
// used to test if add works
test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});
