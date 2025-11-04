"use client";

import Link from "next/link";
import React from "react";
import { FaTruck, FaThumbsUp, FaUndo, FaLock, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaTruck />, title: "Free Delivery", desc: "From $50", color: "text-red-500", href: "/delivery" },
  { icon: <FaThumbsUp />, title: "99% Positive", desc: "Feedback", color: "text-green-500", href: "/reviews" },
  { icon: <FaUndo />, title: "365 Days", desc: "For Free Return", color: "text-blue-500", href: "/return-policy" },
  { icon: <FaLock />, title: "Payment", desc: "Secure System", color: "text-purple-500", href: "/payment" },
  { icon: <FaStar />, title: "Only Best", desc: "Brands", color: "text-yellow-500", href: "/brands" },
];

const Sarvis = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Link
              href={feature.href}
              className="flex items-center p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 gap-4"
            >
              <span className={`${feature.color} text-3xl`}>{feature.icon}</span>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{feature.title}</span>
                <span className="text-sm text-gray-500">{feature.desc}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sarvis;
