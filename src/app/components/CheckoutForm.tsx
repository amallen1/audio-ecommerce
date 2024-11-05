import { useForm } from "react-hook-form";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h1 className="text-3xl tracking-[1px] mb-8">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
};
export default CheckoutForm;
