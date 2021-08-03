const polish_calculator = require('../../src/calculators/polish_calculator.js');

test('testing empty input', () => {
    expect(() => {polish_calculator.calculate("")
}).toThrow('Empty Equation');
});

test('testing simplest case', () => {
    expect(polish_calculator.calculate("1")).toBe("1");
});

test('testing simplest invalid case', () => {
    expect(() => {polish_calculator.calculate("-")}).toThrow('Invalid Amount of Numbers per Operators');
});

test('testing case with multiplication and addition interwoven', () => {
    expect(polish_calculator.is_valid("2 1 + 3 *")).toBe(true);

    expect(polish_calculator.calculate("2 1 + 3 *")).toBe(9);
});

test('testing case with multiplication and division stacked', () => {
    expect(polish_calculator.calculate("4 13 5 / *")).toBe(10.4);
});

test('testing case with negative numbers', () => {
    expect(polish_calculator.calculate("10 6 9 + -11 * * 17 + 5 +")).toBe(-1628);
});

test('testing case with subtraction', () => {
    expect(polish_calculator.calculate("5 5 5 8 + + - 13 +")).toBe(0);
    expect(polish_calculator.calculate("5 5 5 8 + + -")).toBe(-13.0);
});

test('testing case with negative numbers and multiplication', () => {
    expect(polish_calculator.calculate("-3 -2 * 5 +")).toBe(11);
});

test('testing case with basic addition', () => {
    expect(polish_calculator.calculate("5 8 +")).toBe(13);
});

test('second testing case with basic negative numbers', () => {
    expect(polish_calculator.calculate("-3 -2 * 5 +")).toBe(11);
});

test('more basic tests', () => {
    expect(polish_calculator.calculate("5 9 1 - /")).toBe(0.625);
});