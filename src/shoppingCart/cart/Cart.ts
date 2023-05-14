import { IProduct } from '../product/Product';
import { PricingStrategy } from '../strategy/PricingStrategy';

interface ICart {
    printProducts(): IProduct[];
    addProduct(product: IProduct): void;
    deleteProduct(name: string): void;
    calculateBasePrice(): number;
    calculateTotalPrice(): number;
}

export class ShoppingCart implements ICart {
    protected products: IProduct[] = [];
    protected pricingStrategy: PricingStrategy;


    constructor(pricingStrategy: PricingStrategy) {
        this.pricingStrategy = pricingStrategy;
    }
    printProducts(): IProduct[] {
        return this.products;
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    deleteProduct(id: string): void {
        this.products = this.products.filter(item => item.id !== id);
    }
     calculateBasePrice(): number {
        return this.products.reduce((total, product) => total += product.basePrice, 0);
    }

    calculateTotalPrice(): number {
        return this.products.reduce((total, product) => {
            return total += this.pricingStrategy.calculatePrice(product.basePrice, product.taxes);
        }, 0);
    }
}