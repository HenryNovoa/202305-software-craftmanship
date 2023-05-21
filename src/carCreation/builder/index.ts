import { AbstractCar, Car } from '../car';
import { Colors, Engine, Extras, Model, Transmission } from './types';

interface Builder {
  reset(): void;
  setModel(model: Model): Builder;
  setColor(color: Colors): Builder;
  setTransmission(transmission: Transmission): Builder;
  setEngine(engine: Engine): Builder;
  setExtras(extras: Extras[]): Builder;
  getResult(): AbstractCar;
}

export class CarBuilder implements Builder {
  private car: AbstractCar;

  constructor() {
    this.reset();
  }

  setModel(model: Model) {
    this.car.parts.push(model);

    return this;
  }

  setColor(color: Colors) {
    this.car.parts.push(color);

    return this;
  }

  setTransmission(transmission: Transmission) {
    this.car.parts.push(transmission);

    return this;
  }

  setEngine(engine: Engine) {
    this.car.parts.push(engine);

    return this;
  }

  setExtras(extras: Extras[]) {
    this.car.parts.push(...extras);

    return this;
  }

  getResult() {
    const product = this.car;
    this.reset();

    return product;
  }

  reset() {
    this.car = new Car();
  }
}
