import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import CategoryLinks from "./CategoryLinks";

function MenuModal({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Dialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/40" />
        <DialogPanel className="fixed top-[90px] bg-white w-full h-[calc(100vh-90px)] pt-[84px] pb-16 px-6 overflow-y-auto md:h-auto md:rounded-b-md ">
          <CategoryLinks />
        </DialogPanel>
      </Dialog>
    </>
  );
}
export default MenuModal;
