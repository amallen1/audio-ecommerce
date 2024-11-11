"use client";
import { usePathname } from "next/navigation";
import CategoryLinks from "../components/Products/CategoryLinks";
import About from "../components/About";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const array = path.split("/");
  const category: string = array[2];

  return (
    <div>
      {!category.includes("-") && (
        <div className="bg-black flex justify-center py-8 md:py-24">
          <h1 className="text-white text-3xl">{category.toUpperCase()}</h1>
        </div>
      )}

      <div className=" px-3 sm:px-0 pt-16 mb-28 max-w-[327px] m-auto smd:max-w-mobile md:max-w-tablet md:pt-28 lg:max-w-desktop-sm xl:pt-28 xl:max-w-desktop-lg xl:mb-40">
        <div>{children}</div>

        <div className="mt-44 mb-28 xl:mb-40">
          <CategoryLinks />
        </div>

        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
