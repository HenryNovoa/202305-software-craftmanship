import { Product } from '..';

export class MockProduct implements Product {
  readonly id: string;
  readonly name: string;
  readonly basePrice: number;
  readonly taxes: number;

  constructor(id: string, name: string, basePrice: number, taxes: number) {
    this.id = id;
    this.name = name;
    this.basePrice = basePrice;
    this.taxes = taxes;
  }
}
