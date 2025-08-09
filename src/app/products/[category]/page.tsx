import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import seals, { categories, meta } from "@/app/lib/data";
import CategoryItems from "@/app/components/CategoryItems";
import ContactUs from "@/app/components/ContactUs";
export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return categories.map((c) => ({
    category: c.slug,
  }));
}

type CategoryParams = { params: { category: string } };

export async function generateMetadata({
  params,
}: CategoryParams): Promise<Metadata> {
  const { category } = params;
  const categoryData = categories.find((c) => c.slug === category);
  const title = categoryData ? `${categoryData.name} Seals` : "All Products";
  const metaKey = `/products/${category}`;
  const pageMeta = (meta as Record<string, any>)[metaKey];
  const description = pageMeta?.description
    ? pageMeta.description
    : categoryData
    ? `${categoryData.name} security seals. Browse brochures, descriptions, and minimum order quantities.`
    : "Browse all security seals, with brochures and descriptions.";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonical = `${base}/products/${category}`;

  return {
    title,
    description,
    keywords: pageMeta?.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default function CategoryPage({ params }: CategoryParams) {
  const { category } = params;

  return (
    <div>
      <Navigation />
      {/* BreadcrumbList JSON-LD for category page */}
      <script
        type='application/ld+json'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Products",
                item:
                  (process.env.NEXT_PUBLIC_SITE_URL ||
                    "http://localhost:3000") + "/products/all",
              },
              {
                "@type": "ListItem",
                position: 2,
                name:
                  categories.find((c) => c.slug === category)?.name ||
                  (category === "all" ? "All Products" : category),
                item:
                  (process.env.NEXT_PUBLIC_SITE_URL ||
                    "http://localhost:3000") + `/products/${category}`,
              },
            ],
          }),
        }}
      />
      <CategoryItems params={{ category }} />
      <ContactUs />
    </div>
  );
}
