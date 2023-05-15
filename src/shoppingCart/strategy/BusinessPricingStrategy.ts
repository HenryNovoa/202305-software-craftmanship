import { PricingStrategy } from './PricingStrategy';
const BUSINESS_PRICE_DISCOUNT = 0.15;


export class BusinessPricingStrategy implements PricingStrategy {
    private BASE_DISCOUNT: number = BUSINESS_PRICE_DISCOUNT;

    calculatePrice(basePrice: number, taxes: number): number {
        const basePriceWithDiscount = basePrice - basePrice * this.BASE_DISCOUNT;
        return Number.parseFloat((basePriceWithDiscount + basePriceWithDiscount * taxes).toFixed(2));
    }
}