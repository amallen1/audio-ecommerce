import { create } from "zustand";
import { CartItemInterface } from "../interfaces/cart.interfaces";

type CartState = {
  cart: CartItemInterface[];
  itemsInCart: number;
  cartTotal: number;
};

type Action = {
  addToCart: (newItem: CartItemInterface) => void;
  updateItemQuantity: (itemName: string, newQuantity: number) => void;
  removeAllItems: () => void;
};

const useCartStore = create<CartState & Action>()((set) => ({
  cart: [],
  itemsInCart: 0,
  cartTotal: 0,
  addToCart: (newItem) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        return {
          itemsInCart: state.itemsInCart + newItem.quantity,
          cartTotal: state.cartTotal + newItem.price * newItem.quantity,
          cart: state.cart.map((item) =>
            item.name === newItem.name
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      } else {
        return {
          itemsInCart: state.itemsInCart + newItem.quantity,
          cartTotal: state.cartTotal + newItem.price * newItem.quantity,
          cart: [...state.cart, newItem],
        };
      }
    }),

  updateItemQuantity: (itemName, newQuantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.name === itemName
          ? {
              ...item,
              quantity:
                newQuantity > item.quantity
                  ? item.quantity + 1
                  : item.quantity - 1,
            }
          : item
      );

      const product = state.cart.find((item) => item.name === itemName);

      return {
        itemsInCart:
          newQuantity > product!.quantity
            ? state.itemsInCart + 1
            : state.itemsInCart - 1,
        cart:
          newQuantity === 0
            ? state.cart.filter((item) => item.name !== itemName)
            : updatedCart,
        cartTotal:
          newQuantity > product!.quantity
            ? state.cartTotal + product!.price
            : state.cartTotal - product!.price,
      };
    }),
  removeAllItems: () =>
    set(() => {
      return {
        cart: [],
        cartTotal: 0,
        itemsInCart: 0,
      };
    }),
}));

export default useCartStore;
