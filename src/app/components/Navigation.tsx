"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/app/lib/data";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsSubmenuOpen, setIsProductsSubmenuOpen] = useState(false);

  // Navigation headings array
  const navigationItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },
    { id: 3, label: "Products", href: "/products/all" },
    { id: 4, label: "Blog", href: "/blog" },
  ];
  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/20'>
      <nav className='container mx-auto px-8 lg:px-16 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <div className='flex items-center gap-2 bg-white rounded-full p-2'>
              <Image
                src='/logo.avif'
                alt='Masterseal Corporation'
                width={30}
                height={30}
                style={{
                  filter:
                    "grayscale(100%) sepia(100%) hue-rotate(-50deg) saturate(400%) brightness(60%)",
                }}
              />
              <div className='text-black font-bold text-md lg:text-xl'>
                Masterseal Corporation
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8 items-center'>
            {navigationItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <div key={item.id} className='relative group'>
                    <Link
                      href={item.href}
                      className='text-white hover:text-pink-200 transition-colors duration-300'
                    >
                      {item.label}
                    </Link>
                    <div className='hidden group-hover:block absolute left-0 top-full pt-2 z-40'>
                      <div className='min-w-[220px] rounded-md bg-white shadow-lg border border-gray-200 py-2'>
                        {categories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/products/${category.slug}`}
                            className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100'
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className='text-white hover:text-pink-200 transition-colors duration-300'
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-white p-2'
              aria-label='Toggle mobile menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg'>
            <div className='px-8 py-4 space-y-2'>
              {navigationItems.map((item) => {
                if (item.label === "Products") {
                  return (
                    <div key={item.id} className='w-full'>
                      <button
                        type='button'
                        className='w-full text-left text-black transition-colors duration-300 py-2 flex items-center justify-between focus:text-black active:text-black'
                        onClick={() => setIsProductsSubmenuOpen((v) => !v)}
                        aria-expanded={isProductsSubmenuOpen}
                        aria-controls='mobile-products-submenu'
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isProductsSubmenuOpen ? "rotate-180" : "rotate-0"
                          }`}
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                      {isProductsSubmenuOpen && (
                        <div
                          id='mobile-products-submenu'
                          className='pl-4 pb-2 space-y-1'
                        >
                          {[...categories].map((category) => (
                            <Link
                              key={category.slug}
                              href={`/products/${category.slug}`}
                              className='block text-md text-black hover:text-pink-200 py-1'
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className='block text-black hover:text-pink-200 transition-colors duration-300 py-2'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
