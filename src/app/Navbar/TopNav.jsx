import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 space-y-2 sm:space-y-0">

        {/* Left Side */}
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <span className="text-gray-900 font-bold text-xs sm:text-sm">HOT</span>
          </div>
          <span className="text-xs sm:text-sm font-medium">
            FREE Express Shipping on Orders $99+
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link href="/login" className="hover:underline hover:text-yellow-300 transition">
              Login
            </Link>
            <span>|</span>
            <Link href="/register" className="hover:underline hover:text-yellow-300 transition">
              Register
            </Link>
          </div>

          <div className="flex space-x-3">
            <FaFacebookF className="text-sm hover:text-yellow-300 cursor-pointer transition" />
            <FaTwitter className="text-sm hover:text-yellow-300 cursor-pointer transition" />
            <FaInstagram className="text-sm hover:text-yellow-300 cursor-pointer transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
