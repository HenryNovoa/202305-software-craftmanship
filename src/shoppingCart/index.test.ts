import { IProduct, PricingStrategy, ShoppingCart } from ".";

class MockProduct implements IProduct {
    constructor(
        private _id: string,
        private _name: string,
        private _basePrice: number,
        private _taxes: number,
    ) { }

    get id() {
        return this._id;
    }

    get basePrice() {
        return this._basePrice;
    }

    get taxes() {
        return this._taxes;
    }
}

class MockPricingStrategy implements PricingStrategy {
    calculatePrice(basePrice: number, taxes: number): number {
        return Number.parseFloat((basePrice + basePrice * taxes).toFixed(2));    }
}

describe('ShoppingCart', () => {
    const freeTaxProduct: IProduct = new MockProduct('id1', '1l water', 1, 0.00);
    const reducedTaxProduct: IProduct = new MockProduct('id2', 'eco tomatos', 2, 0.04);
    const normalTaxProduct: IProduct = new MockProduct('id2', 'tomatos', 1.6, 0.21);
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

            expect(cart.calculateTotalPrice()).toEqual(5.02);

            cart.deleteProduct(freeTaxProduct.id)

            expect(cart.calculateTotalPrice()).toEqual(4.02);
        });
    });
});