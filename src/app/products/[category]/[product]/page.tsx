import Navigation from "@/app/components/Navigation";
import seals from "@/app/lib/data";

export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return seals.map((s) => ({ product: s.slug, category: s.category }));
}

const ProductPage = ({
  params,
}: {
  params: { product: string; category: string };
}) => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default ProductPage;
