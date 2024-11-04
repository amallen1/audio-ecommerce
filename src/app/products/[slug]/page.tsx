import ProductDetail from "@/app/components/Products/ProductDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  
  return (
    <div>
      <ProductDetail slug={slug}/>
    </div>
  );
}
