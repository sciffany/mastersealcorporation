import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className='py-36 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100 lg:h-[800px] flex flex-col items-center justify-center'>
      <div className='container mx-auto px-8 lg:px-16'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
            {/* Image Side */}
            <div className='flex items-center justify-center'>
              <Image
                className='rounded-3xl'
                src='/logo.png'
                alt='About Us'
                width={300}
                height={300}
              />
            </div>
            {/* Content Side */}
            <div className='text-center lg:text-left text-black'>
              <h1 className='text-3xl lg:text-3xl font-bold mb-8'>About Us</h1>
              <p className='text-lg leading-relaxed mb-8'>
                <b>Masterseal Corporation</b> is a trusted security seals
                supplier in the Philippines. Helping you protect your asset, we
                supply plastic security seals, plastic seals, metal seals, metal
                security seals, truck seals, meter seals which provide{" "}
                <b>tamper evidence</b>.
                <br />
                <br />
                Although our company has been serving for more than 10 years, we
                have managed to grow our size and currently provide seals to the
                leading manufacturers in the Philippines.
              </p>
              <div className='mt-8'>
                <Link
                  href='/products/all'
                  className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
