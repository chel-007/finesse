function Hero() {
    return (
      <div className="relative bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-5xl font-light text-primary-black tracking-wide">discover your style with <span className="bg-gray-200 text-gray-500 px-2 py-1">finesse</span></h1>
          <p className="mt-4 text-lg italic subpixel-antialiased underline decoration-black-600 text-primary-darkGray">curated fashion for the modern, elegant you.</p>
          {/* <a
            href="#"
            className="bg-red-500 mt-6 inline-block bg-primary-black text-primary-white px-8 py-3 rounded-full hover:bg-primary-darkGray transition"
          >
            Shop Now
          </a> */}

        <div className="relative h-[80vh] w-full pt-10">
        {/* Full-width image */}
        <img
          src="https://cdn.mos.cms.futurecdn.net/8VzJ45AZU8f6vD6zkkybfB-1280-80.jpg.webp"
          alt="Finesse Hero"
          className="w-full h-full object-cover opacity-90"
        />
        </div>
        </div>
      </div>
    );
  }
  
  export default Hero;