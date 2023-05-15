export interface PricingStrategy {
    calculatePrice(basePrice: number, taxes: number): number;
}
