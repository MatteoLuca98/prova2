const square = require('./square')

test('square(1) should return -1', () => {
    expected(square(1)).toBe(-1)
})

test('square ("abcd") shoud return 16', () => {
    expected(square('ciao').toBe(16));
})

test('square(null) shoud return -1', () => {
    expected(square(null).toBe(-1))
})