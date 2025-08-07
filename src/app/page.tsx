"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "./components/Carousel";
import Delivery from "./components/Delivery";
import FreeDelivery from "./components/FreeDelivery";
import SealGallery from "./components/SealGallery";
import ContactUs from "./components/ContactUs";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation headings array
  const navigationItems = [
    { id: 1, label: "Home", href: "#" },
    { id: 2, label: "About Us", href: "/about-us" },
    { id: 3, label: "Products", href: "/products" },
    { id: 4, label: "Blog", href: "/blog" },
  ];
  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='min-h-screen'>
      {/* Header Navigation */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/20'>
        <nav className='container mx-auto px-8 lg:px-16 py-4'>
          <div className='flex items-center justify-between'>
            <div className='text-white font-bold text-xl'>
              Masterseal Corporation
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className='text-white hover:text-pink-200 transition-colors duration-300'
                >
                  {item.label}
                </a>
              ))}
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
              <div className='px-8 py-4 space-y-4'>
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className='block text-black hover:text-pink-200 transition-colors duration-300 py-2'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <Carousel />

      <Delivery />

      <SealGallery />
      <FreeDelivery />

      <ContactUs />
    </div>
  );
}
