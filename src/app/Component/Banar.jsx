"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // ✅ এই লাইনটি দরকার

const Banner = () => {
  return (
    <motion.div 
      className="my-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#944CF5] to-[#7B2FF7] text-white py-6 px-4 md:px-8 rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img
            src="/image-44 (1).png"
            alt="Banner"
            className="rounded-xl drop-shadow-2xl h-36 md:h-48 w-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-yellow-400">
            30% Off For New Customers
          </h2>

          <p className="text-xs sm:text-sm text-gray-100 max-w-sm mx-auto md:mx-0">
            Malesuada dis pellentesque etiam nunc accumsan tempus cursus aut lectus
            aliquid optio magnis veritatis consectetur.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
            <Link
              href="/products"
              className="bg-white text-[#7B2FF7] font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-[#7B2FF7] hover:text-white hover:shadow-xl text-xs sm:text-sm"
            >
              Explore Products
            </Link>

            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 text-xs sm:text-sm">
              Use Code : SALE25OFF
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
