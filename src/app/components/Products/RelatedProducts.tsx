import Image from "next/image";
import Button from "../Button";

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface RelatedProductsProps {
  others: {
    slug: string;
    name: string;
    image: Image;
  }[];
}

const RelatedProducts = ({ others }: RelatedProductsProps) => {
  return (
    <div className="text-center">
      <h2 className="uppercase text-2xl tracking-[0.89px] mb-10">
        You may also like
      </h2>

      <div className="flex flex-col gap-y-14 md:flex-row md:gap-x-3">
        {others.map((item) => {
          return (
            <div>
              <div>
                <Image
                  src={item.image.mobile}
                  width={327}
                  height={120}
                  alt={`${item.name}`}
                  className="rounded-lg mb-8 m-auto smd:w-[500px] md:hidden"
                />

                <Image
                  src={item.image.tablet}
                  width={327}
                  height={120}
                  alt={`${item.name}`}
                  className="rounded-lg mb-8 m-auto md:block xl:hidden"
                />

                <Image
                  src={item.image.desktop}
                  width={327}
                  height={120}
                  alt={`${item.name}`}
                  className="rounded-lg mb-8 m-auto smd:w-[500px] hidden xl:block"
                />
              </div>

              <h2 className="text-2xl tracking-[1.33px] mb-8">{item.name}</h2>
              <Button variant="primary" urlLink={`/products/${item.slug}`}>
                See Product
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;
