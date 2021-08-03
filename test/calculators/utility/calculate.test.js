const calculate = require('../../../src/calculators/utility/calculate.js');

test('testing case with invalid equation, mismatch between amount of numbers and operators', () => {
    expect(() => {calculate("5 9 1 - 8 /")}).toThrow('Invalid Amount of Numbers per Operators');
});