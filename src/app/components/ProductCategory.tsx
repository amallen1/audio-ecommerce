import Link from "next/link";
import Image from "next/image";

const ProductCategory = () => {
  return (
    <div className="bg-gray-200 pb-6 rounded-lg flex flex-col items-center relative pt-20 flex-1 gap-x-[10px]">
      <Image
        src={`/assets/shared/desktop/image-category-thumbnail-headphones.png`}
        width={150}
        height={104}
        className="absolute -top-[50px]"
        alt="XX99 Mark Two Headphones"
      />

      <p className="uppercase text-black font-bold tracking-[1.07px] mb-4">
        headphones
      </p>

      <Link
        href={`/products/headphones`}
        passHref
        className="uppercase text-black/50 tracking-[1px] font-bold flex items-center gap-x-3 hover:text-orange-200"
        // onClick={() => ctx?.setIsMenuOpen(!ctx?.isMenuOpen)}
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
