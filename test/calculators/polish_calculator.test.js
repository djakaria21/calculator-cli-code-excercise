const polish_calculator = require("../../src/calculators/polish_calculator.js");

/*
    Polish Calculator tests, barebones tests to ensure that the methods inside polish calculator are working.

    More detailed tests regarding the functions are in the utility test file for the calculate and validate methods respectively
*/

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