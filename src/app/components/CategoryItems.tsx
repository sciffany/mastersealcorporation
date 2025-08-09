"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import seals, { categories } from "@/app/lib/data";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const categoryData = categories.find((c) => c.slug === category);
  const categorySeals =
    category === "all" ? seals : seals.filter((s) => s.category === category);

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <>
      <div className='bg-orange-100'>
        <div className='container mx-auto px-8 lg:px-32 pt-28 pb-10'>
          <nav className='text-sm text-gray-600'>
            {categoryData && (
              <>
                <Link href='/products/all' className='hover:underline'>
                  Products
                </Link>
                <span className='mx-2'>/</span>
              </>
            )}
            <span className='text-gray-800'>{categoryData?.name}</span>
          </nav>
          <h1 className='text-black text-center text-5xl font-semibold my-10'>
            {categoryData?.name || "All Products"}
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
            {categorySeals.map((seal) => (
              <div
                key={seal.slug}
                className='rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow'
              >
                <button
                  type='button'
                  aria-label={`Open image of ${seal.name}`}
                  className='block w-full'
                  onClick={() => seal.image && setLightboxSrc(seal.image)}
                >
                  <div className='relative aspect-square'>
                    {seal.image ? (
                      <Image
                        src={seal.image}
                        alt={seal.name}
                        fill
                        sizes='(min-width: 768px) 33vw, 100vw'
                        className='object-contain'
                        priority={false}
                      />
                    ) : (
                      <div className='flex items-center justify-center h-full'>
                        <p className='text-gray-500'>No image available</p>
                      </div>
                    )}
                    {/* bottom shadow to separate image from content */}
                    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-black/10' />
                  </div>
                </button>
                <div className='p-4 border-t border-gray-200 h-[300px]'>
                  <div className='space-y-2 h-[180px]'>
                    <Link
                      href={`/products/${seal.category}/${seal.slug}`}
                      className='hover:underline'
                    >
                      <h2 className='text-xl text-black font-semibold'>
                        {seal.name}
                      </h2>
                    </Link>
                    <p className='text-md uppercase tracking-wide text-gray-500'>
                      {categories.find((c) => c.slug === seal.category)?.name ||
                        seal.category}
                    </p>
                    {seal.description && (
                      <p
                        className='text-md text-gray-600 mb-4'
                        style={{
                          lineHeight: "1.5",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 5,
                          overflow: "hidden",
                        }}
                      >
                        {seal.description}
                        {seal.moq && (
                          <>
                            <br />
                            <br />
                            <b>MOQ:</b> {seal.moq}
                          </>
                        )}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-wrap gap-4 mt-4'>
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
            ))}
          </div>
        </div>
      </div>
      {lightboxSrc && (
        <div
          className='fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4'
          onClick={(e) => {
            if (e.currentTarget === e.target) setLightboxSrc(null);
          }}
          role='dialog'
          aria-modal='true'
        >
          <div className='relative w-full max-w-5xl h-[80vh]'>
            <button
              type='button'
              aria-label='Close image'
              className='absolute -top-10 right-0 text-white hover:text-gray-300'
              onClick={() => setLightboxSrc(null)}
            >
              ✕
            </button>
            <Image
              src={lightboxSrc}
              alt='Enlarged product image'
              fill
              sizes='100vw'
              className='object-contain'
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
