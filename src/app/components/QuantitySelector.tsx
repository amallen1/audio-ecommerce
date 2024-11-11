"use client";
import useCartStore from "../store/store";

interface QuantitySelectorProps {
  name: string;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  isInCart?: boolean;
}

const QuantitySelector = ({
  name,
  quantity,
  setQuantity,
  isInCart,
}: QuantitySelectorProps) => {
  
  const { cart, updateItemQuantity } = useCartStore();

  const increment = () => {
    if (cart.find((item) => item.name === name) && isInCart) {
      updateItemQuantity(name, quantity + 1);
    }
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (cart.find((item) => item.name === name) && isInCart) {
      updateItemQuantity(name, quantity - 1);
    }
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="bg-gray-200 flex gap-3 text-black px-4 py-2 w-[96px] justify-center items-center">
      <button
        className={`text-black/25 hover:text-orange-200 text-lg tracking-[1px]`}
        onClick={decrement}
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
