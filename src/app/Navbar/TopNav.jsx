import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="bg-[#944CF5] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 space-y-2 sm:space-y-0">
        
        {/* Left Side */}
        <div className="flex items-center space-x-3">
          <div className="bg-red-600 rounded-full w-10 flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">HOT</span>
          </div>
          <span className="text-xs sm:text-sm">FREE Express Shipping On Orders $99+</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <Link href="/login"><span className="text-xs sm:text-sm cursor-pointer hover:text-gray-200">Login |</span>
          <span className="text-xs sm:text-sm cursor-pointer hover:text-gray-200">| Rigestar</span></Link>
          <div className="flex space-x-2">
            <FaFacebookF className="text-xs sm:text-sm hover:text-red-500 cursor-pointer" />
            <FaTwitter className="text-xs sm:text-sm hover:text-red-500 cursor-pointer" />
            <FaInstagram className="text-xs sm:text-sm hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
