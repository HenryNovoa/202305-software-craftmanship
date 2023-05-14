import { BusinessPricingStrategy } from "../strategy/BusinessPricingStrategy";
import { StandardPricingStrategy } from "../strategy/StandardPricingStrategy";
describe('Pricing Strategy', () => {
    const standardPricingStrategy = new StandardPricingStrategy();
    const businessPricingStrategy = new BusinessPricingStrategy();

    test ('it should be an instance of PricingStrategy', () => {
        expect(standardPricingStrategy).toBeInstanceOf(StandardPricingStrategy);
        expect(businessPricingStrategy).toBeInstanceOf(BusinessPricingStrategy);

    });


    test('Business pricing strategy should calculate price with discount and taxes', () => {
        expect(businessPricingStrategy.calculatePrice(1, 0.21)).toEqual(1.03);
        expect(businessPricingStrategy.calculatePrice(1.6, 0.21)).toEqual(1.65);
    }); 

    test('Standard pricing strategy should calculate price without discount and taxes', () => {
        expect(standardPricingStrategy.calculatePrice(1, 0.21)).toEqual(1.21);
        expect(standardPricingStrategy.calculatePrice(1.6, 0.21)).toEqual(1.94);
    }); 
});