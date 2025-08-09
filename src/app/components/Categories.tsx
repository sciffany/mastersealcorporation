"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import seals, { categories } from "@/app/lib/data";
import Link from "next/link";

export default function Categories() {
  const categoryData = categories;

  return (
    <>
      <div className='bg-orange-100 pb-28'>
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
            <span className='text-gray-800 mt-2'>Our Product Categories</span>
          </nav>
          <h1 className='text-black text-center text-5xl font-semibold my-10'>
            Our Product Categories
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-14 gap-6'>
            {categoryData.map((category) => (
              <Link href={`/products/${category.slug}`} key={category.slug}>
                <div className='rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-row items-center gap-4'>
                  <Image
                    src={category.image || ""}
                    alt={category.name}
                    width={100}
                    height={100}
                    className='object-contain'
                  />
                  <div>
                    <h2 className='lg:text-lg text-md font-semibold text-black'>
                      {category.name} Category
                    </h2>
                    <p className='lg:text-sm text-xs text-gray-600'>
                      {seals.filter((s) => s.category === category.slug).length}{" "}
                      products
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
