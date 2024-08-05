export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};
export type PizzaSize = "S" | "M" | "L" | "XL";
export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  size: string;
  quantity: number;
};
