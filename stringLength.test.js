const stringLength = require('./stringLength');

test('Returns string length = 11', () => {
    expect(stringLength('qwertyqwert')).toBe(11);
    expect(stringLength('c')).toBeGreaterThanOrEqual(1);
    expect(stringLength('tobeortrfd')).toBeLessThanOrEqual(10);
});