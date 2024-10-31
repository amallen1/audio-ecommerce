import data from "../../data.json";
import ProductPreview from "@/app/components/Products/ProductPreview";

const SpeakersCategoryPage = () => {
  return (
    <div className="flex flex-col gap-y-28">
      {data &&
        data
          .filter((item) => item.category === "speakers")
          .map((product, index) => {
            console.log(index);
            const alternateOrder: boolean = index % 2 !== 0;
            return (
              <ProductPreview
                key={product.id}
                name={product.name}
                categoryImage={product.categoryImage}
                description={product.description}
                isNew={product.new}
                alternateOrder={alternateOrder}
              />
            );
          })}
    </div>
  );
};
export default SpeakersCategoryPage;
