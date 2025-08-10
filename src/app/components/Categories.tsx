"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import seals, { categories } from "@/app/lib/data";
import Link from "next/link";

export default function Categories() {
  return (
    <>
      {/* Quick Links Section */}
      <section className='pt-28 bg-gray-50'>
        <div className='container mx-auto px-8 lg:px-32 py-12'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-semibold text-gray-900 mb-4'>
              Explore Our Products
            </h1>
            <p className='text-black text-lg'>
              Browse our complete product catalog or contact us for personalized
              recommendations.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <div key={category.slug} className='flex flex-col items-center'>
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className='bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200'
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={300}
                    className='w-full h-[100px] object-cover rounded-lg'
                  />
                  <h3 className='mt-4 text-lg font-semibold text-gray-900 mb-2'>
                    {category.name}
                  </h3>
                  <p className='text-sm text-black'>
                    Browse {category.name.toLowerCase()} products
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
