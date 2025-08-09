import Image from "next/image";
import Link from "next/link";

export default function FreeDelivery() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-8 lg:px-16'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            {/* Content Side */}
            <div className='text-center lg:text-left'>
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
                Free Delivery
              </h2>
              <p className='text-lg lg:text-xl text-gray-700 leading-relaxed mb-8'>
                <b>Delivery is free within Metro Manila.</b>
                <br />
                <br />
                This service is extended for our customers' convenience. ​ We
                ensure all details are simple, seamless and handled in a timely
                manner. Whenever you work with Masterseal Corporation, you can
                trust that you're in great hands.
                <br />
                <br />
                Outside Metro Manila, please coordinate with our Sales.
              </p>
              <Link
                href='/products/all'
                className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                Explore Products
              </Link>
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
  );
}
