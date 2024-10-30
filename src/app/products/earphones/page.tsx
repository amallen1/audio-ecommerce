"use client";
import { useState, useEffect } from "react";
import data from "../../data.json";
import ProductPreview from "@/app/components/Products/ProductPreview";

const EarphonesCategoryPage = () => {
  const [earphoneData, setearphoneData] = useState(data);

  useEffect(() => {
    setearphoneData(
      earphoneData.filter((item) => item.category === "earphones").reverse()
    );
  }, []);

  return (
    <div className="flex flex-col gap-y-28">
      {earphoneData &&
        earphoneData.map((product, index) => {
          console.log(index);
          const isOddIndex: boolean = index % 2 !== 0;
          return (
            <ProductPreview
              key={product.id}
              name={product.name}
              categoryImage={product.categoryImage}
              description={product.description}
              isNew={product.new}
              isOddIndex={isOddIndex}
            />
          );
        })}
    </div>
  );
};
export default EarphonesCategoryPage;
