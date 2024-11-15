import Button from "../Button";
import useCartStore from "../../store/store";
import CartItem from "../Cart/CartItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";

const CheckoutMessage = () => {
  const { cart, cartTotal, itemsInCart, removeAllItems } = useCartStore();
  const { slug, name, price, quantity } = cart[0];
  const remainingItems: number = Math.abs(cart[0].quantity - itemsInCart);
  const { setIsCheckoutComplete } = useContext(ModalContext);
  const router = useRouter();
  const handleCompleteCheckout = () => {
    router.push("/"); // Navigate back to home
    setTimeout(() => {
      removeAllItems(); // Clear the cart after redirect
      setIsCheckoutComplete(false);
    }, 100); // Delay to ensure navigation completes
  };
  return (
    <div className="bg-white rounded-lg px-7 py-8 w-[327px] smd:w-[377px]">
      <Image
        src="/assets/checkout/icon-order-confirmation.svg"
        width={64}
        height={64}
        className="mb-6"
        alt="Checkout icon"
      />
      <h1 className="text-2xl mb-4">Thank you for your order</h1>
      <p className="mb-6">You will receive an email confirmation shortly.</p>
      <div>
        <div className="p-6 bg-gray-200 rounded-tl-lg rounded-tr-lg">
          <CartItem
            slug={slug}
            name={name}
            price={price}
            quantity={quantity}
            checkOut={true}
          />
          <div className="w-full h-[1px] bg-black/5 -mt-3 mb-2" />
          {cart.length > 1 && (
            <p className="text-center font-bold">
              and {remainingItems} other item(s)
            </p>
          )}
        </div>
        <div className="bg-black py-4 px-6 rounded-bl-lg rounded-br-lg mb-6">
          <p className="text-white/50 uppercase mb-2">Grand Total</p>
          <p className="text-white font-bold text-lg">
            $ {cartTotal.toLocaleString()}
          </p>
        </div>
      </div>
      <Button
        variant="primary"
        to="/"
        className="w-full"
        onClick={handleCompleteCheckout}
      >
        Back to home
      </Button>
    </div>
  );
};
export default CheckoutMessage;
