const validate = require("../../../src/calculators/utility/validate.js");

/*
    Validate tests
    used to ensure that our validate utility class works
    Parameters:  String array_to_be_processed
    Will throw an error if equation is invalid
*/

test("testing case with invalid equation, mismatch between amount of numbers and operators", () => {
	expect(() => {
		validate("5 9 1 - 8 /");
	}).toThrow("Invalid Amount of Numbers per Operators");
});

test("testing empty input", () => {
	expect(() => {
		validate("");
	}).toThrow("Empty Equation");
});

test("testing simplest invalid case", () => {
	expect(() => {
		validate("-");
	}).toThrow("Invalid Amount of Numbers per Operators");
});

test("testing simplest case", () => {
	expect(validate("1")).toBe(true);
});
