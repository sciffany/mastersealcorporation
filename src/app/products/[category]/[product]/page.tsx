import Navigation from "@/app/components/Navigation";
import seals from "@/app/lib/data";

export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return seals.map((s) => ({ product: s.slug }));
}

const ProductPage = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default ProductPage;
