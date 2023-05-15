import { fizzbuzz } from '../fizzbuzz';

describe('fizzbuzz', () => {
  describe('GIVEN a number', () => {
    describe('multiples of 3 should return fizz', () => {
      test('output should return fizz two times', () => {
        expect(fizzbuzz(6)).toBe('1 2 fizz 4 buzz fizz');
      });
    });

    describe('multiples of 5 should return buzz', () => {
      test('output should return buzz two times', () => {
        expect(fizzbuzz(10)).toBe('1 2 fizz 4 buzz fizz 7 8 fizz buzz');
      });
    });

    describe('multiples of 3 and 5 should return fizzbuzz', () => {
      test('output should return fizzbuzz one time', () => {
        expect(fizzbuzz(15)).toBe(
          '1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz',
        );
      });
    });
  });
});
