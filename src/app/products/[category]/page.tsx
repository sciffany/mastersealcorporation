import Image from "next/image";
import Navigation from "../../components/Navigation";
import seals, { categories } from "@/app/lib/data";
import CategoryItems from "@/app/components/CategoryItems";
export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return [...categories, { slug: "all", name: "All" }].map((c) => ({
    category: c.slug,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  return (
    <div>
      <Navigation />
      <CategoryItems params={{ category }} />
    </div>
  );
}
