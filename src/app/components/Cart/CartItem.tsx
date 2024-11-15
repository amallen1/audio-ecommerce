import Image from "next/image";
import QuantitySelector from "../Products/QuantitySelector";
import { CartItemInterface } from "@/app/interfaces/cart.interfaces";
import { useState } from "react";

const CartItem = ({
  slug,
  name,
  price,
  quantity,
  checkOut,
}: CartItemInterface) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  return (
    <div className="mb-6 flex justify-between items-center gap-x-6">
      <div className="flex items-center gap-x-4">
        <Image
          src={`/assets/cart/image-${slug}.jpg`}
          width={64}
          height={64}
          alt={name}
          className="rounded-lg"
        />
        <div>
          <p className="text-black font-bold leading-[25px] text-base">
            {name.split(" ").slice(0, -1).join(" ")}
          </p>
          <p className="text-black/50 font-bold">$ {price.toLocaleString()}</p>
        </div>
      </div>

      {checkOut ? (
        <p className="text-black/50 font-bold">x{quantity}</p>
      ) : (
        <QuantitySelector
          name={name}
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
          isInCart={true}
        />
      )}
    </div>
  );
};
export default CartItem;
