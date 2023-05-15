export interface PricingStrategy {
  calculatePrice(basePrice: number, taxes: number): number;
}

export class StandardPricingStrategy implements PricingStrategy {
  calculatePrice(basePrice: number, taxes: number): number {
    return Number.parseFloat((basePrice + basePrice * taxes).toFixed(2));
  }
}

export class BusinessPricingStrategy implements PricingStrategy {
  private BASE_DISCOUNT: number = 0.15;

  calculatePrice(basePrice: number, taxes: number): number {
    const basePriceWithDiscount = basePrice - basePrice * this.BASE_DISCOUNT;
    return Number.parseFloat((basePriceWithDiscount + basePriceWithDiscount * taxes).toFixed(2));
  }
}

