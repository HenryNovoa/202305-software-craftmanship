const BUSINESS_PRICE_DISCOUNT = 0.15;

export interface IProduct {
    get id(): string;
    get basePrice(): number;
    get taxes(): number;
}

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

    protected priceWithTax(basePrice: number, taxes: number) {
        return Number.parseFloat((basePrice + basePrice * taxes).toFixed(2));
    }
}

export interface PricingStrategy {
    calculatePrice(basePrice: number, taxes: number): number;
}

export class StandardPricingStrategy implements PricingStrategy {
    calculatePrice(basePrice: number, taxes: number): number {
        return Number.parseFloat((basePrice + basePrice * taxes).toFixed(2));
    }
}

export class BusinessPricingStrategy implements PricingStrategy {
    private BASE_DISCOUNT: number = BUSINESS_PRICE_DISCOUNT;

    calculatePrice(basePrice: number, taxes: number): number {
        const basePriceWithDiscount = basePrice - basePrice * this.BASE_DISCOUNT;
        return Number.parseFloat((basePriceWithDiscount + basePriceWithDiscount * taxes).toFixed(2));
    }
}