"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <motion.div
      className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row gap-6 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ১ম ব্যানার */}
      <motion.div
        className="relative flex-1 md:flex-[1.5] rounded-xl overflow-hidden min-h-[240px] md:min-h-[480px]"
        style={{ backgroundColor: "#1E8BDA" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src="/assets/image-44.png"
          alt="Banner"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-snug">
            New iPhone 15 Pro Max
          </h1>
          <p className="text-base md:text-lg mb-4 text-white">
            Shop great deals on iPad, iPhone, and MacBook.
          </p>
          <button className="bg-white text-[#1E8BDA] font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 transition-all duration-300 w-fit">
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* ২য় কলাম */}
      <div className="flex flex-col flex-1 gap-6">
        {/* প্রথম ছোট ব্যানার */}
        <motion.div
          className="relative flex-1 rounded-xl overflow-hidden min-h-[160px]"
          style={{ backgroundColor: "#F197CA" }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/assets/image-4.png"
            alt="Banner"
            className="object-cover w-full h-full opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-6">
            <h1 className="text-lg md:text-xl font-bold mb-1 text-white">
              Instant 360 Camera
            </h1>
            <p className="text-sm md:text-base mb-2 text-white">
              Powerful. Lightweight. Stunning display.
            </p>
            <button className="bg-white text-[#F197CA] font-semibold py-1.5 px-3 rounded-md hover:bg-yellow-400 transition-all duration-300 text-sm w-fit">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* দ্বিতীয় ছোট ব্যানার */}
        <motion.div
          className="relative flex-1 rounded-xl overflow-hidden min-h-[160px]"
          style={{ backgroundColor: "#FFD40C" }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/assets/img-1.png"
            alt="Banner"
            className="object-cover w-full h-full opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-6">
            <h1 className="text-lg md:text-xl font-bold mb-1 text-black">
              Big Deal Home Appliance
            </h1>
            <p className="text-sm md:text-base mb-2 text-black">
              Save up to 45% OFF on all home appliances.
            </p>
            <button className="bg-black text-[#FFD40C] font-semibold py-1.5 px-3 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm w-fit">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* ৩য় ব্যানার */}
      <motion.div
        className="relative flex-1 md:flex-[1.5] rounded-xl overflow-hidden min-h-[240px] md:min-h-[480px]"
        style={{ backgroundColor: "#E12E2E" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src="/assets/image-45.png"
          alt="Banner"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white leading-snug">
            Apple Watch Ultra 2
          </h1>
          <p className="text-base md:text-lg mb-4 text-white">
            Adventure-ready with precision GPS.
          </p>
          <button className="text-[#fcf802] font-semibold py-2 px-4 rounded-md hover:text-blue-500 transition-all duration-300 w-fit border border-[#fcf802]">
            Shop Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero2;
