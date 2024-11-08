import { create } from "zustand";
import { CartItemInterface } from "../interfaces/cart.interfaces";

type CartState = {
  cart: CartItemInterface[];
  itemsInCart: number;
};

type Action = {
  addToCart: (item: CartItemInterface) => void;
};

const useCartStore = create<CartState & Action>()((set) => ({
  cart: [],
  itemsInCart: 0,
  addToCart: (item) =>
    set((state) => ({
      itemsInCart: state.itemsInCart + 1,
      cart: [...state.cart, item],
    })),
  
}));

export default useCartStore;
