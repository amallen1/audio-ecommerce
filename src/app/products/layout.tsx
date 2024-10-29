"use client";
import { usePathname } from "next/navigation";
import CategoryLinks from "../components/CategoryLinks";
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
    <div className="">
      <div className="bg-black flex justify-center py-8 md:py-24">
        <h1 className="text-white text-3xl">{category.toUpperCase()}</h1>
      </div>

      <div>{children}</div>

      <div className="py-24 max-w-[327px] m-auto smd:max-w-mobile md:max-w-tablet  lg:pt-0 lg:max-w-desktop-sm xl:py-28 xl:max-w-desktop-lg">
        <CategoryLinks />
      </div>

      <div className="my-10">
        <About />
      </div>
    </div>
  );
}
