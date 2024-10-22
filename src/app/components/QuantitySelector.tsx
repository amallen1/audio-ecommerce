"use client";
import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-gray-100 flex gap-3 text-black px-3 py-2 w-[90px] justify-center items-center">
      <button
        className={`text-black/25 hover:text-orange-200 text-lg tracking-[1px] ${
          quantity === 0 ? "cursor-not-allowed" : ""
        }`}
        onClick={decrement}
        disabled={quantity === 0}
      >
        -
      </button>
      <p className="text-black text-[.8125rem] font-bold tracking-[1px]">
        {quantity}
      </p>
      <button
        className="text-black/25 hover:text-orange-200 text-lg tracking-[1px]"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
export default QuantitySelector;
