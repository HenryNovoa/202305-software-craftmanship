import { Product } from '../product';
import { PricingStrategy } from '../strategy';

interface Cart {
    printProducts(): Product[];
    addProduct(product: Product): void;
    deleteProduct(name: string): void;
    calculateBasePrice(): number;
    calculateTotalPrice(): number;
}

export class ShoppingCart implements Cart {
    protected products: Product[] = [];
    protected pricingStrategy: PricingStrategy;


    constructor(pricingStrategy: PricingStrategy) {
        this.pricingStrategy = pricingStrategy;
    }
    printProducts(): Product[] {
        return this.products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    deleteProduct(id: string): void {
        this.products = this.products.filter(item => item.id !== id);
    }
    calculateBasePrice(): number {
        return this.products.reduce((total, product) => total + product.basePrice, 0);
    }

    calculateTotalPrice(): number {
        return this.products.reduce((total, product) => {
            return total + this.pricingStrategy.calculatePrice(product.basePrice, product.taxes);
        }, 0);
    }
}