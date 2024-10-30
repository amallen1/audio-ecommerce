"use client";
import { useState, useEffect } from "react";
import data from "../../data.json";
import ProductPreview from "@/app/components/Products/ProductPreview";

const HeadphonesCategoryPage = () => {
  const [headphoneData, setHeadphoneData] = useState(data);

  useEffect(() => {
    setHeadphoneData(
      headphoneData.filter((item) => item.category === "headphones").reverse()
    );
  }, []);

  return (
    <div className="flex flex-col gap-y-28">
      {headphoneData &&
        headphoneData.map((product, index) => {
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
export default HeadphonesCategoryPage;
