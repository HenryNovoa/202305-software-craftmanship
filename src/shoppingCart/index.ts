export interface IProduct {
    get id(): string;
    get basePrice(): number;
    get taxes(): number;
}

class Product implements IProduct {
    constructor(
        private _id: string,
        private _name: string,
        private _basePrice: number,
        private _taxes: number,
        private description?: string,
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

interface ICart {
    printProducts(): IProduct[];
    addProduct(product: IProduct): void;
    deleteProduct(name: string): void;
    calculateBasePrice(): number;
    calculateTotalPrice(): number;
}

export class ShoppingCart implements ICart {
    protected products: IProduct[] = [];

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
            return total += this.priceWithTax(product.basePrice, product.taxes);
        }, 0);
    }

    protected priceWithTax(basePrice: number, taxes: number) {
        return Number.parseFloat((basePrice + basePrice * taxes).toFixed(2));
    }
}

export class BusinessShoppingCart extends ShoppingCart {
    private BASE_DISCOUNT: number = 0.15;

    calculateTotalPrice(): number {
        return this.products.reduce((total, product) => {
            const basePriceWithDiscount = this.priceWithDiscount(product.basePrice);

            return total += this.priceWithTax(basePriceWithDiscount, product.taxes);
        }, 0);
    }

    private priceWithDiscount(basePrice: number): number {
        return Number.parseFloat((basePrice - basePrice * this.BASE_DISCOUNT).toFixed(2));
    }
}