const divide = require('../src/operations/divide.js');

test('divide 1 / 2 to equal .5', () => {
    expect(divide(1, 2)).toBe(.5);
});
