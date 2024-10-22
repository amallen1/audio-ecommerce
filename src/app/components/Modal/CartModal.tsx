import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import Cart from "../Cart/Cart";

const CartModal = ({
  isCartOpen,
  setIsCartOpen,
}: {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Dialog
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        className="z-10"
      >
        <DialogBackdrop className="fixed inset-0 top-[90px] bg-black/40" />
        <DialogPanel className="fixed top-[114px] right-0 min-[375px]:right-6 md:right-10 xl:right-[165px]">
          <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default CartModal;
