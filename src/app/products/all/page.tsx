import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import seals, { categories, meta } from "@/app/lib/data";
import CategoryItems from "@/app/components/CategoryItems";
import ContactUs from "@/app/components/ContactUs";
import Categories from "@/app/components/Categories";
export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return [...categories, { slug: "all", name: "All" }].map((c) => ({
    category: c.slug,
  }));
}

type CategoryParams = { params: { category: string } };

export async function generateMetadata({
  params,
}: CategoryParams): Promise<Metadata> {
  const title = "All Products";
  const pageMeta = (meta as Record<string, any>)["/products/all"];
  const description =
    pageMeta?.description ||
    "Browse all security seals, with brochures and descriptions.";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonical = `${base}/products/all`;

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
                name: "All Products",
                item:
                  (process.env.NEXT_PUBLIC_SITE_URL ||
                    "http://localhost:3000") + `/products/all`,
              },
            ],
          }),
        }}
      />
      <Categories />
      <ContactUs />
    </div>
  );
}
