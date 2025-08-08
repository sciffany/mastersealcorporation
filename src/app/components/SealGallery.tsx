export default function SealGallery() {
  const images = [
    "/images/20200725_223135_edited_edited.jpg",
    "/images/Bolt Seal wd plastic.jpg",
    "/images/Cable Tie group.jpg",
    "/images/Einlock3.jpg",
    "/images/Mini Jawlock asstd color.jpg",
    "/images/Screen Shot 2019-01-22 at 11.29.56 PM.png",
    "/images/TwinLock Pastel shades.jpg",
  ];

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
            {Array.from({ length: 7 }, (_, index) => (
              <div key={index} className='group'>
                <img
                  className='w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'
                  src={images[index]}
                  alt={`Seal ${index + 1}`}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
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
  );
}
