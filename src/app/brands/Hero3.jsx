"use client";

import React from "react";
import Link from "next/link"; // ✅ Added Next.js Link
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";

const brands = [
  { name: "HTC", logo: "/assat/b1.jpg", img: "/assat/image-33.jpg", offer: "55%", path: "/brands/htc" },
  { name: "Samsung", logo: "/assat/b2.jpg", img: "/assat/image-40.jpg", offer: "25%", path: "/brands/samsung" },
  { name: "Xiaomi", logo: "/assat/b3.jpg", img: "/assat/image-36.jpg", offer: "30%", path: "/brands/xiaomi" },
  { name: "Oppo", logo: "/assat/b4.jpg", img: "/assat/image-37.jpg", offer: "35%", path: "/brands/oppo" },
  { name: "Vivo", logo: "/assat/b6.jpg", img: "/assat/image-39.jpg", offer: "45%", path: "/brands/vivo" },
  { name: "OnePlus", logo: "/assat/b7.jpg", img: "/assat/image-42.jpg", offer: "20%", path: "/brands/oneplus" },
  { name: "Realme", logo: "/assat/b8.jpg", img: "/assat/image-40.jpg", offer: "15%", path: "/brands/realme" },
  { name: "Huawei", logo: "/assat/b10.jpg", img: "/assat/image-38.jpg", offer: "28%", path: "/brands/huawei" },
];

const Hero3 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Brands</h2>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md flex flex-col items-center justify-between p-6 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Brand Logo */}
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="object-contain mb-3"
            />

            {/* Product Image */}
            <img
              src={brand.img}
              alt={brand.name}
              className="h-40 rounded-xl object-contain mb-4 mt-3"
            />

            {/* Offer */}
            <p className="text-gray-700 mb-2 font-bold text-xl">
              Up To {brand.offer} Off
            </p>

            {/* Button with icon + route */}
            <Link
              href={brand.path}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 border-b border-blue-600 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300"
            >
              <FaShoppingBag className="text-base" /> Order Now
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
