"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "@/app/context/ModalContext";

const ProductCategory = ({ category }: { category: string }) => {
  const { setIsMenuOpen } = useContext(ModalContext);
  return (
    <div className="bg-gray-200 pb-6 rounded-lg flex flex-col items-center relative pt-20 flex-1 gap-x-[10px]">
      <Image
        src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
        width={150}
        height={104}
        className="absolute -top-[50px]"
        alt={`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
      />

      <p className="uppercase text-black font-bold tracking-[1.07px] mb-4">
        {category}
      </p>

      <Link
        href={`/products/${category}`}
        passHref
        className="uppercase text-black/50 tracking-[1px] font-bold flex items-center gap-x-3 hover:text-orange-200"
        onClick={() => setIsMenuOpen(false)}
      >
        Shop
        <Image
          src="/assets/shared/desktop/icon-arrow-right.svg"
          width={10}
          height={10}
          alt="Arrow"
        />
      </Link>
    </div>
  );
};
export default ProductCategory;
