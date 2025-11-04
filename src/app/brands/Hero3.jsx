"use client";

import React from "react";
import Link from "next/link";
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
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Brands
        </h2>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md flex flex-col items-center p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
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
                className="object-contain w-40 h-24 mb-3"
              />

              {/* Product Image */}
              <img
                src={brand.img}
                alt={brand.name}
                className="h-40 rounded-xl object-contain mb-4 mt-3 w-full"
              />

              {/* Offer */}
              <p className="text-gray-700 mb-2 font-bold text-lg">
                Up To {brand.offer} Off
              </p>

              {/* Button */}
              <Link
                href={brand.path}
                className="flex items-center gap-2 text-sm font-semibold text-indigo-600 border-b border-indigo-600 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300"
              >
                <FaShoppingBag className="text-base" /> Order Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero3;
