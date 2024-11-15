import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";
import Button from "../Button";
import useCartStore from "../../store/store";
import CartItem from "../Cart/CartItem";
import CheckoutModal from "../Modal/CheckoutModal";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Wrong format" }),
  phoneNumber: z.string().min(1, { message: "Required" }),
  address: z.string().min(1, { message: "Required" }),
  zipCode: z.string().min(1, { message: "Required" }),
  city: z.string().min(1, { message: "Required" }),
  country: z.string().min(1, { message: "Required" }),
});

type FormData = z.infer<typeof schema>;

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const SHIPPING_FEE: number = 50;
  const { cart, cartTotal } = useCartStore();
  const { isCheckoutComplete, setIsCheckoutComplete } =
    useContext(ModalContext);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsCheckoutComplete(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:items-start md:gap-x-7">
          <div className="bg-white rounded-lg p-6 pb-2 mb-8 lg:px-12 lg:pt-14 lg:pb-12 lg:flex-1">
            <h1 className="text-3xl tracking-[1px] mb-8">Checkout</h1>
            <span className="text-subtitle mb-4">Billing details</span>

            <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-4">
              <div className="input-box">
                <div className="flex justify-between">
                  <label
                    htmlFor="name"
                    className={`${errors.name?.message && "errorText"}`}
                  >
                    Name
                  </label>
                  {errors.name?.message && (
                    <span className="errorText">{errors.name?.message}</span>
                  )}
                </div>

                <input
                  {...register("name")}
                  className={errors.name?.message && "error"}
                  placeholder="John Doe"
                />
              </div>

              <div className="input-box">
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className={`${errors.email?.message && "errorText"}`}
                  >
                    Email Address
                  </label>
                  {errors.email?.message && (
                    <span className="errorText">{errors.email?.message}</span>
                  )}
                </div>

                <input
                  {...register("email")}
                  placeholder="johndoe@gmail.com"
                  className={errors.email?.message && "error"}
                />
              </div>

              <div className="input-box">
                <div className="flex justify-between">
                  <label
                    htmlFor="phoneNumber"
                    className={`${errors.phoneNumber?.message && "errorText"}`}
                  >
                    Phone Number
                  </label>
                  {errors.phoneNumber?.message && (
                    <span className="errorText">
                      {errors.phoneNumber?.message}
                    </span>
                  )}
                </div>

                <input
                  {...register("phoneNumber")}
                  placeholder="123-456-7890"
                  className={errors.address?.message && "error"}
                />
              </div>
            </div>

            <span className="text-subtitle mb-4">Shipping info</span>
            <div className="md:grid md:grid-cols-2 md:gap-x-4">
              <div className="input-box col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="address"
                    className={`${errors.address?.message && "errorText"}`}
                  >
                    Address
                  </label>
                  {errors.address?.message && (
                    <span className="errorText">{errors.address?.message}</span>
                  )}
                </div>

                <input
                  {...register("address")}
                  placeholder="1137 Williams Avenue"
                  className={errors.address?.message && "error"}
                />
              </div>
              <div className="input-box">
                <div className="flex justify-between">
                  <label
                    htmlFor="zipCode"
                    className={`${errors.zipCode?.message && "errorText"}`}
                  >
                    Zip Code
                  </label>
                  {errors.zipCode?.message && (
                    <span className="errorText">{errors.zipCode?.message}</span>
                  )}
                </div>

                <input
                  {...register("zipCode")}
                  placeholder="10001"
                  className={errors.zipCode?.message && "error"}
                />
              </div>
              <div className="input-box">
                <div className="flex justify-between">
                  <label
                    htmlFor="city"
                    className={`${errors.city?.message && "errorText"}`}
                  >
                    City
                  </label>
                  {errors.city?.message && (
                    <span className="errorText">{errors.city?.message}</span>
                  )}
                </div>

                <input
                  {...register("city")}
                  placeholder="New York"
                  className={errors.city?.message && "error"}
                />
              </div>
              <div className="input-box">
                <div className="flex justify-between">
                  <label
                    htmlFor="country"
                    className={`${errors.country?.message && "errorText"}`}
                  >
                    Country
                  </label>
                  {errors.country?.message && (
                    <span className="errorText">{errors.country?.message}</span>
                  )}
                </div>

                <input
                  {...register("country")}
                  placeholder="United States"
                  className={errors.country?.message && "error"}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 lg:max-w-[350px] lg:flex-1">
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
                $ {(cartTotal + SHIPPING_FEE).toLocaleString()}
              </p>
            </div>

            <Button variant="primary" className="w-full">
              Continue and Pay
            </Button>
          </div>
        </div>
      </form>

      {isCheckoutComplete && <CheckoutModal />}
    </div>
  );
};
export default CheckoutForm;
