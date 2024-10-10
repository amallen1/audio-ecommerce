"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

const Nav = () => {
  const pathname = usePathname();
  return (
    <header
      className={`${pathname === "/" ? "absolute w-full" : "bg-black"}
        `}
    >
      <nav className="flex justify-between items-center py-8 px-6 border-b-[1px] border-[rgba(255,255,255,.10)] max-w-tablet m-auto md:px-0 lg:max-w-desktop-sm xl:max-w-desktop-lg">
        <div className="lg:hidden">
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

        <div>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
            height={20}
            alt="Shopping cart icon"
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
