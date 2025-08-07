"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation headings array
  const navigationItems = [
    { id: 1, label: "Home", href: "#" },
    { id: 2, label: "About Us", href: "/about-us" },
    { id: 3, label: "Products", href: "/products" },
    { id: 4, label: "Blog", href: "/blog" },
  ];

  const slides = [
    {
      id: 1,
      title: "Seals to detect tampering",
      description:
        "We provide security seals, plastic seals, metal seals, truck seals, tanker seals, container van seals, meter seals to detect tampering and pilferage.",
      cta: "Browse Products",
      imagePlaceholder: "Image 1",
      theme: "pink",
      textColor: "gray-900",
      image: "/seals.png",
      imageWidth: 500,
      imageHeight: 500,
    },
    {
      id: 2,
      title: "Secure delivery trucks and container vans",
      description:
        "Protecting your valuable cargo with industry-leading security solutions.",
      cta: "Learn More",
      imagePlaceholder: "Image 2",
      theme: "red",
      textColor: "white",
      image: "/truck.png",
      imageWidth: 1000,
      imageHeight: 1000,
    },
  ];

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "pink":
        return "bg-gradient-to-br from-red-200 via-red-200 to-red-300";
      case "red":
        return "bg-gradient-to-br from-red-900 via-red-800 to-rose-900";
      default:
        return "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900";
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

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

      {/* Carousel Section */}
      <main
        className={`relative h-screen w-full overflow-hidden ${getThemeClasses(
          slides[currentSlide].theme
        )} transition-all duration-500`}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group'
        >
          <svg
            className='w-6 h-6 text-white group-hover:scale-110 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group'
        >
          <svg
            className='w-6 h-6 text-white group-hover:scale-110 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        {/* Slides Container */}
        <div className='relative h-full w-full'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {/* Desktop Layout: Two equal halves */}
              <div className='hidden lg:flex h-full'>
                {/* First Half: Text with padding */}
                <div className='w-1/2 flex items-center justify-center p-16 pl-48'>
                  <div className={`text-${slide.textColor} space-y-8 max-w-lg`}>
                    <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
                      {slide.title}
                    </h1>
                    <p
                      className={`text-xl lg:text-2xl text-${slide.textColor} leading-relaxed`}
                    >
                      {slide.description}
                    </p>
                    <button className='bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                      {slide.cta}
                    </button>
                  </div>
                </div>

                {/* Second Half: Image without padding */}

                <div className='relative w-1/2 flex items-center justify-center'>
                  <div className='absolute bottom-0 left-0'>
                    <Image
                      src={slide.image}
                      alt={slide.imagePlaceholder}
                      width={slide.imageWidth}
                      height={slide.imageHeight}
                      className='max-w-full h-auto object-cover object-left'
                      style={
                        slide.id === 2
                          ? {
                              clipPath:
                                "polygon(30% 0, 100% 0, 100% 100%, 30% 100%)",
                              transform: "scale(1.4)",
                              transformOrigin: "right center",
                            }
                          : {}
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout: Stacked (text above image) */}
              <div className='lg:hidden flex flex-col h-full'>
                {/* Text Section */}
                <div className='flex-1 flex items-center justify-center p-8 pt-24'>
                  <div
                    className={`text-${slide.textColor} space-y-6 text-center`}
                  >
                    <h1 className='text-4xl font-bold leading-tight'>
                      {slide.title}
                    </h1>
                    <p
                      className={`text-lg text-${slide.textColor} leading-relaxed`}
                    >
                      {slide.description}
                    </p>
                    <button className='bg-white text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                      {slide.cta}
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className='flex-1 flex items-center justify-center'>
                  <Image
                    src={slide.image}
                    alt={slide.imagePlaceholder}
                    width={slide.imageWidth / 2}
                    height={slide.imageHeight / 2}
                    className='max-w-full h-auto'
                    style={
                      slide.id === 2
                        ? {
                            clipPath:
                              "polygon(30% 0, 100% 0, 100% 100%, 30% 100%)",
                            transform: "scale(1.2)",
                            transformOrigin: "right center",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className='absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
        {/* Progress Bar */}
        <div className='absolute bottom-0 left-0 w-full h-1 bg-white/20'>
          <div
            className='h-full bg-white transition-all duration-500 ease-linear'
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </main>

      {/* Hassle-free Delivery Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='container mx-auto px-8 lg:px-16'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
              {/* Image Side */}
              <div className='flex items-center justify-center'>
                <Image
                  className='rounded-3xl'
                  src='/truck2.png'
                  alt='Delivery'
                  width={1000}
                  height={1000}
                />
              </div>
              {/* Content Side */}
              <div className='text-center lg:text-left'>
                <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
                  Hassle-free delivery
                </h2>
                <p className='text-lg lg:text-xl text-gray-700 leading-relaxed mb-8'>
                  Worry no more about stolen goods and missing inventory items.
                  With Masterseal Corporation's plastic and metal seals, you can
                  deliver your products reliably!
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                  <button className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                    Get Started
                  </button>
                  <button className='border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seals Gallery Section */}
      <section className='py-20 bg-orange-100'>
        <div className='container mx-auto px-8 lg:px-16'>
          <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
              Over 20 types of seals to suit your needs!
            </h2>
            <p className='text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto'>
              From plastic security seals to heavy-duty metal seals, we have the
              perfect solution for every application.
            </p>

            {/* Seal Images Gallery */}
            <div className='flex flex-wrap justify-center gap-6 lg:gap-8'>
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className='group'>
                  <div className='w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'>
                    <div className='text-center'>
                      <svg
                        className='w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-2 text-gray-500 group-hover:text-gray-700 transition-colors'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <p className='text-xs lg:text-sm font-medium text-gray-600 group-hover:text-gray-800'>
                        Seal {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-12'>
              <button className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                View All Seals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions Section */}
      <section className='py-20 bg-gradient-to-br from-red-50 to-red-100'>
        <div className='container mx-auto px-8 lg:px-16'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
              {/* Content Side */}
              <div className='text-center lg:text-left'>
                <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
                  Free Delivery
                </h2>
                <p className='text-lg lg:text-xl text-gray-700 leading-relaxed mb-8'>
                  <b>Delivery is free within Metro Manila. </b>
                  This service is extended for our customers' convenience. ​ We
                  ensure all details are simple, seamless and handled in a
                  timely manner. Whenever you work with Masterseal Corporation,
                  you can trust that you're in great hands. ​ Outside Metro
                  Manila, please coordinate with our Sales.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                  <button className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                    Explore Solutions
                  </button>
                </div>
              </div>
              {/* Image Side */}
              <div className='flex items-center justify-center'>
                <Image
                  className='rounded-3xl'
                  src='/boxes.png'
                  alt='Delivery'
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className='py-20 bg-gradient-to-br from-gray-900 to-black text-white'>
        <div className='container mx-auto px-8 lg:px-16'>
          <div className='max-w-6xl mx-auto'>
            {/* Header */}
            <div className='text-center mb-16'>
              <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                Contact Us
              </h2>
              <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
                Get in touch with our team for any inquiries about our security
                seals and solutions.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
              {/* Contact Information */}
              <div className='space-y-8'>
                <div>
                  <h3 className='text-2xl font-bold mb-6 text-white'>
                    Get In Touch
                  </h3>
                  <p className='text-gray-300 text-lg leading-relaxed mb-8'>
                    Ready to secure your assets? Contact our expert team for
                    personalized solutions and support.
                  </p>
                </div>

                {/* Contact Details */}
                <div className='space-y-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-1'>
                        Phone
                      </h4>
                      <p className='text-gray-300'>
                        Office numbers:
                        <br />
                        T: 02-8255 9085
                        <br />
                        T: 02-8425 0644
                        <br />
                        M: 0960 231 6000
                        <br />
                        T: 02-8661 6753 (temporarily unavailable - pldt repair)
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-1'>
                        Email
                      </h4>
                      <p className='text-gray-300'>
                        masterseal.sales@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-1'>
                        Address
                      </h4>
                      <p className='text-gray-300'>
                        60 Dona Aurora St, Parang, Marikina, Manila, 1809
                        Philippines
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-1'>
                        Business Hours
                      </h4>
                      <p className='text-gray-300'>
                        Mon - Fri: 8:30 am - 5:00 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Send us a Message
                </h3>
                <form className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='firstName'
                        className='block text-sm font-medium text-gray-300 mb-2'
                      >
                        First Name
                      </label>
                      <input
                        type='text'
                        id='firstName'
                        className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        placeholder='Enter your first name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='lastName'
                        className='block text-sm font-medium text-gray-300 mb-2'
                      >
                        Last Name
                      </label>
                      <input
                        type='text'
                        id='lastName'
                        className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        placeholder='Enter your last name'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='Enter your email address'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='Enter your phone number'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Subject
                    </label>
                    <select
                      id='subject'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                    >
                      <option value='' className='text-gray-900'>
                        Select a subject
                      </option>
                      <option value='inquiry' className='text-gray-900'>
                        General Inquiry
                      </option>
                      <option value='quote' className='text-gray-900'>
                        Request Quote
                      </option>
                      <option value='support' className='text-gray-900'>
                        Technical Support
                      </option>
                      <option value='order' className='text-gray-900'>
                        Order Status
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      rows={4}
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none'
                      placeholder='Tell us about your inquiry...'
                    ></textarea>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
