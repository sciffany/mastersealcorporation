"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [
    {
      id: 1,
      title: "Seals to detect tampering",
      description:
        "We provide security seals, plastic seals, metal seals, truck seals, tanker seals, container van seals, meter seals to detect tampering and pilferage.",
      cta: "Browse Products",
      href: "/products/all",
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
      href: "/about-us",
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
        return "bg-gradient-to-br from-red-200 via-red-100 to-red-300";
      case "red":
        return "bg-gradient-to-br from-red-900 via-red-700 to-rose-900";
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

  return (
    <main
      className={`relative h-[700px] w-full overflow-hidden ${getThemeClasses(
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
                  <Link
                    href={slide.href}
                    className='inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'
                  >
                    {slide.cta}
                  </Link>
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
                    priority={index === 0}
                    sizes='(min-width: 1024px) 50vw, 100vw'
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
                  <Link
                    href={slide.href}
                    className='inline-block bg-white text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className='flex-1 flex items-center justify-center'>
                <Image
                  src={slide.image}
                  alt={slide.imagePlaceholder}
                  width={slide.imageWidth / 2}
                  height={slide.imageHeight / 2}
                  priority={index === 0}
                  sizes='100vw'
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
  );
}
