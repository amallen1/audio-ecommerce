"use client";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import Button from "../Button";
import CartItem from "./CartItem";
import useCartStore from "@/app/store/store";

const Cart = () => {
  const { cart, itemsInCart } = useCartStore();
  const { isCartOpen, setIsCartOpen } = useContext(ModalContext);
  console.log(`Cart Items ${cart.map((item) => console.log(item))}`);

  return (
    <div className="bg-white rounded-lg px-7 py-8 max-w-[377px] smd:w-[377px]">
      <div className="flex items-center justify-between mb-8">
        <p className="font-bold text-black tracking-[1.29px]">
          CART <span>({itemsInCart})</span>
        </p>

        <div>
          <button
            className="text-black font-bold"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            X
          </button>
        </div>
      </div>
      {/* <button className="text-black/50 border-b-[1px] border-black/50 mr-6">
          Remove all
        </button> */}

      <div>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              slug={item.slug}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>

      {cart.length !== 0 ? (
        <div className="flex justify-between items-center mb-6">
          <p className="text-black/50 text-[.9375rem]">TOTAL</p>
          <p className="text-black font-bold text-lg">{}</p>
        </div>
      ) : (
        <span className="font-bold text-2xl block mb-6 text-center">
          Your cart is empty
        </span>
      )}

      {cart.length === 0 ? (
        <Button
          variant="primary"
          to="/products/headphones"
          onClick={() => setIsCartOpen(false)}
          className="w-full"
        >
          Continue Shopping
        </Button>
      ) : (
        <Button
          variant="primary"
          to="/checkout"
          onClick={() => setIsCartOpen(false)}
          className="w-full"
        >
          Checkout
        </Button>
      )}
    </div>
  );
};
export default Cart;
