
export interface IProduct {
    get id(): string;
    get basePrice(): number;
    get taxes(): number;
}