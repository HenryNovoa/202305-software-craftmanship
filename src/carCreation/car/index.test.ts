import { AbstractCar, Car } from '.';

describe('car', () => {
  describe('GIVEN a new car', () => {
    let car: AbstractCar;

    beforeEach(() => {
      car = new Car();
    });

    describe('WHEN list parts is called', () => {
      test('THEN should return current car parts', () => {
        expect(car.listParts()).toEqual([]);
      });
    });
  });
});
