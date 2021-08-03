const calculate = require("../../../src/calculators/utility/calculate.js");

/*
    Calculate tests
    used to ensure that our calculate utility class works
    Parameters:  String array_to_be_processed
    Will throw an error if equation is invalid
*/

test("testing case with invalid equation, mismatch between amount of numbers and operators", () => {
	expect(() => {
		calculate("5 9 1 - 8 /");
	}).toThrow("Invalid Amount of Numbers per Operators");
});

test("testing case with multiplication and division stacked", () => {
	expect(calculate("4 13 5 / *")).toBe(10.4);
});

test("testing case with negative numbers", () => {
	expect(calculate("10 6 9 + -11 * * 17 + 5 +")).toBe(-1628);
});

test("testing case with subtraction", () => {
	expect(calculate("5 5 5 8 + + - 13 +")).toBe(0);
	expect(calculate("5 5 5 8 + + -")).toBe(-13.0);
});

test("testing case with negative numbers and multiplication", () => {
	expect(calculate("-3 -2 * 5 +")).toBe(11);
});

test("testing case with basic addition", () => {
	expect(calculate("5 8 +")).toBe(13);
});

test("second testing case with basic negative numbers", () => {
	expect(calculate("-3 -2 * 5 +")).toBe(11);
});

test("more basic tests with subtraction and division", () => {
	expect(calculate("5 9 1 - /")).toBe(0.625);
});
