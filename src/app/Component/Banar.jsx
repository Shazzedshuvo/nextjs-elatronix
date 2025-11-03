import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="my-6">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#944CF5] text-white py-4 px-4 md:px-8 rounded-lg overflow-hidden">
        
        {/* ---------- Left Side Image ---------- */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img
            src="/image-44 (1).png"
            alt="Banner"
            className="rounded-lg drop-shadow-lg h-36 md:h-48 w-full object-cover object-top"
          />
        </div>

        {/* ---------- Right Side Text ---------- */}
        <div className="w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-[#FFD40C]">
            30% Off For New Customers
          </h2>

          <p className="text-xs sm:text-sm text-gray-100 max-w-sm mx-auto md:mx-0">
            Malesuada dis pellentesque etiam nunc accumsan tempus cursus aut lectus
            aliquid optio magnis veritatis consectetur.
          </p>

          {/* ---------- Buttons ---------- */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <Link
              href="/products"
              className="bg-[#7B2FF7] text-white font-semibold px-4 py-1 rounded-md shadow-md transition-all duration-300 hover:bg-white hover:text-[#7B2FF7] hover:shadow-lg text-xs"
            >
              Explore Products
            </Link>

            <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-md shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 text-xs">
              Use Code : SALE25OFF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
