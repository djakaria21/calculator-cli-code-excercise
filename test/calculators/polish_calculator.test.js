const polish_calculator = require("../../src/calculators/polish_calculator.js");

test("testing empty input", () => {
	expect(() => {
		polish_calculator.calculate("");
	}).toThrow("Empty Equation");
});

test("testing simplest case", () => {
	expect(polish_calculator.calculate("1")).toBe("1");
});

test("testing simplest invalid case", () => {
	expect(() => {
		polish_calculator.calculate("-");
	}).toThrow("Invalid Amount of Numbers per Operators");
});

test("testing case with multiplication and addition interwoven", () => {
	expect(polish_calculator.is_valid("2 1 + 3 *")).toBe(true);
	expect(polish_calculator.calculate("2 1 + 3 *")).toBe(9);
});

//more detailed tests are in the calculate and validate utility test files
