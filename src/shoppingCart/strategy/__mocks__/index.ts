import { PricingStrategy } from '..';

export class MockPricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number, taxes: number): number {
    return basePrice + taxes;
  }
}
