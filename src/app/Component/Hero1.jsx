"use client";

import React from "react";
import Link from "next/link";
import { FaGift, FaTruck } from "react-icons/fa";

const Hero1 = () => {
  return (
    <div className="pt-7">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-between bg-[#944CF5] text-white py-16 px-6 md:px-16 rounded-lg overflow-hidden">

        {/* ---------- Left Side Image ---------- */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/benar1.png"
            alt="Banner"
            className="w-full max-w-[700px]  h-auto rounded-lg drop-shadow-lg"
          />
        </div>

        {/* ---------- Right Side Text ---------- */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Flat 25% Off <br /> Electronic Order
          </h2>

          {/* 🔹 Offer Info Bar */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium mt-2">

            {/* 🎁 Win Big Offer */}
            <Link
              href="/"
              className="flex items-center gap-3 bg-white/10 text-white p-3 rounded shadow hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-white text-[#944CF5] text-2xl hover:bg-[#7B2FF7] hover:text-white transition-all duration-300">
                <FaGift />
              </span>
              <div className="flex flex-col text-left">
                <span className="font-semibold hover:text-gray-200">Win Big Offer</span>
                <span className="text-sm text-gray-200 hover:text-gray-100">Every Day</span>
              </div>
            </Link>

            {/* 🚚 Free Delivery */}
            <Link
              href="/delivery"
              className="flex items-center gap-3 bg-white/10 text-white p-3 rounded shadow hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-white text-[#944CF5] text-2xl hover:bg-[#7B2FF7] hover:text-white transition-all duration-300">
                <FaTruck />
              </span>
              <div className="flex flex-col text-left">
                <span className="font-semibold hover:text-gray-200">Free Delivery</span>
                <span className="text-sm text-gray-200 hover:text-gray-100">From $50</span>
              </div>
            </Link>
          </div>

          {/* ---------- Description ---------- */}
          <p className="text-sm md:text-base text-gray-100 max-w-md mx-auto md:mx-0">
            Malesuada dis pellentesque etiam nunc accumsan tempus cursus aut lectus
            aliquid optio magnis veritatis consectetur.
          </p>

          {/* ---------- Buttons ---------- */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Link
              href="/shop"
              className="bg-[#7B2FF7] text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-white hover:text-[#7B2FF7] hover:shadow-lg"
            >
              Explore Products
            </Link>

            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105">
              Use Code : SALE25OFF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
