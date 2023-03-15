const capitalise = require ('./capitalise');

test('Convert first letter to capital', () => {
    expect(capitalise('string')).toBe('String');
});