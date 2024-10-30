import ProductCategory from "./ProductCategory";
const CategoryLinks = () => {
  return (
    <div className="flex flex-col gap-y-20 md:flex-row md:gap-x-[10px] xl:gap-x-[30px]">
      <ProductCategory category="headphones" />
      <ProductCategory category="speakers" />
      <ProductCategory category="earphones" />
    </div>
  );
};
export default CategoryLinks;
