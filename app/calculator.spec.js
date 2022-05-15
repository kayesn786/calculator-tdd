const { it, expect } = require('@jest/globals');
describe('Calculator App', () => {
  it('It should accept only string values', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add(1)).toBe('Invalid type');
  });

  it("It should return zero if empty string '' is passed", () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('')).toBe(0);
  });

  it('It should return zero if non numerical characters are passed', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('.')).toBe(0);
  });

  it('It should return the number if only one operand is passes', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('5')).toBe(5);
  });

  it('It should return the decimal point if the string has a decimal in it', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('5.8')).toBe(5.8);
  });

  it('It should not allow negative numbers ', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(() => calculator.add('-4')).toThrow('negatives not allowed- -4');
  });

  it('It should not add if there is atleast one negative number ', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(() => calculator.add('-4,3')).toThrow('negatives not allowed- -4');
  });

  it('It should not allow negative numbers ', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(() => calculator.add('-4,-8.5,-3')).toThrow(
      'negatives not allowed- -4 -8.5 -3'
    );
  });

  it('It should add two numbers', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('1,2')).toBe(3);
  });

  it('It should add n numbers', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('1,2,3,4')).toBe(10);
  });

  it('It should consider empty strings with comma seperated', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add(',2')).toBe(0);
  });

  it('It should also add the numbers if there is newline character', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('1\n2,3')).toBe(6);
  });
  it('It should also add the numbers if there is trailing newline character', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('\n1\n2,3')).toBe(6);
  });
  it('It should not add the numbers if one of them is empty', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('1,\n')).toBe(0);
  });
  it('It should add the numbers with custom delimeters', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });
  it('It should return zero if there is delimeter mismatch', () => {
    const calc = require('./calculator');
    const calculator = new calc();
    expect(calculator.add('//;\n#1#2')).toBe(0);
  });
});
