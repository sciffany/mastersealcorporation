import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import seals, { categories } from "@/app/lib/data";
import ContactUs from "@/app/components/ContactUs";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Product Brochures – Masterseal Corporation",
  description:
    "Download product brochures for all Masterseal Corporation security seals. Browse our complete catalog of fixed-length, variable-length, barrier seals, and special-purpose security solutions.",
  keywords: [
    "security seal brochures",
    "product catalogs",
    "Masterseal Corporation",
    "plastic security seals",
    "metal seals",
    "truck seals",
    "container seals",
    "tamper-evident seals",
  ],
  alternates: {
    canonical: `${
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }/brochures`,
  },
  openGraph: {
    title: "Product Brochures – Masterseal Corporation",
    description:
      "Download product brochures for all Masterseal Corporation security seals.",
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }/brochures`,
  },
};

const BrochuresPage = () => {
  // Group seals by category
  const sealsByCategory = categories.map((category) => ({
    ...category,
    seals: seals.filter((seal) => seal.category === category.slug),
  }));

  return (
    <div>
      <Navigation />
      <section className='bg-gradient-to-br from-orange-200 via-orange-100 to-orange-300'>
        <div className='container mx-auto px-8 lg:px-32 pt-28 pb-16'>
          {/* BreadcrumbList JSON-LD */}
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
                    name: "Home",
                    item:
                      process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Brochures",
                    item: `${
                      process.env.NEXT_PUBLIC_SITE_URL ||
                      "http://localhost:3000"
                    }/brochures`,
                  },
                ],
              }),
            }}
          />

          <div className='mb-6'>
            <nav className='text-sm text-gray-600'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
              <span className='mx-2'>/</span>
              <span className='text-gray-800'>Brochures</span>
            </nav>
          </div>

          <div className='text-center mb-12'>
            <h1 className='text-4xl font-semibold text-gray-900 mb-4'>
              Product Brochures
            </h1>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto'>
              Download detailed product brochures for all our security seal
              solutions. Browse our complete catalog organized by category to
              find the perfect security solution for your needs.
            </p>
          </div>

          {/* Category Navigation */}
          <div className='mb-8'>
            <div className='flex flex-wrap justify-center gap-4'>
              {categories.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className='inline-flex items-center rounded-full bg-white text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200'
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochures by Category */}
      {sealsByCategory.map((category) => (
        <section key={category.slug} id={category.slug} className='bg-white'>
          <div className='container mx-auto px-8 lg:px-32 py-12'>
            <div className='mb-8'>
              <h2 className='text-3xl font-semibold text-gray-900 mb-2'>
                {category.name}
              </h2>
              <div className='w-20 h-1 bg-orange-500'></div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
              {category.seals.map((seal) => (
                <a
                  key={`${seal.category}-${seal.slug}`}
                  href={seal.pdf}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-white'
                >
                  <div className='w-16 h-16 mb-4 text-red-500 group-hover:text-red-600 transition-colors'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='w-full h-full'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <h3 className='text-sm font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors leading-tight'>
                    {seal.name}
                  </h3>
                </a>
              ))}
            </div>

            {category.seals.length === 0 && (
              <div className='text-center py-12'>
                <p className='text-gray-500'>
                  No brochures available for this category.
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      <ContactUs />
    </div>
  );
};

export default BrochuresPage;
