import { ShoppingCart } from '../cart/Cart';
import { Product } from '../product/Product';
import { MockProduct } from '../product/__mocks__/Product';
import { PricingStrategy } from '../strategy/PricingStrategy';

class MockPricingStrategy implements PricingStrategy {
    calculatePrice(basePrice: number, taxes: number): number {
        return basePrice + taxes; }
}

describe('ShoppingCart', () => {
    const freeTaxProduct: Product = new MockProduct('id1', '1l water', 1, 0.00);
    const reducedTaxProduct: Product = new MockProduct('id2', 'eco tomatos', 2, 0.04);
    const normalTaxProduct: Product = new MockProduct('id2', 'tomatos', 1.6, 0.21);
    test('it should be instance of shopping cart', () => {
        expect(new ShoppingCart(new MockPricingStrategy())).toBeInstanceOf(ShoppingCart);
    });

    describe('GIVEN a new shopping cart', () => {
        test('should start with an empty list of products', () => {
            const cart = new ShoppingCart(new MockPricingStrategy());

            expect(cart.printProducts()).toEqual([])
        });

        test('should be able to add a new product', () => {
            const cart = new ShoppingCart(new MockPricingStrategy);

            cart.addProduct(freeTaxProduct);
            cart.addProduct(reducedTaxProduct);
            cart.addProduct(normalTaxProduct);

            expect(cart.printProducts()).toEqual([
                freeTaxProduct,
                reducedTaxProduct,
                normalTaxProduct
            ])
        });

        test('should be able to delete products', () => {
            const cart = new ShoppingCart(new MockPricingStrategy());
            cart.addProduct(freeTaxProduct);
            cart.deleteProduct(freeTaxProduct.id);

            expect(cart.printProducts()).toEqual([])
        });

        test('should calculate base price', () => {
            const cart = new ShoppingCart(new MockPricingStrategy());

            cart.addProduct(freeTaxProduct);
            cart.addProduct(reducedTaxProduct);
            cart.addProduct(normalTaxProduct);

            expect(cart.calculateBasePrice()).toEqual(4.6);

            cart.deleteProduct(freeTaxProduct.id)

            expect(cart.calculateBasePrice()).toEqual(3.6);
        });

        test('should calculate total price', () => {
            const cart = new ShoppingCart(new MockPricingStrategy());

            cart.addProduct(freeTaxProduct);
            cart.addProduct(reducedTaxProduct);
            cart.addProduct(normalTaxProduct);

            expect(cart.calculateTotalPrice()).toEqual(4.85);

            cart.deleteProduct(freeTaxProduct.id)

            expect(cart.calculateTotalPrice()).toEqual(3.85);
        });
    });
});

