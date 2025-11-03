"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiSearch, FiPhone, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const TopNav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Conact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Product", path: "/shop" },
  ];

  return (
    <nav className="bg-[#ffffff] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-indigo-600">MyLogo</h1>
            </Link>
          </div>

          {/* Center: Menu (hidden on small screens) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative text-gray-700 font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 after:transition-all hover:text-indigo-600 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Search, Call, Cart */}
          <div className="flex items-center space-x-8">
            
            {/* Search Icon */}
            <div className="relative group ">
              <FiSearch size={20} className="text-gray-700 cursor-pointer hover:text-indigo-600 transition" />
              <input
                type="text"
                placeholder="Search..."
                className="absolute border-b right-0 top-0 w-0 opacity-0 group-hover:w-40 group-hover:opacity-100 transition-all duration-300 border border-gray-300 rounded-md px-2 py-1 text-sm"
              />
            </div>

            {/* Call Info */}
            <div className="flex gap-4 items-center justify-center hidden sm:flex text-sm">
              <FiPhone className="text-green-500 mb-0.5 text-2xl" />
              <div className="gap-2 flex"><span className="text-gray-500">Call Now</span>
              <span className="font-semibold text-gray-800">01719052334</span></div>
            </div>

            {/* Add to Cart */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition">
              <FiShoppingCart size={20} />
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block py-2 text-gray-700 font-medium hover:text-indigo-600 border-b border-gray-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TopNav2;
