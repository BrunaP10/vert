export type ProductCategory =
  | "sunglasses"
  | "prescription"
  | "sports";

export interface ProductVariant {
  color: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  category: ProductCategory;
  description: string;
  variants: ProductVariant[];
}