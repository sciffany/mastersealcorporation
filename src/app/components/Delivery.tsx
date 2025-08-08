import Image from "next/image";

export default function Delivery() {
  return (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
