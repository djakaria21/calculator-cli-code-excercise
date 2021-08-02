const multiply = require('../src/operations/multiply.js');

test('adds 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});
