"use client";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import CheckoutMessage from "../CheckoutMessage";

const CheckoutModal = () => {
  const { isCheckoutComplete, setIsCheckoutComplete } =
    useContext(ModalContext);
  return (
    <>
      <Dialog
        open={isCheckoutComplete}
        onClose={() => setIsCheckoutComplete(false)}
        className="z-10"
      >
        <DialogBackdrop className="fixed inset-0 top-0 bg-black/40" />
        <DialogPanel className="fixed top-[50px] right-1/2 transform translate-x-1/2">
          <CheckoutMessage />
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default CheckoutModal;
