"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../Button";
import data from "../../data.json";
import QuantitySelector from "../QuantitySelector";
import Gallery from "./Gallery";

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface ProductProps {
  name: string;
  image: Image;
  category: string;
  new: boolean;
  description: string;
  features: string;
  price: number;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
  others: {
    slug: string;
    name: string;
    image: Image;
  }[];
}

const ProductDetail = ({ slug }: { slug: string }) => {
  const router = useRouter();

  const productData: ProductProps | undefined = data.find(
    (item) => item.slug === slug
  );

  if (!productData) {
    return <div>Product not found</div>;
  }

  const {
    name,
    image,
    category,
    new: isNew,
    description,
    features,
    price,
    includes,
    gallery,
  } = productData;

  return (
    <div>
      <button
        className="text-black/50 text-[.9375rem] leading-[25px] hover:text-orange-200 mb-6"
        onClick={() => router.back()}
      >
        Go Back
      </button>

      <div className="md:flex md:items-center md:mb-28 md:gap-x-16 xl:mb-40 xl:gap-x-32">
        <div className="flex justify-center mb-8 md:mb-0">
          <Image
            src={image.mobile}
            width={327}
            height={352}
            alt={`${name}`}
            className="rounded-lg smd:w-[500px] md:hidden"
          />
          <Image
            src={image.tablet}
            width={281}
            height={480}
            alt={`${name}`}
            className="rounded-lg hidden md:block xl:hidden"
          />
          <Image
            src={image.desktop}
            width={540}
            height={560}
            alt={`${name}`}
            className="rounded-lg hidden xl:block"
          />
        </div>
        <div className="md:flex-1">
          {isNew ? (
            <span className="text-overline text-orange-200 tracking-[10px] text-sm mb-6 block xl:mb-4">
              New product
            </span>
          ) : null}
          <h2 className="text-black text-3xl tracking-[1px] mb-6 md:text-[2.5rem]/[2.75rem] md:tracking-[1.43px] xl:mb-8">
            {name}
          </h2>
          <p className="mb-6 px-0 md:mb-8">{description}</p>
          <p className="text-black text-lg tracking-[1.29px] mb-8 font-bold">
            ${price.toLocaleString()}
          </p>

          <div className="flex gap-x-6 mb-20">
            <QuantitySelector />
            <Button variant="primary">Add to cart</Button>
          </div>
        </div>
      </div>

      <div className="mb-20 md:mb-28 xl:mb-40 xl:flex xl:gap-x-[125px]">
        <div className="mb-20 xl:basis-[64%]">
          <h2 className="text-2xl tracking-[0.86px] mb-6 md:text-3xl">
            Features
          </h2>
          <p className="whitespace-pre-wrap">{features}</p>
        </div>

        <div className="md:flex md:gap-x-40 xl:block xl:basis-[36%]">
          <h2 className="text-2xl tracking-[0.86px] mb-6 md:text-3xl">
            In the box
          </h2>

          <div>
            {includes.map((item) => {
              return (
                <div className="flex gap-x-6 mb-2">
                  <p className="text-orange-200 font-bold">{item.quantity}x</p>
                  <p>
                    {item.item
                      .split(" ")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <Gallery gallery={gallery} />
      </div>
    </div>
  );
};
export default ProductDetail;
