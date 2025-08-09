import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import seals, { categories, meta } from "@/app/lib/data";
import ContactUs from "@/app/components/ContactUs";

export const dynamic = "force-static";
export const dynamicParams = false; // only build known paths

export async function generateStaticParams() {
  return seals.map((s) => ({ product: s.slug, category: s.category }));
}

type ProductParams = { params: { product: string; category: string } };

export async function generateMetadata({
  params,
}: ProductParams): Promise<Metadata> {
  const { product, category } = params;
  const seal = seals.find((s) => s.slug === product && s.category === category);
  if (!seal) return {};

  const categoryDisplayName =
    categories.find((c) => c.slug === seal.category)?.name || seal.category;

  const title = `${seal.name} – ${categoryDisplayName}`;
  const description =
    seal.description || `${seal.name} security seal details and brochure.`;
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonical = `${base}/products/${seal.category}/${seal.slug}`;
  const categoryMeta = (meta as Record<string, any>)[
    `/products/${seal.category}`
  ];

  return {
    title,
    description,
    keywords: categoryMeta?.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: seal.image ? [{ url: seal.image }] : undefined,
    },
  };
}

const ProductPage = ({ params }: ProductParams) => {
  const { product, category } = params;
  const seal = seals.find((s) => s.slug === product && s.category === category);

  if (!seal) {
    notFound();
  }

  // Ensure the URL category matches the product's category
  if (seal.category !== category) {
    notFound();
  }

  const categoryDisplayName =
    categories.find((c) => c.slug === seal.category)?.name || seal.category;

  const similarSeals = seals
    .filter((s) => s.category === seal.category && s.slug !== seal.slug)
    .slice(0, 3);

  return (
    <div>
      <Navigation />
      <section className='bg-gradient-to-br from-orange-200 via-orange-100 to-orange-300'>
        <div className='container mx-auto px-8 lg:px-32 pt-28 pb-16'>
          {/* BreadcrumbList JSON-LD for product page */}
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
                    name: categoryDisplayName,
                    item:
                      (process.env.NEXT_PUBLIC_SITE_URL ||
                        "http://localhost:3000") + `/products/${seal.category}`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: seal.name,
                    item:
                      (process.env.NEXT_PUBLIC_SITE_URL ||
                        "http://localhost:3000") +
                      `/products/${seal.category}/${seal.slug}`,
                  },
                ],
              }),
            }}
          />
          {/* Product JSON-LD */}
          <script
            type='application/ld+json'
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: seal.name,
                image: seal.image ? [seal.image] : undefined,
                description: seal.description,
                brand: { "@type": "Brand", name: "Masterseal Corporation" },
                category: categoryDisplayName,
                offers: {
                  "@type": "Offer",
                  priceCurrency: "PHP",
                  availability: "https://schema.org/InStock",
                  url: `${
                    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
                  }/products/${seal.category}/${seal.slug}`,
                },
              }),
            }}
          />
          <div className='mb-6'>
            <nav className='text-sm text-gray-600'>
              <Link href='/products/all' className='hover:underline'>
                Products
              </Link>
              <span className='mx-2'>/</span>
              <Link
                href={`/products/${seal.category}`}
                className='hover:underline'
              >
                {categoryDisplayName}
              </Link>
              <span className='mx-2'>/</span>
              <span className='text-gray-800'>{seal.name}</span>
            </nav>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-10'>
            <div className='bg-white rounded-lg border border-gray-200 shadow-sm p-4'>
              <div className='relative aspect-square'>
                {seal.image ? (
                  <Image
                    src={seal.image}
                    alt={seal.name}
                    fill
                    sizes='(min-width: 1024px) 50vw, 100vw'
                    className='object-contain'
                    priority={false}
                  />
                ) : (
                  <div className='flex items-center justify-center h-full'>
                    <p className='text-gray-500'>No image available</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h1 className='text-4xl font-semibold text-gray-900 mb-3'>
                {seal.name}
              </h1>
              <div className='mb-6 flex flex-wrap items-center gap-3'>
                <span className='inline-flex items-center rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-medium uppercase tracking-wide'>
                  {categoryDisplayName}
                </span>
                {seal.moq && (
                  <span className='inline-flex items-center rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium'>
                    MOQ: {seal.moq}
                  </span>
                )}
              </div>

              {seal.description && (
                <p className='text-gray-700 leading-relaxed mb-8'>
                  {seal.description}
                </p>
              )}

              <div className='flex flex-wrap gap-4'>
                <a
                  href={seal.pdf}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  View Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {similarSeals.length > 0 && (
        <section className='bg-white'>
          <div className='container mx-auto px-8 lg:px-32 py-12'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              Similar products
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {similarSeals.map((s) => (
                <div
                  key={s.slug}
                  className='rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow'
                >
                  <Link
                    href={`/products/${s.category}/${s.slug}`}
                    className='block'
                  >
                    <div className='relative aspect-square'>
                      {s.image ? (
                        <Image
                          src={s.image}
                          alt={s.name}
                          fill
                          sizes='(min-width: 768px) 33vw, 100vw'
                          className='object-contain'
                        />
                      ) : (
                        <div className='flex items-center justify-center h-full'>
                          <p className='text-gray-500'>No image available</p>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className='p-4 border-t border-gray-200'>
                    <Link
                      href={`/products/${s.category}/${s.slug}`}
                      className='hover:underline'
                    >
                      <h3 className='text-lg text-black font-semibold'>
                        {s.name}
                      </h3>
                    </Link>
                    <p className='text-sm uppercase tracking-wide text-gray-500 mt-1'>
                      {categories.find((c) => c.slug === s.category)?.name ||
                        s.category}
                    </p>
                    {s.description && (
                      <p
                        className='text-sm text-gray-600 mt-3'
                        style={{
                          lineHeight: "1.5",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                          overflow: "hidden",
                        }}
                      >
                        {s.description}
                      </p>
                    )}
                    <div className='flex flex-wrap gap-3 mt-4'>
                      <a
                        href={s.pdf}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm'
                      >
                        View Brochure
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-8'>
              <Link
                href={`/products/${seal.category}`}
                className='text-blue-600 hover:underline'
              >
                View all {categoryDisplayName}
              </Link>
            </div>
          </div>
        </section>
      )}
      <ContactUs />
    </div>
  );
};

export default ProductPage;
