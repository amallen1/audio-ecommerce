"use client";
import { useRouter } from "next/navigation";
import CheckoutForm from "../components/Checkout/CheckoutForm";

const Checkoutpage = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100">
      <div className="px-3 sm:px-0 pt-4 pb-24 max-w-[327px] m-auto">
        <button
          className="text-black/50 text-[.9375rem] leading-[25px] hover:text-orange-200 mb-6 font-medium"
          onClick={() => router.back()}
        >
          Go Back
        </button>

        <div>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};
export default Checkoutpage;
