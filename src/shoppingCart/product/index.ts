export interface Product {
  get id(): string;
  get basePrice(): number;
  get taxes(): number;
}
