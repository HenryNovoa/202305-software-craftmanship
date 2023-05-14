import { PricingStrategy } from './PricingStrategy';

export class StandardPricingStrategy implements PricingStrategy {
    calculatePrice(basePrice: number, taxes: number): number {
        return Number.parseFloat((basePrice + basePrice * taxes).toFixed(2));
    }
}
