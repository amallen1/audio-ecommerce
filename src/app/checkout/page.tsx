"use client";
import { useRouter } from "next/navigation";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";

const Checkoutpage = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100">
      <div className="pt-4 max-w-[327px] m-auto">
        <button
          className="text-black/50 text-[.9375rem] leading-[25px] hover:text-orange-200 mb-6"
          onClick={() => router.back()}
        >
          Go Back
        </button>

        <div>
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};
export default Checkoutpage;