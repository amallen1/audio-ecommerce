"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import MenuModal from "./Modal/MenuModal";
import CartModal from "./Modal/CartModal";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import useCartStore from "../store/store";

const Nav = () => {
  const { isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen } =
    useContext(ModalContext);

  const pathname = usePathname();
  const { itemsInCart } = useCartStore();

  return (
    <header
      className={`${pathname === "/" ? "bg-[rgb(25,25,25)]" : "bg-black"}
        `}
    >
      <nav className="relative flex justify-between items-center py-8 px-6 border-b-[1px] border-[rgba(255,255,255,.10)] max-w-tablet m-auto md:px-0 lg:max-w-desktop-sm xl:max-w-desktop-lg">
        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image
            src="/assets/shared/mobile/icon-hamburger.svg"
            width={16}
            height={15}
            alt="Mobile menu icon"
          />
        </div>

        <div className="smd:ml-10 smd:mr-auto lg:ml-0 lg:mr-0">
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              width={143}
              height={25}
              alt="Audiophile logo"
            />
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="cursor-pointer relative"
        >
          <div className="absolute -top-3 -right-3 bg-orange-200 rounded-full flex items-center justify-center w-5 h-5 font-bold text-white">
            {itemsInCart}
          </div>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
            height={20}
            alt="Shopping cart icon"
          />
        </div>
      </nav>
      {isMenuOpen && <MenuModal />}
      {isCartOpen && <CartModal />}
    </header>
  );
};
export default Nav;
