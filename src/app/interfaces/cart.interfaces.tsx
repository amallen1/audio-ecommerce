export interface CartItemInterface {
  id: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  isInCart?: boolean;
  checkOut?: boolean;
}
