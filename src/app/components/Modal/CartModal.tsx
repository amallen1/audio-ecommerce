"use client";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import Cart from "../Cart/Cart";

const CartModal = () => {
  const { isCartOpen, setIsCartOpen } = useContext(ModalContext);
  return (
    <>
      <Dialog
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        className="z-10"
      >
        <DialogBackdrop className="fixed inset-0 top-[90px] bg-black/40" />
        <DialogPanel className="fixed top-[114px] right-1/2 transform translate-x-1/2 md:transform-none md:right-10 lg:right-16 xl:right-[165px]">
          <Cart />
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default CartModal;
