import { CarBuilder } from '.';
import { Colors, Engine, Extras, Model, Transmission } from './types';

describe('CarBuilder', () => {
  let carBuilder: CarBuilder;

  beforeEach(() => {
    carBuilder = new CarBuilder();
  });

  it('should build a car with the correct parts', () => {
    const result = carBuilder
      .setModel(Model.HONDA)
      .setEngine(Engine.ELECTRIC)
      .setColor(Colors.RED)
      .setTransmission(Transmission.MANUAL)
      .setExtras([Extras.GPS, Extras.HEATED_SEATS])
      .getResult();

    expect(result.parts).toEqual([
      Model.HONDA,
      Engine.ELECTRIC,
      Colors.RED,
      Transmission.MANUAL,
      Extras.GPS,
      Extras.HEATED_SEATS,
    ]);
  });

  it('should build multiple cars correctly', () => {
    const car1 = carBuilder
      .setModel(Model.MITSUBISHI)
      .setEngine(Engine.GASOLINE)
      .setColor(Colors.BLACK)
      .getResult();

    const car2 = carBuilder
      .setModel(Model.HONDA)
      .setEngine(Engine.DIESEL)
      .setColor(Colors.WHITE)
      .setExtras([Extras.SUNROOF])
      .getResult();

    expect(car1.parts).toEqual([
      Model.MITSUBISHI,
      Engine.GASOLINE,
      Colors.BLACK,
    ]);
    expect(car2.parts).toEqual([
      Model.HONDA,
      Engine.DIESEL,
      Colors.WHITE,
      Extras.SUNROOF,
    ]);
  });
});
