import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='container mx-auto px-8 lg:px-16 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 bg-white rounded-full p-2 w-fit'>
              <Image
                src='/logo.avif'
                alt='Masterseal Corporation'
                width={24}
                height={24}
                style={{
                  filter:
                    "grayscale(100%) sepia(100%) hue-rotate(-50deg) saturate(400%) brightness(60%)",
                }}
              />
              <div className='text-black font-bold text-sm'>
                Masterseal Corporation
              </div>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Leading provider of security seals for trucks, containers, meters,
              and more in the Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/products/all'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/brochures'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  Brochures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Contact Info</h3>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <svg
                  className='w-4 h-4 text-red-500 mt-1 flex-shrink-0'
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
                <address className='text-gray-300 text-sm not-italic'>
                  60 Dona Aurora St, Parang
                  <br />
                  Marikina, Manila 1809
                  <br />
                  Philippines
                </address>
              </div>
              <div className='flex items-center space-x-3'>
                <svg
                  className='w-4 h-4 text-red-500 flex-shrink-0'
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
                <div className='text-gray-300 text-sm'>
                  <div>T: 02-8255 9085</div>
                  <div>M: 0960 231 6000</div>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <svg
                  className='w-4 h-4 text-red-500 flex-shrink-0'
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
                <a
                  href='mailto:masterseal.sales@gmail.com'
                  className='text-gray-300 hover:text-white transition-colors text-sm'
                >
                  masterseal.sales@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Business Hours</h3>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <svg
                  className='w-4 h-4 text-red-500 flex-shrink-0'
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
                <div className='text-gray-300 text-sm'>
                  <div>Monday - Friday</div>
                  <div>8:30 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Masterseal Corporation. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
