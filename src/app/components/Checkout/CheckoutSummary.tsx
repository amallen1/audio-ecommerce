import Button from "../Button";
import useCartStore from "../../store/store";
import CartItem from "../Cart/CartItem";

const CheckoutSummary = () => {
  const { cart, cartTotal } = useCartStore();
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="mb-8 text-lg tracking-[1.29px]">Summary</h2>

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
              checkOut={true}
            />
          );
        })}
      </div>

      <div className="flex justify-between mb-2">
        <p className="text-[.9375rem] uppercase">Total</p>
        <p className="font-bold text-black text-lg tracking-[1.29px]">
          $ {cartTotal.toLocaleString()}
        </p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="text-[.9375rem] uppercase">Shipping</p>
        <p className="font-bold text-black text-lg tracking-[1.29px]">$ 50</p>
      </div>

      <div className="flex justify-between mb-8">
        <p className="text-[.9375rem] uppercase">Grand Total</p>
        <p className="font-bold text-orange-200 text-lg tracking-[1.29px]">
          $ {(cartTotal + 50).toLocaleString()}
        </p>
      </div>

      <Button variant="primary" className="w-full">
        Continue and Pay
      </Button>
    </div>
  );
};
export default CheckoutSummary;
