const calculator = require('./calculator');

const calc = new calculator;

describe('calculator function', () =>{
    describe('add', () => {
        
        test('add two positive numbers', () => {
            expect(calc.add(2, 3)).toBe(5);
        });
        test('add a positive and negative numbers', () => {
            expect(calc.add(2, -3)).toBe(-1);
        });
        test('add two negative numbers', () => {
            expect(calc.add(-3, -3)).toBe(-6);
        });
    });

    describe('subtract', () => {
        test('subtract two positive numbers', () => {
            expect(calc.subtract(5, 3)).toBe(2);
        });

        test('subtract two negative numbers', () => {
            expect(calc.subtract(-3, -5)).toBe(2);
        });

        test('subtract a positive and negative', () => {
            expect(calc.subtract(-5, 3)).toBe(-8);
        });
    });

    describe('multiply', () => {
        test('multiply two positive numbers', () => {
            expect(calc.multiply(2, 3)).toBe(6);
        });   
        test('multiply a positive and negative number', () => {
            expect(calc.multiply(2, -3)).toBe(-6);
        });
        test('multiply two negative numbers and zero', () => {
            expect(calc.multiply(-2, -3)).toBe(6);
        });   
    });

    describe('divide', () => {
        test('divide two positive numbers', () => {
            expect(calc.divide(6,3)).toBe(2);
        });
        test('divide two positive numbers', () => {
            expect(calc.divide(-6,3)).toBe(-2);
        });
        
        test('divide two positive numbers', () => {
            expect(() => calc.divide(6,0)).toThrow(Error);
        });
    });
    
})