"use client";

import React from "react";
import Link from "next/link";
import { FaGift, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero1 = () => {
  return (
    <section className="pt-10 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-[#7B2FF7] to-[#944CF5] text-white py-16 px-6 md:px-16 rounded-2xl shadow-lg overflow-hidden relative">
        
        {/* 🔹 Background Glow Effect */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-10 pointer-events-none"></div>

        {/* ---------- Left Side Text ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
            Flat <span className="text-yellow-300">25% Off</span> <br /> On All Electronic Orders ⚡
          </h2>

          {/* Offer Info Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            {/* 🎁 Win Big Offer */}
            <Link
              href="/"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-white text-[#944CF5] text-2xl hover:bg-[#7B2FF7] hover:text-white transition-all duration-300">
                <FaGift />
              </span>
              <div className="flex flex-col text-left">
                <span className="font-semibold hover:text-gray-200">
                  Win Big Offer
                </span>
                <span className="text-sm text-gray-200 hover:text-gray-100">
                  Every Day
                </span>
              </div>
            </Link>

            {/* 🚚 Free Delivery */}
            <Link
              href="/delivery"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-white text-[#944CF5] text-2xl hover:bg-[#7B2FF7] hover:text-white transition-all duration-300">
                <FaTruck />
              </span>
              <div className="flex flex-col text-left">
                <span className="font-semibold hover:text-gray-200">
                  Free Delivery
                </span>
                <span className="text-sm text-gray-200 hover:text-gray-100">
                  From $50
                </span>
              </div>
            </Link>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-100 max-w-md mx-auto md:mx-0 leading-relaxed">
            Malesuada dis pellentesque etiam nunc accumsan tempus cursus aut
            lectus aliquid optio magnis veritatis consectetur. Don’t miss out on
            our limited-time offers!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Link
              href="/shop"
              className="bg-white text-[#7B2FF7] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-[#7B2FF7] hover:text-white hover:shadow-lg hover:-translate-y-1"
            >
              Explore Products
            </Link>

            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105">
              Use Code : SALE25OFF
            </button>
          </div>
        </motion.div>

        {/* ---------- Right Side Image ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative z-10"
        >
          <img
            src="/benar1.png"
            alt="Electronics Banner"
            className="w-full max-w-[650px] h-auto drop-shadow-2xl rounded-xl hover:scale-105 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero1;
