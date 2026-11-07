export type ProductCategory = 
  | "sunglasses"
  | "prescription"
  | "sports";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: ProductCategory;
  description: string;
}