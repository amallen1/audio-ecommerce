import Button from "../Button";
import CartItem from "./CartItem";

const Cart = ({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-white rounded-lg px-7 py-8 max-w-[377px] smd:w-[377px]">
      <div className="flex items-center justify-between mb-8">
        <p className="font-bold text-black tracking-[1.29px]">
          CART <span>(0)</span>
        </p>

        <div>
          <button
            className="text-black font-bold"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            X
          </button>
        </div>
      </div>
      {/* <button className="text-black/50 border-b-[1px] border-black/50 mr-6">
          Remove all
        </button> */}

      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-black/50 text-[.9375rem]">TOTAL</p>
        <p className="text-black font-bold text-lg">$5,302</p>
      </div>

      <Button variant="primary" fullWidth={true}>
        Checkout
      </Button>
    </div>
  );
};
export default Cart;
