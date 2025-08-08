import Image from "next/image";
import seals from "../lib/data";
import Link from "next/link";

export default function SealGallery() {
  return (
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
            {seals
              .filter((seal) => Boolean(seal.image))
              .map((seal, index) => (
                <div key={index} className='group'>
                  <Link href={`/products/${seal.category}/${seal.slug}`}>
                    <Image
                      className='w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'
                      src={seal.image || ""}
                      alt={seal.name}
                      width={100}
                      height={100}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
              ))}
          </div>

          <div className='mt-12'>
            <Link
              href='/products/all'
              className='bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              View All Seals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
