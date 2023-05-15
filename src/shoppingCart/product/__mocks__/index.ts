import { Product } from '..';

export class MockProduct implements Product {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly basePrice: number,
    readonly taxes: number,
  ) { }
}
