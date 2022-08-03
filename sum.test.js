const sum = require('./sum');

test('two plus two is four', () => {
    expect(sum(2, 2)).toBe(4);
})

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
})