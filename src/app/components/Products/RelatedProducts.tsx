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
    <div>
      <h2 className="uppercase text-black">You may also like</h2>

      <div>
        {others.map((item) => {
          return (
            <div>
              <Image
                src={item.image.mobile}
                width={327}
                height={120}
                alt={`${item.name}`}
              />
              <h2>{item.name}</h2>
              <Button variant="primary" urlLink={`/products/${item.slug}`}>See Product</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;
