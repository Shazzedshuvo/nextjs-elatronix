"use client";
import React from "react";
import { FiSend, FiMail } from "react-icons/fi";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Lastfotar = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">

        {/* 🟨 Newsletter Section */}
        <div className="flex-1 border-2 border-yellow-400 rounded-2xl p-8 bg-white shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Sign Up For Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            ...And Receive <span className="text-yellow-500 font-semibold">$20 Coupon</span> On Next Shopping
          </p>

          {/* Email Input with Icon */}
          <div className="flex flex-col sm:flex-row items-center gap-3 relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 border border-gray-300 rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-all">
              <FiSend /> Subscribe
            </button>
          </div>

          {/* Download App Section with Gradient Buttons */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Download App
            </h3>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition">
                <FaGooglePlay size={20} /> Google Play
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black transition">
                <FaApple size={20} /> App Store
              </button>
            </div>
          </div>
        </div>

        {/* 📈 Right Side: Happy Customers */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            20K+ Happy Customers
          </h2>
          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
            <p>
              Tellus illum accumsan vitae nemo rem, explicabo aliquid aut, nec inceptos, magna molestiae rutrum, metus ratione feugiat neque, occaecat, cras recusandae fermentum cillum sociosqu.
            </p>
            <p>
              Tellus illum accumsan vitae nemo rem, explicabo aliquid aut, nec inceptos, magna molestiae rutrum, metus ratione feugiat neque, occaecat, cras recusandae fermentum cillum sociosqu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Lastfotar;
