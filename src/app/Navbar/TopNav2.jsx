"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiPhone,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const TopNav2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Product", path: "/shop" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-extrabold text-indigo-600 tracking-wide cursor-pointer">
                Electro<span className="text-gray-800">Shop</span>
              </h1>
            </Link>
          </div>

          {/* Menu (Desktop) */}
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

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative group hidden sm:block">
              <FiSearch
                size={20}
                className="text-gray-700 cursor-pointer hover:text-indigo-600 transition"
              />
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-0 top-0 w-0 opacity-0 group-hover:w-44 group-hover:opacity-100 transition-all duration-300 border border-gray-300 rounded-md px-2 py-1 text-sm bg-white shadow-sm"
              />
            </div>

            {/* Call */}
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <FiPhone className="text-green-500 text-xl" />
              <div className="flex flex-col leading-tight">
                <span className="text-gray-500">Call Now</span>
                <span className="font-semibold text-gray-800">
                  01719052334
                </span>
              </div>
            </div>

            {/* Cart */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition shadow">
              <FiShoppingCart size={20} />
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800"
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-50 border-t border-gray-200 shadow-inner"
          >
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block py-2 text-gray-700 font-medium hover:text-indigo-600 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopNav2;
