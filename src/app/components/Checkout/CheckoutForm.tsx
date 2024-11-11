import { useForm } from "react-hook-form";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";
import Button from "../Button";
import useCartStore from "../../store/store";
import CartItem from "../Cart/CartItem";
import CheckoutModal from "../Modal/CheckoutModal";

const CheckoutForm = () => {
  const { register, handleSubmit } = useForm();
  const { cart, cartTotal } = useCartStore();
  const { isCheckoutComplete, setIsCheckoutComplete } =
    useContext(ModalContext);
  const onSubmit = (data: any) => {
    console.log(data);
    setIsCheckoutComplete(!isCheckoutComplete);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white rounded-lg p-6 pb-2 mb-8">
          <h1 className="text-3xl tracking-[1px] mb-8">Checkout</h1>
          <span className="text-subtitle mb-4">Billing details</span>
          <div>
            <div className="input-box">
              <label htmlFor="firstName">Name</label>
              <input {...register("firstName")} />
            </div>

            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input {...register("email")} />
            </div>

            <div className="input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input {...register("phoneNumber")} />
            </div>
          </div>

          <span className="text-subtitle mb-4">Shipping info</span>
          <div>
            <div className="input-box">
              <label htmlFor="address">Address</label>
              <input {...register("address")} />
            </div>
            <div className="input-box">
              <label htmlFor="zipCode">Zip Code</label>
              <input {...register("zipCode")} />
            </div>
            <div className="input-box">
              <label htmlFor="city">City</label>
              <input {...register("city")} />
            </div>
            <div className="input-box">
              <label htmlFor="country">Country</label>
              <input {...register("country")} />
            </div>
          </div>
        </div>

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
            <p className="font-bold text-black text-lg tracking-[1.29px]">
              $ 50
            </p>
          </div>

          <div className="flex justify-between mb-8">
            <p className="text-[.9375rem] uppercase">Grand Total</p>
            <p className="font-bold text-orange-200 text-lg tracking-[1.29px]">
              $ {(cartTotal + 50).toLocaleString()}
            </p>
          </div>

          <Button variant="primary" className="w-full" type="submit">
            Continue and Pay
          </Button>
        </div>
      </form>

      {isCheckoutComplete && <CheckoutModal />}
    </div>
  );
};
export default CheckoutForm;
