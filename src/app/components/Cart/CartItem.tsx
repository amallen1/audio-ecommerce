import Image from "next/image";
import QuantitySelector from "../QuantitySelector";

const CartItem = () => {
  return (
    <div className="mb-6 flex justify-between items-center gap-x-6">
      <div className="flex items-center gap-x-4">
        <Image
          src={"/assets/cart/image-xx59-headphones.jpg"}
          width={64}
          height={64}
          alt="Headphones"
          className="rounded-lg"
        />
        <div>
          <p className="text-black font-bold leading-[25px] text-base">
            XX99 MKII
          </p>
          <p className="text-black/50 font-bold">$2,999</p>
        </div>
      </div>

      <QuantitySelector />
    </div>
  );
};
export default CartItem;
