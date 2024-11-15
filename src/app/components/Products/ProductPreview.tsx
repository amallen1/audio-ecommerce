import Image from "next/image";
import Button from "../Button";

interface ProductProps {
  name: string;
  isNew: boolean;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
  alternateOrder: boolean;
  slug: string;
}

const ProductPreview = ({
  name,
  isNew,
  categoryImage,
  description,
  alternateOrder,
  slug,
}: ProductProps) => {
  return (
    <div className="xl:flex xl:items-center xl:gap-x-[125px]">
      <div
        className={`flex justify-center mb-8 md:mb-12 xl:mb-0 ${
          alternateOrder && "order-1"
        }`}
      >
        <Image
          src={categoryImage.mobile}
          width={327}
          height={352}
          alt={`${name}`}
          className="rounded-lg md:hidden"
        />
        <Image
          src={categoryImage.tablet}
          width={689}
          height={352}
          alt={`${name}`}
          className="rounded-lg hidden md:block xl:hidden"
        />
        <Image
          src={categoryImage.desktop}
          width={540}
          height={560}
          alt={`${name}`}
          className="rounded-lg hidden xl:block"
        />
      </div>
      <div className="text-center xl:text-left xl:flex-1">
        {isNew ? (
          <span className="text-overline text-orange-200 mb-6 xl:mb-4">
            New product
          </span>
        ) : null}
        <h2 className="text-3xl tracking-[1px] mb-6 md:text-[2.5rem]/[2.75rem] md:px-40 md:tracking-[1.43px] xl:px-0 xl:mb-8">
          {name}
        </h2>
        <p className="mb-6 md:px-16 xl:px-0 xl:mb-10">{description}</p>
        <Button variant="primary" to={`/products/${slug}`}>
          See Product
        </Button>
      </div>
    </div>
  );
};
export default ProductPreview;
