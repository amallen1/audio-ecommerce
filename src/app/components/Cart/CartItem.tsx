import Image from "next/image";
import QuantitySelector from "../QuantitySelector";
import { CartItemInterface } from "@/app/interfaces/cart.interfaces";

const CartItem = ({ id, slug, name, price, quantity }: CartItemInterface) => {
  console.log(`cart quantity ${quantity}`);
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
            {name}
          </p>
          <p className="text-black/50 font-bold">$ {price.toLocaleString()}</p>
        </div>
      </div>

      <QuantitySelector />
    </div>
  );
};
export default CartItem;
