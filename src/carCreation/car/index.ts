export abstract class AbstractCar {
  public parts: string[] = [];

  public listParts(): string[] {
    return this.parts;
  }
}

export class Car extends AbstractCar {}
